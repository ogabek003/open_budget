import React from "react";
import "./App.css";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
<video src="/video.mp4" autoPlay loop muted />
import myVideo from "./public/14696-258543627.mp4";

<video src={myVideo} autoPlay loop muted />

export default function App() {
  return (
    <main className="hero">
      {/* Video orqa fon */}
      <video autoPlay loop muted className="hero-video">
        <source src="/14696-258543627.mp4" type="video/mp4" />
      </video>

      {/* Qoraytirish effekti */}
      <div className="hero-overlay"></div>

      {/* Barcha content */}
      <div className="hero__inner">
        {/* Tugmalar */}
        <div className="btns top-btns">
         
          <a href="https://t.me/open_rasmiy" className="btn btn--tg">
  <FaTelegramPlane style={{ marginRight: "8px" }} />
  Telegram
</a>

          <a href="https://instagram.com/sening_kanaling" className="btn btn--ig" target="_blank" rel="noreferrer">
            <FaInstagram style={{ marginRight: "8px" }} />
            Instagram
          </a>
        </div>

        {/* Sarlavha */}
        <h1 className="title">Open Bujet Ovoz Berish</h1>

        {/* Narxlar */}
        <div className="price-card">
          <p>👤1 ta ovoz — <strong>50 000 so‘m💵</strong></p>
          <p>👥2 ta ovoz — <strong>100 000 so‘m💵</strong></p>
          <p>👥👤3 ta ovoz — <strong>200 000 so‘m💵</strong></p>
          <p>👥👥4 ta ovoz — <strong>350 000 so‘m💵</strong></p>
          <p>👥👥👤5 ta ovoz — <strong>400 000 so‘m💵</strong></p>
          <p>👥👥👥6 ta ovoz — <strong>500 000 so‘m💵</strong></p>
          <p>👥👥👥👤7 ta ovoz — <strong>600 000 so‘m💵</strong></p>
          <p>👥👥👥👥8 ta ovoz — <strong>700 000 so‘m💵</strong></p>
          <p>👥👥👥👥👤9 ta ovoz — <strong>800 000 so‘m💵</strong></p>
          <p className="special-offer" onClick={() => window.open("https://t.me/open_rasmiy", "_blank")}>
            👥👥👥👥👥 10 ta ovoz — 🎁 <strong>iPhone sovg‘a uy!</strong>
            
          </p>
          
        </div>
        <p className="footer-text"> 👆🏻 sovg‘ani olish uchun bosing👆🏻 </p>
      </div>
    </main>
  );
}
