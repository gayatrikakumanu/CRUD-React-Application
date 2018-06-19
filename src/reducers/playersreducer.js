import { FETCH_PLAYER, ADD_PLAYER, EDIT_PLAYER, FETCH_SINGLE_PLAYER, DELETE_PLAYER } from '../actions/players';

const initialAppState= [];

function playersReducer(state= initialAppState, actions){
	switch(actions.type){
		case FETCH_PLAYER:
			return [...actions.payload]
			break;
		case ADD_PLAYER:
			return state.concat([...actions.payload])
		case FETCH_SINGLE_PLAYER:
			return [...actions.payload]
		case EDIT_PLAYER:
			return [...actions.payload]
		case DELETE_PLAYER: 
			let newState = state.filter((item, index)=>{
				if(item.id!== actions.id){
					return true;
				}
			});
			return [...newState]
		default:
			return state;
	}
}

export default playersReducer;