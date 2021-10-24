import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { name, price, description, img,_id } = service;
    return (
        <div  className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <div className="mb-3">
           <Link to={`/addToBook/${_id}`} > <button className="btn btn-primary">add to book</button></Link>

            </div>
        </div>
    );
};

export default Service;