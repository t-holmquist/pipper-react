import React from 'react'

const ProfileCard = () => {
    return (
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
    )
}

export default ProfileCard