import React, { useState } from 'react';

const votacoesData = [
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
  // Adicione mais dados conforme necessário
];

const Votacoes = () => {
  const [filtroAssunto, setFiltroAssunto] = useState('');
  const [filtroVotoSim, setFiltroVotoSim] = useState(false);
  const [filtroVotoNao, setFiltroVotoNao] = useState(false);

  const handleFiltroAssuntoChange = (e) => {
    setFiltroAssunto(e.target.value);
  };

  const handleFiltroVotoSimChange = () => {
    setFiltroVotoSim(!filtroVotoSim);
  };

  const handleFiltroVotoNaoChange = () => {
    setFiltroVotoNao(!filtroVotoNao);
  };

  const votosFiltrados = votacoesData.filter(votacao => {
    const matchAssunto = votacao.proposicao.toLowerCase().includes(filtroAssunto.toLowerCase());
    const matchVotoSim = filtroVotoSim ? votacao.votoMarcela === "Sim" : true;
    const matchVotoNao = filtroVotoNao ? votacao.votoMarcela === "Não" : true;
    return matchAssunto && matchVotoSim && matchVotoNao;
  });

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Votações</h1>

      <div className="flex justify-between mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Filtrar por data</label>
          <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
            <option>Selecione um período</option>
            <option>Última semana</option>
            <option>Último mês</option>
            <option>Último ano</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Filtrar por assunto</label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input 
              type="text" 
              className="flex-1 block w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
              placeholder="Digite um assunto..." 
              value={filtroAssunto}
              onChange={handleFiltroAssuntoChange}
            />
            <button className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-orange-500 text-white font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Aplicar
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Filtrar por voto</label>
          <div className="mt-1 flex space-x-4">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="form-checkbox h-4 w-4 text-orange-500"
                checked={filtroVotoSim}
                onChange={handleFiltroVotoSimChange}
              />
              <span className="ml-2 text-gray-700">Sim</span>
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="form-checkbox h-4 w-4 text-orange-500"
                checked={filtroVotoNao}
                onChange={handleFiltroVotoNaoChange}
              />
              <span className="ml-2 text-gray-700">Não</span>
            </label>
          </div>
        </div>
      </div>

      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Data</th>
            <th className="py-2 px-4 text-left">Proposição</th>
            <th className="py-2 px-4 text-left">Autoria</th>
            <th className="py-2 px-4 text-left">Ementa</th>
            <th className="py-2 px-4 text-left">Turno</th>
            <th className="py-2 px-4 text-left">Voto Marcela</th>
            <th className="py-2 px-4 text-left">Justificativa</th>
            <th className="py-2 px-4 text-left">Resultado</th>
          </tr>
        </thead>
        <tbody>
          {votosFiltrados.map((votacao, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-2 px-4">{votacao.data}</td>
              <td className="py-2 px-4">{votacao.proposicao}</td>
              <td className="py-2 px-4">{votacao.autoria}</td>
              <td className="py-2 px-4">{votacao.ementa}</td>
              <td className="py-2 px-4">{votacao.turno}</td>
              <td className="py-2 px-4">{votacao.votoMarcela}</td>
              <td className="py-2 px-4">{votacao.justificativa}</td>
              <td className="py-2 px-4">{votacao.resultado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Votacoes;
