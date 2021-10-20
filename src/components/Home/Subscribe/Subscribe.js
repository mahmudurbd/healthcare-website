import React from 'react';
import './Subscribe.css';
const Subscribe = () => {
    return (
        <section class="subscribe-block text-white">
            <div class="container">
            <div class="fdb-box">
                <div class="row justify-content-center align-items-center">
                <div class="col-12 col-lg-6">
                    <h2>STAY IN TOUCH WITH LIFECARE</h2>
                    <p class="lead">Our newsletter is where we share updates, supportive resources, and expert insights from our team and community.</p>
                </div>
                <div class="col-12 col-lg-5 text-center">
                    <div class="input-group mt-4">
                    <input type="text" class="form-control" placeholder="Enter your email address"/>
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">Submit</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </section>   
    );
};

export default Subscribe;