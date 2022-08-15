import React from 'react';
import Button from '../shared/components/FormElements/Button';
import DropDown from './DropDown';

const IncomeTitle = ({ data, incomeData, handleIncomeChange }) => {
    return (
        <div className='flex flex-col sm:flex-row p-5  items-center text-lg text-center '>
            <Button>
                ${Math.round(incomeData[data.period][data.incomeType])}
            </Button>
            <div className='flex flex-col sm:flex-row'>
                <p className='text-gray-800 mr-2 font-bold'>
                    your {data.incomeType}
                </p>
                <div className='flex'>
                    <DropDown
                        period={data.period}
                        setPeriod={handleIncomeChange}
                    />
                    <p className='text-gray-800 mr-2 font-bold text-md'>
                        - income
                    </p>
                </div>
            </div>
        </div>
    )
}

export default IncomeTitle;