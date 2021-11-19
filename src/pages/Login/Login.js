import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

	const [loginData, setLoginData] = useState([]);
	const { user, loginUser } = useFirebase();

	const location = useLocation();
	const history = useHistory();

	const handleOnBlur = e => {
		const field = e.target.name;
		const value = e.target.value;

		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);

	}

	const handleLoginSubmit = e => {
		e.preventDefault();
		// setSuccessMsg('Logged In Successfully!')

		alert('Login Successfully!');
		loginUser(loginData.email, loginData.password, location, history);

		e.target.reset();
	}

	return (
		<div className="text-center" style={{ margin: '200px auto' }}>

			<Container>
				<div className="w-50 mx-auto border p-4">
					<h1 className="text-center fw-bold text-success pb-2 mb-2 text-uppercase text-success">Login</h1>
					<form onSubmit={handleLoginSubmit}>

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


						<Button type="submit" className="btn btn-warning px-5 py-2 fw-bold">Login</Button>
					</form>
					<h6 className="my-4">New user? <Link to="/signUp">Sign Up</Link></h6>
				</div>
			</Container>
		</div>
	);
};

export default Login;