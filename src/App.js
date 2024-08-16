import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import FirstSection from './components/sections/firstSection';
import SecondSection from './components/sections/secondSection';
import ThirdSection from './components/sections/thirdSection';
import FourthSection from './components/sections/fourthSection';
import Douglas from './components/sections/douglas';
import Header from './components/header';
import ProjetosDeLei from './components/sections/projetosdelei';
import PrestacaoDeContas from './components/sections/prestacaodecontas';

function App() {
  const location = useLocation();  // Usa useLocation para pegar a rota atual
  const isHomePage = location.pathname === '/';

  return (
    <div className='flex flex-col overflow-x-hidden'>
      {/* Header fixo */}
      <Header />
      
      {isHomePage && (
        <>
          {/* Renderiza as seções fixas apenas na página inicial */}
          <FirstSection className="section-fixed section1" />
          <SecondSection className="section-fixed section2" />
          <ThirdSection className="section-fixed section3" />
          <FourthSection className="section-fixed section4" />
        </>
      )}

      {/* Conteúdo da página controlado pelas rotas */}
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/douglas" element={<Douglas />} />
        <Route path="/projetos-de-lei" element={<ProjetosDeLei />} />
        <Route path="/prestacao-de-contas" element={<PrestacaoDeContas />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
