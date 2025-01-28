import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


export default function Protected({children, authentication=true}) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        //the code below assumes that authentication variable's value will be true and then,
        //      you can check if the status of user's auth is supposed to not be authenticated so then he will be redirected to login page
        // Again if the authentication variable's value is false then, you can check if the user is supposed to be authenticated,
        //      so then we can go ahead an redirect the user to the home page

        // The authentication value that we get from it's parent component is prominently used from main.jsx file, is used to determine,
        //      if the page we are moving to needs authentication or not, 
        // Then the authStatus is basically trying to determine
        //      whether the user's authentication is suitable in the page w.r.t the authentication variable

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }

        //let authValue = authStatus === true ? true : false;
        if(authentication && authStatus !== authentication){
            navigate("/login");
        } else if(!authentication && authStatus !== authentication){
            navigate("/");
        }
        setLoader(false);
    },[authStatus,navigate,authentication])
  return loader ? <div>Loading...</div> : <>{children}</>;
}
