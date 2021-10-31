
import './App.css';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Header from './commponent/header/Header';
import Home from './pages/home/Home';
import Footer from './commponent/footer/Footer';
import Login from './pages/login/Login';
import Service from './commponent/service/Service';
import AuthProvider from './context/AuthProvider';
import PageNotFound from './pages/404page/PageNotFound';
import Travels from './pages/Travels/Travels';
import ServiceDtails from './pages/service_details/ServiceDtails';
import PrivateRoute from './commponent/PrivateRoute/PrivateRoute';
import Cart from './pages/cart/Cart';
import ManageOrder from './commponent/manageOrder/ManageOrder';

function App() {
  return (
    <AuthProvider>
    <Router>
    <Header />
    <Switch>
    <Route exact path="/">
    <Home></Home>
    </Route>
    <Route path="/home">
      <Home></Home>
    </Route>
    <Route path="/login">
    <Login></Login>
    </Route>
    <Route path="/service">
    <Service></Service>
    </Route>
    <Route path="/travels">
    <Travels></Travels>
    </Route>
    <Route path='/manageOrder'>
    <ManageOrder></ManageOrder>
    </Route>
    <PrivateRoute path="/Details/:serviceId">
    <ServiceDtails></ServiceDtails>
    </PrivateRoute>
    <PrivateRoute path="/cart">
    <Cart></Cart>
    </PrivateRoute>
    <Route>
      <PageNotFound></PageNotFound>
    </Route>
    </Switch>
    <Footer></Footer>
    </Router>
    </AuthProvider>
  );
}

export default App;
