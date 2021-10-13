import React from 'react';
import useFirebase from './../../firebase/useFirebase';
import './Login.css'
import login from '../../images/login.jpg'

const Login = () => {

    const {singinWithgoogle}=useFirebase();
    return (
        <div className=" mt-5">
            <div  className="row">
            
            <div
             className="col-md-5">
                <img style={{height:"400px"}} src={login} alt="" srcset="" />
            </div>
            <div className="col-md-7 roww">
            <h2>Please login </h2>
                <br />
                
                <input type="text" value="Your Name" />
                <br /><br />
                <input type="text" value="Your Name" />
                <br /><br />
                <input type="text" value="Your Name" />
                <br /><br />
                <input type="date" name="date of Birth" id="" />
                <br /><br />
                <input className="btn w-25 bg-info rounded-3" onClick={singinWithgoogle} type="button" value="Sing In with Google" />
               
            </div>
            
            

        

        </div>
        </div>
    );
};

export default Login;