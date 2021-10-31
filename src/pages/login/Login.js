import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from "./../../utilities/giuseppe-mondi-fJWYwHWYQpY-unsplash.jpg";
import "./login.css"
const Login = () => {
    const {handlelogin} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
          handlelogin()
          .then(result => {
              history.push(redirect_uri);
          })
  }
    return (
        <div className='d-flex justify-content-center aling-items-center body'>
        <Row className="rows">
        <Col sm={5} className="hidden">
        <img src={img} alt="" width="100%" className="login-img" />
        </Col>
        <Col sm={7}  className="box">
        <div className='d-flex justify-content-center aling-items-center'>
        <div>
        <h1> <span  className="text-primary">wellcome to</span> Crimson Travel</h1>
        <p>As more states ease their indoor dining restrictions and the CDC has given the all-clear (for the most part) to the fully vaccinated for both traveling and small gatherings, restaurants are starting to feel alive again.</p>
        <hr />
        <button className="login-btn" onClick={handleGoogleLogin}><i className="fab fa-google-plus-g me-2"></i>Continue With Google</button>
        <div className="mt-3">
        <span>This app develop By <a href="https://www.facebook.com/mridul.sheikh.961/" target="_blank">Rx Nazir</a></span>
        </div>
        </div>
        </div>
        </Col>
      </Row>
        </div>
    );
};

export default Login;