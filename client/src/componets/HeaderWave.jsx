import React from 'react'
import {TiWaves} from 'react-icons/ti'

function HeaderWave({setWave, wave}) {

    const handleRandInt = (e) => {
        e.preventDefault();
        let waveRandom = Math.floor(Math.random() * 9) + 1
        if (wave === waveRandom) {
            console.log(`wave = ${wave} : newWave = ${waveRandom}`);
            waveRandom = wave + 1
            console.log(`new wave = ${waveRandom}`);
        }
        setWave(waveRandom);
    }

    return (
        <div className=''>
            <button onClick={handleRandInt} className="bg-blue-600 p-3 hover:p-5 rounded-full duration-300  shadow-2xl shadow-red-900 "><TiWaves className="text-white "/></button>
        </div>
    )
}

export default HeaderWave
 
