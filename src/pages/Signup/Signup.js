import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const SignIn = () => {

	const [loginData, setLoginData] = useState([]);
	const { registerUser, isLoading, signInWithGoogle, error } = useFirebase();

	const history = useHistory();
	const location = useLocation();
	const redirect_uri = location.state?.from || '/';

	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;

		const newLoginData = { ...loginData };
		newLoginData[field] = value;

		console.log(newLoginData);
		setLoginData(newLoginData);

	}

	const handleSignUpSubmit = e => {
		e.preventDefault();
		if (loginData.password !== loginData.confirmPassword) {
			// setErrorMsg('Password doesn\'t match!');
			alert('Password Doesn\'t Match!');
			return
		}
		alert('Sign Up Successfully!');
		registerUser(loginData.email, loginData.password, loginData.name, history, location);
		e.target.reset();
	}

	return (
		<div className="text-center" style={{ margin: '200px auto' }}>

			<Container>
				<div className="w-50 mx-auto border p-4">
					<h1 className="text-center fw-bold text-success pb-2 mb-2 text-uppercase text-success">sign Up</h1>
					<form onSubmit={handleSignUpSubmit}>
						<Form.Floating className="mb-3">
							<Form.Control
								id="name"
								name="name"
								type="text"
								placeholder="Name"
								onBlur={handleOnBlur}
							/>
							<label htmlFor="name">Name</label>
						</Form.Floating>

						<Form.Floating className="mb-3">
							<Form.Control
								id="email"
								name="email"
								type="email"
								placeholder="Email"
								onBlur={handleOnBlur}
							/>
							<label htmlFor="email">Email</label>
						</Form.Floating>

						<Form.Floating className="mb-3">
							<Form.Control
								id="password"
								name="password"
								type="password"
								placeholder="Password"
								onBlur={handleOnBlur}
							/>
							<label htmlFor="password">Password</label>
						</Form.Floating>

						<Form.Floating className="mb-3">
							<Form.Control
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								placeholder="Confirm Password"
								onBlur={handleOnBlur}
							/>
							<label htmlFor="confirmPassword">Confirm Password</label>
						</Form.Floating>

						<Button type="submit" className="btn btn-warning px-5 py-2 fw-bold">Sign up</Button>
					</form>
					<h6 className="my-4">New user? <Link to="/login">Login</Link></h6>
				</div>
			</Container>
		</div>
	);
};

export default SignIn;