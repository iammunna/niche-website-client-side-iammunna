import React, { useEffect, useState } from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';

const ManageProducts = () => {
	const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetch('http://localhost:5000/products')
			.then(res => res.json())
			.then(data => setProducts(data))
            .finally(()=> setIsLoading(true));
	}, []);

	if (!isLoading) {
		return <Spinner className="d-block" style={{ margin: '140px auto' }} animation="grow" variant="danger" />
	}

	const handleDeleteProduct = id => {
		const proceed = window.confirm('Are you sure?');

		if (proceed) {
			const url = `http://localhost:5000/products/${id}`;
			fetch(url, {
				method: 'DELETE'
			})
				.then(res => res.json())
				.then(data => {
					console.log(data)
					if (data.deletedCount > 0) {
						alert('deleted successfully!');
						const remainingOrders = products.filter(order => order._id !== id)
						setProducts(remainingOrders);
					}
				})
		}

	}

	return (
		<div className="my-5 py-3">
			<Container>

				<h1 className="my-5 text-center fw-bold theme-secondary-text border-bottom pb-4">Manage Products: {products.length}</h1>

				{products.length >= 1 ?
					products?.map(product => <div key={product?._id} className="card mb-3" id="ordered-item">
						< div className="row g-0" >

							<div className="col-md-4 my-3">
								<img src={product?.img} className="img-fluid rounded-start" alt="..." />
							</div>

							<div className="col-md-8">
								<div className="card-body">

									<p className="card-text">{product?.description}</p>

									<h5 className="fs-4 fw-bolder mb-4"> ৳{product?.price}</h5>
									<button className="btn btn-danger mr-5"
										onClick={() => handleDeleteProduct(product?._id)}
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

export default ManageProducts;