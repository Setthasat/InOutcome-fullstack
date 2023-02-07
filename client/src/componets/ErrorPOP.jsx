import React from 'react'

function ErrorPOP({ setFormsError, formsError }) {

    const handleClose = () => {
        setFormsError(false)
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm '>
            <div className='flex justify-center items-center h-screen'>
                <div>
                    <div className='ml-[255px] flex justify-center items-center fixed -mt-[18px] font-bold'>
                        <button onClick={handleClose} className="bg-red-800 my-2 px-[9px] text-[15px] -ml-1 rounded-full text-white">x</button>
                    </div>
                    <p className='rounded-md bg-white px-9 h-[4.75rem] flex justify-center items-center'><span className='font-bold pr-1 '>Something</span> is not complete</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorPOP