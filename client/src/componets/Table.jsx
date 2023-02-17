import React from 'react'


function TableRow({ dataForm, setDataForms, dataForms}) {

//    const handleDelete = (e) => {
//         e.preventDefault();
//         setDataForms(dataForms.filter(items => items.id  !== id))
//     } 
    

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {dataForm.date}
            </th>
            <td className="px-6 py-4">
                {dataForm.title}
            </td>
            {dataForm.InOrOut === "income" ? (
                <>
                    <td className="px-6 py-4 ">
                        {dataForm.cost}
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
                        {dataForm.cost}
                    </td>
                </>
            )}
            <td className="px-6 py-4 flex justify-center items-center">
                <button onClick={(e) => {
                    e.preventDefault()
                    setDataForms(dataForms.filter(items => items.id !== dataForm.id))
                    // setDataForms((prev) => {
                    //     var newTable = prev.filter((items, _) => items.id !== dataForms.id)
                    //     return newTable
                    // })
                }} className="text-white px-3 border-b-[5px] shadow-2xl bg-red-500 border-b-red-600">x</button>
            </td>

        </tr>
    )
}

function Table({ dataForms, setDataForms }) {
    return (
        <div className='flex justify-center bg-slate-600 h-auto text-white'>
            <div className="relative overflow-x-auto border-r-">
                <table className="md:w-[56em] w-[10rem] text-sm text-left text-gray-500 dark:text-gray-400">
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
                            <th scope="col" className="px-6 py-3 flex justify-center items-center">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataForms.map((dataForm, index) => (
                            <TableRow key={index} dataForm={dataForm} dataForms={dataForms} setDataForms={setDataForms}/>
                        ))}
                    </tbody>
                    
                </table>
                {dataForms.length > 0 ? (
                    <div className='flex justify-center items-center mt-187788'>
                        <button className='bg-slate-700 w-[1.5rem] mx-[1px]'> {'<'} </button>
                        <button className='bg-slate-700 w-[1.5rem] mx-[1px]'> {'>'}</button>
                    </div>
                ) : 
                 <></>
                }
               
            </div>
        </div>
    )
}

export default Table