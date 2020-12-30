import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const Header = () => <h2>!!!Hello Hell!!!</h2>;
const Input = () => <input placeholder="input here"></input>;
const Btn = () => {
  const press = 'Press Here'
  return <button>{press} (4+5)</button>;
};

const App = () => {
  return ( 
    <div>
      <Header/>
      <Input/>
      <Btn/>
    </div>
  )
};

const elem = <div>
  <h2>Hello Hell!</h2>
  <input placeholder="input here"></input>
  <button>press here</button>
  </div>;


//const elem = React.createElement('h2', null, '!Hello Hell!')

ReactDOM.render(
  // elem,
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
