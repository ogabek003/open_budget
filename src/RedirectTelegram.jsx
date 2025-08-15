import React, { useEffect } from "react";

export default function RedirectTelegram() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://t.me/open_rasmiy"; // Telegram link
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0e1117",
      color: "white",
      flexDirection: "column",
      gap: "10px"
    }}>
      <h1>🔗 Telegram’ga yo‘naltirilayapti...</h1>
      <p>
        Agar avtomatik o‘tmasa,{" "}
        <a href="https://t.me/open_rasmiy" style={{ color: "#29a745" }}>
          bu yerni bosing
        </a>.
      </p>
    </main>
  );
}
