import React, { useState, useEffect } from "react";

const username = "Pomelito";
let nivel = 100;
let lco = 500;
const esPremium = true;
let ultimaConexion = "martes";
let misionesCompletadas = 15;

const ContadorEfecto = () => {
  const [contador, setContador] = useState(0);

  // Este efecto se ejecuta solo cuando cambia 'contador'
  useEffect(() => {
    console.log(`El contador ahora vale: ${contador}`);
    console.log(`Usuario: ${username} (Nivel: ${nivel})`);
    console.log(`LCO: ${lco} | Premium: ${esPremium}`);
    console.log(`Ultima Conexion: ${ultimaConexion}`);
    console.log(`Misiones Completadas: ${misionesCompletadas}`);
  }, [contador]);

  return (
    <div className="text-center mt-5 bg-danger">
      <h2>Contador: {contador}</h2>
      <button
        className="btn btn-success mt-3"
        onClick={() => setContador(contador + 1)}
      >
        Aumentar
      </button>
    </div>
  );
};

export default ContadorEfecto;
