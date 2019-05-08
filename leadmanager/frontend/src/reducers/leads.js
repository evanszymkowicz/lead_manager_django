import { GET_LEADS } from '../actions/types.js';

const initialState = {
	something: 'text',
	leads: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_LEADS:
			return {
				//dont forget the spread operator
				//leads sent as a payload in the action
				...state,
				leads: action.payload
			}
		default:
			return state;
	}
}
