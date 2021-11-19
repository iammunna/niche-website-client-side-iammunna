import React from 'react';
import { Col, Container, Nav, Navbar, NavDropdown, Offcanvas, Row } from 'react-bootstrap';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
	NavLink
} from "react-router-dom";
import useFirebase from '../../../hooks/useFirebase';
import AdminRoute from '../../../Private/AdminRoute';
import AddNewProduct from '../Admin/AddNewProduct/AddNewProduct';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import MyOrders from '../NormalUsers/MyOrders/MyOrders';
import Pay from '../NormalUsers/Pay/Pay';
import Review from '../NormalUsers/Review/Review';

const navLinkStyle = {
	color: 'black',
	fontSize: '18px',
	fontWeight: 700,
	fontFamily: "'Signika', sans-serif",
	textDecoration: 'none',
	display: 'block',
	margin: '20px auto'
}

const DashboardHome = () => {
	const { user, logOut, admin } = useFirebase();
	let { path, url } = useRouteMatch();

	return (
		<>
			<h1 style={{margin: '160px auto', textAlign: 'center'}}>Welcome to the Dashboard!</h1>
		</>
		// <Container fluid>
		// 	<Row>

		// 		<Navbar />

		// 		<Col xs={6} md={3} className="border">
		// 		{/* style={{minHeight: '700px', position: 'fixed'}} */}
		// 			<div>
		// 				<NavLink style={navLinkStyle} to="/">
		// 					Home
		// 				</NavLink>

		// 				<NavLink style={navLinkStyle} to={`${url}`}>
		// 					Dashboard
		// 				</NavLink>

		// 				{admin ?
		// 					<>
		// 						<NavLink style={navLinkStyle} to={`${url}/manageProducts`}>

		// 							Manage Products
		// 						</NavLink>

		// 						<NavLink style={navLinkStyle} to={`${url}/manageAllOrders`}>
		// 							Manage All Orders
		// 						</NavLink>

		// 						<NavLink style={navLinkStyle} to={`${url}/addNewProduct`}>
		// 							Add New Product
		// 						</NavLink>

		// 						<NavLink style={navLinkStyle} to={`${url}/makeAdmin`}>
		// 							Make Admin
		// 						</NavLink>

		// 					</>
		// 					:
		// 					<>
		// 						<NavLink style={navLinkStyle} to={`${url}/myOrders`}>
		// 							My Orders
		// 						</NavLink>

		// 						<NavLink style={navLinkStyle} to={`${url}/review`}>
		// 							Review
		// 						</NavLink>

		// 						<NavLink style={navLinkStyle} to={`${url}/payment`}>
		// 							Pay
		// 						</NavLink>
		// 					</>

		// 				}



		// 				{/* {user?.email &&
		// 				<div sx={{ mt: 'auto' }}>
		// 					<Divider sx={{ backgroundColor: 'white' }} />

		// 						<NavLink style={navLinkStyle} to="/login">
		// 							<ListItem button>
		// 								<ListItemIcon>
		// 									<LogoutIcon sx={iconStyle} />
		// 								</ListItemIcon>

		// 								<ListItemText onClick={logOut}>LogOut</ListItemText>
		// 							</ListItem>
		// 						</NavLink>
		// 				</div>
		// 			} */}
		// 			</div>
		// 		</Col>

		// 		<Col xs={12} md={9}>
		// 			<Switch>

		// 				<Route exact path={path}>
		// 					<DashboardHome />
		// 				</Route>

		// 				<AdminRoute path={`${path}/manageProducts`}>
		// 					<ManageProducts />
		// 				</AdminRoute>

		// 				<AdminRoute path={`${path}/manageAllOrders`}>
		// 					<ManageAllOrders />
		// 				</AdminRoute>

		// 				<AdminRoute path={`${path}/addNewProduct`}>
		// 					<AddNewProduct />
		// 				</AdminRoute>

		// 				<AdminRoute path={`${path}/makeAdmin`}>
		// 					<MakeAdmin />
		// 				</AdminRoute>

		// 				<Route path={`${path}/myOrders`}>
		// 					<MyOrders />
		// 				</Route>

		// 				<Route path={`${path}/review`}>
		// 					<Review />
		// 				</Route>

		// 				<Route path={`${path}/payment`}>
		// 					<Pay />
		// 				</Route>

		// 			</Switch>
		// 		</Col>

		// 	</Row>
		// </Container>
	);
};

export default DashboardHome;