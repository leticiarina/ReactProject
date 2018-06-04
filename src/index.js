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

class Index extends React.Component{

	constructor(props){
		super(props);
		localStorage.setItem("user", JSON.stringify({email: 'user@petshop.com', senha: 'senha', name: "Usuário", logged: false}));
		localStorage.setItem("admin", JSON.stringify({email: 'admin@petshop.com', senha: 'admin', name: "Admin", logged: false}));
	}

	render(){
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

}

ReactDOM.render((
	<BrowserRouter>
		<Index />
	</BrowserRouter>
	), document.getElementById("root")
);    
