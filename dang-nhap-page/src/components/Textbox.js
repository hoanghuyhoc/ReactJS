import React, { useState } from "react";

export default function Textbox({ label, type, placeholder }) {
  const [isVisible, setIsVisible] = useState(true);
  function toggleVisibility() {
    setIsVisible(!isVisible);
  }
  if (type === "password") {
    toggleVisibility();
    return (
      <div className="flex flex-col items-start justify-start font-normal text-gray-500" style={{ font: 'Poppins', fontSize: '14px'}}>
        <div className="flex flex-row justify-between">
          <label>{label}</label>
          <button onClick={toggleVisibility} className="flex flex-row">
            {isVisible ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 .635-2.033 2.088-3.772 4.043-5.11M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9.003 9.003 0 01-4.875 7.825M9.165 9.165a3.001 3.001 0 014.67 4.67M21 21l-5.5-5.5"/>
              </svg>
            )}
            <span style={{ fontSize: '18px' }}>Hide</span>
          </button>
        </div>
        <input type={isVisible? "text" : "password"} placeholder={placeholder} 
        className="border border-gray-400 rounded-xl"/>      
      </div>
    );
  }
  else {
    return (
      <div className="flex flex-col items-start justify-start">
        <label className="font-normal" style={{ font: 'Poppins'}}>{label}</label>
        <input type={type} placeholder={placeholder} 
        className="border border-gray-400 rounded-xl"/>      
      </div>
    );
  }
  
  
}