import React, { useEffect, useState } from "react";
import {ReactComponent as Eyeclose} from "./eyeclose.svg";
import {ReactComponent as Eyeopen} from "./eyeopen.svg";

export default function Textbox({ label, type, placeholder, valueState, onChangeHandler, error }) {
  const [isVisible, setIsVisible] = useState(true);
  function toggleVisibility() {
    setIsVisible(!isVisible);
  }
  useEffect(() => {
    if (type === "password") {
      toggleVisibility();
    }
  }, []);
  if (type === "password") {
    return (
      <div className="flex flex-col items-start justify-start w-full font-normal text-gray-500" style={{ font: 'Poppins', fontSize: '16px'}}>
        <div className="flex flex-row justify-between w-full">
          <label >{label}</label>
          <button onClick={toggleVisibility} className="flex flex-row items-center">
            {isVisible ? (
              <Eyeopen/>
            ) : (
              <Eyeclose/>
            )}
            <span style={{ fontSize: '18px' }}>Hide</span>
          </button>
        </div>
        <input type={isVisible? "text" : "password"} placeholder={placeholder} value={valueState} 
        className="w-full pl-4 border border-gray-400 h-14 rounded-xl " onChange={onChangeHandler != null ? (event) => {onChangeHandler(event.target.value)} : null} />
        {
          (error != "") ? (
            <label className="text-red-500">{error}</label>
          ) : null
        }    
      </div>
    );
  }
  else {
    return (
      <div className="flex flex-col items-start justify-start w-full font-normal text-gray-500" style={{ font: 'Poppins', fontSize: '16px' }}>
        <label className="w-full font-normal" style={{ font: 'Poppins'}}>{label}</label>
        <input type={type} placeholder={placeholder} value={valueState}
        className="w-full pl-4 border border-gray-400 h-14 rounded-xl " onChange={ onChangeHandler != null ? (event) => {onChangeHandler(event.target.value)} : null}/>  
        {
          (error != "") ? (
            <label className="text-red-500">{error}</label>
          ) : null
        }     
      </div>
    );
  }
  
  
}