import React from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';

function Contato() {
  return (
	<div class="row m-0 align-items-center bg-light-green border border-white">
		<div class="col p-2 p-md-5">
	    <h1>Contato</h1>
		  <Form horizontal>
			<FormGroup>
				<Col>
					<ControlLabel>Nome</ControlLabel>
				</Col>
				<Col>
				    <FormControl/>
				</Col>
				<Col>
					<ControlLabel>E-mail</ControlLabel>
				</Col>
				<Col>
				    <FormControl type="email"/>
		    	</Col>
				<Col>
					<ControlLabel>Assunto</ControlLabel>
				</Col>
				<Col>
				    <FormControl/>
		    	</Col>
				<Col>
					<ControlLabel>Mensagem</ControlLabel>
				</Col>
				<Col>
				    <FormControl componentClass="textarea"/>
		    	</Col>
		    </FormGroup>
		    <Button type="submit" bsClass="submit">Enviar</Button>
		  </Form>    
		</div>
	  </div>
  );
}

export default Contato;