import React from 'react'

function Background() {
    return (
        <div>
            <div className='fixed h-screen w-full z-[2]'>
                <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-100 font-semibold text-xl'>Documents.</div>
                <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-200'>Docs.</h1>
            </div>
        </div>
    )
}

export default Background