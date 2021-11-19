import React, { useEffect, useState } from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';

const ManageAllOrders = () => {
	const [orders, setOrders] = useState([]);

	const [order, setOrder] = useState([]);

    const [isLoading, setIsLoading] = useState(false);


	useEffect(() => {
		fetch('http://localhost:5000/allOrders')
			.then(res => res.json())
			.then(data => setOrders(data))
            .finally(()=> setIsLoading(true));
	}, []);

	if (!isLoading) {
		return <Spinner className="d-block" style={{ margin: '140px auto' }} animation="grow" variant="danger" />
	}

	const handleDeleteOrder = id => {
		const proceed = window.confirm('Are you sure?');

		if (proceed) {
			const url = `http://localhost:5000/allOrders/${id}`;
			fetch(url, {
				method: 'DELETE'
			})
				.then(res => res.json())
				.then(data => {
					console.log(data)
					if (data.deletedCount > 0) {
						alert('deleted successfully!');
						const remainingOrders = orders.filter(order => order._id !== id)
						setOrders(remainingOrders);
					}
				})
		}

	}

	return (
		<div className="my-5 py-3">
			<Container>

				<h1 className="my-5 text-center fw-bold theme-secondary-text border-bottom pb-4">Manage All Orders: {orders.length}</h1>

				{orders.length >= 1 ?
					orders?.map(order => <div key={order?._id} className="card mb-3" id="ordered-item">
						< div className="row g-0" >

							<div className="col-md-4 my-3">
								<img src={order?.singleProduct?.img} className="img-fluid rounded-start" alt="..." />
							</div>

							<div className="col-md-8">
								<div className="card-body">
									
									<p className="card-text">{order?.singleProduct?.description}</p>

									<h5 className="fs-4 fw-bolder mb-4"> ৳{order?.singleProduct?.price}</h5>
									<button className="btn btn-danger mr-5"
										onClick={() => handleDeleteOrder(order._id)}
									>Remove</button>

								</div>
							</div>
						</div>
					</div >) : <Alert variant="danger" className="text-center w-50 mx-auto">No Order to Show!</Alert>
				}

			</Container>
		</div>
	);
};

export default ManageAllOrders;