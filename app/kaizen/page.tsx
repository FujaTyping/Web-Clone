import React from 'react'
import Hero from "@/assets/kaizen/Hero.svg"
import { BiSolidZap } from 'react-icons/bi'
import Client from "@/assets/kaizen/Client.svg"
import F1 from "@/assets/kaizen/Feature1.svg"
import F2 from "@/assets/kaizen/Feature2.svg"
import F3 from "@/assets/kaizen/Feature3.svg"
import FF1 from "@/assets/kaizen/FF1.svg"
import FF2 from "@/assets/kaizen/FF2.svg"
import U1 from "@/assets/kaizen/USR1.jpg"
import U2 from "@/assets/kaizen/USR2.jpg"
import U3 from "@/assets/kaizen/USR3.jpg"
import U4 from "@/assets/kaizen/USR4.jpg"
import U5 from "@/assets/kaizen/USR5.jpg"
import U6 from "@/assets/kaizen/USR6.jpg"
import FQ from "@/assets/kaizen/FAQ.svg"
import { FaAngleDown } from 'react-icons/fa6'
import FLOGO from "@/assets/kaizen/FLG.svg"
import Social from "@/assets/kaizen/FSocial.svg"

function page() {
    return (
        <>
            <nav className='border-b-1 border-gray-300'>
                <main className='max-w-7xl mx-auto py-4 flex items-center place-content-between'>
                    <img src={FLOGO.src} alt="Logo" className='w-28' />
                    <div className='flex items-center gap-6'>
                        <a href="#">Products</a>
                        <a href="#">Solutions</a>
                        <a href="#">Resources</a>
                        <a href="#">Pricing</a>
                    </div>
                    <div className='flex items-centet gap-4'>
                        <button className='p-2 px-3 border-1 border-gray-300 rounded-xl'>Log in</button>
                        <button className='bg-[#322144] p-2 px-3 border-1 border-gray-300 rounded-xl text-white'>Get a demo</button>
                    </div>
                </main>
            </nav>
            <section className='bg-gradient-to-b from-teal-[#f3f4fe] to-[#e0e5fd]'>
                <main className='max-w-7xl mx-auto mt-14'>
                    <section className='flex items-center justify-center flex-col gap-6'>
                        <div className='flex items-center gap-2 p-2 px-3 rounded-full border-2 border-gray-400'>
                            <BiSolidZap className='text-[#7567ed]' />
                            <p>Streamline your workflow with ease</p>
                        </div>
                        <h1 className='font-bold text-5xl text-center'>All you need for seamless<br />project management</h1>
                        <p className='text-gray-500 max-w-lg text-center'>Empower your team with an intuitive project management tool that keeps your work organized and your goals in sight</p>
                        <button className='bg-[#7665fc] text-white p-2 px-3 rounded-xl'>Get started</button>
                        <img src={Hero.src} alt="Hero" className='max-w-5xl rounded-t-xl border-t-2 border-l-2 border-r-2 border-gray-300' />
                    </section>
                </main>
            </section>
            <main className='max-w-7xl mx-auto'>
                <section className='flex flex-col gap-6 py-12'>
                    <p className='text-center font-bold text-gray-500'>Helping these companies grow faster</p>
                    <img src={Client.src} alt="Client" />
                </section>
                <section className='flex flex-col items-center justify-center gap-4 py-10'>
                    <div className='flex items-center gap-2 p-2 px-3 rounded-full border-2 border-gray-400'>
                        <p>Why us</p>
                    </div>
                    <h1 className='font-bold text-4xl'>Experience the Difference</h1>
                    <p className='text-center text-gray-500'>Discover the benefits that make our platform the first choice<br />for teams striving for excellence.</p>
                    <div className='grid grid-cols-3 gap-8 mt-6'>
                        <div className='flex flex-col gap-2 rounded-xl border-2 border-gray-200 p-6'>
                            <img src={F1.src} alt="Feature" className='rounded-xl' />
                            <p className='text-[#8170dd] mt-2'>/01</p>
                            <h1 className='font-bold text-xl'>Proven Performance</h1>
                            <p>Trusted by thousands of teams worldwide for boosting productivity.</p>
                        </div>
                        <div className='flex flex-col gap-2 rounded-xl border-2 border-gray-200 p-6'>
                            <img src={F2.src} alt="Feature" className='rounded-xl' />
                            <p className='text-[#8170dd] mt-2'>/02</p>
                            <h1 className='font-bold text-xl'>Innovation Design</h1>
                            <p>An intuitive interface that majes complex project management simple.</p>
                        </div>
                        <div className='flex flex-col gap-2 rounded-xl border-2 border-gray-200 p-6'>
                            <img src={F3.src} alt="Feature" className='rounded-xl' />
                            <p className='text-[#8170dd] mt-2'>/03</p>
                            <h1 className='font-bold text-xl'>Robust Security</h1>
                            <p>Industry-leading security measures to keep your data safe and secure.</p>
                        </div>
                    </div>
                </section>
                <section className='flex flex-col items-center justify-center gap-4 py-10'>
                    <div className='flex items-center gap-2 p-2 px-3 rounded-full border-2 border-gray-400'>
                        <p>Feature</p>
                    </div>
                    <h1 className='font-bold text-4xl'>{"Elevate Your Team's Performance"}</h1>
                    <p className='text-center text-gray-500'>Unlick an all-in-one platform designed for seamless collaboration efficient task management, and boosted productivity.</p>
                    <div>
                        <div className='grid grid-cols-2 items-center py-10 border-b-1 border-gray-300'>
                            <div className='flex flex-col gap-4'>
                                <p className='text-[#8170dd]'>INSTANT SYNC</p>
                                <h1 className='font-bold text-4xl'>Real-Time Collaboration</h1>
                                <p className='max-w-sm'>Keep everyone on the same page with instant updates and shared workspaces. Keep everyone on the same page with instant updates and shared.</p>
                                <button className='bg-[#7665fc] text-white p-2 px-3 rounded-xl w-fit'>Get started</button>
                            </div>
                            <img src={FF1.src} alt="FEATURE" className='rounded-xl' />
                        </div>
                        <div className='grid grid-cols-2 items-center pt-10'>
                            <div className='flex flex-col gap-4'>
                                <p className='text-[#8170dd]'>SEAMLESS COMMUNICATION</p>
                                <h1 className='font-bold text-4xl'>In-App Messaging</h1>
                                <p className='max-w-sm'>Streamloine team communication by discussing tasks directly within the platform. Streamline team communication by discussing task direactly.</p>
                                <button className='bg-[#7665fc] text-white p-2 px-3 rounded-xl w-fit'>Get started</button>
                            </div>
                            <img src={FF2.src} alt="FEATURE" className='rounded-xl' />
                        </div>
                    </div>
                </section>
                <section className='flex flex-col items-center justify-center py-14 gap-4'>
                    <div className='flex items-center gap-2 p-2 px-3 rounded-full border-2 border-gray-400'>
                        <p>Testimonials</p>
                    </div>
                    <h1 className='font-bold text-4xl'>Trusted by Teams</h1>
                    <p className='text-center text-gray-500'>See how our platform helps organizations of all size streamline<br />their workflow and achieve real results.</p>
                    <div className='grid grid-cols-3 gap-6 drop-shadow-2xl drop-shadow-[#dde2ff]'>
                        <div className='bg-white border-2 border-gray-300 rounded-xl p-6'>
                            <p>{`"Before Kaizen, we spent hours in meeting just to get everyone on the same page. Now, tasks, discussions, and deadlines are all in one place, so we can focus on delivering results"`}</p>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src={U1.src} alt="Profile" className='rounded-full w-12' />
                                <div>
                                    <p className='font-bold text-lg'>Alex Cater</p>
                                    <p>CEO, Skyline Apps</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-gray-300 rounded-xl p-6'>
                            <p>{`"We've intergrated Kaizen into our daily operations and noticed immediate improvements in task tracking and communication. It's straightforward reliable, and fits perfectly into our existing toolset."`}</p>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src={U2.src} alt="Profile" className='rounded-full w-12' />
                                <div>
                                    <p className='font-bold text-lg'>Mia Davis</p>
                                    <p>Cretive Director, PixelPerfect</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-gray-300 rounded-xl p-6'>
                            <p>{`"Kaizen has boosted our productivity and given us a clear overview of ongoing projects. Its user-friendly design keeps our team aligned and efficient, making it an indispensable tool in our workflow.."`}</p>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src={U3.src} alt="Profile" className='rounded-full w-12' />
                                <div>
                                    <p className='font-bold text-lg'>Sarah Brown</p>
                                    <p>Operations Lead, TechNova</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-gray-300 rounded-xl p-6 h-fit'>
                            <p>{`"We love how Kaizen integrates seamlessly with our existing tool, saving us from constatnly switching platforms. Our entire team is more focused and productives."`}</p>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src={U4.src} alt="Profile" className='rounded-full w-12' />
                                <div>
                                    <p className='font-bold text-lg'>Jessica Williams</p>
                                    <p>Senior Project Manager, BrightTech</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-gray-300 rounded-xl p-6'>
                            <p>{`"Using Kaizen has truly revolutionized our workflow. The platform's intutive design and robust feature have enable us to stramline collaboration, cut down on endless metting, and ultimately boot our project turnaroundtime. Our team is more connected and motivated than ever."`}</p>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src={U5.src} alt="Profile" className='rounded-full w-12' />
                                <div>
                                    <p className='font-bold text-lg'>David Smith</p>
                                    <p>Operations Lead, InnoWorks</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border-2 border-gray-300 rounded-xl p-6 h-fit'>
                            <p>{`"Adopting Kaizen was a game-changer for our marketing department. Thereal-time collaboration and automated reminders help us cut project timeline by 30%."`}</p>
                            <div className='flex items-center gap-4 mt-4'>
                                <img src={U6.src} alt="Profile" className='rounded-full w-12' />
                                <div>
                                    <p className='font-bold text-lg'>Ryan Johnsom</p>
                                    <p>Product Managerm NextGen Solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='mt-12 bg-[#7665fc] text-white p-2 px-3 rounded-xl w-fit'>Show more</button>
                </section>
                <section className='py-14 flex items-center place-content-between'>
                    <div className='flex flex-col gap-4'>
                        <div className='w-fit flex items-center gap-2 p-2 px-3 rounded-full border-2 border-gray-400'>
                            <p>FAQs</p>
                        </div>
                        <img src={FQ.src} alt="FAQLogo" className='w-48' />
                        <h1 className='font-bold text-4xl'>Need Help?</h1>
                        <p className=' text-gray-500'>Find clear answer to most common questions to help<br />you navigate our platform.</p>
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <div className='flex items-center p-3 border-2 border-gray-200 rounded-xl place-content-between px-6 py-4 gap-32'>
                            <p className='font-bold'>How does the platform scale with growing teams?</p>
                            <FaAngleDown />
                        </div>
                        <div className='flex items-center p-3 border-2 border-gray-200 rounded-xl place-content-between px-6 py-4  gap-32'>
                            <p className='font-bold'>What advenced security measures do you have in place?</p>
                            <FaAngleDown />
                        </div>
                        <div className='flex items-center p-3 border-2 border-gray-200 rounded-xl place-content-between px-6 py-4 gap-32'>
                            <p className='font-bold'>What analytics and reporting capabilities does the platform offers?</p>
                            <FaAngleDown />
                        </div>
                        <div className='flex items-center p-3 border-2 border-gray-200 rounded-xl place-content-between px-6 py-4 gap-32'>
                            <p className='font-bold'>How do intergrations work with third-party tools?</p>
                            <FaAngleDown />
                        </div>
                        <div className='flex items-center p-3 border-2 border-gray-200 rounded-xl place-content-between px-6 py-4 gap-32'>
                            <p className='font-bold'>Can I customize workflowes to match our unique processes?</p>
                            <FaAngleDown />
                        </div>
                    </div>
                </section>
                <section className='text-white bg-[#251435] flex flex-col items-center justify-center rounded-xl py-8 gap-4 my-14'>
                    <h1 className='font-bold text-4xl'>Elevate Your Work Today</h1>
                    <p className='text-center'>Discover the secret behind thriving teams-experience seamless<br />projects and unstoppable productivity.</p>
                    <button className='bg-[#7665fc] text-white p-2 px-3 rounded-xl w-fit'>Get started</button>
                </section>
            </main>
            <footer className='max-w-7xl mx-auto py-14'>
                <div className='flex items-start place-content-between'>
                    <div>
                        <img src={FLOGO.src} alt="Logo" />
                        <p className='mt-2'>Empower your team with an intuitive project<br />managemnt tool that keeps your work organized.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-bold text-xl'>General</p>
                        <a href="#">Home</a>
                        <a href="#">Feature</a>
                        <a href="#">Pricing</a>
                        <a href="#">Blog</a>
                        <a href="#">Testimonials</a>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-bold text-xl'>Support</p>
                        <a href="#">Help Center</a>
                        <a href="#">Live Chat</a>
                        <a href="#">Community</a>
                        <a href="#">FAQ</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>Follow us</h1>
                        <img className='mt-2' src={Social.src} alt="Social" />
                    </div>
                </div>
            </footer>
            <section className='border-t-1 border-gray-300'>
                <main className='max-w-7xl mx-auto py-4 flex items-center place-content-between'>
                    <p>© 2025 Kaizen Inc.</p>
                    <div className='flex items-center gap-4'>
                        <a href="#">Terms of service</a>
                        <a href="#">Privacy policy</a>
                    </div>
                </main>
            </section>
        </>
    )
}

export default page