import { MailIcon, MessageCircle, PhoneIcon } from 'lucide-react'

const FooterComponent = () => {

  return (

    <div>
        {/* actual footer section */}
        <section>
            {/* footer textual div content */}
            <div className='bg-black/40 py-8 px-6 grid grid-cols-1
            items-center gap-y-8 md:grid-cols-2 md:items-start'>
            {/* the heading */}
            <h1 className='text-4xl leading-[2.5rem] tracking-widest
            font-black font-mono capitalize py-2 '>
            <span className='uppercase text-5xl'>f&a</span> advocates
            </h1>

            {/* quick links and contacts div container */}
            <div className='grid grid-cols-1 items-center gap-y-6
            md:grid-cols-2 gap-x-6'>
                {/* quick links div container */}
                <div>
                    {/* the heading */}
                    <p className='capitalize text-xl/8 font-medium
                    font-mono border-b-2 border-white/50 inline'>
                    quick links</p>
                    {/* link to home */}
                    <a href="#hero"
                     className='block capitalize text-lg/8 py-1'
                    >home</a>
                    {/* link to areas of practice */}
                    <a href="#areas-of-practice"
                     className='block capitalize text-lg/8 py-1'
                    >areas of practice</a>
                    {/* link to contacts */}
                    <a href="#contacts"
                     className='block capitalize text-lg/8 py-1'
                    >legal help</a>
                </div>
                {/* contacts div container */}
                <div>
                    {/* the heading */}
                    <p className='capitalize text-xl/8 font-medium
                    font-mono border-b-2 border-white/50 inline'>
                    our contacts</p>
                    {/* email div container */}
                    <div className='flex items-center justify-start gap-x-3
                    py-1'>
                        <MailIcon className='size-6'/>
                        <p>faadvocates01@gmail.com</p>
                    </div>
                    {/* phone div container */}
                    <div className='flex items-center justify-start gap-x-3
                    py-1'>
                        <PhoneIcon className='size-6'/>
                        <p>+255 759 436 036</p>
                    </div>
                    {/* phone div container */}
                    <div className='flex items-center justify-start gap-x-3
                    py-1'>
                        <MessageCircle className='size-6'/>
                        <p>+255 758 134 146</p>
                    </div>
                </div>
            </div>

            </div>

            {/* footer image div container */}
            <div>
                {/* footer image */}
                <img src="/justice.webp" alt="footer image"
                className='object-cover object-center saturate-200
                w-full aspect-square h-[20rem] md:object-top'
                />
            </div>
        </section>
    </div>

  )

}

export default FooterComponent
