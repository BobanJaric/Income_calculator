import React, { useState } from 'react';

const DropDown = ({ period, setPeriod }) => {

    const [dropdown, setDropdown] = useState('none');


    const handleDropDown = () => {
        if (dropdown === 'none') {
            setDropdown('block')
        } else {
            setDropdown('none')
        }
    }

    const handleActive = (e) => {
        setPeriod(e);
        setDropdown('none');
    }

    window.onclick = function (e) {
        if (e.target.id !== "button" && dropdown === 'block') {
            setDropdown('none')
        }
    }


    return (
        <div className='relative'>
            <button id="button" onClick={handleDropDown} className=' capitalize hover:underline' >{period}</button>
            <div id="menu" style={{ display: dropdown }} className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <button onClick={handleActive} value="weekly" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="period">Weekly</button>
                <button onClick={handleActive} value="fortnightly" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="period">Fortnightly</button>
                <button onClick={handleActive} value="monthly" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="period">Monthly</button>
                <button onClick={handleActive} value="annually" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="period">Annually</button>
            </div>
        </div>
    )
}

export default DropDown;