
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';


const Header = () => {

    const { user, logOut, admin } = useFirebase();

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="border-bottom" fixed="top" >
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Navbar.Brand as={Link} to="/" className="fw-bold h4">
                        <span className="theme-secondary-text">Kedara</span>
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                        {
                            user?.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        }

                    </Nav>

                    <Nav className="ms-auto h4">


                        {!user?.email ?
                            <>
                                <Nav.Link as={Link} to="/login"><button className="btn">Login</button></Nav.Link>

                                <Nav.Link as={Link} to="/signUp"><button className="btn">Sign Up</button></Nav.Link>
                            </>

                            //Show this part if a user Logged In
                            : <NavDropdown className="theme-secondary-text" title={user?.displayName} id="navbarScrollingDropdown">

                                <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
                                <NavDropdown.Divider />

                                {admin ?
                                    <>

                                        <NavDropdown.Item as={Link} to="/addNewService">Add New Service</NavDropdown.Item>
                                        <NavDropdown.Divider />

                                        <NavDropdown.Item as={Link} to="/manageAllOrders">Manage All Orders</NavDropdown.Item>
                                        <NavDropdown.Divider />

                                        <NavDropdown.Item as={Link} to="/makeAdmin">Make Admin</NavDropdown.Item>
                                        <NavDropdown.Divider />

                                        <NavDropdown.Item as={Link} to="/manageProducts">Manage Products</NavDropdown.Item>
                                        <NavDropdown.Divider />

                                    </>
                                    :
                                    <>

                                        <NavDropdown.Item as={Link} to="/myOrders">My Orders</NavDropdown.Item>
                                        <NavDropdown.Divider />

                                        <NavDropdown.Item as={Link} to="/review">review</NavDropdown.Item>
                                        <NavDropdown.Divider />

                                        <NavDropdown.Item as={Link} to="/pay">Pay</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </>
                                }

                                <button className="btn w-100 p-0 bg-info" onClick={logOut}>
                                    <NavDropdown.Item>LogOut</NavDropdown.Item>
                                </button>

                            </NavDropdown>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;