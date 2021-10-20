
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () =>{
    const [name,setName] = useState('');
    const [error,setError] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    //const [isLogin,setIsLogin] = useState(false);
    const auth = getAuth();

    // Google Sign In
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false));
    }

    // state change observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged (auth,(user) =>{
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    },[])

    // Sign out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .finally(() => setIsLoading(false));
    }



    // handle email
    const handleEmail = e => {
        setEmail(e.target.value);
    }

    // handle password
    const handlePassword = e => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    // handle name
    const handleName = e => {
        setName(e.target.value);
    }

    // register
    const handleRegister = e => {
        console.log(email,password);
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const test = result.user
            console.log(test);
            setUserName();
        })
        e.preventDefault();
    }

    // process login
    const loginProcess = (email,password) => {
        
        signInWithEmailAndPassword (auth,email,password)
        .then(result => {
            const logger = result.user
            console.log(logger);
        })
        .catch(error=> {
            
        })
       
    }

    // Toggle login 
    /* const toggleLogin = e => {
        setIsLogin(e.target.checked);
    } */

    // set user name
    const setUserName = () => {
        updateProfile (auth.currentUser, {displayName: name})
        .then(result => { })
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        handleEmail,
        handlePassword,
        handleRegister,
        loginProcess,

        error,
        handleName
    }
}
export default useFirebase;