import './App.css'

function App() {

  return (
    <section className='relative flex flex-col gap-2 p-4'>
      <nav className="flex justify-between w-full items-center">
        <div className="flex gap-1 items-center card-bg py-1 px-2 rounded-lg cursor-pointer">
          <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
            <path
              d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
          </svg>
          <p className="text-white tracking-widest">PIPPER</p>
        </div>
        <button className="flex gap-2 h-fit cursor-pointer items-center card-bg py-1 px-3 border border-slate-500 rounded-lg">
          <img className="rounded-full" src="https://api.dicebear.com/9.x/personas/svg?seed=Felix&backgroundColor=ffdfbf"
            height="30" width="30" alt="user portrait" />
          <p className="text-gray-200 text-sm">Felix Baumgartner</p>
          <svg width="10" height="10" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
              fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        </button>
      </nav>
      {/* <!-- Main section --> */}
      <section className="grid grid-cols-12 gap-4 grid-rows-6 h-[calc(100vh-100px)]">
        {/* <!-- Profile card --> */}
        <div id="profilecard"
          className="group relative card-bg gap-4 flex flex-col items-center p-8 col-span-3 row-span-3 rounded-2xl">
          {/* <!-- Absolute positioned banner --> */}
          <img src="/img/bg-space.jpeg" className="absolute object-cover brightness-125 top-0 w-full h-24 rounded-t-xl" />
          <img className="group-hover:-rotate-10 group-hover:-translate-y-1 transition-transform z-10 rounded-full"
            src="https://api.dicebear.com/9.x/personas/svg?seed=Felix&backgroundColor=ffdfbf" height="80" width="80"
            alt="user portrait" />
          <h2 className="font-bold text-2xl text-white group-hover:scale-110 transition-transform">Felix baumgartner</h2>
          <p className="text-gray-400 group-hover:translate-y-1 transition-transform">@felixb</p>
          <p className="text-center text-white group-hover:translate-y-1 transition-transform">I love making pips
            about the things that I find interesting</p>
          <div className="flex gap-8 text-center group-hover:translate-y-1 transition-transform">
            <div className="flex flex-col gap-2">
              <p className="text-white">783</p>
              <p className="text-gray-400">Following</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white">251</p>
              <p className="text-gray-400">Followers</p>
            </div>
          </div>
        </div>
        {/* <!-- Create new pip section --> */}
        <div
          className="flex flex-col gap-4 justify-center card-bg col-span-6 row-span-1 p-5 border border-slate-500 rounded-2xl">
          <div className="flex gap-4 group">
            <img className="w-8 h-8 rounded-full group-hover:translate-x-1 transition-transform"
              src="https://api.dicebear.com/9.x/personas/svg?seed=Felix&backgroundColor=ffdfbf" alt="user portrait" />
            {/* <!-- Open modal when button is clicked --> */}
            <button id="pipInputField"
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
        {/* <!-- Trending pip tags --> */}
        <div className="gap-4 card-bg flex flex-col p-6 col-span-3 row-span-4 rounded-2xl">
          <h3 className="font-bold text-lg text-white">Trending pip tags</h3>
          <p className="text-gray-400">Trending in Austria</p>
          <div id="pipTagContainer" className="flex flex-col gap-4">
            {/* <!-- Individal tag group queryselector gets them by classNamename and sets values --> */}
            <template id="pipTagTemplate">
              <div className="flex gap-6 items-center justify-between">
                <p className="text-2xl text-white">#</p>
                <div className="flex flex-col">
                  <p className="title text-sm text-white"></p>
                  <p className="numberOfPips text-gray-400 text-sm"></p>
                </div>
                <div className="flex-1 flex justify-end">
                  <button className="rounded-full py-1 px-2 cursor-pointer">
                    <p className="text-xs text-white hover:text-gray-300">See pips</p>
                  </button>
                </div>
              </div>
            </template>
          </div>
        </div>
        {/* <!-- Pips section --> */}
        <section id="pipsection" className="grid gap-2 overflow-auto h-full col-span-6 row-span-5 rounded-2xl">
          <ul id="pipcontainer" className="pipcontainer">
            {/* <!-- JavaScript function generates pips here -->
            <!-- The pipList div makes sure that there always is a html structure so that the show more button is rendered at the bottom --> */}
            <div id="pipList" className="flex flex-col gap-4">
              <template id="piptemplate">
                <li className="group flex flex-col gap-2 border border-slate-400 pip-bg rounded-2xl p-4 min-h-50 transition-colors">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center group-hover:translate-x-1 transition-transform">
                      <img className="userimage w-10 h-10 rounded-full bg-green-950 group-hover:rotate-8 transition-transform" src="" alt="avatar"/>
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
            {/* <!-- Hidden div that contains offset of the rendered pips. Needs to update each time the show more button is clicked --> */}
            <div id="nextoffset" className="hidden"></div>
          </ul>
        </section>
        {/* <!-- People to follow --> */}
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
      </section>
    </section>
  )
}

export default App
