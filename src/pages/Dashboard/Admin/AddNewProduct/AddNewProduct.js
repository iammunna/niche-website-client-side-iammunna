import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';

const AddNewProduct = () => {

	const [products, setProducts] = useState([]);

	const nameRef = useRef();
	const descriptionRef = useRef();
	const priceRef = useRef();
	const imageRef = useRef();

	const handleAddService = e => {

		const name = nameRef.current.value;
		const description = descriptionRef.current.value;
		const price = priceRef.current.value;
		const image = imageRef.current.value;

		const newProduct = { name, description, price, image };

		fetch('http://localhost:5000/products', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(newProduct)
		})
			.then(res => res.json())
			.then(data => {
				if (data.insertedId) {
					alert('Service Added Successfully!');

					e.target.reset();
				}
				const addedProduct = data;
				const newProduct = [...products, addedProduct];

				setProducts(newProduct);
			})
		e.preventDefault();
	}

	return (
		<div className="my-5 py-2">

			<Container>

				<h1 className="my-5 text-center fw-bold theme-secondary-text border-bottom pb-4">Add New Service</h1>

				<form onSubmit={handleAddService} className="w-50 mx-auto">

					<div className="row mb-3">
						<div className="col-sm-10 col-md-12">
							<input required ref={nameRef} type="text" className="form-control" placeholder="Food Name" />
						</div>
					</div>

					<div className="row mb-3">
						<div className="col-sm-10 col-md-12">
							<textarea required ref={descriptionRef} rows="5" className="w-100 form-control" placeholder="Description"></textarea>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<input required ref={priceRef} type="number" className="form-control" placeholder="Price" />
						</div>

						<div className="col">
							<input required ref={imageRef} type="url" className="form-control" placeholder="Image URL" />
						</div>
					</div>


					<button type="submit" className="btn btn-warning fw-bold my-3 py-1 w-100">Submit</button>
				</form>
			</Container>
		</div>
	);
};

export default AddNewProduct;