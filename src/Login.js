import React from 'react';
import { NavLink } from 'react-router-dom';

class Login extends React.Component{

	constructor(props){
		super(props);
		this.state = {email: '', senha: '', submitted: false};
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeSenha = this.handleChangeSenha.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeEmail(event){
		this.setState({email: event.target.value});
	}

	handleChangeSenha(event){
		this.setState({senha: event.target.value});
	}

	handleSubmit(event){
		this.setState({submitted: true});
		localStorage.setItem("email", this.state.email);
	}

	render(){
		if(localStorage.getItem("email") != null){
			return(
				<div className="dropdown purple-btn">
				  <button className="btn btn-sm purple-btn dropdown-toggle" type="button" data-toggle="dropdown">
					{localStorage.getItem("email")}
				  </button>
				  <div className="dropdown-menu purple-btn dropdown-menu-right">
			    	<NavLink className="dropdown-item btn-sm purple-btn" to="/painel">Painel</NavLink>
			    	<NavLink className="dropdown-item btn-sm purple-btn" to="/painel">Agendar Serviços</NavLink>
				    <div className="dropdown-divider"></div>
			    	<NavLink className="dropdown-item btn-sm purple-btn" to="/painel">Sair</NavLink>
				  </div>
				</div>			
			);
		} else {
			return(
		        <form class="form-inline" onSubmit={this.handleSubmit}>
		          <div class="form-group mx-sm-2">
		            <input class="form-control form-control-sm" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Login"/>
		          </div>
		          <div class="form-group mx-sm-2">
		            <input class="form-control form-control-sm" value={this.state.senha} onChange={this.handleChangeSenha} type="password" placeholder="Senha"/>
		          </div>
		          <div class="form-group mx-sm-2">
		            <button class="btn btn-sm purple-btn" type="submit">Entrar</button>
		          </div>
		        </form>		
			);
		}
	}	
}

export default Login;