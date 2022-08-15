import React from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr >
                <th
                    className="w-1/4 px-5 py-3 border-b-2 border-gray-400 bg-gray-100 text-left text-md font-semibold text-gray-700"
                >
                    Frequency
                </th>
                <th
                    className="w-1/4 px-5 py-3 border-b-2 border-gray-400 bg-gray-100 text-left text-md font-semibold text-gray-700 "
                >
                    Gross income
                </th>
                <th
                    className="w-1/4 px-5 py-3 border-b-2 border-gray-400 bg-gray-100 text-left text-md font-semibold text-gray-700 "
                >
                    Tax
                </th>
                <th
                    className="w-1/4 px-5 py-3 border-b-2 border-gray-400 bg-gray-100 text-left text-md font-semibold text-gray-700 "
                >
                    Net Income
                </th>
            </tr>
        </thead>
    )
}

export default TableHead;