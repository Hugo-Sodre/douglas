import React from 'react';

const Douglas = () => {
  const valores = [
    {
      titulo: "Liberdade",
      descricao: "Indivíduos devem ser livres para realizar suas escolhas, assumindo a responsabilidade das consequências. A interferência do Estado na vida das pessoas deve ser cada vez menor."
    },
    {
      titulo: "Transparência",
      descricao: "A divulgação de dados claros no setor administração pública é fundamental para combater a corrupção, reduzir a ineficiência e garantir o direito do cidadão de fiscalizar o Estado."
    },
    {
      titulo: "Sustentabilidade",
      descricao: "Reduzir os impactos ambientais negativos, sem impedir o desenvolvimento, é um desafio que permeia diferentes soluções para problemas urbanos e é uma premissa da construção de cidades resilientes."
    },
    {
      titulo: "Responsabilidade fiscal",
      descricao: "Diminuir os gastos desnecessários da máquina pública é um dos fundamentos básicos para conseguirmos usar estes recursos naquilo que realmente impacta a vida do cidadão."
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Marcela Trópia</h1>
      <div style={styles.content}>
        <img 
          src="path_to_your_image" 
          alt="Marcela Trópia" 
          style={styles.image} 
        />
        <div style={styles.text}>
          <p><strong>Marcela Trópia é vereadora em Belo Horizonte</strong>, especialista em políticas públicas e trabalha pela inovação, transparência e educação.</p>
          <p>Em 2020, foi eleita vereadora pelo Partido Novo com 10.741 votos, alcançando a sexta maior votação da cidade.</p>
          <p>Foi presidente da Comissão de Educação durante 3 anos e lutou pela reabertura das escolas na pandemia.</p>
          <p>Destinou recursos para realizar o <strong>Mutirão Oftalmológico</strong> e aprovou a <strong>Lei Escola Feliz</strong> para combater o abandono e a evasão escolar.</p>
          <p>Hoje é secretária-geral da Câmara e <strong>coordenou a criação do site bh pra você</strong>, que simplifica o acesso aos gastos da Prefeitura.</p>
          <p>É presidente da <strong>Comissão de Modernização do Código de Posturas</strong>, que desburocratizará regras que afetam cidadãos e empreendedores.</p>
          <p>Criou um pacote de leis para impulsionar o setor de tecnologia e inovação. Entre eles, o <strong>Marco Municipal das Startups</strong>, que traz segurança jurídica para o segmento.</p>
          <p>Seu foco é trazer <strong>mais liberdade econômica para BH</strong>, investir na educação como prioridade e fortalecer a <strong>transparência no setor público</strong>.</p>
        </div>
      </div>

      <div className="text-center p-8">
        <h2 className="text-4xl font-bold text-orange-500 mb-4">Princípios e valores</h2>
        <p className="text-lg text-gray-600 mb-8">Conheça os princípios e valores que orientam meus posicionamentos:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valores.map((valor, index) => (
            <div key={index} className="bg-orange-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{valor.titulo}</h3>
              <p className="text-gray-700">{valor.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  title: {
    color: '#F05A28',
    fontSize: '36px',
    marginBottom: '20px',
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  image: {
    width: '300px',
    height: 'auto',
    marginRight: '20px',
  },
  text: {
    maxWidth: '600px',
  }
};

export default Douglas;
