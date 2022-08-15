import React from 'react';

const Button = props => {

    return (
        <button
            className={"mr-5 w-32 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded"
            }
            value={props.value}
            id={props.id}
            onClick={props.onClick}>
            {props.children}
        </button>
    )

}

export default Button;

