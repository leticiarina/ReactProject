import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Services from './Services';
import Footer from './Footer';
import './css/bootstrap.min.css';
import './css/style.css';

function Contato() {
  return (
    <div>
      <Menu/>
      <Footer/>
    </div>
  );
}

ReactDOM.render(
  <Index />, 
  document.getElementById("root")
);    
