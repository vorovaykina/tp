
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/afisha.css";

import logo from "../assets/img/logo.png";
import searchIcon from "../assets/img/search.png";
import accountIcon from "../assets/img/account.png";
import burgerIcon from "../assets/img/burger.png";
import poster1 from "../assets/img/poster1.jpg";
import poster2 from "../assets/img/poster2.jpg";
import poster3 from "../assets/img/poster3.jpg";
import poster4 from "../assets/img/poster4.jpg";
import poster5 from "../assets/img/poster5.jpg";
import poster6 from "../assets/img/poster6.jpg";

function Afisha() {
  const navigate = useNavigate();

  return (
    <>
      <header className="topbar">
        <a className="logo" href="#">
          <img src={logo} alt="Sunlight cinema" />
        </a>

        <nav className="mainmenu">
          <a className="menu-link active" href="#">афиша</a>
          <a className="menu-link" href="#">пространства</a>

          <img className="icon search" src={searchIcon} alt="Поиск" onClick={() => console.log("search")} />
          <img className="icon account" src={accountIcon} alt="Аккаунт" onClick={() => navigate("/login")} />
          <img className="icon burger" src={burgerIcon} alt="Меню" onClick={() => console.log("menu")} />
        </nav>
      </header>

      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "140px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "50px", fontSize: "28px", color: "white", textAlign: "center" }}>
          <span className="tab active" onClick={() => console.log("Сегодня")} style={{ textShadow: "0 0 30px #fff", cursor: "pointer" }}>Сегодня</span>
          <span className="tab" onClick={() => console.log("Завтра")} style={{ cursor: "pointer" }}>Завтра</span>
          <span className="tab" onClick={() => console.log("На неделю")} style={{ cursor: "pointer" }}>На неделю</span>
          <span className="tab" onClick={() => console.log("Скоро")} style={{ cursor: "pointer" }}>Скоро</span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 300px)",
          gap: "30px",
          justifyContent: "center",
          marginTop: "40px"
        }}>
          {[poster1, poster2, poster3, poster4, poster5, poster6].map((src, index) => (
            <figure key={index} className="movie" style={{
              width: "300px",
              height: "450px",
              border: "4px solid #fff",
              boxShadow: "0 4px 25px #fff",
              cursor: "pointer"
            }} onClick={() => console.log("poster " + (index + 1))}>
              <img src={src} alt={`poster${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}

export default Afisha;
