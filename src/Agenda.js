import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

class Agenda extends React.Component{

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		localStorage.removeItem("servico");
	}

	render(){
		if(localStorage.getItem("servico") == null){
			return(	
				<div>
					<h1>Agenda</h1>					
					<p>Nenhum serviço agendado.</p>
			    	<p>
			    		<NavLink to="/painel/agenda/novo">Agendar serviço</NavLink>
					</p>
				</div>
			);
		} else {

			var servico = JSON.parse(localStorage.getItem("servico"));

			return(	
				<div>			
					<h1>Agenda</h1>
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">{servico.tipoServico}</h5>
							<p>Data: {servico.data}</p>
							<p>Horário: {servico.horario}</p>
							<form onSubmit={this.handleSubmit}>
								<button class="btn btn-sm purple-btn" type="submit">Excluir</button>
							</form>
						</div>
					</div>
				</div>
			);
		}		
	}
}

class NovoServico extends React.Component{

	constructor(props){
		super(props);
		this.state = {tipoServico: '', data: '', horario: '', submitted: false};
		this.handleChangeTipoServico = this.handleChangeTipoServico.bind(this);
		this.handleChangeData = this.handleChangeData.bind(this);
		this.handleChangeHorario = this.handleChangeHorario.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeTipoServico(event){
		this.setState({tipoServico: event.target.value});
	}

	handleChangeData(event){
		this.setState({data: event.target.value});
	}

	handleChangeHorario(event){
		this.setState({horario: event.target.value});
	}

	handleSubmit(event){
		this.setState({submitted: true});
		localStorage.setItem("servico", JSON.stringify(this.state));		
	}

	render(){
		if(localStorage.getItem("servico") == null){
			return(
				<div class="p-2 md-5">
					<h1>Agendar Serviço</h1>
					<form onSubmit={this.handleSubmit}>
						<div class="form-group">
							<label>Tipo do serviço:</label>
							<div class="form-check">
					            <input class="form-check-input" type="radio" name="tipoServico" value="Banho" onClick={this.handleChangeTipoServico}/> 
					            <label class="form-check-label">
					            	Banho
					            </label>
					        </div>
							<div class="form-check">				        
					          	<input class="form-check-input" type="radio" name="tipoServico" value="Tosa" onClick={this.handleChangeTipoServico}/> 
					          	<label class="form-check-label">
					          		Tosa
					          	</label>
					        </div>
							<div class="form-check">
					            <input class="form-check-input" type="radio" name="tipoServico" value="Consulta" onClick={this.handleChangeTipoServico}/> 
					            <label class="form-check-label">
					            	Consulta
					            </label>
					        </div>
						</div>
						<div class="form-group">
							<label>Data:</label>
				            <input class="form-control form-control-sm" type="date" value={this.state.data} onChange={this.handleChangeData}/>
						</div>
						<div class="form-group">
							<label>Horário:</label>
				            <input class="form-control form-control-sm" type="time" value={this.state.horario} onChange={this.handleChangeHorario}/>
						</div>
						<div class="form-group">
			            	<button class="btn btn-sm purple-btn" type="submit">Agendar</button>
						</div>
					</form>
				</div>
			);
		} else {
			return(
				<Redirect to="/painel/agenda"/>
			);
		}
	}
}

export { NovoServico, Agenda };