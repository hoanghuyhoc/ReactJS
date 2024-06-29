import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex flex-row m-1">
            <div className="flex flex-row flex-grow">
                <BackButton />
            </div>
            <div className="flex flex-row-reverse flex-grow">
                <CreateAnAccount />
            </div>
            
        </nav>
    )
}

function BackButton(props){
    const navigate = useNavigate();
    return (
        <button className={`border-none w-fit h-fit ${props.className}`} onClick={navigate(-1)} >&larr; Back</button>
    )
}
function CreateAnAccount(props){
    const navigate = useNavigate();
    return (
        <button className={`border-none w-fit h-fit ${props.className}`} onClick={navigate('/dang-ky')}>Create an account</button>
    )
}