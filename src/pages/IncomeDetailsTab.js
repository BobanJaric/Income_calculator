import React from 'react';
import DropDown from '../components/DropDown';
import TabButton from '../shared/components/FormElements/TabButton';
import IncomeButton from '../shared/components/FormElements/IncomeButton';
import Input from '../shared/components/FormElements/Input';

const IncomeDetailsTab = ({ income, handleIncomeChange, incomeType, calculateIncome, period }) => {

    return (
        <div className=' w-full p-5'>
            <div className='mb-5 text-xl font-medium'>What is your total income?</div>
            <div className='flex items-center h-12 mb-5'>
                <Input income={income} handleIncomeChange={handleIncomeChange} />
                <div className='px-3 py-3  rounded-r-md bg-slate-300 sm:w-1/3 '>
                    <DropDown
                        period={period}
                        setPeriod={handleIncomeChange}
                    />
                </div>
            </div>
            <div className='mb-5 text-xl font-medium'>Please choose income type</div>
            <div className='flex justify-center'>
                <IncomeButton
                    value="gross"
                    handleIncomeChange={handleIncomeChange}
                    incomeType={incomeType}
                >
                    Gross income
                </IncomeButton>
                <IncomeButton
                    value="net"
                    handleIncomeChange={handleIncomeChange}
                    incomeType={incomeType}
                >
                    Net income
                </IncomeButton>
            </div>
            <div >
                <TabButton
                    id="calculate"
                    setActiveTab={calculateIncome}
                >
                    <p className='mr-3 text-lg'>Continue</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>

                </TabButton>
            </div>
        </div>
    )
}

export default IncomeDetailsTab;