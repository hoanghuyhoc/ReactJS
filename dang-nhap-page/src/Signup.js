import React from "react";
import * as ExternalLoginButton from "./components/ExternalLoginButton.js";
import Textbox from "./components/Textbox";

export default function Signup(){
    return (
        <div className="items-center w-full">
            <div className="flex flex-col items-center justify-center gap-12 w-fit h-fit">
                <div className="flex flex-col items-start justify-start gap-2 w-fit h-fit">
                    <img src="./gray.png" alt="Logo" className="h-full rounded-full"/>
                    <label className="justify-center font-medium align-middle" style={{font: 'Poppins', fontSize: '32px'}}>
                        Sign up for free to start live-streaming
                    </label>"
                </div>
                <div className="flex flex-col items-start justify-start gap-4 w-fit h-fit">
                    <ExternalLoginButton.FacebookButton label="Sign up with Facebook"/>
                    <ExternalLoginButton.GoogleButton label="Sign up with Google"/>
                    <ExternalLoginButton.TwitterButton label="Sign up with Twitter"/>
                </div>
                <div className="flex flex-col items-center justify-center gap-10">
                    <label className="font-medium w-fit h-fit" style={{font:'Poppins', fontSize: '18px'}}>
                        Sign up with your email address
                    </label>
                    <div id="BasicInfo" className="flex flex-col items-start justify-start gap-6 w-fit h-fit">
                        <Textbox label="Profile name" type="text" placeholder="Enter your profile name"/>
                        <Textbox label="Email" type="email" placeholder="Enter your email address"/>
                        <div className="flex flex-col items-start h-fit">
                            <Textbox label="Password" type="password" placeholder="Enter your password"/>
                            <label className="font-normal text-gray-500" style={{font: 'Poppins', fontSize: '14px'}}>
                                Use 8 or more characters with a mix of letters, numbers & symbols
                            </label>
                        </div>
                    </div>
                    <div id="PersonalInfo" className="flex flex-col items-start justify-start gap-8 font-normal text-gray-900 w-fit h-fit"
                    style={{font: 'Poppins', fontSize: '16px'}}>
                        <div id="Gender" className="flex flex-col items-start justify-start gap-3">
                            <label className="font-normal text-gray-900" 
                            style={{font: 'Poppins', fontSize:'16px'}}
                            >What's your gender? <span className="text-gray-500">(optional)</span></label>
                            <div className="flex flex-row items-start justify-start w-fit h-fit gap-8">
                                <
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}