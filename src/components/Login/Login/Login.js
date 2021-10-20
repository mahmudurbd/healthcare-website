import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle,loginProcess} = useAuth();

    const [loginEmail, setLoginEmail] = useState(''); 
    const [loginPassword, setLoginPassword] = useState(''); 

    const getLoginEmail = (e) => {
        setLoginEmail(e.target.value);
    }
    const getLoginPassword = (e) => {
        setLoginPassword(e.target.value);
    }

    const handleSubmission = e => {
        e.preventDefault();
         loginProcess(loginEmail,loginPassword);
        console.log(loginEmail);
        console.log(loginPassword);
    }
    return (
        <div className="w-25 mx-auto mt-5">
            <h2>Please Login</h2>
            <form onSubmit={handleSubmission}>
            <div className="form-outline mb-4">
                <input onBlur={getLoginEmail} type="email" id="form2Example1" className="form-control" required/>
                <label className="form-label" htmlFor="form2Example1">Email address</label>
            </div>
            <div className="form-outline mb-4">
                <input onBlur={getLoginPassword} type="password" id="form2Example2" className="form-control" required/>
                <label className="form-label" htmlFor="form2Example2">Password</label>
            </div>
            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                <div className="form-check">
                    <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example34"
                    
                    />
                    <label className="form-check-label" htmlFor="form2Example34"> Remember me </label>
                </div>
                </div>
                <div className="col">
                <a href="#!">Forgot password?</a>
                </div>
            </div>
            <input  type="submit" className="btn btn-primary btn-block mb-4"value="Login"/> 
            <div className="text-center">
                <p>Not a member? <a href="/register">Register</a></p>
                <p>or sign up with:</p>
                <button onClick={signInUsingGoogle} type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-google"></i> Login with Google
                </button>
            </div>
            </form>
        </div>
    );
};

export default Login;