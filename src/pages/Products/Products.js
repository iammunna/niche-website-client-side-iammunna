import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Button, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



const ServiceDetails = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch("https://young-taiga-91449.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .finally(() => setIsLoading(true));
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

            <NavLink style={{textDecoration: 'none'}} to="/explore">
                <Button  className="btn btn-danger d-block mx-auto px-5 my-4" >See All</Button>
            </NavLink>
        </div>
    );
};

export default ServiceDetails;

