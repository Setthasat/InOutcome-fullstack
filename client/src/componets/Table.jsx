import { useState, useEffect} from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'


function TableRow({ dataForm, setDataForms }) {

    const handleDelete = (e) => {
        e.preventDefault()
        // setDataForms(dataForms.filter(items => items.id !== dataForm.id))
        setDataForms((prev) => {
            var newTable = prev.filter((items, _) => items.id !== dataForm.id)
            return newTable
        })
    }


    return (
        <tr className="bg-slate-800 ">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
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
                <button onClick={handleDelete} className="text-white px-3 border-b-[5px] shadow-2xl bg-red-500 border-b-red-600">x</button>
            </td>

        </tr>
    )
}

function Table({ dataForms, setDataForms, wave }) {
    const [startIndex, setStartIndex] = useState(0);
    const [lastIndedx, setLastIndex] = useState(5);
    const [arrSlice, setArrSlice] = useState(null);
    
    // {/* */}

    
        return (
            <div className='bg-[#0098f1]'>
                <div>
                    {wave === 1 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc"  d="M0,192L48,197.3C96,204,192,213,288,186.7C384,160,480,96,576,58.7C672,21,768,11,864,37.3C960,64,1056,128,1152,144C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    ) : wave === 2 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc" d="M0,64L48,64C96,64,192,64,288,85.3C384,107,480,149,576,144C672,139,768,85,864,64C960,43,1056,53,1152,85.3C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    ) : wave === 3 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc" d="M0,160L48,186.7C96,213,192,267,288,261.3C384,256,480,192,576,154.7C672,117,768,107,864,112C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    ) : wave === 4 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc" d="M0,256L48,218.7C96,181,192,107,288,74.7C384,43,480,53,576,80C672,107,768,149,864,181.3C960,213,1056,235,1152,202.7C1248,171,1344,85,1392,42.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    ) : wave === 5 ? (    
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc" d="M0,192L48,170.7C96,149,192,107,288,96C384,85,480,107,576,133.3C672,160,768,192,864,192C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc" d="M0,256L48,213.3C96,171,192,85,288,90.7C384,96,480,192,576,197.3C672,203,768,117,864,112C960,107,1056,181,1152,197.3C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    )}
                </div>
                {dataForms.length > 0 ? (
                    <div className='flex justify-center bg-[#0098f1] h-auto text-white sm:-mt-[10rem] sm:mb-2'>
                    <div className="relative overflow-x-auto border-r-">
                        <table className="md:w-[56em] w-[10rem] text-sm text-left  ">
                            <thead className="text-xs  uppercase  bg-slate-900 text-gray-200">
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
                                    <TableRow key={index} dataForm={dataForm} setDataForms={setDataForms} />
                                ))}
                            </tbody>

                        </table>
                        {dataForms.length >= 5 ? (
                            <div className='flex justify-center items-center mt-1'>
                                <button className='bg-slate-700 mx-[2px]' onClick={increaseIndexArray}> <AiOutlineArrowLeft /> </button>
                                <button className='bg-slate-700 mx-[2px]' onClick={decreaseIndexArray}> <AiOutlineArrowRight /></button>
                            </div>
                        ) :
                            <></>
                        }
                    </div>
                </div>
                ) : (
                    <></>
                )}
                
                </div>
        )
    }


export default Table