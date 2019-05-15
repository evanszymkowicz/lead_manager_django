import axios from 'axios';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

// GET leads action method

export const getLeads = () => dispatch => {
	//going to use dispatch instead of
	// function() {}
	// Makes a call out to the Postman API (not working)
	//Don't really understand dispatch yet

	//this axios func will fire the leads.js file in action
	axios
    .delete(`/api/leads/${id}/`), tokenConfig(getState))
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

//Adding a lead
//Takes in/passed from higher up
export const addLeads = lead => dispatch => {
	axios
		//Copied from delete except using post request instead of .get
		.post("/api/leads")
		.then(res => {
			dispatch({
				type: GET_LEADS,
				payload: res.data
			});
		})
		.catch(err => console.log(err));
};
