import { useEffect, useState } from "react";
import "./App.css";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { auth, db } from "./firebase";
import Login from "./Login";
import { semana, rutinas as rutinasBackup } from "./rutinasData";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rutinas, setRutinas] = useState(rutinasBackup);

  const [rutinaActiva, setRutinaActiva] = useState(rutinasBackup[0]);
  const [diaSeleccionado, setDiaSeleccionado] = useState(semana[0]);
  const [tiempo, setTiempo] = useState(90);
  const [activo, setActivo] = useState(false);
  const [modalEjercicio, setModalEjercicio] = useState(null);
  const [completados, setCompletados] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const cargarRutinas = async () => {
      if (!user) return;

      try {
        const docRef = doc(db, "config", "rutinas");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const rutinasCloud = docSnap.data().rutinas || rutinasBackup;

          setRutinas(rutinasCloud);

          const rutinaActualizada =
            rutinasCloud.find((rutina) => rutina.id === rutinaActiva?.id) ||
            rutinasCloud[0];

          setRutinaActiva(rutinaActualizada);
        }
      } catch (error) {
        console.error("Error cargando rutinas:", error);
        setRutinas(rutinasBackup);
        setRutinaActiva(rutinasBackup[0]);
      }
    };

    cargarRutinas();
  }, [user]);

  useEffect(() => {
    const cargarProgreso = async () => {
      if (!user) return;

      try {
        const docRef = doc(db, "progresos", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCompletados(docSnap.data().ejercicios || {});
        }
      } catch (error) {
        console.error("Error cargando progreso:", error);
      }
    };

    cargarProgreso();
  }, [user]);

  useEffect(() => {
    let intervalo = null;

    if (activo && tiempo > 0) {
      intervalo = setInterval(() => {
        setTiempo((prev) => prev - 1);
      }, 1000);
    }

    if (tiempo === 0) {
      setActivo(false);
    }

    return () => clearInterval(intervalo);
  }, [activo, tiempo]);

  const obtenerEjercicios = (rutina) => {
    if (!rutina?.grupos) return [];

    return rutina.grupos
      .flatMap((grupo) => grupo.ejercicios)
      .filter((ejercicio) => ejercicio.tipo !== "info");
  };

  const calcularPorcentaje = (rutina) => {
    const ejercicios = obtenerEjercicios(rutina);
    if (ejercicios.length === 0) return 0;

    const hechos = ejercicios.filter(
      (ejercicio) => completados[ejercicio.nombre]
    ).length;

    return Math.round((hechos / ejercicios.length) * 100);
  };

  const ejerciciosActuales = obtenerEjercicios(rutinaActiva);
  const porcentaje = calcularPorcentaje(rutinaActiva);

  const guardarProgreso = async (nuevoEstado) => {
    if (!user) return;

    try {
      const docRef = doc(db, "progresos", user.uid);

      await setDoc(docRef, {
        ejercicios: nuevoEstado,
      });
    } catch (error) {
      console.error("Error guardando progreso:", error);
    }
  };

  const toggle = async (ejercicio) => {
    const nuevoEstado = {
      ...completados,
      [ejercicio]: !completados[ejercicio],
    };

    setCompletados(nuevoEstado);
    await guardarProgreso(nuevoEstado);
  };

  const reiniciarRutina = async () => {
    const nuevoEstado = { ...completados };

    ejerciciosActuales.forEach((ejercicio) => {
      delete nuevoEstado[ejercicio.nombre];
    });

    setCompletados(nuevoEstado);
    await guardarProgreso(nuevoEstado);
  };

  const esSabado = rutinaActiva?.id === "sabado";

  if (loading) return null;

  if (!user) return <Login />;

  return (
    <main className="app">
      <button className="logout-btn" onClick={() => signOut(auth)}>
        Salir
      </button>

      <section className="hero">
        <img src="/logo.png" alt="Stay Strong Gym" className="logo" />
      </section>

      <section className="week-calendar">
        {semana.map((dia) => {
          const rutinaRelacionada = rutinas.find(
            (rutina) => rutina.dia === dia.rutina
          );

          return (
            <div
              key={dia.nombre}
              className={`week-day ${
                diaSeleccionado.nombre === dia.nombre ? "active-day" : ""
              } ${!rutinaRelacionada ? "inactive-day" : ""}`}
              onClick={() => {
                if (rutinaRelacionada) {
                  setRutinaActiva(rutinaRelacionada);
                  setDiaSeleccionado(dia);
                }
              }}
            >
              <strong>{dia.nombre}</strong>

              {rutinaRelacionada ? (
                <small>{calcularPorcentaje(rutinaRelacionada)}%</small>
              ) : (
                <small>Descanso</small>
              )}
            </div>
          );
        })}
      </section>

      <section className="routine-card">
        <div className="routine-header">
          <span>{diaSeleccionado.nombre}</span>
        </div>

        {!esSabado && (
          <>
            <div className="progress-box">
              <div className="progress-info">
                <span>Progreso</span>
                <strong>{porcentaje}%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${porcentaje}%` }}
                ></div>
              </div>
            </div>

            <button className="reset-btn" onClick={reiniciarRutina}>
              Reiniciar rutina
            </button>

            <div className="timer-box">
              <div className="timer-top">
                <span>Descanso</span>
                <strong>{tiempo}s</strong>
              </div>

              <div className="timer-actions">
                <button className="timer-btn" onClick={() => setActivo(!activo)}>
                  {activo ? "Pausar" : "Iniciar"}
                </button>

                <button
                  className="timer-reset"
                  onClick={() => {
                    setTiempo(90);
                    setActivo(false);
                  }}
                >
                  Reiniciar
                </button>
              </div>
            </div>
          </>
        )}

        {esSabado ? (
          <div className="free-day-card">
            <strong>Entrenamiento libre</strong>
            <p>
              Usa este día para reforzar ejercicios pendientes, realizar cardio,
              movilidad o repetir el grupo muscular que quieras trabajar.
            </p>
          </div>
        ) : (
          <div className="exercise-list">
            {rutinaActiva?.grupos?.map((grupo) => (
              <div className="muscle-group" key={grupo.nombre}>
                <div className="group-title">{grupo.nombre}</div>

                {grupo.ejercicios.map((ejercicio) => {
                  if (ejercicio.tipo === "info") {
                    return (
                      <div key={ejercicio.nombre} className="info-card">
                        <strong>{ejercicio.nombre}</strong>
                        <p>{ejercicio.descripcion}</p>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={ejercicio.nombre}
                      className={
                        completados[ejercicio.nombre]
                          ? "exercise done"
                          : "exercise"
                      }
                    >
                      <input
                        type="checkbox"
                        checked={!!completados[ejercicio.nombre]}
                        onChange={() => toggle(ejercicio.nombre)}
                      />

                      <div className="exercise-content">
                        <strong>{ejercicio.nombre}</strong>

                        <small>
                          {ejercicio.series} series • {ejercicio.reps} reps •{" "}
                          {ejercicio.descanso}s descanso
                        </small>

                        <div
                          className="rest-link"
                          onClick={() => {
                            setTiempo(ejercicio.descanso);
                            setActivo(false);
                          }}
                        >
                          ⏱ usar {ejercicio.descanso}s
                        </div>

                        <div
                          className="exercise-expand"
                          onClick={() => setModalEjercicio(ejercicio)}
                        >
                          Ver ejecución
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}

        {modalEjercicio && (
          <div
            className="modal-overlay"
            onClick={() => setModalEjercicio(null)}
          >
            <div
              className="exercise-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-modal"
                onClick={() => setModalEjercicio(null)}
              >
                ✕
              </button>

              <img
  src={modalEjercicio.imagen}
  alt={modalEjercicio.nombre}
  className="modal-image"
  loading="lazy"
  decoding="async"
/>

              <h2>{modalEjercicio.nombre}</h2>

              <p>Mantén una técnica controlada y evita movimientos bruscos.</p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}