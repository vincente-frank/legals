import { useLayoutEffect, useRef, useState } from 'react'
import NavigationComponent from './navigationComponent'
import { ChevronDown, PlusIcon } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { counselTeam } from '../utilities/team'
import { questions } from '../utilities/questions'
import FooterComponent from './footerComponent'
import { useForm } from '@formspree/react'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {

    const pageRef = useRef(null)
    const [answer, setAnswer] = useState(null)
    const [active, setActive] = useState(0)
    // handling form submit via formspree
    const [state, handleSubmit] = useForm("mvkolyep")
    const counsel = counselTeam[active]

    useLayoutEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const context = gsap.context(() => {
            const sections = gsap.utils.toArray('section', pageRef.current)

            sections.forEach((section) => {
                const children = Array.from(section.children).filter(
                    (child) => !child.classList.contains('absolute'),
                )

                gsap.from(children, {
                    autoAlpha: 0,
                    y: 80,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.5,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 75%',
                        once: true,
                    },
                })
            })
        }, pageRef)

        return () => context.revert()
    }, [])

  return (

    <div ref={pageRef}>

        <NavigationComponent/>

        {/* hero section */}
        <section id = "hero"
        className='bg-[url("/law8.webp")] bg-cover bg-center bg-fixed
        min-h-screen h-auto relative p-6 pt-24 md:pt-28 clip scroll-mt-24 '
        >
            {/* the over lay div */}
            <div className='absolute inset-0 bg-black/40'
            ></div>
            {/* the content div */}
            <div className='relative font-mono text-white'
            >
                {/* the centered text div container */}
                <div className='pt-12 font-mono md:pt-[8rem] '
                >
                    {/* the heading */}
                    <h1 className='font-black text-3xl tracking-widest
                    leading-[2.5rem] py-2 md:text-5xl '
                    >Clarity in complexity.</h1>
                    {/* the heading */}
                    <p className='capitalize text-3xl leading-[2.5rem] font-medium
                    tracking-widest pr-[8rem] py-2 md:text-5xl md:pt-6 '
                    >
                        <span className='italic font-black'
                        >confidence</span> in every ease.
                    </p>

                    {/* description or sub title */}
                    <p className='text-lg/8 py-6 md:text-xl md:leading-[2.6rem] '
                    >
                        We provide strategic legal counsel to individuals,
                        businesses, <br />  and institutions navigating their most
                        important decisions.
                    </p>
                    {/* schedule consultation buttonn */}
                    <a href='#contacts'
                    className=' bg-yellow-600/70 px-3 py-2 uppercase font-[100]
                    tracking-widest text-lg my-2 '
                    >schedule a consultation</a>
                </div>

            </div>

        </section>

        {/* built on experience section */}
        <section id = "experience"
        className='pt-12 px-6 pb-6 font-mono text-black '
        >
            {/* experience label */}
            <p className='bg-yellow-700/70 px-2 py-1 inline uppercase
            tracking-widest text-white'
            >built on experience</p>
            {/* expereince heading */}
            <p className=' pt-3 text-2xl leading-[2.5rem] font-black
            tracking-wide pb-2 md:pt-8 '
            >
                Exceptional legal counsel begins with <br /> understanding
                what is at stake.
            </p>
            {/* at the law */}
            <p className='text-lg/8 py-2'
            >
                At <span className='capitalize'>
                    <span className='uppercase font-bold'>f&a</span> advocates</span>, the best strategy starts with
                listening. We take time to understand your situation fully, <br />
                before offering counsel, because the right advice requires
                complete understanding.
            </p>

            {/* count div container */}
            <div className='py-6 grid grid-cols-1 items-center gap-y-6
            md:grid-cols-3 md:gap-x-12 md:pt-[3rem] '
            >
                {/* years of experience div container */}
                <div>
                    <div className='flex items-center justify-start md:justify-center '
                    >
                        <p className='text-5xl font-black'>5</p>
                        <PlusIcon className='size-12 p-2'/>
                    </div>
                    <p className='py-2 uppercase tracking-widest md:text-center'
                    >years of experience</p>
                </div>
                {/* represented cases div container */}
                <div>
                    <div className='flex items-center justify-start md:justify-center '>
                        <p className='text-5xl font-black'>500</p>
                        <PlusIcon className='size-12 p-2'/>
                    </div>
                    <p className='py-2 uppercase tracking-widest md:text-center'
                    >cases represented</p>
                </div>
                {/* practice areas div container */}
                <div>
                    <div className='flex items-center justify-start md:justify-center '>
                        <p className='text-5xl font-black'>12</p>
                        <PlusIcon className='size-12 p-2'/>
                    </div>
                    <p className='py-2 uppercase tracking-widest md:text-center'
                    >areas of practice</p>
                </div>
            </div>

        </section>

        {/* where experience meets strategy or area of practice */}
        <section id = "areas-of-practice"
        className='p-6 font-mono text-black bg-black/10 scroll-mt-24'
        >
            {/* the heading */}
            <p className='text-3xl leading-[2.5rem] font-black
            capitalize pt-6 pb-2 '
            >where experience meets strategy</p>
            {/* the sub heading */}
            <p className='text-lg/8 py-2'
            >
                We provide specialised legal expertise across a broad range
                of practice areas, bringing focused knowledge, <br /> and strategic
                thinking to every matter we undertake.
            </p>
            {/* areas of practice div container */}
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-y-12
            gap-x-8 pt-12'
            >
                {/* civil and criminal matters div  */}
                <div className='md:col-span-2'>
                    {/* heading */}
                    <h3 className='capitalize text-2xl/8 py-2'
                    >civil and criminal matters</h3>
                    {/* description */}
                    <p className='pt-2 pb-6 text-lg/8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere voluptates animi nisi aperiam beatae tenetur id
                    consectetur fugit omnis et error ex repellat deserunt
                    dignissimos, ullam ab! Doloribus, pariatur. <br />
                    A error id doloribus tenetur hic quia perspiciatis dignissimos,
                    voluptatem consequuntur eius ad inventore ipsam consectetur fuga.
                    Deleniti dolorum praesentium nostrum.
                    </p>
                    {/* contact us button */}
                    <a href="#contacts"
                     className='bg-yellow-700/70 px-2 py-1 text-lg/8
                    uppercase text-white outline outline-2 outline-yellow-700/70
                    outline-offset-2 tracking-wider'
                    >we are here to help</a>
                </div>
                {/* land and property matters div  */}
                <div>
                    {/* heading */}
                    <h3 className='capitalize text-2xl/8 py-2'
                    >land and property matters</h3>
                    {/* description */}
                    <p className='pt-2 pb-6 text-lg/8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem, omnis eius commodi pariatur, error dolorem
                        quam quae sequi quos fugit placeat ratione repudiandae
                        ad deserunt recusandae labore temporibus sint amet.
                    </p>
                    {/* contact us button */}
                    <a href="#contacts"
                    className='bg-yellow-700/70 px-2 py-1 text-lg/8
                    uppercase text-white outline outline-2 outline-yellow-700/70
                    outline-offset-2 tracking-wider'
                    >we protect what's your's</a>
                </div>
                {/* family and matrimonial matters div  */}
                <div>
                    {/* heading */}
                    <h3 className='capitalize text-2xl/8 py-2'
                    >probate and matrimonial matters</h3>
                    {/* description */}
                    <p className='pt-2 pb-6 text-lg/8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem, omnis eius commodi pariatur, error dolorem
                        quam quae sequi quos fugit placeat ratione repudiandae
                        ad deserunt recusandae labore temporibus sint amet.
                    </p>
                    {/* contact us button */}
                    <a href="#contacts"
                    className='bg-yellow-700/70 px-2 py-1 text-lg/8
                    uppercase text-white outline outline-2 outline-yellow-700/70
                    outline-offset-2 tracking-wider'
                    >let us stand together</a>
                </div>
                {/* commercial and corporate law div  */}
                <div>
                    {/* heading */}
                    <h3 className='capitalize text-2xl/8 py-2'
                    >commercial and corporate law</h3>
                    {/* description */}
                    <p className='pt-2 pb-6 text-lg/8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem, omnis eius commodi pariatur, error dolorem
                        quam quae sequi quos fugit placeat ratione repudiandae
                        ad deserunt recusandae labore temporibus sint amet.
                    </p>
                    {/* contact us button */}
                    <a href="#contacts"
                    className='bg-yellow-700/70 px-2 py-1 text-lg/8
                    uppercase text-white outline outline-2 outline-yellow-700/70
                    outline-offset-2 tracking-wider'
                    >let us guide you</a>
                </div>
                {/* legal consultancy and representation div  */}
                <div>
                    {/* heading */}
                    <h3 className='capitalize text-2xl/8 py-2'
                    >legal consultancy and representation</h3>
                    {/* description */}
                    <p className='pt-2 pb-6 text-lg/8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem, omnis eius commodi pariatur, error dolorem
                        quam quae sequi quos fugit placeat ratione repudiandae
                        ad deserunt recusandae labore temporibus sint amet.
                    </p>
                    {/* contact us button */}
                    <a href="#contacts"
                    className='bg-yellow-700/70 px-2 py-1 text-lg/8
                    uppercase text-white outline outline-2 outline-yellow-700/70
                    outline-offset-2 tracking-wider'
                    >schedule consultation</a>
                </div>

            </div>

        </section>

        {/* decisions made with confidence section */}
        <section id = "decisions"
        className='p-6 font-mono text-black grid items-center
        grid-cols-1 md:grid-cols-2 md:pt-24'
        >
            {/* decisions div container */}
            <div className='pb-6'>
                {/* the heading */}
                <h2 className='text-2xl capitalize font-black
                tracking-widest leading-[2.5rem] pt-14 pb-2 '
                >decisions made with confidence</h2>
                {/* the description */}
                <p className='text-lg/8 pt-2 pb-6'>
                    We help companies of all sizes navigate contracts, transactions,
                    disputes, and the strategic decisions that define their future.
                    Our corporate practice combines deep commercial understanding
                    with precise legal execution.
                </p>
                {/* explore our corporate laws */}
                <a href="#contacts"
                className='uppercase text-lg tracking-widest px-2
                py-1 bg-yellow-700/70 outline outline-2 outline-offset-2
                outline-yellow-700/70 text-white'
                >you can trust us</a>
            </div>
            {/* decision image container div */}
            <div className='pb-6'>
                {/* the image */}
                <img src="/justice.webp" alt="lady justice statue"
                className='w-full rounded object-cover object-center cursor-pointer
                shadow shadow-xl shadow-black/40'
                />
            </div>
        </section>

        {/* your counsel should be section */}
        <section className='p-6 font-mono bg-[url("/justice2.webp")]
        bg-cover bg-center bg-fixed relative text-white '
        >
            {/* black overlay div container */}
            <div className='absolute inset-0 bg-black/40 backdrop-blur-3xl'
            ></div>
            {/* content div container */}
            <div className='relative pt-12'>
            {/* the headings */}
            <h1 className='capitalize font-black text-3xl tracking-widest
            leading-[2.5rem] '
            >legal problems are rarely simple.</h1>
            <h1 className='capitalize font-black text-2xl tracking-widest
            leading-[2.5rem] '
            >
                <span className='text-yellow-700/70 italic'
                >Your counsel</span> should be.
            </h1>
            {/* counsel div continer */}
            <div className='pt-8 pb-6 grid grid-cols-1 gap-y-12
            md:grid-cols-4 gap-x-8 items-center '
            >
                {/* strategic thinking div container */}
                <div>
                    {/*  the number */}
                    <p className='text-6xl font-black text-white/10 py-2
                     tracking-widest'>01</p>
                    {/* the title */}
                    <p className='py-2 capitalize text-2xl font-medium'
                    >strategic thinking</p>
                    {/* description */}
                    <p className='text-lg/8 py-2'>
                        Every case is approcahed as a strategic challenge, not just a
                        legal problem. We think several steps ahead.
                    </p>
                </div>
                {/* deep expertise div container */}
                <div>
                    {/*  the number */}
                    <p className='text-6xl font-black text-white/10 py-2
                     tracking-widest'>02</p>
                    {/* the title */}
                    <p className='py-2 capitalize text-2xl font-medium'
                    >deep expertise</p>
                    {/* description */}
                    <p className='text-lg/8 py-2'>
                        Decades of focused practice across specialised areas means we
                        understand the nuances that matter most.
                    </p>
                </div>
                {/* clear communication div container */}
                <div>
                    {/*  the number */}
                    <p className='text-6xl font-black text-white/10 py-2
                     tracking-widest'>03</p>
                    {/* the title */}
                    <p className='py-2 capitalize text-2xl font-medium'
                    >clear communication</p>
                    {/* description */}
                    <p className='text-lg/8 py-2'>
                        We translate complexity into clarity. You always know where you
                        stand and what comes next.
                    </p>
                </div>
                {/* relentless advocacy div container */}
                <div>
                    {/*  the number */}
                    <p className='text-6xl font-black text-white/10 py-2
                     tracking-widest'>04</p>
                    {/* the title */}
                    <p className='py-2 capitalize text-2xl font-medium'
                    >relentless advocacy</p>
                    {/* description */}
                    <p className='text-lg/8 py-2'>
                        Your interests are our priority. We pursue the best
                        possible outcome with tenacity and precision.
                    </p>
                </div>
            </div>

            </div>

        </section>

        {/* counsel team section */}
        <section id = "counsel"
        className='p-6 font-mono text-black'>
            {/* the heading */}
            <h1 className='font-black capitalize text-3xl tracking-wider
            pt-8 pb-2 leading-[2.9rem] '>
                meet the people <br /> behind the counsel.
            </h1>
            {/* counsel team div container */}
            <div className='flex items-center justify-start flex-col
            md:flex-row gap-x-12 md:items-start
            '>
                {/* counsel team image continer */}
                <div className='py-6'>
                    {/* counsel image */}
                    <img src= {counsel.picture} alt= {counsel.name}
                    className='rounded object-cover object-center
                    cursor-pointer'
                    />
                </div>
                {/* counsel team details container */}
                <div>
                    {/* counsel name */}
                    <p className=' capitalize text-lg/8 py-1
                    '>{counsel.name}</p>
                    {/* counsel role */}
                    <p className='uppercase text-lg/8 font-bold tracking-wider
                    '> {counsel.role} </p>
                    {/* counsel biography */}
                    <p className='text-lg/8'> {counsel.biography} </p>
                    {/* the onclick image changing logic div container */}
                    <div className='flex items-center justify-start
                    gap-x-6'>
                        { counselTeam.map( (team, index) => {
                            return (
                                <div>
                                    <img src = {team.picture} alt = {team.name}
                                    key = {index}  onClick={ ()=> setActive(index)}
                                    className={`aspect-square rounded-full object-cover
                                    object-center cursor-pointer size-12 my-4
                                    ${active === index?"brightness-110 scale-110":"brightness-50"}`}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </section>

        {/* work itself section */}
        <section className='pt-6 px-6 pb-12 font-mono'>
            {/* the heading */}
            <h1 className='font-black text-3xl leading-[2.5rem]
            tracking-widest uppercase pt-8 pb-2 '
            >work that speaks for itself</h1>
            {/* three pillars div container */}
            <div className='pt-4 grid grid-cols-1 md:grid-cols-3 items-center
            gap-y-12 gap-x-8 '
            >
                {/* integrity div container */}
                <div>
                    <h1 className='font-medium text-2xl leading-[2.5rem]
                    tracking-widest capitalize px-2 py-1 '
                    >integrity</h1>
                    <p className='py-2 text-lg/8 '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quidem inventore exercitationem atque.
                    </p>
                </div>
                {/* justice div container */}
                <div>
                    <h1 className='font-medium text-2xl leading-[2.5rem]
                    tracking-widest capitalize px-2 py-1 '
                    >justice</h1>
                    <p className='py-2 text-lg/8 '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quidem inventore exercitationem atque.
                    </p>
                </div>
                {/* compassion div container */}
                <div>
                    <h1 className='font-medium text-2xl leading-[2.5rem]
                    tracking-widest capitalize px-2 py-1 '
                    >compassion</h1>
                    <p className='py-2 text-lg/8 '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quidem inventore exercitationem atque.
                    </p>
                </div>
            </div>
        </section>

        {/* frequently asked questions section */}
        <section id = "questions"
        className='p-6 grid grid-cols-1 items-center scroll-mt-24
        md:grid-cols-2 gap-y-8 gap-x-6 '>
            {/* faq heading div connainer */}
            <div className='pb-6'>
                {/* the label */}
                <p className='uppercase font-medium  text-yellow-700/70
                 text-lg/8 py-2'>faq</p>
                {/* the heading */}
                <p className='capitalize text-3xl leading-[2.5rem] py-2
                font-black tracking-widest '
                >frequently <br /> asked questions</p>
                {/* the description */}
                <p className='pt-2 pb-6 text-lg/8 text-black/80'>
                    Can't find the answer? Send us a message
                    and we'll get back to you
                </p>
                {/* link */}
                <a href="#contacts"
                className='bg-yellow-700/70 uppercase text-white font-medium
                px-2 py-1 font-mono tracking-widest text-lg/8 '
                >send us a message</a>
            </div>
            {/* faq div container */}
            <div>
                {/* let map through the questions array */}
                {questions.map( (question, index) => {
                    return (
                        <div key={index}>
                        {/* holding the question and icon */}
                            <div className='flex items-centr justify-between
                            py-2'>
                                {/* the question */}
                                <p className='text-lg/8'> {question.question} </p>
                                {/* chevron icon */}
                                <ChevronDown className='cursor-pointer text-yellow-700
                                size-10 '
                                onClick={ ()=> setAnswer(answer === index? null: index) }
                                />
                            </div>
                            {/* the answer part */}
                            {answer === index && (
                                <div>
                                    <p className='text-lg/8 py-2  border-b-2
                                    border-b-black rounded'
                                    > {question.answer} </p>
                                </div>
                            )}


                        </div>
                        )
                    })}
            </div>
        </section>

        {/* ability section */}
        <section className='bg-black/20 text-center font-mono
        py-12 font-black  text-lg/8 italic'
        >
            "
            <p>
            Our ability to simpliify complex issues <br />
            gives us the confidence to move  <br />
            forward.
            </p>
        </section>

        {/* next decision section */}
        <section
        className='p-6 h-auto bg-[url("/law4.webp")]
        bg-cover bg-center bg-fixed relative '
        >
            {/* black overlay div */}
            <div className='absolute inset-0 bg-black/40'
            ></div>
            {/* content div container */}
            <div className='relative font-mono text-white flex items-start
            justify-center flex-col py-24'>
                {/* the heading */}
                <h1 className='text-3xl font-black tracking-widest
                leading-[2.5rem] py-2 md:text-5xl md:leading-[3.5rem] '>
                    Your next decision <br /> deserves <br />
                    the right counsel.
                </h1>
                <p className='text-lg/8 pt-2 pb-6'>
                    Speak with our team about your legal <br /> matter.
                </p>
                <a href="#contacts"
                className='bg-yellow-700/70 px-2 py-1 outline outline-offset-2
                outline-2 uppercase font-bold tracking-widest text-lg'
                >schedule a consultation</a>
            </div>
        </section>

        {/* contact us section */}
        <section  id = "contacts" className='p-6 scroll-mt-24 '>
            {/* the heading */}
                <h1 className='text-3xl font-black tracking-widest py-6
                leading-[2.5rem] py-2 md:text-5xl md:leading-[3.5rem] '>
                    Feel free to contact us <br /> at anypoint.
                </h1>
                <p className='text-lg/8 pt-2 pb-6'>
                    Speak with our team about your legal <br /> matter today.
                </p>
            {/* image and contact form div container */}
            <div className='grid grid-cols-1 items-center md:grid-cols-2
            md:items-end gap-x-0'>
            {/* image div container */}
            <div className='md:w-5/5 md:pl-16'>
                <img src="/justice2.webp" alt=" justice image"
                className='rounded shadow shadow-yellow-700/70 shadow-xl
                aspect-square object-cover object-center w-full md:size-[65%]'
                />
            </div>
            {/* contact form div container */}
            <div className='pt-8 md:w-5/5 md:pr-16'>
                <form onSubmit={handleSubmit}>
                {/* full name input field */}
                <input type="text"placeholder='full name'
                name='name' required
                className='placeholder:text-black placeholder:font-black
                placeholder:uppercase placeholder:text-lg/8  w-full  saturate-200
                placeholder:tracking-widest bg-transparent my-3 px-2 py-1 text-lg/8
                outline-none border-b-2 border-yellow-700/70 rounded md:mt-0 '
                 />
                {/* email input field */}
                <input type="email" placeholder='email address'
                name='email' required
                className='placeholder:text-black placeholder:font-black
                placeholder:uppercase placeholder:text-lg/8  w-full  saturate-200
                placeholder:tracking-widest bg-transparent my-3 px-2 py-1 text-lg/8
                outline-none border-b-2 border-yellow-700/70 rounded '
                 />
                {/* phone number input field */}
                <input type="tel" placeholder='phone number'
                name='phone' required
                className='placeholder:text-black placeholder:font-black
                placeholder:uppercase placeholder:text-lg/8  w-full  saturate-200
                placeholder:tracking-widest bg-transparent my-3 px-2 py-1 text-lg/8
                outline-none border-b-2 border-yellow-700/70 rounded '
                 />
                {/* message text area field */}
                <textarea name="message" id="message" required
                placeholder='tell us about your legal matter...'
                className='placeholder:text-black placeholder:font-black
                placeholder:uppercase placeholder:text-lg/8  w-full  saturate-200
                placeholder:tracking-widest bg-transparent my-3 px-2 py-1 text-lg/8
                outline-none border-b-2 border-yellow-700/70 rounded '
                 ></textarea>
                 {/* submit button */}
                 <button type='submit' disabled = {state.submitting}
                 className='bg-yellow-700/70 px-2 py-1 uppercase font-bold
                 tracking-widest text-lg text-white my-3 '
                 > {state.submitting ? "Submitting..." : "Sumbit"} </button>
                </form>
                {/* a succesfull message */}
                {state.succeeded && (
                    <p className="mt-4 text-green-700 font-bold">
                     Your message has been sent successfully! </p>
                )}
                {/* in case of errors */}
                {state.errors && ( 
                    <p className="mt-4 text-red-700 font-bold">
                    Something went wrong. Please try again. </p> )}
            </div>
            </div>
        </section>

        {/* footer section */}
        <section>
            <FooterComponent/>
        </section>

    </div>

  )

}

export default Home
