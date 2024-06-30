import React from "react";

export default function Dropdown({ label, optionlist, onChange }) {
    function generateOptions(optionlist) {
        let options = [];
        
        for (let i = 0; i < optionlist.length; i++) {
            options.push(<option key={i} value={optionlist[i]} >{optionlist[i]}</option>);
        }
        return options;
    };
    return (
        <div className="flex flex-col items-start justify-start h-fit"
        style={{width: '180px'}}>
            <label className="font-normal text-gray-500"
            style={{font: 'Poppins', fontSize: '16px'}}>
                {label}
            </label>
            <select onChange={onChange} className="w-full px-3 border border-gray-300 rounded-xl"
            style={{height: '56px'}} >
                {generateOptions(optionlist)}
            </select>
        </div>
    )
}