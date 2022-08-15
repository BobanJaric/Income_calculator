import React from 'react';

const TableBody = ({ title, data }) => {
    return (
        <tbody className=" border-b border-gray-200 bg-white text-md ">
            <tr>
                <td className="px-5 py-3">
                    <p className="text-gray-900 capitalize">{title}</p>
                </td>
                <td className="px-5 py-3" >
                    <p className="text-gray-900">${Math.round(data.gross)}</p>
                </td>
                <td className="px-5 py-3">
                    <p className="text-gray-600 ">${Math.round(data.tax)}</p>
                </td>
                <td className="px-5 py-3">
                    <p className="text-gray-600 ">${Math.round(data.net)}</p>
                </td>
            </tr>
        </tbody>
    )
}

export default TableBody;