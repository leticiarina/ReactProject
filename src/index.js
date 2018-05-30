import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Services from './Services';
import Contato from './Contato';
import Painel from './Painel';
import Footer from './Footer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/style.css';

function Index() {
  return (
    <div>
      <Menu/>
      <Switch>
  		<Route exact path="/" component={Services}/>
  		<Route path="/contato" component={Contato}/>      	
  		<Route path="/painel" component={Painel}/>
      </Switch>
      <Footer/>
    </div>
  );
}

ReactDOM.render((
	<BrowserRouter>
		<Index />
	</BrowserRouter>
	), document.getElementById("root")
);    
