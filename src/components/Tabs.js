import React from 'react';
import TabButton from '../shared/components/FormElements/TabButton';

const Tabs = ({ setActiveTab, active }) => {
    return (
        <div className='flex h-fit'>
            <TabButton id='1' setActiveTab={setActiveTab} active={active}>IncomeDetails</TabButton>
            <TabButton id='2' setActiveTab={setActiveTab} active={active}>Income</TabButton>
        </div>
    )
}

export default Tabs;