import React from "react";

export default function FifithSection() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center p-12 bg-teal-500  bg-cover bg-center"
      style={{
        backgroundImage: `url('https://via.placeholder.com/1920x1080')`,
      }} // Substitua esta URL pela URL da sua imagem de fundo
    >
      <div className="text-center mb-8">
        <h2 className="text-white text-3xl font-bold mb-4">
          Receba A CHAVE, a nova newsletter do mandato!
        </h2>
        <p className="text-white mb-4">Toda quarta-feira, no seu e-mail!</p>
      </div>
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full p-3 rounded-md border border-gray-300"
          />
          <input
            type="email"
            placeholder="Seu email"
            className="w-full p-3 rounded-md border border-gray-300"
          />
          <button
            type="submit"
            className="w-full p-3 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600"
          >
            Me cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
