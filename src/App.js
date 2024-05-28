import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import SixthSection from './components/sections/fifithSection';
import FifithSection from './components/sections/fifithSection';
import FirstSection from './components/sections/firstSection';
import FourthSection from './components/sections/fourthSection';
import SecondSection from './components/sections/secondSection';
import SextaSection from './components/sections/sextaSection';
import ThirdSection from './components/sections/thirdSection';

function App() {
  return (
    <div className='flex flex-col overflow-x-hidden'>
      <Header />

      <FirstSection />

      <SecondSection />

      <ThirdSection />

      <FourthSection />

      <FifithSection />

      <SextaSection />

      <Footer / >



    </div>
  );
}

export default App;
