import NavBar from './components/NavBar';
import WelcomePage from './components/WelcomePage';
import Compliance from './components/Compliance';
import Footer from './components/Footer';
import './App.css';
import CoreVideo from './components/CoreVideo';
function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <CoreVideo/> 
      <WelcomePage/>
      <Compliance/>
      <Footer/>
      {/* <header className="App-header">
      </header> */}
    </div>
  );
}

export default App;
