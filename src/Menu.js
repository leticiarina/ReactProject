import React from 'react';

function Menu(){
	return(
		<nav class="navbar navbar-expand-lg menu">
	        <a class="navbar-brand logo" href="#"> PET SHOP </a>
	        <ul class="navbar-nav mr-auto">
	          <li class="nav-item">
	            <a class="nav-link link-menu" href="#"> Início </a>
	          </li>
	          <li class="nav-item">
	            <a class="nav-link link-menu" href="#"> Serviços </a>
	          </li>
	          <li class="nav-item">
	            <a class="nav-link link-menu" href="#"> Contato </a>
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
    )
};

export default Menu;