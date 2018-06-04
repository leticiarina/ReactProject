import React from 'react';
import { Agenda }  from './Agenda';
import { NovoServico }  from './NovoServico';
import { Compras, NovaCompra }  from './Compras';
import { Switch, Route, NavLink } from 'react-router-dom';

function Painel(){

	if(localStorage.getItem("user") == null){
		return(
			<div>
			Usuário não logado
			</div>
		);
	}else{
		return(	
		<div className="row m-0 border border-white">
			<LateralMenu/>
			<div className="col p-2 md-5 bg-light-green border border-white">
			<Switch>
		  		<Route exact path="/painel/agenda" component={Agenda}/>
		  		<Route path="/painel/agenda/novo" component={NovoServico}/>
		  		<Route exact path="/painel/compras" component={Compras}/>
		  		<Route path="/painel/compras/novo" component={NovaCompra}/>
			</Switch>
			</div>
		</div>
		);
		
	}
}

const LateralMenu = () => (
  <div className="sidebar-menu col-2 p-2 md-5">
    <div className="nav flex-column" role="tablist" aria-orientation="vertical">
      <NavLink to="/painel/compras">Compras</NavLink>
      <NavLink to="/painel/agenda">Agenda</NavLink>
      <NavLink to="">Perfil</NavLink>
    </div>
  </div>
);

export default Painel;
