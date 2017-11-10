import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { LoginComponent } from './Login';

function validate(values){
	const errors = {}
	if(!values.email){
		errors.email = 'Email is required.'
	}
	if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(values.email)){
		errors.email = 'Invalid email address.'
	}
	if(!values.password){
		errors.password = 'Password is required.'
	}
	return errors
}

const form = reduxForm({
	form: 'LoginForm',
	validate
})

export let Login = connect(
	null,
	{}
)(form(LoginComponent))