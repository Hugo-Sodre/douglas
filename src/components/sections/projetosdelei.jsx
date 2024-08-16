import React from 'react';

const projetos = [
  {
    title: "Leis aprovadas do mandato",
    description: "Escola Feliz, combate à evasão Adote uma escola, facilita doações e investimentos para escolas municipais Matrícula de irmãos na mesma escola Barreira para projetos que...",
    link: "#",
  },
  {
    title: "PL 598/2023 – Parcerias de Pesquisa",
    description: "Dispõe sobre o acordo de parceria para pesquisa, desenvolvimento e inovação para realização de atividades conjuntas de pesquisa científica e tecnológica e de desenvolvimento de tecnologia, produto, serviço ou processo no Município de Belo Horizonte.",
    link: "#",
    image: "path-to-your-image-1",  // Substitua por um caminho de imagem real
  },
  {
    title: "PL 548/2023 – Bônus Tecnológico",
    description: "Dispõe sobre o bônus tecnológico e a bolsa de estímulo à inovação no ambiente produtivo no Município de Belo Horizonte.",
    link: "#",
    image: "path-to-your-image-2",  // Substitua por um caminho de imagem real
  },
  // Adicione mais projetos conforme necessário
];

function ProjetosDeLei() {
  return (
    <div className="text-center p-8">
      <header>
        <h1 className="text-4xl font-bold text-orange-600 mb-8">Projetos de Lei</h1>
      </header>
      <div className="flex flex-wrap justify-between">
        {projetos.map((projeto, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg w-full md:w-1/3 mb-8 p-6">
            {projeto.image && <img src={projeto.image} alt={projeto.title} className="w-full h-auto rounded-t-lg mb-4" />}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{projeto.title}</h2>
            <p className="text-gray-600 mb-4">{projeto.description}</p>
            <a href={projeto.link} className="text-green-500 font-bold hover:text-green-700">Leia Mais »</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjetosDeLei;
