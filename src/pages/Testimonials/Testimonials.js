import React, { useEffect, useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Testimonials = () => {

	return (
		<div className="bg-info my-5 py-5">
			<Container className="text-center">
				<h1 className="border-bottom pb-2">Testimonials</h1>
				<Carousel variant="dark" style={{ height: '300px' }} className="">

					<Carousel.Item style={{ height: '300px' }}>

						<Carousel.Caption>
							<h5>Shakib Al Hasan</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							<h5>Rating: 5</h5>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item style={{ height: '300px' }}>

						<Carousel.Caption>
							<h5>Virat Kohli</h5>
							<p>Interdum Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis.</p>
							<h5>Rating: 3</h5>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item style={{ height: '300px' }}>

						<Carousel.Caption>
							<h5>Chris Gayle</h5>
							<p>Pharetra Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							<h5>Rating: 4</h5>
						</Carousel.Caption>
					</Carousel.Item>


				</Carousel>
			</Container>
		</div>
	);
};

export default Testimonials;