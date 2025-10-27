import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("РЕГИСТРАЦИЯ");
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <h1 style={styles.title}>РЕГИСТРАЦИЯ</h1>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="text" placeholder="Имя" style={styles.input} />
          <input type="text" placeholder="Имя пользователя" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Пароль" style={styles.input} />
          <input type="password" placeholder="Повторите пароль" style={styles.input} />

          <button type="submit" style={styles.button}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
        </form>

        <p style={styles.link} onClick={() => navigate("/login")}>
          Уже есть аккаунт? Войти
        </p>

        <p style={styles.link} onClick={() => navigate("/")}>
          ← Назад к афише
        </p>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "radial-gradient(ellipse at bottom, #0d1b2a, #000)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Montserrat, sans-serif",
  zIndex: 9999, // чтобы перекрыть все другие стили
},

  card: {
    background: "radial-gradient(circle at top, #1e3c72, #0d1b2a, #000)",
    padding: "35px 45px",
    borderRadius: "20px",
    width: "500px",
    textAlign: "center",
    boxShadow: "0 0 40px rgba(255,255,255,0.2)",
  },
  title: {
    marginBottom: "25px",
    fontSize: "26px",
    color: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    height: "45px",
    borderRadius: "8px",
    border: "none",
    padding: "0 15px",
    fontSize: "16px",
  },
  button: {
    marginTop: "10px",
    height: "50px",
    borderRadius: "10px",
    border: "none",
    background: "rgba(255, 0, 0, 0.4)",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(255, 0, 0, 0.8)",
  },
  link: {
    marginTop: "8px",
    cursor: "pointer",
    color: "#fff",
    textDecoration: "underline",
  },
};

export default Register;
