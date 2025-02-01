import React, { useState, useEffect } from "react";

export default function App() {
  const [elements, setElements] = useState([]);

  // Generar los elementos animados
  const generateElements = () => {
    const types = ["🌻", "🌷", "🦋", "💖"];
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const baseSize = Math.min(screenWidth, screenHeight) * 0.05; // Ajuste del tamaño base

    const newElements = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 90 + "vw", // Limitamos la posición horizontal para que no sobrepase
      top: Math.random() * 90 + "vh", // Limitamos la posición vertical para que no sobrepase
      animationDuration: Math.random() * 8 + 5 + "s", // Duración de la animación
      type: types[Math.floor(Math.random() * types.length)], // Tipo de elemento aleatorio
      size: Math.random() * baseSize + baseSize * 0.6 + "px", // Tamaño aleatorio
    }));

    setElements(newElements);
  };

  // Ejecutar cuando el componente se monte
  useEffect(() => {
    generateElements(); // Generar elementos iniciales
    window.addEventListener("resize", generateElements); // Regenerar elementos al redimensionar

    return () => {
      window.removeEventListener("resize", generateElements); // Limpiar event listener
    };
  }, []);

  const handleYesClick = () => {
    alert("¡Wooww! Te amo mucho mi amor 😍, me alegro que hayas elegido que si,  nos vemos el 14");
  };

  const handleNoClick = () => {
    alert("¡Oh no! 😢, no te preocupes, te sigo amando");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#e0f7fa",
        margin: "0",
        padding: "0",
        position: "relative", // Necesario para posicionar los elementos animados
      }}
    >
      {/* Elementos animados */}
      {elements.map((el) => (
        <span
          key={el.id}
          style={{
            position: "absolute",
            left: el.left,
            top: el.top,
            fontSize: el.size,
            animation: `moveElement ${el.animationDuration} linear infinite`,
            opacity: 0.8,
          }}
        >
          {el.type}
        </span>
      ))}

      <div
        style={{
          textAlign: "center",
          backgroundColor: "white",
          padding: "2em",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          maxWidth: "80%",
          minWidth: "280px",
          zIndex: 1, // Para que los botones estén encima de los elementos animados
        }}
      >
        <h1
          style={{
            fontSize: "clamp(24px, 5vw, 36px)",
            color: "#333",
            marginBottom: "1.5em",
          }}
        >
          Hola mi amor 🥰
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 4vw, 20px)",
            color: "#555",
            marginBottom: "2em",
          }}
        >
          ¿Quieres ser mi San valentín?
        </p>

        {/* Botones Sí/No */}
        <div>
          <button
            onClick={handleYesClick}
            style={{
              padding: "1em 2em",
              fontSize: "clamp(16px, 4vw, 20px)",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              width: "100%",
              marginBottom: "1em",
            }}
          >
            Sí
          </button>
          <button
            onClick={handleNoClick}
            style={{
              padding: "1em 2em",
              fontSize: "clamp(16px, 4vw, 20px)",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              width: "100%",
            }}
          >
            No
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes moveElement {
            0% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
            50% { transform: translateY(-40px) rotate(25deg); opacity: 1; }
            100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          }
        `}
      </style>
    </div>
  );
}
