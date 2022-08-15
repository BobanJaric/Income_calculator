import React from 'react';

const Input = ({ income, handleIncomeChange }) => {
    return (
        <input
            id="income"
            type="text"
            placeholder="Placeholder"
            className='px-3 py-3 rounded-l-md  bg-slate-100 w-2/3'
            value={income}
            onChange={handleIncomeChange}
        />
    )
}

export default Input;