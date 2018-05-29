import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Footer from './Footer';
import './css/bootstrap.min.css';
import './css/style.css';

function Index() {
  return (
    <div>
      <Menu/>
      <div id="content"></div>
      <Footer/>
    </div>
  );
}

ReactDOM.render(
  <Index />, 
  document.getElementById("root")
);    
