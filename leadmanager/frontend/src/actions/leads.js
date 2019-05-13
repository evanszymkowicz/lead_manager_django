import axios from 'axios';
import { GET_LEADS, DELETE_LEAD } from './types';

// GET leads action method

export const getLeads = () => dispatch => {
	//going to use dispatch instead of
	// function() {}
	// Makes a call out to the Postman API (not working)
	//Don't really understand dispatch yet

	//this axios func will fire the leads.js file in action
	axios
    .delete(`/api/leads/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteLead: "Lead Deleted" }));
      dispatch({
        type: DELETE_LEAD,
        payload: res.data
      });
    }).catch(err => console.log(err));
};

//Deleting a lead
export const deleteLead = (id) => dispatch => {
	axios
		.get(`api/leads/${id}/`)
		.then(res => {
			dispatch({
				type: DELETE_LEADS,
				payload: res.data
			});
		})
		.catch(err => console.log(err));
};
