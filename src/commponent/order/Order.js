import React from 'react';

const Order = (props) => {
    const {service_id, Name,phone, address} = props.order;
    //delete 
   const handleDelete = id =>{
    fetch(`https://spooky-wizard-78521.herokuapp.com/Orders/${id}`,{
      method : "DELETE"
    })
    .then(res => res.json())
    .then(data =>{
      if(data.deletedcount > 0){
        alert('deleted successfully')
      }
    })
  }
    return (
        <div className="row text-center mb-2 border bg-success text-light py-3">
        <div className="col">
          <h4>{Name}</h4>
        </div>
        <div className="col">
          <h6>{service_id}</h6>
        </div>
        <div className="col">
          <h4>{phone}</h4>
        </div>
        <div className="col">
         <h4>{address}</h4>
        </div>
        <div className="col">
        <button className="fs-5" onClick={()=>handleDelete(service_id)}><i className="fas fa-minus-circle text-danger"></i></button>
        </div>
      </div>
    );
};

export default Order;