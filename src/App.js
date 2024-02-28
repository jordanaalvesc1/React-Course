import './App.css';
import HellWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';

function App() {
  const nome = 'Maria'
  return (
    <div className="App">
      <HellWorld/>
      <SayMyName nome="Jordana"/>
      <SayMyName nome="Lucas"/>
      <SayMyName nome={nome}/>
      <Pessoa nome= "Rodrigo" idade="28" profissao= "programador" foto="https:/via.placeholder.com/150"
      />
    </div>
  )
}

export default App;
