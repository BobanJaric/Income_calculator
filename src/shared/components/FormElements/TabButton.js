import React from 'react';

const TabButton = props => {
    return (
        <button id={props.id} onClick={props.setActiveTab}
            className={` ${props.active === props.id || props.active === 'calculate' ? "bg-green-300" : ""} 
            ${props.id === 'calculate' ? "flex justify-center items-center px-3 py-3  rounded-md bg-slate-300 w-full mr-8 mt-5 hover:bg-green-300" :
                    "w-48 flex-initial border-solid border-2 p-3 rounded-md"}`}>
            {props.children}
        </button>
    )

}

export default TabButton;



