import { persons } from '../data'

const PeopleToFollow = () => {
  return (
    // TODO: Create followed state that changes color to green/etc and text to "Followed" based on the user click on a specific button - maybe Id.
    <div className="gap-6 flex flex-col p-6 col-span-3 row-span-3 card-bg rounded-2xl">
          <h3 className="font-bold text-lg text-white">People you might want to follow</h3>
          {persons.map(({id, name, handle, avatar}) => (
            <div key={id} className="flex gap-4 items-center">
              <img src={avatar} height="40" width="40" alt="user portrait" />
              <div className="flex flex-col gap-1">
                <p className="text-sm text-white">{name}</p>
                <p className="text-gray-400 text-sm">{handle}</p>
              </div>
              <div className="flex justify-end flex-1">
                <button className="followbutton bg-white rounded-lg py-1 px-2 hover:bg-slate-300 cursor-pointer">
                  <p className="text-black text-sm">Follow</p>
                </button>
              </div>
            </div>
            
          ))}
          <button className="w-fit rounded-lg py-1 px-2 cursor-pointer">
            <p className="text-xs text-gray-200 hover:text-gray-300">Discover more people</p>
          </button>
    </div>
  )
}

export default PeopleToFollow