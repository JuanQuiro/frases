"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [frases, setFrases] = useState("");

  useEffect(() => {
    axios
      .get("https://frases-backend.onrender.com/api/frases")
      .then((response) => {
        setFrases(response.data.frases);
      })
      .catch((error) => {
        console.log("Error al obtener frase", error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Encuentra tu inspiración
        </h1>
        <p className="text-xl font-semibold text-gray-700 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
          {frases}
        </p>
      </main>
      <footer className="w-full py-4 text-center text-gray-600 bg-gray-200 border-t border-gray-300">
        <p>Desarrollado por Ember Drago</p>
      </footer>
    </div>
  );
}
