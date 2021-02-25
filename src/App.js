import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const bike = [
    {bikeName: 'Yamaha', bikePrice: '$10'},
    {bikeName: 'Pulsar', bikePrice: '$20'},
    {bikeName: 'Suzuki', bikePrice: '$30'},
    {bikeName: 'Hero', bikePrice: '$40'}
  ]
  const products = [
    {name: 'Audi', price: '$100'},
    {name: 'BMW' , price: '$200'},
    {name: 'Prado', price: '$300'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Module 32: Explore React !!!</h1>
        {/* Counter component for understanding State */}
        <Counter></Counter>
        <Users></Users>
        {
          products.map(pd=> <Product product={pd}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        {
          bike.map(bk=> <Rider newBike={bk}></Rider>)
        }
        {/* <Rider bike={bike[0]}></Rider> */}
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
  const {name,price} = props.product;
  return (
    <div style={productStyle}>
      <h2>Car: {name}</h2>
      <h3>Price: {price}</h3>
      <button>Buy Now</button>
    </div>
  )
}
// Component for Bike
function Rider(props){
  const bikeStyle = {
    backgroundColor: 'green',
    border: '1px solid red',
    borderRadius: '10px',
    margin: '10px',
    height: '150px',
    width: '300px',
    float:'left'
  }
    // const {newName,newPrice} = props.newBike;
  return(
    <div style={bikeStyle}>
      <h3>Bike Name: {props.newBike.bikeName}</h3>
      <p>Price: {props.newBike.bikePrice}</p>
    </div>
  )
}
// State
function Counter(){
  const [count,setCount] = useState(1);
  // const handelIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
   const handelIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

// 32-12 Load dynamic data, API call useEffect integrate state
function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <h2>Dynamic Users:{users.length} </h2>
      <ul>
        {
          users.map(user => <li>{(user.name)}</li>)
        }
      </ul>
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
