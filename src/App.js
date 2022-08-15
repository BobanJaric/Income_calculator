import React, { useState } from 'react';
import './App.css';
import Footer from './components/Fotter';
import IncomeHeading from './components/IncomeHeading';
import Tabs from './components/Tabs';

import IncomeDetailsTab from './pages/IncomeDetailsTab';
import IncomeTab from './pages/IncomeTab';

const App = () => {

    const [active, setActive] = useState('1');
    const [data, setData] = useState({
        income: '',
        incomeType: 'gross',
        period: 'weekly'
    });

    const handleIncomeChange = (e) => {
        const { id, value } = e.target;
        setData({ ...data, [id]: value });
    }

    const setActiveTab = (e) => {
        if (e.target.id === 'calculate') {
            setActive('2');
        } else {
            setActive(e.currentTarget.id);
        }
    }



    return (
        <div className='flex flex-col m-28'>
            <Tabs setActiveTab={setActiveTab} active={active} />
            <div className=" border-solid border-gray border-2 rounded-lg shadow-xl w-1px-10 
                py-5 px-5 w-full lg:w-1/2 min-h-[500px]" >
                <div >
                    <IncomeHeading active={active} />
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4  ">
                        {active === '1' ?
                            <IncomeDetailsTab
                                handleIncomeChange={handleIncomeChange}
                                income={data.income}
                                incomeType={data.incomeType}
                                calculateIncome={setActiveTab}
                                period={data.period}
                            /> :
                            <>
                                <IncomeTab
                                    data={data}
                                    handleIncomeChange={handleIncomeChange}
                                />
                                <Footer />
                            </>

                        }
                    </div>
                </div>
            </div >
        </div >
    )
}

export default App;