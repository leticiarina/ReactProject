import React from 'react';
import { NavLink } from 'react-router-dom';

class Login extends React.Component{

	constructor(props){
		super(props);
		this.user = JSON.parse(localStorage.getItem("user"));
		this.admin = JSON.parse(localStorage.getItem("admin"));
		this.state = {email: '', senha: '', loggedUser: false, loggedAdmin: false};
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
		if(this.user.email === this.state.email && this.user.senha === this.state.senha
			&& this.admin.email !== this.state.email && this.admin.senha !== this.state.senha){
			this.user.logged = true;
			localStorage.setItem("user", JSON.stringify(this.user));
			this.setState({loggedUser: true});
			this.setState({loggedAdmin: false});
		} else if(this.admin.email === this.state.email && this.admin.senha === this.state.senha){
			this.admin.logged = true;
			localStorage.setItem("admin", JSON.stringify(this.admin));
			this.setState({loggedAdmin: true});
			this.setState({loggedUser: false});
		} else 
			window.alert("Login inválido.");
	}

	handleLogout(event){
		// Sign out user
		if(this.user.logged){
			this.user.logged = false;
			localStorage.setItem("user", JSON.stringify(this.user));
			this.setState({loggedUser: false});
		
		// Sign out admin
		} else {
			this.admin.logged = false;
			localStorage.setItem("admin", JSON.stringify(this.admin));
			this.setState({loggedAdmin: false});
		}
	}

	render(){
		if(this.state.loggedUser){
			return(
				<div className="dropdown purple-btn">
				  <button className="btn btn-sm purple-btn dropdown-toggle" type="button" data-toggle="dropdown">
					{this.user.name}
				  </button>
				  <div className="dropdown-menu purple-btn dropdown-menu-right">
			    	<NavLink className="dropdown-item btn-sm purple-btn" to="/painel">Painel</NavLink>
			    	<NavLink className="dropdown-item btn-sm purple-btn" to="/painel/agenda">Agendar Serviços</NavLink>
				    <div className="dropdown-divider"></div>
				    <form onSubmit={this.handleLogout}>
			    		<button className="dropdown-item btn-sm purple-btn" type="submit">Sair</button>
				    </form>
				  </div>
				</div>			
			);
		} else if(this.state.loggedAdmin){
			return(
				<div className="dropdown purple-btn">
				  <button className="btn btn-sm purple-btn dropdown-toggle" type="button" data-toggle="dropdown">
					{this.admin.name}
				  </button>
				  <div className="dropdown-menu purple-btn dropdown-menu-right">
			    	<NavLink className="dropdown-item btn-sm purple-btn" to="/painel">Painel</NavLink>
			    	<NavLink className="dropdown-item btn-sm purple-btn" to="/painel/agenda">Agendar Serviços</NavLink>
				    <div className="dropdown-divider"></div>
				    <form onSubmit={this.handleLogout}>
			    		<button className="dropdown-item btn-sm purple-btn" type="submit">Sair</button>
				    </form>
				  </div>
				</div>			
			);
		} else {
			return(
		        <form className="form-inline" onSubmit={this.handleSubmit}>
		          <div className="form-group mx-sm-2">
		            <input className="form-control form-control-sm" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Login"/>
		          </div>
		          <div className="form-group mx-sm-2">
		            <input className="form-control form-control-sm" value={this.state.senha} onChange={this.handleChangeSenha} type="password" placeholder="Senha"/>
		          </div>
		          <div className="form-group mx-sm-2">
		            <button className="btn btn-sm purple-btn" type="submit">Entrar</button>
		          </div>
		        </form>		
			);
		}
	}	
}

export default Login;