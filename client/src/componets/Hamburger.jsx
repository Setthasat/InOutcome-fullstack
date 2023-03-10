import React from 'react'
import HeaderWave from './HeaderWave'
import { FaHamburger } from 'react-icons/fa'
import { AiOutlineClose} from 'react-icons/ai'
import {VscGithubAlt} from 'react-icons/vsc'

function Hamburger({ setWave, wave, hamClose, setHamClose }) {

    const handleClose = (e) => {
        e.preventDefault();
        setHamClose(!hamClose);
        console.log(hamClose)
    }

    return (
        <div className='absolute right-6 top-4 sm:ml-2'>
            <div className='text-white text-[2rem]'>
                {/* <button onClick={handleClose} className='bg-blue-500 p-3 rounded-full duration-100000 hover:p-3 shadow-2xl shadow-black '>{hamClose === false ? (
                    <div className='flex justify-center items-center'>
                        <FaHamburger />
                    </div>
                    ) : (
                        <div>
                        <div className="flex flex-col items-center">
                            <AiOutlineClose />    
                        </div>
                        <HeaderWave setWave={setWave} wave={wave} />
                    </div>
                    )}
                </button> */}
                {hamClose === false ? (
                    <>
                        <button onClick={handleClose} className=' bg-blue-600 p-3 rounded-full hover:p-5 duration-500 shadow-2xl shadow-black '><FaHamburger /></button>
                    </>
                ) : (
                    <div className='flex flex-col items-center hover:p-5 duration-500'>
                        <button onClick={handleClose} className='bg-blue-600 p-3 rounded-full hover:p-5 duration-300 shadow-2xl shadow-black '><AiOutlineClose /></button>
                        <div className='mt-2 flex flex-col items-center'>
                            <HeaderWave setWave={setWave} wave={wave}  className="text-[1.75]"/>
                            <button className='bg-blue-600 p-3 hover:p-5  duration-300 rounded-full shadow-2xl shadow-black text-[1.75] mt-2'><a href='https://github.com/Setthasat'><VscGithubAlt /></a></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Hamburger