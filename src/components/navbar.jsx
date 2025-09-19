import React from 'react'

const NavBar = () => {
  return (
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
  )
}

export default NavBar