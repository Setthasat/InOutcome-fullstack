import React from 'react'

function TableRow({ data }) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {data.date}
            </th>
            <td className="px-6 py-4">
                {data.title}
            </td>
            {data.InOrOut === "income" ? (
                <>
                    <td className="px-6 py-4 ">
                        {data.cost}
                    </td>
                    <td className="px-6 py-4">
                        -
                    </td>
                </>
            ) : (
                <>
                    <td className="px-6 py-4 ">
                        -
                    </td>
                    <td className="px-6 py-4">
                        {data.cost}
                    </td>
                </>
            )}
            

        </tr>
    )
}

function Table({ dataForms }) {
    return (
        <div className='flex justify-center bg-slate-600 h-auto text-white'>
            <div className="relative overflow-x-auto">
                <table className="md:w-[56em] w-[16rem] text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                in
                            </th>
                            <th scope="col" className="px-6 py-3">
                                out
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataForms.map((data, index) => (
                            <TableRow key={index} data={data} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table