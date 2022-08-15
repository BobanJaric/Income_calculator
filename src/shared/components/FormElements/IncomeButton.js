import React from 'react';

const IncomeButton = props => {
    return (
        <button
            className={props.incomeType === props.value ? `px-3 py-3  rounded-md bg-green-300 w-1/2 mr-2` : `px-3 py-3  rounded-md bg-slate-300 w-1/2 mr-2 `}
            id="incomeType"
            value={props.value}
            onClick={props.handleIncomeChange}
        >
            {props.children}
        </button>
    )

}

export default IncomeButton;