import React from "react";
import Navbar from "./components/Navbar.js";
import Textbox from "./components/Textbox.js";
import * as ExternalLoginButton from "./components/ExternalLoginButton.js";
import {ReactComponent as Divider} from "./Divider.svg";

export default function Login() {
    return (
        <div className="flex flex-col w-full">
            <Navbar/>
            <div className="items-center flex-grow w-full">
                <div className="flex flex-col items-center gap-10 h-fit w-fit">
                    <div className="flex flex-col items-center justify-end gap-4 w-fit h-fit">
                        <img src="./gray.png" alt="Logo" className="h-full rounded-full"/>
                        <label className="justify-center text-4xl font-medium align-middle">Log in</label>"
                    </div>
                    <div className="flex flex-row w-fit h-fit">
                        <div className="items-center"> 
                            <div className="flex flex-col items-center gap-6 w-fit h-fit">
                                <label className="text-2xl font-medium w-fit h-fit">Log in</label>
                                <Textbox label="Email address" type="email" />
                                <Textbox label="Password" type="password" />
                                <button type="button" className="w-full bg-gray-400 rounded-full h-fit">
                                    <span className="font-medium text-white" style={{fontSize:'22px', font: 'Poppins'}}>Log in</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-6 h-fit w-fit">
                            <Divider />
                            <span>OR</span>
                            <Divider />
                        </div>
                        <div className="items-center">
                            <div className="flex flex-col gap-6">
                                <ExternalLoginButton.GoogleButton/>
                                <ExternalLoginButton.FacebookButton/>
                                <ExternalLoginButton.EmailButton/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 w-fit h-fit">
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