//edit page to edit the player details
import React, {Component} from 'react';
import serializeForm from 'form-serialize';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetch_single_players, edit_players, delete_player } from '../actions/players';
import { Button, Form, FormGroup, Label, Input, Col, Container } from 'reactstrap';

class EditPage extends Component{
	//editing player details into a object and dispatching action to update json-server
	editPlayer= (e) => {
		e.preventDefault();
		let playerDetails= serializeForm(e.target, {hash:true});
		let id= this.props.location.state.Id;
		const data={
			id,
			playerDetails
		}
		this.props.dispatch(edit_players(data));
		this.props.history.push('/title');
	}
	//deleting player details and naviagting back to title list
	onDeletePlayer= (id) => {
		this.props.dispatch(delete_player(id));
		this.props.history.push('/title');
	}
	//dispatching action to get the player details and edit
	componentDidMount(){
		this.props.dispatch(fetch_single_players(this.props.location.state.Id));
	}
	//getting the details at the time of component updated and showing on the input feilds
	componentDidUpdate() {
		this.refs.editDName.value = this.props.player[0].displayName;
		this.refs.editFName.value = this.props.player[0].firstName;
		this.refs.editLName.value = this.props.player[0].lastName;
		this.refs.editJNo.value = this.props.player[0].jerseyNo;
		this.refs.editPId.value = this.props.player[0].playerId;
		this.refs.editPPosition.value = this.props.player[0].position;
		this.refs.editTAbbr.value = this.props.player[0].teamAbbr;
	}

	render(){
		let playerName= this.props.location.state.dName;
		return(
			<Container>
				<Form onSubmit={this.editPlayer}>
			        <FormGroup row>
			          <Col sm="6"><Label for="title">Edit <b>{playerName}</b></Label></Col>	
			        </FormGroup>
			        <FormGroup row>
			          <Col sm="3"><Label for="displayname">Display Name</Label></Col>
			          <Col sm="6"><input className="form-control" type="text" name="displayName" ref="editDName" id="displayname" placeholder="Display Name" /></Col>
			        </FormGroup>
			        <FormGroup row>
			          <Col sm="3"><Label for="firstname">First Name</Label></Col>
			          <Col sm="6"><input className="form-control" type="text" name="firstName" ref="editFName" id="playername" placeholder="First Name" /></Col>
			        </FormGroup>
			        <FormGroup row>
			          <Col sm="3"><Label for="lastname">Last Name</Label></Col>
			          <Col sm="6"><input className="form-control" type="text" name="lastName" id="playerlastname" ref="editLName" placeholder="Last Name" /></Col>
			        </FormGroup>
			        <FormGroup row>
			          <Col sm="3"><Label for="jersynumber">Jersy Number</Label></Col>
			          <Col sm="6"><input className="form-control" type="number" name="jerseyNo" id="jersyNumber" ref="editJNo" placeholder="Jersy Number" /></Col>
			        </FormGroup>
			        <FormGroup row>
			          <Col sm="3"><Label for="playerid">PlayerId</Label></Col>
			          <Col sm="6"><input className="form-control" type="text" name="playerId" id="playerId" ref="editPId" placeholder="Player Id" /></Col>
			        </FormGroup>
			        <FormGroup row>
			          <Col sm="3"><Label for="position">Position</Label></Col>
			          <Col sm="6"><input className="form-control" type="text" name="position" id="playerPosition" ref="editPPosition" placeholder="Player Position" /></Col>
			        </FormGroup>
			        <FormGroup row>
			        	<Col sm="3"><Label for="teamabbrevation">Player Team Abbrevation</Label></Col>
			        	<Col sm="6"><input className="form-control" type="text" name="teamAbbr" id="teamAbbreavtion" ref="editTAbbr" placeholder="Player Team Abbreavtion" /></Col>
			        </FormGroup>
			        <Button outline color="success">Edit</Button>{' '}
			        <Button outline color="danger" onClick= {(id)=>this.onDeletePlayer(this.props.location.state.Id)}>Delete</Button>
	      		</Form>
      		</Container>
		);
	}
}

const mapStateToProps= (state, props)=> {
    console.log(state);
    	return{
            player: state
        }
}

export default withRouter(connect(mapStateToProps)(EditPage));