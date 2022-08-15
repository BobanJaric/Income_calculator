import React, { useState, useEffect } from 'react';
import IncomeTitle from '../components/IncomeTitle';
import TableBody from '../components/TableBody';
import TableHead from '../components/TableHead';

const grossWeeklyIncomeCalculation = (data) => {
    let gross = data.income;
    if (data.incomeType === 'net') {
        gross = data.income * 1.75;
    }
    if (data.period === 'fortnightly') {
        gross = gross / 2;
    } else if (data.period === 'monthly') {
        gross = gross / 4.34;
    } else if (data.period === 'annually') {
        gross = gross / 52;
    }
    return gross;
}


const IncomeTab = ({ data, handleIncomeChange }) => {

    const [income, setIncome] = useState();
    useEffect(() => {
        const grossWeeklyIncome = grossWeeklyIncomeCalculation(data);
        setIncome(grossWeeklyIncome);
    }, [])
    const incomeData = {
        "weekly": {
            "gross": income,
            "net": income / 1.75,
            "tax": income * 0.25,
        },
        "fortnightly": {
            "gross": income * 2,
            "net": income * 2 / 1.75,
            "tax": income * 2 * 0.25,
        },
        "monthly": {
            "gross": income * 4.34,
            "net": income * 4.34 / 1.75,
            "tax": income * 4.34 * 0.25,
        },
        "annually": {
            "gross": income * 52,
            "net": income * 52 / 1.75,
            "tax": income * 52 * 0.25,
        },
    }

    return (
        <div className="inline-block  border-solid border-2 px-3 pb-5 bg-green-300 rounded-lg w-full">
            <IncomeTitle data={data} incomeData={incomeData} handleIncomeChange={handleIncomeChange} />
            <div className="overflow-x-auto relative">
                <table className=" leading-normal  w-full ">
                    <TableHead />
                    <TableBody title="weekly" data={incomeData.weekly} />
                    <TableBody title="fortnightly" data={incomeData.fortnightly} />
                    <TableBody title="monthly" data={incomeData.monthly} />
                    <TableBody title="annually" data={incomeData.annually} />
                </table>
            </div>
        </div>
    )
}

export default IncomeTab;