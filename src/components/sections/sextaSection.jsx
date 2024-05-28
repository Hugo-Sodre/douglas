import React from "react";

export default function SextaSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-12 bg-white py-10">
      <h2 className="text-3xl font-bold mb-4">Economizômetro</h2>
      <div className="bg-orange-500 text-white p-5 rounded-lg text-center mb-4">
        <span className="text-5xl font-bold">R$ 3.697.853,95</span>
      </div>
      <p className="text-gray-700">
        Economia total desde o início do mandato (Janeiro de 2021 – Março de
        2024)
      </p>
      <p className="text-gray-500 mb-6">Atualizado em 16/04/2024</p>
      <button
        type="button"
        className="p-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600"
      >
        Ver Transparência
      </button>
    </div>
  );
}
