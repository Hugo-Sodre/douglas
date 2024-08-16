import React, { useState } from 'react';

const data = [
  {
    data: "14/03/2023",
    proposicao: "Projeto de Lei 671/2018",
    autoria: "Ver.(a) Léo",
    ementa: "Declara Belo Horizonte Capital Nacional da Cultura Cervejeira.",
    turno: "2º turno",
    votoMarcela: "Não",
    justificativa: "O reconhecimento da importância de um lugar não vem de um dispositivo legal, mas sim do valor que os indivíduos concedem a ele",
    resultado: "Rejeitado",
  },
  {
    data: "17/02/2023",
    proposicao: "Projeto de Lei 490/2023",
    autoria: "Mesa - Ver.(a) Gabriel; Ver.(a) Wesley; Ver.(a) Marcela Trópia; Ver.(a) Flávia Borja",
    ementa: "Promove o reajuste da remuneração dos servidores da Câmara Municipal de Belo Horizonte.",
    turno: "2º turno",
    votoMarcela: "Sim",
    justificativa: "O percentual indicado nesta proposição refere-se à soma composta dos índices inflacionários dos anos de 2020 (que não houve recomposição) e 2022, considerando o índice Nacional de Preços ao Consumidor Amplo (IPCA), frente a necessidade de recomposição da inflação destes anos.",
    resultado: "Aprovado",
  },
  {
    data: "16/02/2023",
    proposicao: "Projeto de Resolução 480/2023",
    autoria: "Mesa - Ver.(a) Gabriel; Ver.(a) Professor Juliano Lopes; Ver.(a) Wesley; Ver.(a) Ciro Pereira; Ver.(a) Flávia Borja",
    ementa: "Altera a Resolução nº 1480/90, que contém o Regimento Interno da Câmara Municipal de Belo Horizonte, e dá outras providências.",
    turno: "Turno único",
    votoMarcela: "Sim",
    justificativa: "As alterações propostas modernizam o regimento e possibilitam maior transparência da atividade parlamentar.",
    resultado: "Aprovado",
  },
  // Adicione mais dados conforme necessário
];

function PrestacaoDeContas() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calcular os índices de início e fim para a paginação
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Função para mudar a página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-8">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="py-2 px-4">Data</th>
            <th className="py-2 px-4">Proposição</th>
            <th className="py-2 px-4">Autoria</th>
            <th className="py-2 px-4">Ementa</th>
            <th className="py-2 px-4">Turno</th>
            <th className="py-2 px-4">Voto Marcela</th>
            <th className="py-2 px-4">Justificativa</th>
            <th className="py-2 px-4">Resultado</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-2 px-4">{item.data}</td>
              <td className="py-2 px-4">{item.proposicao}</td>
              <td className="py-2 px-4">{item.autoria}</td>
              <td className="py-2 px-4">{item.ementa}</td>
              <td className="py-2 px-4">{item.turno}</td>
              <td className="py-2 px-4">{item.votoMarcela}</td>
              <td className="py-2 px-4">{item.justificativa}</td>
              <td className="py-2 px-4">{item.resultado}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        <nav>
          <ul className="inline-flex space-x-2">
            {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map(number => (
              <li key={number + 1}>
                <button
                  onClick={() => paginate(number + 1)}
                  className={`px-4 py-2 border ${currentPage === number + 1 ? 'bg-orange-500 text-white' : 'bg-white text-orange-500 border-orange-500'}`}
                >
                  {number + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default PrestacaoDeContas;
