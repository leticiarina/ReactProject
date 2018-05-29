import React from 'react';
import Services from './Services';
import Contato from './Contato';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Menu(){
	return(
		<Router>
			<div>
				<nav class="navbar navbar-expand-lg menu">
			        <a class="navbar-brand logo" href="#">PET SHOP </a>
			        <ul class="navbar-nav mr-auto">
			          <li class="nav-item">
			            <Link to="/" class="nav-link link-menu">Início</Link>
			          </li>
			          <li class="nav-item">
			            <Link to="/contato" class="nav-link link-menu">Contato</Link>
			          </li>
			        </ul>
			        <form class="form-inline">
			          <div class="form-group mx-sm-2">
			            <input class="form-control form-control-sm" placeholder="Login"/>
			          </div>
			          <div class="form-group mx-sm-2">
			            <input class="form-control form-control-sm" placeholder="Senha"/>
			          </div>
			          <div class="form-group mx-sm-2">
			            <button class="btn btn-sm submit" type="submit">Entrar</button>
			          </div>
			        </form>
		      	</nav> 

	      		<Route exact path="/" component={Services}/>
	      		<Route path="/contato" component={Contato}/>

      		</div>
    	</Router>
	)
};

export default Menu;