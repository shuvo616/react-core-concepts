import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name: 'Audi', price: '$100'},
    {name: 'BMW' , price: '$200'},
    {name: 'Prado', price: '$300'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Module 32: Explore React !!!</h1>
        <Product car={products[0]}></Product>
        <Product car={products[1]}></Product>
        <Product car={products[2]}></Product>
        <Person name="John Wick" surname="Baba Yaga"></Person>
        <Person name="Dwayne Johnson" surname="Rock"></Person>
      </header>
    </div>
  );
}
// Create Second Component to pass Object and access the object
function Product(props){
  const productStyle = {
    backgroundColor: 'lightgray',
    border: '1px solid red',
    borderRadius: '10px',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: '10px'
  }
  // object destructuring as a variable
  const {name,price} = props.car;
  return (
    <div style={productStyle}>
      <h2>Car: {name}</h2>
      <h3>Price: {price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

// Declare first component
function Person(props){
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px'
  }
  return (
    <div style={personStyle}>
      <h1 style={{color: 'green'}}>First Component</h1>
      <h3>Hero Name: {props.name}</h3>
      <p>Sur Name: {props.surname}</p>
    </div>
  )
} 

export default App;
