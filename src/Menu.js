import React from 'react';
import Login from './Login';
import { NavLink } from 'react-router-dom';

function Menu(){
	return(
		<div>
			<nav class="navbar navbar-expand-lg menu">
		        PET SHOP
		        <ul class="navbar-nav mr-auto">
		          <li class="nav-item">
		            <NavLink to="/" className="nav-link link-menu">Início</NavLink>
		          </li>
		          <li class="nav-item">
		            <NavLink to="/contato" className="nav-link link-menu">Contato</NavLink>
		          </li>
		        </ul>
		        <Login/>
	      	</nav> 
  		</div>
	)		
};

export default Menu;