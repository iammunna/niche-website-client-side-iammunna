import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from "react-router-dom";
import useFirebase from '../hooks/useFirebase';


const PrivateRoute = ({ children, ...rest }) => {

	const { user, isLoading } = useFirebase();
	
	if (isLoading) {
		return <Spinner className="d-block" style={{ margin: '140px auto' }} animation="grow" variant="danger" />
	}
	
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;