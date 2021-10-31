import React, { useEffect, useState } from 'react';
import Order from '../order/Order';

const ManageOrder = () => {
    const [order, setOrder] = useState([]);
    useEffect(()=>{
        fetch('https://spooky-wizard-78521.herokuapp.com/Orders')
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])
    return (
        <div>
        <div className="row text-center border bg-warning text-light py-3">
        <div className="col">
          name
        </div>
        <div className="col">
         order id
        </div>
        <div className="col">
          number
        </div>
        <div className="col">
          address
        </div>
        <div className="col">
         status
        </div>
      </div>
            {
                order.map(or => <Order
                    key = {or._id}
                    order = {or}
                    >
                </Order> )
            }
        </div>
    );
};

export default ManageOrder;