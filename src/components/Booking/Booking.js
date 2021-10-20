import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    const [totalData,setTotalData] = useState([]);

    useEffect(() => {
        fetch('/lifecare.json')
        .then(res => res.json())
        .then(data => setTotalData(data));
    },[]);

    const bookingItem = totalData.find(item => item.id == serviceId);
    console.log(bookingItem);
    
    return (
        <div>
            <h2>{bookingItem?.service_name}</h2>
            <img src={bookingItem?.image} alt="" />
        </div>
    );
};

export default Booking;