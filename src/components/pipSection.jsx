import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"


const PipSection = ({pips, setPips}) => {


    // Keeps track of the current slice end number to load/map over x amount of pips at a time
    const [currentSliceNumber, setCurrentSliceNumber] = useState(3)

   
    const deletePip = (id) => {

        // Filter out the id that the user clicks on and therefore it is removed from the pips array
        setPips(pips.filter(pip => pip.id !== id ))
    }


    const getPips = () => {

        setCurrentSliceNumber(prev => prev + 3)
    
    }


    // Motion library animation variants to enable pip animations
    const containerVariant = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    },
    hidden: {}
  }

  const pipVariant = {
    visible: {opacity: 1, y: 0},
    hidden: {opacity: 0, y: -20}
  }




    return (
        <section id='pipsection' className="grid gap-2 overflow-auto h-full col-span-6 row-span-5 rounded-2xl">
            <ul className="pipcontainer">
                <motion.div 
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-4">
                    <AnimatePresence>
                        {pips.slice(0, currentSliceNumber).map(({ id, text, avatar, timestamp }) => (
                            <motion.li 
                            variants={pipVariant}
                            exit={{y: -20, opacity: 0}}
                            // The layout prop animates the position after a nearby pip has been removed. 
                            layout
                            key={id} className="group flex flex-col gap-2 border border-slate-400 pip-bg rounded-2xl p-4 min-h-50 transition-colors">
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
                                            // Calls delete pip function that takes an id to delete pip from mock database
                                            <button onClick={() => deletePip(id)} className="delete h-fit p-1 border border-slate-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-lg text-xs">Delete</button>
                                        )}
                                    </div>
                                </div>
                                <p>{text}</p>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </motion.div>
                <div className="flex justify-center w-full py-3">
                    {/* Creates a pip function that gets  slices the 3 most recent pips. When called again it includes 3 more */}
                    {/* The slice end number should always be less than the pips array so that the show more button doesn't show if no pips are left */}
                    {currentSliceNumber < pips.length ? (
                        
                        <button onClick={() => getPips()} className="bg-black text-white w-fit rounded-lg py-1 px-2 hover:bg-slate-800 cursor-pointer">Show more</button>
                    ) : (
                        <div className="flex gap-1 items-center">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="green" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            <p className="text-sm text-gray-500">You are up to date</p>
                        </div>
                    )}
                </div>
            </ul>
        </section>
    )
}

export default PipSection