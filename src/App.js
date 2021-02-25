import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Module 32: Explore React !!!</h1>
        <Person name="John Wick" surname="Baba Yaga"></Person>
        <Person name="Dwayne Johnson" surname="Rock"></Person>
      </header>
    </div>
  );
}

// Declare first component
function Person(props){
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px'
  }
  console.log(props);
  return (
    <div style={personStyle}>
      <h1 style={{color: 'green'}}>First Component</h1>
      <h3>Hero Name: {props.name}</h3>
      <p>Sur Name: {props.surname}</p>
    </div>
  )
} 

export default App;
