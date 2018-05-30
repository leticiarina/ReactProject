import React from 'react';
import Atividades from './Atividades';
import { Agenda, NovoServico }  from './Agenda';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

function Painel(){

	if(localStorage.getItem("email") == null){
		return(
			<div>
			Usuário não logado
			</div>
		);
	}else{
		return(	
		<div class="row m-0 border border-white">
			<LateralMenu/>
			<div class="col p-2 md-5 bg-light-green border border-white">
			<Switch>
		  		<Route path="/painel/atividades" component={Atividades}/>
		  		<Route exact path="/painel/agenda" component={Agenda}/>
		  		<Route path="/painel/agenda/novo" component={NovoServico}/>
			</Switch>
			</div>
		</div>
		);
		
	}
}

const LateralMenu = () => (
  <div class="sidebar-menu col-2 p-2 md-5">
    <div class="nav flex-column" role="tablist" aria-orientation="vertical">
      <NavLink to="/painel/atividades">Atividades</NavLink>
      <NavLink to="">Compras</NavLink>
      <NavLink to="/painel/agenda">Agenda</NavLink>
      <NavLink to="">Perfil</NavLink>
    </div>
  </div>
);

export default Painel;
