import { faStoreAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div id="about">
            <Container>
                <h1 className="text-center mt-5">About Us </h1>

                <div className="text-left d-flex">
                    <div className="m-5">
                        <h2 className="text-info">Our Product Quality</h2>
                        <p>
                            Kedara is an online chir and grocery delivery platform brand owned by Delivery Hero, which is headquartered in Berlin, Germany. Today, Kedara operates as the lead brand for Delivery Hero in Asia.
                        </p>

                        <ListGroup as="ul">
                            <ListGroup.Item as="li" className="my-2">Headquartered Kedara is an online food</ListGroup.Item>
                            <ListGroup.Item as="li" className="my-2">Cras justo odio justo odio</ListGroup.Item>
                            <ListGroup.Item as="li" className="my-2">Kedara is an Cras justo odio</ListGroup.Item>
                        </ListGroup>
                    </div>

                    <div className="m-5">
                        <h2 className="text-info">Why we are the best</h2>
                        <p>
                            Headquartered Kedara is an online food and grocery delivery platform brand owned by Delivery Hero, which is headquartered in Berlin, Germany. Today, Kedara operates as the lead brand for Delivery Hero in Asia.
                        </p>

                        <ListGroup as="ul">
                            <ListGroup.Item as="li" className="my-2">Headquartered Kedara is an online food</ListGroup.Item>
                            <ListGroup.Item as="li" className="my-2">Cras justo odio justo odio</ListGroup.Item>
                            <ListGroup.Item as="li" className="my-2">Kedara is an Cras justo odio</ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutUs;