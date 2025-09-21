import React from 'react'

const NewPipToggler = ({setIsModalActive}) => {
    return (
        <div
            className="flex flex-col gap-4 justify-center card-bg col-span-6 row-span-1 p-5 border border-slate-500 rounded-2xl">
            <div className="flex gap-4 group">
                <img className="w-8 h-8 rounded-full group-hover:translate-x-1 transition-transform"
                    src="https://api.dicebear.com/9.x/personas/svg?seed=Felix&backgroundColor=ffdfbf" alt="user portrait" />
                {/* <!-- Open modal when button is clicked --> */}
                <button
                    onClick={() => setIsModalActive(true)}
                    className="bg-slate-950 hover:border-slate-400 cursor-pointer hover:text-white w-full py-1 px-2 text-gray-400 border border-slate-500 rounded-md">
                    <p className="text-start text-sm">What is on your mind?... Make a pip</p>
                </button>
            </div>
            {/* <!-- Tools --> */}
            <div className="flex gap-4">
                <button className="flex cursor-pointer hover:bg-[#093939] items-center gap-2 border border-slate-500 py-1 px-4 rounded-lg">
                    <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640">
                        <path fill="#63E6BE"
                            d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM224 176C250.5 176 272 197.5 272 224C272 250.5 250.5 272 224 272C197.5 272 176 250.5 176 224C176 197.5 197.5 176 224 176zM368 288C376.4 288 384.1 292.4 388.5 299.5L476.5 443.5C481 450.9 481.2 460.2 477 467.8C472.8 475.4 464.7 480 456 480L184 480C175.1 480 166.8 475 162.7 467.1C158.6 459.2 159.2 449.6 164.3 442.3L220.3 362.3C224.8 355.9 232.1 352.1 240 352.1C247.9 352.1 255.2 355.9 259.7 362.3L286.1 400.1L347.5 299.6C351.9 292.5 359.6 288.1 368 288.1z" />
                    </svg>
                    <p className="text-gray-400 text-sm">Photo</p>
                </button>
                <button className="flex items-center gap-2 cursor-pointer hover:bg-[#093939] border border-slate-500 py-1 px-4 rounded-lg">
                    <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640">
                        <path fill="#63E6BE"
                            d="M128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L384 512C419.3 512 448 483.3 448 448L448 192C448 156.7 419.3 128 384 128L128 128zM496 400L569.5 458.8C573.7 462.2 578.9 464 584.3 464C597.4 464 608 453.4 608 440.3L608 199.7C608 186.6 597.4 176 584.3 176C578.9 176 573.7 177.8 569.5 181.2L496 240L496 400z" />
                    </svg>
                    <p className="text-gray-400 text-sm">Video</p>
                </button>
                <button className="flex items-center gap-2 cursor-pointer hover:bg-[#093939] border border-slate-500 py-1 px-4 rounded-lg">
                    <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640">
                        <path fill="#63E6BE"
                            d="M224 64C206.3 64 192 78.3 192 96L192 128L160 128C124.7 128 96 156.7 96 192L96 240L544 240L544 192C544 156.7 515.3 128 480 128L448 128L448 96C448 78.3 433.7 64 416 64C398.3 64 384 78.3 384 96L384 128L256 128L256 96C256 78.3 241.7 64 224 64zM96 288L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 288L96 288z" />
                    </svg>
                    <p className="text-gray-400 text-sm">Schedule</p>
                </button>
            </div>
        </div>
    )
}

export default NewPipToggler