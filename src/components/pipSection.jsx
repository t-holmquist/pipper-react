
const PipSection = ({pips}) => {
    return (
        <section id='pipsection' className="grid gap-2 overflow-auto h-full col-span-6 row-span-5 rounded-2xl">
            <ul className="pipcontainer">
                <div className="flex flex-col gap-4">
                    {pips.map(({ id, text, avatar, timestamp }) => (
                        <li key={id} className="group flex flex-col gap-2 border border-slate-400 pip-bg rounded-2xl p-4 min-h-50 transition-colors">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center group-hover:translate-x-1 transition-transform">
                                    <img className="w-10 h-10 rounded-full bg-green-950 group-hover:rotate-8 transition-transform" src={avatar} alt="avatar" />
                                    {/* Check if the dicebear url contains felix else show Riley as name */}
                                    <p className="font-bold">{avatar.toLowerCase().includes('felix') ? 'Felix' : 'Riley'}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    {/* Slice the month, day, hour and minute data */}
                                    <p className="text-xs">{timestamp}</p>
                                    {/* Render delete button if the user is Felix */}
                                    {avatar.toLowerCase().includes('felix') && (
                                        // TODO: Create delete pip function that takes an id to delete pip from mock database
                                        <button className="delete h-fit p-1 border border-slate-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-lg text-xs">Delete</button>
                                    )}
                                </div>
                            </div>
                            <p>{text}</p>
                        </li>
                    ))}
                </div>
                <div className="flex justify-center w-full py-3">
                    {/* TODO: Create a pip function that gets and maybe slices the 5 most recent pips. When called again it includes 5 more */}
                    <button className="bg-black text-white w-fit rounded-lg py-1 px-2 hover:bg-slate-800 cursor-pointer">Show more</button>
                </div>
            </ul>
        </section>
    )
}

export default PipSection