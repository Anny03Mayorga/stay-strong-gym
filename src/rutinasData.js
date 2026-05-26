const semana = [
  { nombre: "Lun", rutina: "Lunes" },
  { nombre: "Mar", rutina: "Martes" },
  { nombre: "Mié", rutina: "Miércoles" },
  { nombre: "Jue", rutina: "Jueves" },
  { nombre: "Vie", rutina: "Viernes" },
  { nombre: "Sáb", rutina: "Sábado" },
  { nombre: "Dom", rutina: "Descanso" },
];

const cardioInicial = {
  nombre: "Cardio inicial",
  tipo: "info",
  descripcion:
    "Realiza 10 minutos en caminadora, bicicleta o elíptica antes de iniciar la rutina.",
};

const rutinas = [
  {
    id: "lunes",
    nombre: "Pecho / Hombro / Tríceps",
    dia: "Lunes",
    grupos: [
      { nombre: "Cardio", ejercicios: [cardioInicial] },
      {
        nombre: "Pectorales",
        ejercicios: [
          { nombre: "Press plano", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/press-plano.png" },
          { nombre: "Press inclinado", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/press-inclinado.png" },
          { nombre: "Aperturas", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/aperturas.png" },
        ],
      },
      {
        nombre: "Hombros",
        ejercicios: [
          { nombre: "Press militar", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/press-militar.png" },
          { nombre: "Elevaciones laterales", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/elevaciones-laterales.png" },
        ],
      },
      {
        nombre: "Tríceps",
        ejercicios: [
          { nombre: "Extensión tríceps", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/extension-triceps.png" },
          { nombre: "Tríceps polea", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/triceps-polea.png" },
        ],
      },
    ],
  },
  {
    id: "martes",
    nombre: "Espalda / Bíceps",
    dia: "Martes",
    grupos: [
      { nombre: "Cardio", ejercicios: [cardioInicial] },
      {
        nombre: "Espalda",
        ejercicios: [
          { nombre: "Jalón al pecho", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/jalon-pecho.png" },
          { nombre: "Jalón cerrado", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/jalon-cerrado.png" },
          { nombre: "Remo con barra", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/remo-barra.png" },
          { nombre: "Remo mancuerna", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/remo-mancuerna.png" },
          { nombre: "Remo polea", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/remo-polea.png" },
          { nombre: "Pullover polea", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/pullover-polea.png" },
        ],
      },
      {
        nombre: "Bíceps",
        ejercicios: [
          { nombre: "Curl barra", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/curl-barra.png" },
          { nombre: "Curl martillo", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/curl-martillo.png" },
          { nombre: "Curl alterno", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/curl-alterno.png" },
          { nombre: "Curl Scott", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/curl-scott.png" },
        ],
      },
    ],
  },
  {
    id: "miercoles",
    nombre: "Pierna completa",
    dia: "Miércoles",
    grupos: [
      { nombre: "Cardio", ejercicios: [cardioInicial] },
      {
        nombre: "Cuádriceps",
        ejercicios: [
          { nombre: "Sentadilla", series: 4, reps: 12, descanso: 120, imagen: "/ejercicios/sentadilla.png" },
          { nombre: "Prensa", series: 4, reps: 12, descanso: 120, imagen: "/ejercicios/prensa.png" },
          { nombre: "Extensión cuadríceps", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/extension-cuadriceps.png" },
          { nombre: "Zancadas", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/zancadas.png" },
        ],
      },
      {
        nombre: "Femoral",
        ejercicios: [
          { nombre: "Curl femoral", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/curl-femoral.png" },
          { nombre: "Peso muerto rumano", series: 4, reps: 10, descanso: 120, imagen: "/ejercicios/peso-muerto-rumano.png" },
        ],
      },
      {
        nombre: "Glúteos",
        ejercicios: [
          { nombre: "Hip thrust", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/hip-thrust.png" },
          { nombre: "Patada glúteo", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/patada-gluteo.png" },
          { nombre: "Abducción", series: 4, reps: 15, descanso: 60, imagen: "/ejercicios/abduccion.png" },
        ],
      },
      {
        nombre: "Gemelo",
        ejercicios: [
          { nombre: "Elevación de talones", series: 4, reps: 15, descanso: 60, imagen: "/ejercicios/elevacion-talones.png" },
        ],
      },
    ],
  },
  {
    id: "jueves",
    nombre: "Pecho / Hombro / Tríceps",
    dia: "Jueves",
    grupos: [
      { nombre: "Cardio", ejercicios: [cardioInicial] },
      {
        nombre: "Pectorales",
        ejercicios: [
          { nombre: "Press inclinado mancuerna", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/press-inclinado-mancuerna.png" },
          { nombre: "Press declinado", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/press-declinado.png" },
          { nombre: "Peck deck", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/peck-deck.png" },
          { nombre: "Cruce poleas altas", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/cruce-poleas-altas.png" },
          { nombre: "Cruce poleas bajas", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/cruce-poleas-bajas.png" },
        ],
      },
      {
        nombre: "Hombros",
        ejercicios: [
          { nombre: "Press Arnold", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/press-arnold.png" },
          { nombre: "Elevaciones frontales", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/elevaciones-frontales.png" },
          { nombre: "Pájaros", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/pajaros.png" },
          { nombre: "Elevación polea unilateral", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/elevacion-polea-unilateral.png" },
          { nombre: "Face pull", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/face-pull.png" },
        ],
      },
      {
        nombre: "Tríceps",
        ejercicios: [
          { nombre: "Fondos", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/fondos-triceps.png" },
          { nombre: "Rompecráneos", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/rompecraneos.png" },
          { nombre: "Extensión unilateral", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/extension-unilateral.png" },
          { nombre: "Tríceps cuerda", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/triceps-cuerda.png" },
        ],
      },
    ],
  },
  {
    id: "viernes",
    nombre: "Espalda / Bíceps + Abdomen",
    dia: "Viernes",
    grupos: [
      { nombre: "Cardio", ejercicios: [cardioInicial] },
      {
        nombre: "Espalda",
        ejercicios: [
          { nombre: "Jalón cerrado", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/jalon-cerrado.png" },
          { nombre: "Jalón tras nuca", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/jalon-tras-nuca.png" },
          { nombre: "Remo T", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/remo-t.png" },
          { nombre: "Remo mancuerna", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/remo-mancuerna.png" },
          { nombre: "Pullover polea", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/pullover-polea.png" },
          { nombre: "Remo Hammer", series: 4, reps: 12, descanso: 90, imagen: "/ejercicios/remo-hammer.png" },
        ],
      },
      {
        nombre: "Bíceps",
        ejercicios: [
          { nombre: "Curl Scott", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/curl-scott.png" },
          { nombre: "Curl concentrado", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/curl-concentrado.png" },
          { nombre: "Curl polea", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/curl-polea.png" },
          { nombre: "Curl banco inclinado", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/curl-banco-inclinado.png" },
          { nombre: "Curl EZ", series: 4, reps: 12, descanso: 60, imagen: "/ejercicios/curl-ez.png" },
        ],
      },
      {
        nombre: "Abdomen",
        ejercicios: [
          { nombre: "Crunch abdominal", series: 4, reps: 15, descanso: 45, imagen: "/ejercicios/crunch-abdominal.png" },
          { nombre: "Elevación de piernas", series: 4, reps: 15, descanso: 45, imagen: "/ejercicios/elevacion-piernas.png" },
          { nombre: "Plancha", series: 4, reps: "30 seg", descanso: 45, imagen: "/ejercicios/plancha.png" },
          { nombre: "Russian twist", series: 4, reps: 20, descanso: 45, imagen: "/ejercicios/russian-twist.png" },
        ],
      },
    ],
  },
  {
    id: "sabado",
    nombre: "Entrenamiento libre",
    dia: "Sábado",
    grupos: [
      {
        nombre: "Entrenamiento libre",
        ejercicios: [
          {
            nombre: "Entrenamiento libre",
            tipo: "info",
            descripcion:
              "Día libre para reforzar ejercicios pendientes, realizar cardio, movilidad o repetir el grupo muscular que quieras trabajar.",
          },
        ],
      },
    ],
  },
];

export { semana, rutinas };