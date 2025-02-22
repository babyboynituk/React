import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function MyApp(){
  return(
  <h2> hello papa namaskar</h2>)
}
const anotherElement=(<a href="http://google.com" target="_blank"> Visited node</a>)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
   anotherElement
   
);


reportWebVitals();
