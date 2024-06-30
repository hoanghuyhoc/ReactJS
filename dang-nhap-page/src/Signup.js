import React, { useState } from "react";
import * as ExternalLoginButton from "./components/ExternalLoginButton.js";
import Textbox from "./components/Textbox";
import RadioButton from "./components/RadioButton.js";
import Dropdown from "./components/Dropdown.js";
import {ReactComponent as Recaptcha} from "./recaptcha.svg";
import {ReactComponent as VDivider} from "./VDivider.svg";
import grayimg from "./gray.png";


export default function Signup(){
    const [date, setDate] = useState(1);
    const [month, setMonth] = useState('January');
    const [year, setYear] = useState(2024);
    const [gender, setGender] = useState('');
    
    const dates = Array.from({length: 31}, (_, i) => i + 1);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const years = Array.from({ length: new Date().getFullYear() - 1899 }, (_, i) => 1900 + i);
    
    function handleDateChange(value) {
        setDate(value);
    }
    function handleMonthChange(value) {
        setMonth(value);
    }
    function handleYearChange(value) {
        setYear(value);
    }
    
    function handleGenderChange(value) {
        console.log(value);
        setGender(value);
    }
    return (
        <div className="flex justify-center w-full py-14">
            <div className="flex flex-col items-center justify-center gap-12 w-fit h-fit">
                <div className="flex flex-col items-center gap-2 justify-normal w-fit h-fit">
                    <img src={grayimg} alt="Logo" className="h-full rounded-full"/>
                    <label className="justify-center font-medium align-middle" style={{font: 'Poppins', fontSize: '32px'}}>
                        Sign up for free to start live-streaming
                    </label>
                </div>
                <div className="flex flex-col w-full gap-4 h-fit" style={{paddingLeft: '10%', paddingRight: '10%'}}>
                    <ExternalLoginButton.FacebookButton label="Sign up with Facebook"/>
                    <ExternalLoginButton.GoogleButton label="Sign up with Google"/>
                    <ExternalLoginButton.TwitterButton label="Sign up with Twitter"/>
                </div>
                <div className="flex flex-col items-center justify-center gap-10" style={{width: '95%'}}>
                    <label className="font-medium w-fit h-fit" style={{font:'Poppins', fontSize: '18px'}}>
                        Sign up with your email address
                    </label>
                    <div id="BasicInfo" className="flex flex-col items-start justify-start gap-6 h-fit"
                    style={{width: '98%'}}>
                        <Textbox label="Profile name" type="text" placeholder="Enter your profile name"/>
                        <Textbox label="Email" type="email" placeholder="Enter your email address"/>
                        <div className="flex flex-col items-start w-full h-fit">
                            <Textbox label="Password" type="password" placeholder="Enter your password"/>
                            <label className="font-normal text-gray-500" style={{font: 'Poppins', fontSize: '14px'}}>
                                Use 8 or more characters with a mix of letters, numbers & symbols
                            </label>
                        </div>
                    </div>
                    <div id="PersonalInfo" className="flex flex-col items-start justify-start gap-8 font-normal text-gray-900 h-fit"
                    style={{font: 'Poppins', fontSize: '16px', width: '98%'}}>
                        <div id="Gender" className="flex flex-col items-start justify-start w-full gap-3">
                            <label className="font-normal text-gray-900" 
                            style={{font: 'Poppins', fontSize:'16px'}}
                            >What's your gender? <span className="text-gray-500">(optional)</span></label>
                            <div className="flex flex-row items-start justify-start gap-8 w-fit h-fit">
                                <RadioButton className="text-gray-900" groupName="Gender" value="Female" handleChange={handleGenderChange} state={gender}/>
                                <RadioButton className="text-gray-900" groupName="Gender" value="Male" handleChange={handleGenderChange} state={gender}/>
                                <RadioButton className="text-gray-900" groupName="Gender" value="Non-binary" handleChange={handleGenderChange} state={gender}/>
                            </div>
                        </div>
                        <div id="Birthday" className="flex flex-col items-start justify-start w-full gap-3">
                            <label className="font-normal text-gray-900" 
                            style={{font: 'Poppins', fontSize:'16px'}}
                            >What's your date of birth?</label>
                            <div className="flex flex-row items-start w-full gap-5 justify-evenly h-fit">
                                <Dropdown label="Month" onChange={handleMonthChange} optionlist={months} />
                                <Dropdown label="Date" onChange={handleDateChange} optionlist={dates} />
                                <Dropdown label="Year" onChange={handleYearChange} optionlist={years} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-6 w-fit h-fit">
                        <div className="flex flex-row items-start justify-start gap-2 py-2 pr-2 w-fit h-fit" >
                            <input type="checkbox" className="w-6 h-6"/>
                            <label className="font-normal text-gray-900 w-fit h-fit" style={{font: 'Poppins', fontSize: '16px'}}>
                                Share my registration data with our content providers for 
                                marketing purposes.
                            </label>
                        </div>
                        <div className="flex flex-row items-start justify-start py-2 pr-2 w-fit h-fit" style={{gap: '10px'}}>
                            <label className="font-normal text-gray-900 w-fit h-fit" style={{font: 'Poppins', fontSize: '16px'}}>
                                By creating an account, you agree to the <span className="text-gray-900 underline">Terms of use</span> and <span className="text-gray-900 underline">Privacy Policy</span>. 
                            </label>
                        </div>
                        <div className="flex flex-row items-center justify-between px-6 border border-gray-700" style={{width: '363px', height: '68px', borderRadius: '18px'}}>
                            <div className="flex flex-row items-center justify-center gap-2 w-fit h-fit">
                                <input type="checkbox" style={{width: '18px', height: '18px'}}/>
                                <label className="font-normal text-gray-700 w-fit h-fit" style={{font: 'Poppins', fontSize: '16px'}}>
                                    I'm not a robot
                                </label>
                            </div>
                            <Recaptcha/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 w-fit h-fit" style={{font: 'Poppins'}}>
                        <button type="button" className="items-center bg-gray-400 rounded-full" style={{width: '578px', height: '64px'}}>
                            <span className="font-medium text-white text" style={{font: 'Poppins', fontSize: '22px'}}>Sign up</span>
                        </button>
                        <label style={{font: 'Poppins'}}>
                            Already have an account? <a href="/"><span className="text-gray-900 underline">Log in</span></a>
                        </label>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-6 w-fit h-fit">
                    <VDivider/>
                    <label className="text-2xl">OR</label>
                    <VDivider/>
                </div>
            </div>
        </div>
    )
}