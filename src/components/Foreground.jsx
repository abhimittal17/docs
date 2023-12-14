import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
    const ref=useRef(null);
    const data = [
        {
            desc: "lorem lorem lorem lorem lorem lorem lorem.",
            filesize: ".9mb",
            close: true,
            tag: { isopen: true, tagname: "Download Now", tagcolor: "green", },

        },
        {
            desc: "lorem lorem lorem lorem lorem lorem lorem.",
            filesize: ".9mb",
            close: true,
            tag: { isopen: true, tagname: "Download Now", tagcolor: "green", },

        },
        {
            desc: "lorem lorem lorem lorem lorem lorem lorem.",
            filesize: ".9mb",
            close: true,
            tag: { isopen: true, tagname: "Download Now", tagcolor: "blue", },

        },
    ];
    return (
        <div ref={ref} className='fixed w-full h-full z-[3] top-0 left-0 flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
            <Card data={item} reference={ref} />
        ))}
        </div>
    )
}

export default Foreground