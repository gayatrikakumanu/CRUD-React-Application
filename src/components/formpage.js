// A form page to add new player details
import React, {Component} from 'react';
import { connect } from 'react-redux';
import serializeForm from 'form-serialize';
import { Button, Form, FormGroup, Label, Input, Container, Col } from 'reactstrap';

import { add_players } from '../actions/players';

class FormPage extends Component{
	// add player function to dispatch action
	addPlayer= (e) => {
		e.preventDefault();
		let playerDetails= serializeForm(e.target, {hash:true});
		console.log("payer details are ",playerDetails);
		this.props.dispatch(add_players(playerDetails));
		this.props.history.push('/title');
	}
	//to view which files is uploaded
	onChange(e) {
    var file= {file:e.target.files}
  	}
	render(){
		return(
			<Container>
				<Form onSubmit={this.addPlayer}>
			        <FormGroup row>
			          <Col sm="6"><Label for="title">Add Player</Label></Col>	
			        </FormGroup>
			        <FormGroup row>
			          <Col sm="3"><Label for="image">Image Upload</Label></Col>
			          <Col sm="6"><Input required type="file" name="image" accept='.png' id="displayname" onChange={this.onChange} /></Col>
			        </FormGroup>
			        <FormGroup row>
			          <Col sm="3"><Label for="displayname">Display Name</Label></Col>
			          <Col sm="6"><Input required type="text" name="displayName" id="displayname" placeholder="Display Name" ref={(input)=> this.displayName= input} /></Col>
			        </FormGroup>
			        <FormGroup row>
			          <Col sm="3"><Label for="firstname">First Name</Label></Col>
			          <Col sm="6"><Input required type="text" name="firstName" id="playername" placeholder="First Name" ref={(input)=> this.firstName= input} /></Col>
			        </FormGroup>
			       <FormGroup row>
			          <Col sm="3"><Label for="lastname">Last Name</Label></Col>
			          <Col sm="6"><Input required type="text" name="lastName" id="playerlastname" placeholder="Last Name"  ref={(input)=> this.lastName= input} /></Col>
			        </FormGroup>
			        <FormGroup row>
			          <Col sm="3"><Label for="jersynumber">Jersy Number</Label></Col>
			          <Col sm="6"><Input required type="number" name="jersyNo" id="jerseyNumber" placeholder="Jersy Number" ref={(input)=> this.jerseyNumber= input}  /></Col>
			        </FormGroup>
			        <FormGroup row>
			          <Col sm="3"><Label for="playerid">Player ID</Label></Col>
			          <Col sm="6"><Input required type="number" name="playerId" id="playerid" placeholder="Player Id" ref={(input)=> this.playerId= input}  /></Col>
			        </FormGroup>
			        <FormGroup row>
			          <Col sm="3"><Label for="position">Player Position</Label></Col>
			          <Col sm="6"><Input required type="text" name="position" id="playerPosition" placeholder="Player Position" ref={(input)=> this.playerPosition= input}  /></Col>
			        </FormGroup>
			        <FormGroup row>
			        	<Col sm="3"><Label for="teamabbrevation">Player Team Abbrevation</Label></Col>
			        	<Col sm="6"><Input required type="text" name="teamAbbr" id="teamAbbreavtion" placeholder="Player Team Abbreavtion" ref={(input)=> this.teamAbbrev= input}  /></Col>
			        </FormGroup>
			        <Button color="success">Add</Button>
	      		</Form>
      		</Container>
		);
	}
}



export default connect()(FormPage);