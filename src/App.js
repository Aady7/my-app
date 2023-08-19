import Navbar from './component/navbar';
import Footer from './component/footer';
import HomeContent from './component/home';
import HomeMain from './component/homemain';
import './App.css';

function App() {
  return (
   <div >
    <Navbar/>
    <HomeContent/>
    <HomeMain/>
    <Footer/>
   </div>
    
  );
}

export default App;
