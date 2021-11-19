import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';


const MakeAdmin = () => {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);

	const handleOnBlur = e => {
		setEmail(e.target.value);
	}

	const handleAdminSubmit = e => {

		const user = { email };
		fetch('http://localhost:5000/users/admin', {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user)
		})
			.then(res => res.json())
			.then(data => {
				// setEmail('');
				setSuccess(true);
			});

		e.preventDefault();
	}

	return (
		<div style={{ textAlign: 'center', margin: '100px auto' }}>
			<h2>
				Make Admin
			</h2>


			<form onSubmit={handleAdminSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
				<input
					// fullWidth
					name="admin"
					id="admin"
					placeholder="Email"
					variant="outlined"
					onBlur={handleOnBlur}
				/>
				<br />
				<Button type="submit" >Make Admin</Button>
			</form>
			{success && <Alert style={{ width: '40%', margin: '10px auto'}} severity="success">Made Admin Successfully!</Alert>}
		</div>
	);
};

export default MakeAdmin;