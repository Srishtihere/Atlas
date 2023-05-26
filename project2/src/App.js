import './App.css';
import Banner from './components/Banner';
import Client from './components/Client';
import Contact from './components/Contact';
import Feature_green from './components/Feature_green';
import Feature_skew from './components/Feature_skew';
import PriceTable from './components/PriceTable';
import ThreeBlocks from './components/ThreeBlocks';
import Copyright from './components/Copyright';

function App() {
  return (
  <>
    <Banner/>
    <ThreeBlocks/>
    <Feature_skew/>
    <Feature_green/>
    <PriceTable/>
    <Client/>
    <Contact/>
    <Copyright/>
  </>
  );
}

export default App;
