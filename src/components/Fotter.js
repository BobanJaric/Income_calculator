import React from 'react';
import Button from '../shared/components/FormElements/Button';

const Footer = () => {
    return (
        <div className='p-5 flex flex-col sm:flex-row justify-between  items-center  border-solid border-2 px-3 pb-5 bg-red-200 rounded-lg w-full'>
            <div className='text-center mb-5 sm:m-0'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
            </div>
            <div className='text-center mb-5 sm:m-0'>
                Comapre lenders and get your finance
            </div>
            <div>
                <Button>Apply now</Button>
            </div>
        </div>
    )
}

export default Footer