import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div class="container py-5">
            <div class="row align-items-top text-center">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 text-sm-left">
                <h3><strong>Links</strong></h3>
                <nav class="nav flex-column">
                <a class="nav-link active" href="https://www.froala.com">Home</a>
                <a class="nav-link" href="https://www.froala.com">Features</a>
                <a class="nav-link" href="https://www.froala.com">Pricing</a>
                <a class="nav-link" href="https://www.froala.com">Team</a>
                <a class="nav-link" href="https://www.froala.com">Contact Us</a>
                </nav>
            </div>

            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left">
                <h3><strong>Services</strong></h3>
                <nav class="nav flex-column">
                <a class="nav-link active" href="https://www.froala.com">Privacy Policy</a>
                <a class="nav-link" href="https://www.froala.com">Terms</a>
                <a class="nav-link" href="https://www.froala.com">FAQ</a>
                <a class="nav-link" href="https://www.froala.com">Support</a>
                </nav>
            </div>

            <div class="col-12 col-md-4 col-lg-3 text-md-left mt-5 mt-md-0">
                <h3><strong>About Us</strong></h3>
                <p>We have more than 30 practices and 300 allied health professionals across the country. Whether you’re an elite athlete or hoping to alleviate every day pain, we can support each step of your journey towards improved and injury-free movement.</p>
            </div>

            <div class="col-12 col-lg-2 ml-auto text-lg-left mt-4 mt-lg-0">
                <h3><strong>Follow Us</strong></h3>
                <p class="lead">
                <Link to="/" class="mx-2"><i class="fab fa-twitter" aria-hidden="true"></i></Link>
                <Link to="/" class="mx-2"><i class="fab fa-facebook" aria-hidden="true"></i></Link>
                <Link to="/" class="mx-2"><i class="fab fa-instagram" aria-hidden="true"></i></Link>
                <Link to="/" class="mx-2"><i class="fab fa-pinterest" aria-hidden="true"></i></Link>
                <Link to="/" class="mx-2"><i class="fab fa-google" aria-hidden="true"></i></Link>
                </p>
            </div>
            </div>

            <div class="row mt-3">
            <div class="col text-center">
                © 2021 LifeCare. All Rights Reserved
            </div>
            </div>
        </div>
    );
};

export default Footer;