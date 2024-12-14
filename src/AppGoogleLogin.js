import { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";


function AppGoogleLogin(){

    const clientId = "915455048440-cr8pna9uhf1jm885t833ir187e6tqljg.apps.googleusercontent.com";
    useEffect(()=>{
        const initClient = () =>{
            gapi.client.init(
                {
                    clientId: clientId,
                    scope:""
                })
        }
        gapi.load("client:auth",initClient)
    
    },[])
    useState(()=>{
    })
    
    const onSuccess=(res) =>{
        console.log('success', res)
    }
    const onFailure=(res) =>{
        console.log('failed', res)
    }
    return(
        <GoogleLogin 
            clientId={clientId}
            buttonText="Sign in with google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    );
}
export default AppGoogleLogin;