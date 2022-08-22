import React, { useState } from 'react'

const TextEditor = () => {
    const [headerStyle, setHeaderStyle] = useState("h1")
    const changeHeaderStyle = (e: React.ChangeEvent<HTMLSelectElement>) => {

        setHeaderStyle((prev) => {
            if (prev === e.target.value) {
                return prev
            } else return e.target.value
        })
        // document.execCommand("H1")
        const boldElement = document.createElement("h6")
        boldElement.style.background = "red"
        const userSelection = window.getSelection()
        const selectedTextRange = userSelection?.getRangeAt(0)
        selectedTextRange?.surroundContents(boldElement)
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-blue-700/75 '>
            <div className="bg-white w-[50%] rounded-md flex flex-col overflow-hidden h-[60%]" >

                <div className='toolbar w-full p-2 flex gap-2 border border-black/30 rounded-md'>
                    {/* <span className='p-1 hover:bg-blue-400 rounded-sm duration-150 cursor-pointer'>H1</span> */}
                    <div className=" w-8">
                        <select onChange={changeHeaderStyle} name="tag" className='p-2 hover:bg-blue-400 duration-200 outline-none rounded-sm cursor-pointer' id="tag">
                            <option value="h1" className='bg-white p-1 rounded-sm hover:bg-blue-400'>H1</option>
                            <option value="h2" className='bg-white p-1 rounded-sm hover:bg-blue-400'>H2</option>
                            <option value="h3" className='bg-white p-1 rounded-sm hover:bg-blue-400'>H3</option>
                            <option value="h4" className='bg-white p-1 rounded-sm hover:bg-blue-400'>H4</option>
                            <option value="h5" className='bg-white p-1 rounded-sm hover:bg-blue-400'>H5</option>
                        </select>

                    </div>
                    <span className='p-2 border border-black/10 mr-3 cursor-pointer' onClick={() => {
                        console.log("clicked")
                        console.log(document.createRange())
                    }}>Bold</span>
                </div>
                <div className='w-full'>
                    <div contentEditable={true} className='w-full  bg-red-100 h-64' ></div>

                </div>


            </div>

        </div>
    )
}

export default TextEditor