import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Module 32: Explore React !!!</h1>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

// Declare first component
function Person(){
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px'
  }
  return (
    <div style={personStyle}>
      <h1 style={{color: 'green'}}>First Component</h1>
      <p>Learning to declare component</p>
    </div>
  )
} 

export default App;
