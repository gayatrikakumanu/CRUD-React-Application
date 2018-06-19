// to view the player details in cards
import React, {Component} from 'react';
import { fetch_players } from '../actions/players';
import { connect } from 'react-redux';	
import { Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

class TitleList extends Component{
	// at the time of component gets mounted getting the player details to display
	componentDidMount(){
		this.props.dispatch(fetch_players());
	}
	//redirect to edit page and passing state to get the which layer to edit
	onEditUser = (item)=>{
		console.log("clicked", item);
		this.props.history.push({pathname:'/edit', state: { Id: item.id, dName: item.displayName }});
	}
	//redirects to add player page
	onAddUser = (e)=>{
		e.stopPropagation();
		console.log("clicked");
		this.props.history.push('/add');
	}

	render(){
		return(
			 <Container fluid>
			 <Row>
			 	{
			 	this.props.players.map((item,index)=>{
			 			let source= 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/' + item.playerId + '.png';
			 		return(
					 	<Col sm="3" key={index} >
					 		<Card onClick= {()=> this.onEditUser(item)}>				 			 
						      <CardImg top width="100%" src={source} alt="Card image cap" />
						      <CardBody>
						        <CardTitle>DisplayName: {item.displayName}</CardTitle>
						        <CardText>Jersy No: {item.jerseyNo}</CardText>
						        <CardText>Player ID: {item.playerId}</CardText>
						        <CardText>Position: {item.position}</CardText>
						        <CardText>Team Abbreavtion: {item.teamAbbr}</CardText>
						        <Button color="primary" onClick= {(e)=>this.onAddUser(e)} >Add Player</Button>
						      </CardBody>
					    	</Card>
					 	</Col>
					 	)
			 	})
		}
		</Row>
			</Container>
		);
	}
}

const mapStateToProps= (state)=> {
    console.log(state);
    return{
        players: state
    }
}

export default connect(mapStateToProps)(TitleList);