import React from 'react';
import './Banner.css';
const Banner = () => {
    
    return (
        <div className="banner-container">
            <div className="banner-area">
                <div className="banner-text">
                        <h1 className="fw-bolder">LEADERS IN <br/> PHYSIOTHERAPY <br/> AND SPORTS <br/> MEDICINE</h1>
                        <h5 className="text-light fw-bolder">FIND YOUR LOCAL CLINIC</h5>
                        <form class="input-group mt-4 mb-4">
                            <input type="text" class="form-control" placeholder="Enter your postcode here"/>
                            <div class="input-group-append">
                                <button class="btn" type="button"><i class="fas fa-angle-right"></i></button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
        
        
    );
};

export default Banner;