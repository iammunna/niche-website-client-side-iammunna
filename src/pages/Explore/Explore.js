import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch("https://young-taiga-91449.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .finally(()=> setIsLoading(true));
    }, []);

    if (!isLoading) {
		return <Spinner className="d-block" style={{ margin: '140px auto' }} animation="grow" variant="danger" />
	}

    return (

        <div className="container my-5 py-5">

            <h2 className="h1 text-center fw-bold text-success my-5">Explore the Best Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
}
export default Explore;