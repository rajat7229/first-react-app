import { useState } from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  const [name, setName] = useState('Rajat');

  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponent></ClassComponent>
      <br />
      <h1>Functional Component</h1>
      <FunctionalComponent name={name} age={'20'} company={'Devtown'} setName={setName}></FunctionalComponent>
    </div>
  );
}

export default App;
