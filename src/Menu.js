import React from 'react';
import Services from './Services';
import Contato from './Contato';
import Login from './Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Menu(){

		return(
			<Router>
				<div>
					<nav class="navbar navbar-expand-lg menu">
				        PET SHOP
				        <ul class="navbar-nav mr-auto">
				          <li class="nav-item">
				            <Link to="/" className="nav-link link-menu">Início</Link>
				          </li>
				          <li class="nav-item">
				            <Link to="/contato" className="nav-link link-menu">Contato</Link>
				          </li>
				        </ul>
				        <Login/>
			      	</nav> 

		      		<Route exact path="/" component={Services}/>
		      		<Route path="/contato" component={Contato}/>

	      		</div>
	    	</Router>
		)		
};

export default Menu;