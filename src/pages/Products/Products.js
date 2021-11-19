import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Spinner } from 'react-bootstrap';



const ServiceDetails = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .finally(()=> setIsLoading(true));
    }, []);

    if (!isLoading) {
		return <Spinner className="d-block" style={{ margin: '140px auto' }} animation="grow" variant="danger" />
	}

    return (

        <div className="container my-5 py-5">

            <h2 className="h1 text-center mb-3 fw-bold text-success">Our Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    />).slice(0, 6)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;

