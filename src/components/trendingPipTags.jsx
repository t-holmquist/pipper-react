import React from 'react'
import { pipTags } from '../data'

const TrendingPipTags = () => {
  return (
    <div className="gap-4 card-bg flex flex-col p-6 col-span-3 row-span-4 rounded-2xl">
          <h3 className="font-bold text-lg text-white">Trending pip tags</h3>
          <p className="text-gray-400">Trending in Austria</p>
          <div id="pipTagContainer" className="flex flex-col gap-4">
            {pipTags.map(({id, title, numberOfPips}) => (
              <div key={id} className="flex gap-6 items-center justify-between">
                <p className="text-2xl text-white">#</p>
                <div className="flex flex-col">
                  <p className="text-sm text-white">{title}</p>
                  <p className="text-gray-400 text-sm">{numberOfPips}</p>
                </div>
                <div className="flex-1 flex justify-end">
                  <button className="rounded-full py-1 px-2 cursor-pointer">
                    <p className="text-xs text-white hover:text-gray-300">See pips</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default TrendingPipTags