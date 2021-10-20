
import useAuth from '../../hooks/useAuth';

const Register = () => {
    
    const {handleEmail,handlePassword,handleRegister, handleName} = useAuth();
    return (
        <div className="w-25 mx-auto mt-5">
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
             <div className="form-outline mb-4">
                <input onBlur={handleName} type="text" id="form2Example1" className="form-control" required />
                <label className="form-label" htmlFor="form2Example1">Your Name</label>
            </div>
            <div className="form-outline mb-4">
                <input onBlur={handleEmail} type="email" id="form2Example1" className="form-control" required />
                <label className="form-label" htmlFor="form2Example1">Email address</label>
            </div>
            <div className="form-outline mb-4">
                <input onBlur={handlePassword} type="password" id="form2Example2" className="form-control" required/>
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
            <input type="submit" className="btn btn-primary btn-block mb-4" value='Sign up'/> 
            <div className="text-center">
                <p>Already register? <a href="/login">Login</a></p>
                <p>or sign up with:</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-google"></i> Login with Google
                </button>
            </div>
            </form>
        </div>
    );
};

export default Register;