import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const {id,service_name,description,image} = props.service
    return (
        <div class="col">
            <div class="card h-100">
                <img
                    src={image}
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title">{service_name}</h5>
                    <p class="card-text">{description}</p>
                    <Link to={`/booking/${id}`}>
                        <button className="service-btn btn">Take Service <i class="fas fa-prescription-bottle-alt"></i></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;