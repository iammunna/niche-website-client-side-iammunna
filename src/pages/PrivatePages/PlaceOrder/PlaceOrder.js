import React, { useEffect, useRef, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';
import './PlaceOrder.css';

const PlaceOrder = () => {

	const { user } = useFirebase();
	const [order, setOrder] = useState([]);
	const [singleProduct, setSingleProduct] = useState({});
	const { productId } = useParams();
    const [isLoading, setIsLoading] = useState(false);

	const userNameRef = useRef();
	const userEmailRef = useRef();
	const address1Ref = useRef();
	const address2Ref = useRef();
	const cityRef = useRef();
	const districtRef = useRef();
	const zipRef = useRef();

	const handleAddProduct = e => {
		e.preventDefault();

		const serviceName = userNameRef.current.value;
		const serviceEmail = userEmailRef.current.value;
		const address1 = address1Ref.current.value;
		const address2 = address2Ref.current.value;
		const city = cityRef.current.value;
		const zip = zipRef.current.value;


		const newOrder = { singleProduct, serviceName, serviceEmail, address1, address2, city, zip, productId }


		fetch('http://localhost:5000/allOrders', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newOrder)
		})
			.then(res => res.json())
			.then(data => {
				if (data.insertedId) {

					alert('Order Placed Successfully!');
					e.target.reset();
				}
				const addedService = data;
				setSingleProduct(addedService);
			})
	}

	useEffect(() => {
		const url = `http://localhost:5000/products`;
		fetch(url)
			.then(res => res.json())
			.then(data => setOrder(data))
			            .finally(()=> setIsLoading(true));
	}, []);

	useEffect(() => {
		const findProduct = order.find(
			(product) => product._id === productId
		);
		setSingleProduct(findProduct);
	}, [order]);
if (!isLoading) {
		return <Spinner className="d-block" style={{ margin: '140px auto' }} animation="grow" variant="danger" />
	}
	return (
		<div style={{ margin: '100px auto' }}>
			<div className="container w-50">

				<h1 className="my-5 text-center fw-bold theme-secondary-text border-bottom pb-4">Place Order</h1>

				<form onSubmit={handleAddProduct}>
					<div className="mb-3">
						<input type="text" ref={userNameRef} className="form-control" value={user?.displayName} readOnly />
					</div>

					<div className="mb-3">
						<input type="text" ref={userEmailRef} className="form-control" value={user?.email} readOnly />
					</div>

					<div className="mb-3">
						<input type="text" ref={address1Ref} className="form-control" placeholder="Address Line: 1" />
					</div>

					<div className="mb-3">
						<input type="text" ref={address2Ref} className="form-control" placeholder="Address Line: 2" />
					</div>

					<div className="row g-3">
						<div className="col-sm-7">
							<input type="text" ref={cityRef} className="form-control" placeholder="City" aria-label="City" />
						</div>
						<div className="col-sm">
							<input type="text" ref={districtRef} className="form-control" placeholder="District" aria-label="State" />
						</div>
						<div className="col-sm">
							<input type="text" ref={zipRef} className="form-control" placeholder="Zip" aria-label="Zip" />
						</div>
					</div>

					<div className="my-3 w-75 mx-auto">
						<Card id="tour-card">
							<Card.Img style={{ height: '300px' }} variant="top" src={singleProduct?.img} />

							<Card.Body className="tour-title text-center">
								<Card.Title>{singleProduct?.name}

									<span className="text-white mx-5 fw-bolder">&#2547;{singleProduct?.price}</span>
								</Card.Title>


							</Card.Body>
						</Card>
					</div>

					<button type="submit" className="btn btn-warning w-100 my-2 py-2">Place Order</button>
				</form>

			</div>
		</div>
	);
};

export default PlaceOrder;