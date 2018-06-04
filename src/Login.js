import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

class Login extends React.Component{

	constructor(props){
		super(props);
		this.user = JSON.parse(localStorage.getItem("user"));
		this.state = {email: '', senha: '', logged: false};
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeSenha = this.handleChangeSenha.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleChangeEmail(event){
		this.setState({email: event.target.value});
	}

	handleChangeSenha(event){
		this.setState({senha: event.target.value});
	}

	handleSubmit(event){
		if(this.user.email === this.state.email && this.user.senha === this.state.senha){
			this.setState({logged: true});
			localStorage.setItem("user", JSON.stringify(this.state))
		}
		 else 
			window.alert("Login inválido.");
	}

	handleLogout(event){
		this.setState({logged: false});
		localStorage.clear();
	}

	render(){
		if(this.state.logged){
			return(
				<div className="dropdown purple-btn">
				  <button className="btn btn-sm purple-btn dropdown-toggle" type="button" data-toggle="dropdown">
					{this.user.email}
				  </button>
				  <div className="dropdown-menu purple-btn dropdown-menu-right">
			    	<NavLink className="dropdown-item btn-sm purple-btn" to="/painel">Painel</NavLink>
			    	<NavLink className="dropdown-item btn-sm purple-btn" to="/painel">Agendar Serviços</NavLink>
				    <div className="dropdown-divider"></div>
				    <form onSubmit={this.handleLogout}>
			    		<button className="dropdown-item btn-sm purple-btn" type="submit">Sair</button>
				    </form>
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