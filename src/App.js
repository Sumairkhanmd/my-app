
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
  <Navbar title="Nav bar" about="about me"/>
  <div className="container my-3">
  <TextForm heading="Enter your text here" title="Text Box"/>
  </div>
  
    </>
  );
}

export default App;
