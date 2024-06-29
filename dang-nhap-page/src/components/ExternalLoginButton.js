import React from "react";
import {ReactComponent as EmailIcon} from "./Email_icon.svg";

export function GoogleButton(props) {
    return (
        <button
            className="px-4 py-2 text-black bg-white border border-black rounded"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google logo"
                className="w-6 h-6 mr-2"
            />
            <span>${props.label}</span>
        </button>
    );
}

export function FacebookButton(props) {
    return (
        <button
            className="px-4 py-2 text-black bg-white border border-black rounded"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
                alt="Facebook logo"
                className="w-6 h-6 mr-2"
            />
            <span>${props.label}</span>
        </button>
    );
}

export function TwitterButton(props) {
    return (
        <button
            className="px-4 py-2 text-black bg-white border border-black rounded"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
                alt="Twitter logo"
                className="w-6 h-6 mr-2"
            />
            <span>${props.label}</span>
        </button>
    );
}

export function EmailButton(props) {
    return (
        <button
            className="px-4 py-2 text-black bg-white border border-black rounded"
        >
            <EmailIcon/>
            <span>${props.label}</span>
        </button>
    );
}