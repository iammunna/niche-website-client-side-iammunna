import './App.css';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ManageAllOrders from './pages/Dashboard/Admin/ManageAllOrders/ManageAllOrders';
import AddNewProduct from './pages/Dashboard/Admin/AddNewProduct/AddNewProduct';
import PlaceOrder from './pages/PrivatePages/PlaceOrder/PlaceOrder';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';
import MyOrders from './pages/Dashboard/NormalUsers/MyOrders/MyOrders';
import Signup from './pages/Signup/Signup'
import MakeAdmin from './pages/Dashboard/Admin/MakeAdmin/MakeAdmin';
import ManageProducts from './pages/Dashboard/Admin/ManageProducts/ManageProducts';
import Review from './pages/Dashboard/NormalUsers/Review/Review';
import Pay from './pages/Dashboard/NormalUsers/Pay/Pay';
import Login from './pages/Login/Login';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import Explore from './pages/Explore/Explore';
import NotFound from './pages/NotFound/NotFound';



function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/signUp">
              <Signup />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/explore">
              <Explore />
            </Route>

            <PrivateRoute path="/dashboard">
              <DashboardHome />
            </PrivateRoute>

            <PrivateRoute path="/addNewService">
              <AddNewProduct />
            </PrivateRoute>


            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders />
            </PrivateRoute>

            <PrivateRoute path="/myOrders">
              <MyOrders />
            </PrivateRoute>

            <PrivateRoute path="/makeAdmin">
              <MakeAdmin />
            </PrivateRoute>

            <PrivateRoute path="/manageProducts">
              <ManageProducts />
            </PrivateRoute>

            <PrivateRoute path="/review">
              <Review />
            </PrivateRoute>

            <PrivateRoute path="/pay">
              <Pay />
            </PrivateRoute>

            <PrivateRoute path="/placeOrder/:productId">
              <PlaceOrder />
            </PrivateRoute>
            
            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
          <Footer></Footer>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
