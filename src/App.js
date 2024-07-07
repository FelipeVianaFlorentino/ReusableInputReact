import logo from './logo.svg';
import './App.css';
import Input from './components/Input';

function App() {
  return (
    <div className='App'>
      <h1>Input Reutilizável com React</h1>
      <form>
        <Input label="Nome" type="text" id="nome" />
        <Input label="Email" type="email" id="email" />
        <Input label="Senha" type="password" id="senha" />
      </form>
    </div>
  );
}

export default App;
