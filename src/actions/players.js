import axios from 'axios';

export const FETCH_PLAYER= 'FETCH_PLAYER';
export const ADD_PLAYER= 'ADD_USER';
export const EDIT_PLAYER= 'EDIT_USER';
export const DELETE_PLAYER= 'DELETE_USER';
export const FETCH_SINGLE_PLAYER= 'FETCH_SINGLE_PLAYER';

//dispatch action to add players to json-server
export function add_players(data){
	console.log(data);
	return(dispatch)=>{
		return axios.post('http://localhost:4000/nba', data)
		.then(response => {
			dispatch({
				type: ADD_PLAYER,
				payload: response.data
			})
		})
	}
}
//dispatch action to get players from json-server
export function fetch_players(){
	return(dispatch)=>{
		fetch('http://localhost:4000/nba').then((resp)=> resp.json()).then((respJSON)=>{
			console.log(respJSON);
			dispatch({
				type: FETCH_PLAYER,
				payload: respJSON
			});
		});
	};
}
//dispatch action to get single players from json-server
export function fetch_single_players(data){
	return(dispatch)=>{
		console.log(data);
		fetch('http://localhost:4000/nba/'+data).then((resp)=> resp.json()).then((respJSON)=>{
			console.log(respJSON);
			dispatch({
				type: FETCH_SINGLE_PLAYER,
				payload: [respJSON]
			});
		});
	}
}
//editting players details
export function edit_players(data){
	console.log(data);
	return(dispatch)=>{
		return axios.put('http://localhost:4000/nba/'+data.id, data.playerDetails)
		.then(response => {
			dispatch({
				type: EDIT_PLAYER,
				payload: response.data
			})
		})
	}
}
//removing player details
export function delete_player(id){
	console.log(id);
	return(dispatch)=>{
		return axios.delete('http://localhost:4000/nba/'+id)
		.then(response => {
			dispatch({
				type: DELETE_PLAYER,
				id
			})
		})
	}
}