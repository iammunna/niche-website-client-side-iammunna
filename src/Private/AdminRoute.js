import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useFirebase from '../hooks/useFirebase';

const AdminRoute = ({ children, ...rest }) => {

	const { user, admin, isLoading } = useFirebase();

	if (isLoading) {
		return <Spinner className="d-block" style={{ margin: '140px auto' }} animation="grow" variant="danger" />
	}

	if (!admin) { return <Spinner className="d-block" style={{ margin: '140px auto' }} animation="grow" variant="danger" /> }

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user?.email && admin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
};

export default AdminRoute;