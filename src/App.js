import './App.css';
import HellWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'

function App() {
  const nome = 'Maria'
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
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
