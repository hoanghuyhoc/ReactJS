import React from 'react';

export default function RadioButton({ value, state }) {
    return (
        <div className="flex flex-row gap-2 px-2 justify-center items-center w-fit h-fit">
            <input type="radio" id={value} value={value} checked={ state == value }
        </div>
    );
}