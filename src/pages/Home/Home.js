
import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../media/slider1.jpg'
import slider2 from '../../media/slider2.jpg'
import slider3 from '../../media/slider3.jpg'
import slider4 from '../../media/slider4.jpg'
import Products from '../../pages/Products/Products'
import AboutUs from '../AboutUs/AboutUs';

import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider4}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <Products />

            <AboutUs />

            <Testimonials />


        </div>
    );
};

export default Home;