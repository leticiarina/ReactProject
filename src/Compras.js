import React from 'react';
import catfood from './img/catfood.jpg';
import cattoy from './img/cattoy_mice.jpg';
import cathouse from './img/cathouse.jpg';
import dogfood from './img/dogfood.jpg';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

class Compras extends React.Component{

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		localStorage.removeItem("compra");
	}

	render(){
		if(localStorage.getItem("compra") == null){
			return(	
				<div>
					<h1>Compras</h1>
					<p>Nenhuma compra realizada.</p>
			    	<p>
			    		<NavLink to="/painel/compras/novo">Realizar compra</NavLink>
					</p>
				</div>
			);
		} else {

			var servico = JSON.parse(localStorage.getItem("servico"));

			return(	
				<div>			
					<h1>Compras</h1>
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

class NovaCompra extends React.Component{

	constructor(props){
		super(props);
		this.state = {comidaGato: '0', brinquedoGato: '0', casaGato: '0', comidaCachorro: '0'};
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
		localStorage.setItem("compra", JSON.stringify(this.state));		
	}

	render(){
		if(localStorage.getItem("compra") == null){
			return(
				<div class="p-2 md-5">
					<h1>Nova Compra</h1>
				      <div class="row masthead-followup row m-0 border border-white">
				        <div class="col p-3 p-md-5 border border-white">
				          <h3>Comida para gatos</h3>
				          <img src={catfood}/>
				          <p>Comida para gatos whiskas sabor carne 10Kg.</p>
				          <hr class="half-rule"/>
							<div class="form-group">
								<label>Quantidade</label>
					            <input class="form-control form-control-sm" type="number" min="0" value={this.state.comidaGato} onChange={this.handleChangeData}/>
							</div>
				        </div>

				        <div class="col p-3 p-md-5 bg-light-green  border border-white">
				          <h3>Brinquedo para gatos</h3>
				          <img src={cattoy}/>
				          <p>Brinquedo para gatos com catnip.</p>
				          <hr class="half-rule"/>
							<div class="form-group">
								<label>Quantidade</label>
					            <input class="form-control form-control-sm" type="number" min="0" value={this.state.comidaGato} onChange={this.handleChangeData}/>
							</div>
				        </div>

				        <div class="col p-3 p-md-5 bg-light-green border border-white">
				          <h3>Casa para gatos</h3>
				          <img src={cathouse}/>
				          <p>Casa com 2 andares e arranhador para gatos.</p>
				          <hr class="half-rule"/>
							<div class="form-group">
								<label>Quantidade</label>
					            <input class="form-control form-control-sm" type="number" min="0" value={this.state.comidaGato} onChange={this.handleChangeData}/>
							</div>
				        </div>
				        
				        <div class="col p-3 p-md-5 bg-light-green border border-white">
					        <h3>Comida para cachorros</h3>
					        <img src={dogfood}/>
					        <p>Comida para cachorros Pedigree sabor frango com vegetais 10Kg.</p>
					        <hr class="half-rule"/>
							<div class="form-group">
								<label>Quantidade</label>
				            	<input class="form-control form-control-sm" type="number" min="0" value={this.state.comidaGato} onChange={this.handleChangeData}/>
							</div>

				        </div>
				      </div>
				</div>
			);
		} else {
			return(
				<Redirect to="/painel/compras"/>
			);
		}
	}
}

export { NovaCompra, Compras };