import React from 'react';
import { Card, Button, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ServiceData = (props) => {
    const { _id, name, img, description } = props.product;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top w-100 " style={{ height: "200px" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>

                    <Link to={`/placeOrder/${_id}`}>
                        <Button variant="outline-success border-2">Buy Now</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceData;