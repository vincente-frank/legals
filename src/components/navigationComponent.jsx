import { MenuIcon, XIcon } from 'lucide-react'
import { useState } from 'react'



const NavigationComponent = () => {

    const [openMenu, setOpenMenu] = useState(false)

  return (

    <div className='fixed inset-x-0 top-0 z-50 px-4 pt-3'>

        {/* navigation component on smaller screens */}
        <section className='flex items-center justify-between
        px-4 py-2 bg-sky-600/60 rounded-3xl border border-2 border-black
        backdrop-blur-md md:hidden border-white  '
        >
            {/* the paragraph */}
            <p className='capitalize font-black font-mono tracking-widest
            text-2xl/8 text-white'
            >
                <span className='uppercase'
                >f&a</span> advocates
            </p>
            {/* the menu icon div */}
            <div className='text-white'>
                {
                    openMenu? (
                        <XIcon onClick={ ()=> setOpenMenu(!openMenu)}
                        className='cursor-pointer size-8 animate-pulse
                        duration-300 ease-in-out '
                        />
                    ): (
                        <MenuIcon onClick={ ()=> setOpenMenu(!openMenu)}
                        className='cursor-pointer size-8 animate-pulse
                        duration-300 ease-in-out '
                        />
                    )
                }
            </div>

        </section>

        {/* so long as the menu is set to open */}
            {
                openMenu && (
                    <div
                    className='h-52 bg-green-500/20 py-2 px-6 relative rounded
                    text-white '
                    >
                        <div className='absolute inset-0 backdrop-blur-xl rounded'
                        >
                            <a href="#hero"
                            onClick={ ()=> setOpenMenu(!openMenu)}
                            className='block bg-transparent px-6 py-2 capitalize
                            text-lg/8 tracking-wide '
                            >home</a>
                            <a href="#areas-of-practice"
                            onClick={ ()=> setOpenMenu(!openMenu)}
                            className='block bg-transparent px-6 py-2 capitalize
                            text-lg/8 tracking-wide '
                            >areas of practice</a>
                            <a href="#contacts"
                            onClick={ ()=> setOpenMenu(!openMenu)}
                            className='block bg-transparent px-6 py-2 capitalize
                            text-lg/8 tracking-wide '
                            >legal help</a>
                            <a href="#questions"
                            onClick={ ()=> setOpenMenu(!openMenu)}
                            className='block bg-transparent px-6 py-2 capitalize
                            text-lg/8 tracking-wide '
                            >questions</a>
                        </div>
                        
                    </div>
                )
            }

        {/* navigation on medium to larger screens */}
        <section
        className='md:flex items-center  justify-around bg-sky-600/60
        backdrop-blur-md hidden rounded-3xl border border-2 border-black
        border-white py-2 text-white '
        >
            {/* the paragraph */}
            <p className='capitalize font-black font-mono tracking-widest
            text-2xl/8'
            >
                <span className='uppercase'
                >f&a</span> advocates
            </p>

            {/* navigation links */}
            <div className='flex gap-6'
            >
                <a href="#hero"
                 className='block bg-transparent px-6 py-2 capitalize
                text-lg/8 tracking-wide '
                >home</a>

                <a href="#areas-of-practice"
                 className='block bg-transparent px-6 py-2 capitalize
                text-lg/8 tracking-wide '
                >areas of practice</a>

                <a href="#contacts"
                 className='block bg-transparent px-6 py-2 capitalize
                text-lg/8 tracking-wide '
                >legal help</a>
            </div>

        </section>

    </div>

  )

}

export default NavigationComponent
