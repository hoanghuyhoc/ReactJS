import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Textbox from "./components/Textbox.js";
import * as ExternalLoginButton from "./components/ExternalLoginButton.js";
import {ReactComponent as Divider} from "./Divider.svg";
import grayimg from "./gray.png";

export default function Login() {
    const [email, setEmail] = useState("");
    function onChangeEmail(value){
        setEmail(value);
    }
    
    const [password, setPassword] = useState("");
    function onChangePassword(value){
        setPassword(value);
    }

    const [emailerror, setEmailerror] = useState("");
    function onChangeEmailerror(value){
        setEmailerror(value);
    }
    
    const [passworderror, setPassworderror] = useState("");
    function onChangePassworderror(value){
        setPassworderror(value);
    }

    const [loginerror, setLoginerror] = useState("");
    function onChangeLoginerror(value){
        setLoginerror(value);
    }
    const navigate = useNavigate();

    function login(){
        onChangeEmailerror("");
        onChangePassworderror("");
        onChangeLoginerror("");
        if (email == ""){
            onChangeEmailerror("Email required");
            onChangePassword("");
            return;
        }
        if (password == ""){
            onChangePassworderror("Password required");
            return;
        }
        fetch('./data.json')
            .then(response => response.json())
            .then(data => {check(data);})
            
        const check = (logindata) => {
            if (logindata.email != email || logindata.password != password){
                onChangeLoginerror("Incorrect email or password");
                onChangePassword("");
            }
            else {
                navigate('/Home');
            }
        };
        
    }
    
    return (
        <div className="flex flex-col w-full">
            <Navbar/>
            <div className="flex items-center justify-around w-full">
                <div className="flex flex-col items-center gap-10 m-10 h-fit w-fit">
                    <div className="flex flex-col items-center justify-end gap-4 w-fit h-fit">
                        <img src={grayimg} alt="Logo" className="h-full rounded-full"/>
                        <label className="justify-center text-4xl font-medium align-middle">Log in</label>
                    </div>
                    <div className="flex flex-row w-fit h-fit">
                        <div className="flex items-center justify-around" style={{width:'482px', height: '451px'}}> 
                            <div className="flex flex-col items-center gap-6 h-fit" style={{width: '354px'}}>
                                <label className="text-2xl font-medium w-fit h-fit">Log in</label>
                                <Textbox label="Email address" type="email" onChangeHandler={onChangeEmail} error={emailerror} valueState={email}/>
                                <Textbox label="Password" type="password" onChangeHandler={onChangePassword} error={passworderror} valueState={password} />
                                {
                                    (loginerror != "") ? (
                                        <label className="w-full text-red-500">{loginerror}</label>
                                    ) : null
                                }
                                <button type="button" className="w-full bg-gray-400 rounded-full h-14" onClick={login} >
                                    <span className="font-medium text-white" style={{fontSize:'22px', font: 'Poppins'}}>Log in</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-6 h-fit w-fit">
                            <Divider />
                            <label className="text-base">OR</label>
                            <Divider />
                        </div>
                        <div className="flex items-center justify-center" style={{width: '482px', height: '451px'}}>
                            <div className="flex flex-col gap-6 w-fit">
                                <ExternalLoginButton.GoogleButton label="Continue with Google"/>
                                <ExternalLoginButton.FacebookButton label="Continue with Facebook"/>
                                <ExternalLoginButton.EmailButton label="Sign up with email"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6 w-fit h-fit">
                        <span className="text-base font-medium underline">Can't log in?</span>
                        <span className="text-center text-gray-500">
                            Secure Login with reCAPTCHA subject to<br/>
                            Google <span className="text-black underline">Terms</span> & <span className="text-black underline">Privacy</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>        
    )
}