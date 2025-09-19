import React from 'react'

const PipSection = () => {
    return (
        <section id="pipsection" className="grid gap-2 overflow-auto h-full col-span-6 row-span-5 rounded-2xl">
            <ul id="pipcontainer" className="pipcontainer">
                {/* <!-- JavaScript function generates pips here -->
            <!-- The pipList div makes sure that there always is a html structure so that the show more button is rendered at the bottom --> */}
                <div id="pipList" className="flex flex-col gap-4">
                    <template id="piptemplate">
                        <li className="group flex flex-col gap-2 border border-slate-400 pip-bg rounded-2xl p-4 min-h-50 transition-colors">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center group-hover:translate-x-1 transition-transform">
                                    <img className="userimage w-10 h-10 rounded-full bg-green-950 group-hover:rotate-8 transition-transform" src="" alt="avatar" />
                                    <p className="name font-bold"></p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className="date text-xs"></p>
                                    <button id="deletebutton" className="delete h-fit p-1 border border-slate-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-lg text-xs">Delete</button>
                                </div>
                            </div>
                            <p className="piptext"></p>
                        </li>
                    </template>
                </div>
                <div className="flex justify-center w-full py-3">
                    <button id="showmorebutton" className="bg-black text-white w-fit rounded-lg py-1 px-2 hover:bg-slate-800 cursor-pointer">Show more</button>
                </div>
            </ul>
        </section>
    )
}

export default PipSection