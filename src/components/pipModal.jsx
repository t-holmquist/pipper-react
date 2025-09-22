import React from 'react'
import { useState } from 'react';

const PipModal = ({setIsModalActive}) => {

    const [username, setUsername] = useState('')
    const [pipText, setPipText] = useState('')

    
    // Submit function to add pip
    const submitPip = (e) => {
        e.preventDefault();
        
        // Check if username is felix or Riley
        if(username.toLowerCase() !== 'felix' && username.toLowerCase() !== 'riley') {

            console.log(username.toLowerCase())

            // Show error message
            document.getElementById('errormessage').innerText = 'Wrong username'
            return
        }

        // Check if piptext is empty
        if(pipText == '') {
            document.getElementById('piptexterrormessage').innerText = 'Your pip cannot be empty'
            return
        }
        

        // TODO: Add pip with the state setter function received here

       
        
        
        
        

    }



    return (
        <>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-20"></div>
            {/* Modal */}
            <div
                className="absolute shadow-2xl z-30 rounded-2xl p-8 bg-slate-100 border border-slate-900 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button
                onClick={() => setIsModalActive(false)}
                className='absolute top-2 cursor-pointer right-2 hover:bg-red-300 p-1 rounded-full'><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button>
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">Make a pip to the world</h3>
                    {/* <!-- Get user input from form --> */}
                    <form onSubmit={(e) => submitPip(e)} className="flex flex-col gap-3">
                        <label htmlfor="username">Username</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} id="username" name="username" className="border border-slate-500 outline-slate-500 p-1 rounded-md" type="text" />
                        {/* <!-- Render error message to user --> */}
                        <p id="errormessage" className="text-red-500"></p>
                        <label htmlfor="piptext">What do you want to pip?</label>
                        <textarea value={pipText} onChange={(e) => setPipText(e.target.value)} maxLength="255" id="piptext" name="piptext"
                            className="border border-slate-500 outline-slate-500 p-1 rounded-md min-h-40 min-w-70"></textarea>
                        <p id="piptexterrormessage" className="text-red-500"></p>
                        {/* <!-- Character counter --> */}
                        <p className="text-xs self-end">{`${pipText.length}/255`}</p>
                        {/* <!-- Add photo video etc --> */}
                        <div className="flex gap-4">
                            <button type="button" className="flex cursor-pointer bg-[#093939] hover:bg-slate-950 items-center gap-2 border border-slate-500 py-1 px-2 rounded-lg">
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640">
                                    <path fill="white"
                                        d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM224 176C250.5 176 272 197.5 272 224C272 250.5 250.5 272 224 272C197.5 272 176 250.5 176 224C176 197.5 197.5 176 224 176zM368 288C376.4 288 384.1 292.4 388.5 299.5L476.5 443.5C481 450.9 481.2 460.2 477 467.8C472.8 475.4 464.7 480 456 480L184 480C175.1 480 166.8 475 162.7 467.1C158.6 459.2 159.2 449.6 164.3 442.3L220.3 362.3C224.8 355.9 232.1 352.1 240 352.1C247.9 352.1 255.2 355.9 259.7 362.3L286.1 400.1L347.5 299.6C351.9 292.5 359.6 288.1 368 288.1z" />
                                </svg>
                                <p className="text-white text-xs">Photo</p>
                            </button>
                            <button type="button" className="flex items-center gap-2 cursor-pointer bg-[#093939] hover:bg-slate-950 border border-slate-500 py-1 px-2 rounded-lg">
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640">
                                    <path fill="white"
                                        d="M128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L384 512C419.3 512 448 483.3 448 448L448 192C448 156.7 419.3 128 384 128L128 128zM496 400L569.5 458.8C573.7 462.2 578.9 464 584.3 464C597.4 464 608 453.4 608 440.3L608 199.7C608 186.6 597.4 176 584.3 176C578.9 176 573.7 177.8 569.5 181.2L496 240L496 400z" />
                                </svg>
                                <p className="text-white text-xs">Video</p>
                            </button>
                            <button type="button" className="flex items-center gap-2 cursor-pointer bg-[#093939] hover:bg-slate-950 border border-slate-500 py-1 px-2 rounded-lg">
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640">
                                    <path fill="white"
                                        d="M224 64C206.3 64 192 78.3 192 96L192 128L160 128C124.7 128 96 156.7 96 192L96 240L544 240L544 192C544 156.7 515.3 128 480 128L448 128L448 96C448 78.3 433.7 64 416 64C398.3 64 384 78.3 384 96L384 128L256 128L256 96C256 78.3 241.7 64 224 64zM96 288L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 288L96 288z" />
                                </svg>
                                <p className="text-white text-xs">Schedule</p>
                            </button>
                        </div>
                        {/* <!-- Submit button --> */}
                        <button id="createPipButton" type="submit"
                            className="disabled:bg-gray-300 disabled:cursor-default bg-black text-white rounded-lg py-1 px-2 hover:bg-slate-800 cursor-pointer">Post pip</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PipModal