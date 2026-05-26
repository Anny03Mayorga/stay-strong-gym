import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./firebase";

import "./App.css";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Stay Strong</h1>

        <p>
          {isRegister
            ? "Crea tu cuenta"
            : "Inicia sesión"}
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            {isRegister ? "Crear cuenta" : "Ingresar"}
          </button>

        </form>

        <span
          className="switch-auth"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "¿Ya tienes cuenta? Inicia sesión"
            : "¿No tienes cuenta? Regístrate"}
        </span>

      </div>
    </div>
  );
}

export default Login;