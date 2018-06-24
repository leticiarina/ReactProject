import React from 'react';
import { Agenda }  from './Agenda.jsx';
import { NovoServico }  from './NovoServico.jsx';
import { Mensagens } from './Mensagens.jsx';
import { Switch, Route, NavLink } from 'react-router-dom';

function Painel(){

	var user = JSON.parse(localStorage.getItem("user"));
	var admin = JSON.parse(localStorage.getItem("admin"));

	if(!user.logged && !admin.logged){
		return(
			<div>
				Usuário não logado. Faça o login para continuar.
			</div>
		);
	} else if(user.logged) {
		return(	
			<div className="row m-0 border border-white">
				<LateralUserMenu/>
				<div className="col p-2 md-5 bg-light-green border border-white">
				<Switch>

			  		<Route exact path="/painel/agenda" component={Agenda}/>
			  		<Route path="/painel/agenda/novo" component={NovoServico}/>
				</Switch>
				</div>
			</div>
		);
	} else {
		return(	
			<div className="row m-0 border border-white">
				<LateralAdminMenu/>
				<div className="col p-2 md-5 bg-light-green border border-white">
				<Switch>
			  		<Route exact path="/painel/mensagens" component={Mensagens}/>
				</Switch>
				</div>
			</div>
		);		
	}
}

const LateralUserMenu = () => (
  <div className="sidebar-menu col-2 p-2 md-5">
    <div className="nav flex-column" role="tablist" aria-orientation="vertical">
      <NavLink to="/painel/agenda">Agenda</NavLink>
    </div>
  </div>
);

const LateralAdminMenu = () => (
  <div className="sidebar-menu col-2 p-2 md-5">
    <div className="nav flex-column" role="tablist" aria-orientation="vertical">
      <NavLink to="/painel/mensagens">Mensagens</NavLink>
    </div>
  </div>
);


export default Painel;
