import React from 'react';
import helpImage from '../../../img/help-image.jpg';
import './Help.css';
const Help = () => {
    return (
            <div class="container">
                <div class="row align-items-center">
                <div class="col-md-6 m-auto col-lg-6 pb-4 pb-md-0">
                    <img alt="" class="img-fluid" src={helpImage}/>
                </div>
                <div class="col-md-6 col-lg-6 mt-3">
                    <h1 className="text-start ms-4">GET BETTER, FEEL BETTER AND STAY BETTER.</h1>
                    <p className="lead text-start ms-4">Movement matters when it comes to enjoying life. Whether it's improving it, maintaining it or optimising it, our team of leading physiotherapists and allied health professionals have the expertise to guide your exercise or recovery goals.</p>
                    <p><a class="help-btn btn mt-4 mb-5 mb-md-0 text-light fw-bolder" href="https://www.lifecare.com.au/resources/">FIND OUT MORE <i class="fas fa-angle-right"></i></a></p>
                </div>
                </div>
            </div>
    );
};

export default Help;