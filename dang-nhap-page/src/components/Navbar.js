import React from "react";

export default function Navbar() {
    return (
        <nav className="flex flex-row p-4 border-black" style={{borderBottomWidth: '1px'}}>
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
    // const navigate = useNavigate();
    return (
        <button type="button" className={`border-none w-fit h-fit ${props.className}`} >&larr; Back</button>
    )
}
function CreateAnAccount(props){
    // const navigate = useNavigate();
    return (
        <a href="/Signup" className={`border-none w-fit h-fit ${props.className}`} >Create an account</a>
    )
}