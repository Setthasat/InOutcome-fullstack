import React from 'react'

function HeaderWave({setWave, wave}) {

    const handleRandInt = () => {
        let waveRandom = Math.floor(Math.random() * 4) + 1
        if (wave === waveRandom) {
            console.log(`wave = ${wave} : newWave = ${waveRandom}`);
            waveRandom = wave + 1
            console.log(`new wave = ${waveRandom}`);
        }
        console.log(typeof wave)
        setWave(waveRandom);
    }

    return (
        <div className='bg-[#006abc]'>
            <div className='absolute right-4 top-2 sm:ml-2'>
                <button onClick={handleRandInt} className="bg-red-600 p-3 rounded-lg border-t-[10px] hover:border-t-4 duration-300 border-t-red-800 ">Random Wave</button>
            </div>
        </div>
    )
}

export default HeaderWave