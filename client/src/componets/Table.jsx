import axios from 'axios';
import { useState, useEffect} from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'


function TableRow({ dataForm, setDataForms }) {

    console.log(dataForm);
    const handleDelete = async(e) => {
        e.preventDefault();
        try {
            setDataForms((prev) => {
                var newTable = prev.filter((items, _) => items._id !== dataForm._id);
                return newTable ;
            });
            const api = await axios.delete(`http://localhost:8888/Delete/${dataForm._id}`);
        } catch(err) { 
            console.log(err);
        }
        // setDataForms(dataForms.filter(items => items.id !== dataForm.id))
    }


    return (
        <tr className="bg-slate-700 ">
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

function Table({ dataForms, setDataForms, wave}) {
    
        // const increaseIndexArray = () => {
        //     console.log("increase function")
        //     setStartIndex(startIndex + 5);
        //     setLastIndex(lastIndedx + 5);
        //     console.log(`startIndex : ${startIndex} lastIndedx : ${lastIndedx}`);
        // }
        
        // const decreaseIndexArray = () => {
        //     console.log("decrease function");
        //     setStartIndex(startIndex - 5);
        //     setLastIndex(lastIndedx - 5);
        //     console.log(`startIndex : ${startIndex} lastIndedx : ${lastIndedx}`);
        // }

    
        return (
            <div className='bg-[#0098f1]'>
                <div>
                    {   wave === 1 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc"  d="M0,192L48,197.3C96,204,192,213,288,186.7C384,160,480,96,576,58.7C672,21,768,11,864,37.3C960,64,1056,128,1152,144C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    ) : wave === 2 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc" d="M0,64L48,64C96,64,192,64,288,85.3C384,107,480,149,576,144C672,139,768,85,864,64C960,43,1056,53,1152,85.3C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    ) : wave === 3 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc" d="M0,160L48,186.7C96,213,192,267,288,261.3C384,256,480,192,576,154.7C672,117,768,107,864,112C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    ) : wave === 4 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc" d="M0,256L48,218.7C96,181,192,107,288,74.7C384,43,480,53,576,80C672,107,768,149,864,181.3C960,213,1056,235,1152,202.7C1248,171,1344,85,1392,42.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    ) : wave === 5 ? (    
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc" d="M0,192L48,170.7C96,149,192,107,288,96C384,85,480,107,576,133.3C672,160,768,192,864,192C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    ) : wave === 6 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc" d="M0,128L21.8,112C43.6,96,87,64,131,58.7C174.5,53,218,75,262,101.3C305.5,128,349,160,393,186.7C436.4,213,480,235,524,229.3C567.3,224,611,192,655,154.7C698.2,117,742,75,785,58.7C829.1,43,873,53,916,53.3C960,53,1004,43,1047,64C1090.9,85,1135,139,1178,154.7C1221.8,171,1265,149,1309,128C1352.7,107,1396,85,1418,74.7L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
                    ) : wave === 7 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc" d="M0,0L21.8,16C43.6,32,87,64,131,101.3C174.5,139,218,181,262,176C305.5,171,349,117,393,96C436.4,75,480,85,524,80C567.3,75,611,53,655,48C698.2,43,742,53,785,69.3C829.1,85,873,107,916,112C960,117,1004,107,1047,101.3C1090.9,96,1135,96,1178,122.7C1221.8,149,1265,203,1309,186.7C1352.7,171,1396,85,1418,42.7L1440,0L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
                    ) : wave === 8 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc" d="M0,128L21.8,149.3C43.6,171,87,213,131,213.3C174.5,213,218,171,262,154.7C305.5,139,349,149,393,128C436.4,107,480,53,524,32C567.3,11,611,21,655,53.3C698.2,85,742,139,785,144C829.1,149,873,107,916,96C960,85,1004,107,1047,128C1090.9,149,1135,171,1178,170.7C1221.8,171,1265,149,1309,128C1352.7,107,1396,85,1418,74.7L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
                    ) : wave === 9 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc" d="M0,224L34.3,213.3C68.6,203,137,181,206,154.7C274.3,128,343,96,411,117.3C480,139,549,213,617,202.7C685.7,192,754,96,823,96C891.4,96,960,192,1029,234.7C1097.1,277,1166,267,1234,245.3C1302.9,224,1371,192,1406,176L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
                    ) : wave === 10 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc" d="M0,96L34.3,101.3C68.6,107,137,117,206,154.7C274.3,192,343,256,411,250.7C480,245,549,171,617,122.7C685.7,75,754,53,823,37.3C891.4,21,960,11,1029,32C1097.1,53,1166,107,1234,133.3C1302.9,160,1371,160,1406,160L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-mt-[8rem] duration-300'><path fill="#006abc" d="M0,256L48,213.3C96,171,192,85,288,90.7C384,96,480,192,576,197.3C672,203,768,117,864,112C960,107,1056,181,1152,197.3C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    )}
                </div>
                {dataForms.length > 0 ? (
                    <div className='flex justify-center bg-[#0098f1] h-auto text-white sm:-mt-[10rem] sm:mb-2'>
                    <div className="relative overflow-x-auto border-r-">
                        <table className="md:w-[56em] w-[10rem] text-sm text-left rounded-t-lg ">
                            <thead className="text-xs  uppercase  bg-slate-900 text-gray-200 ">
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
                        {/* {dataForms.length >= 1 ? (
                            <div className='flex justify-center items-center mt-1'>
                                <button className='bg-slate-700 mx-[2px] p-1 rounded-full' onClick={decreaseIndexArray}> <AiOutlineArrowLeft /> </button>
                                <button className='bg-slate-700 mx-[2px] p-1 rounded-full' onClick={increaseIndexArray}> <AiOutlineArrowRight /></button>
                            </div>
                        ) :
                            <></>
                        } */}
                    </div>
                </div>
                ) : (
                    <></>
                )}
                
                </div>
        )
    }


export default Table