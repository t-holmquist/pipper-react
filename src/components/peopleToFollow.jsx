import React from 'react'

const PeopleToFollow = () => {
  return (
    <div className="gap-6 flex flex-col p-6 col-span-3 row-span-3 card-bg rounded-2xl">
          <h3 className="font-bold text-lg text-white">People you might want to follow</h3>
          <template id="persontemplate">
            <div className="flex gap-4 items-center">
              <img className="avatar" height="40" width="40" alt="user portrait" />
              <div className="flex flex-col gap-1">
                <p className="name text-sm text-white">Bernie Learney</p>
                <p className="handle text-gray-400 text-sm">@bernielearney</p>
              </div>
              <div className="flex justify-end flex-1">
                <button className="followbutton bg-white rounded-lg py-1 px-2 hover:bg-slate-300 cursor-pointer">
                  <p className="text-black text-sm">Follow</p>
                </button>
              </div>
            </div>
          </template>
          <div id="followpersoncontainer" className="flex flex-col gap-6">
          </div>
          <button className="w-fit rounded-lg py-1 px-2 cursor-pointer">
            <p className="text-xs text-gray-200 hover:text-gray-300">Discover more people</p>
          </button>
    </div>
  )
}

export default PeopleToFollow