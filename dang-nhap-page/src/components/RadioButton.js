import React from 'react';

export default function RadioButton({ value, state, groupName, handleChange, className }) {
    return (
        <div className="flex flex-row items-center justify-center gap-2 px-2 w-fit h-fit">
            <input id={value} type="radio" name={groupName} value={value} checked={ state == value }
            onChange={(event) => {handleChange(event.target.value)}}/>
            <label htmlFor={value} className={className} style={{font: 'Poppins', fontSize: '16px'}}>{value}</label>
        </div>
    );
}