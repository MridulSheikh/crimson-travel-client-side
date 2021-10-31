import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm} from 'react-hook-form';
import { useParams } from 'react-router';

const ServiceDtails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([])
    useEffect(()=>{
        fetch(`https://spooky-wizard-78521.herokuapp.com/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    //form
    const { register, handleSubmit, reset} = useForm();
  const onSubmit = data =>{
    axios.post("https://spooky-wizard-78521.herokuapp.com/Orders",data)
    .then(res =>{
      if(res.data.insertedId){
       alert("Wellcome now you are join our")
       reset()
    }
    })
  } 
    return (
        <div className="m-5">
        <Row>
        <Col xs={12} md={6}>
        <div>
        <div>
        <h1 className="mb-2">{service.service}</h1>
        <h3 className="mb-3">${service.price} USD</h3>
        <div>
        <img src={service.img} alt="" width="90%" />
        </div>
        </div>
        </div>
        </Col>
        <Col xs={12} md={6}>
       <div>
       <h2>{service.slogun}</h2>
       </div>
       <div className="mt-5">
       <h5><i className="far fa-calendar-alt me-3"></i>{service.duration}</h5>
       <h5><i class="fas fa-map-marker-alt me-3 text-dark mt-3"></i>{service.country} place revew</h5>
       <h5><i class="fas fa-utensils me-3 text-dark mt-3"></i>{service.meals}</h5>
       <h5><i class="fas fa-users  me-3 text-dark mt-3"></i>{service.group_size} maximum</h5>
       </div>
       <div className="mt-5">
       <h3>About this trip</h3>
       <p>{service.about}</p>
       </div>
        </Col>
      </Row>
      <Row className="mt-3">
      <Col  xs={12} md={6}>
      <div>
      <form onSubmit={handleSubmit(onSubmit)}>
             <h4 className="text-dark">your service id : {service._id}</h4>
            <input {...register("service_id")} placeholder="please copy past service Id" className='d-block w-100 mt-3 fs-5 p-2' required  />
            <input {...register("Name", { required: true, maxLength: 60 })} placeholder="name" className='d-block w-100 mt-3 fs-5 p-2' required  />
            <input {...register("phone", { required: true})} placeholder="phone number" className='d-block w-100 mt-3 fs-5 p-2' required  />
            <input {...register("address")} placeholder="address" className='d-block w-100 mt-3 fs-5 p-2' required  />
            <input type="submit"  className='d-block w-100 mt-3 py-1 border-0 bg-success text-light' />
          </form>
      </div>
      </Col>
      <Col  xs={12} md={6}>
      <div>
      <img src="https://payu.in/blog/wp-content/uploads/2019/08/Updating-address-1280x720.png" alt="" width="100%" />
      </div>
      </Col>
      </Row>
        </div>
    );
};

export default ServiceDtails;