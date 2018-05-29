import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

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
		if(this.state.submitted){
			return(
				<div class="dropdown">
				  <button class="btn btn-sm purple-btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					{localStorage.getItem("email")}
				  </button>
				  <div class="dropdown-menu purple-btn dropdown-menu-right" aria-labelledby="dropdownMenu2">
				    <button class="dropdown-item btn-sm purple-btn" type="button">Painel</button>
				    <button class="dropdown-item btn-sm purple-btn" type="button">Agendar Serviço</button>
				    <div class="dropdown-divider"></div>
				    <button class="dropdown-item btn-sm purple-btn" type="button">Sair</button>
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