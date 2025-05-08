"use client"

import React from 'react'
import Hero from "@/assets/miro/VDO.svg"
import AIC from "@/assets/miro/cursor-ai.svg"
import RC from "@/assets/miro/rad-cursor.svg"
import RCC from "@/assets/miro/roger-cursor.svg"
import Clients from "@/assets/miro/Clients.svg"
import Hero2 from "@/assets/miro/Hero2.svg"
import Hero3 from "@/assets/miro/Hero3.svg"
import { motion } from "motion/react"
import Hero4 from "@/assets/miro/Hero4.svg"
import { FaAngleDown, FaAngleUp, FaFacebook, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import ACC from "@/assets/miro/Accodien.svg"
import G1 from "@/assets/miro/Grid1.svg"
import G2 from "@/assets/miro/Grid2.svg"
import G3 from "@/assets/miro/Grid3.svg"
import F1 from "@/assets/miro/F1.png"
import F2 from "@/assets/miro/F2.png"
import F3 from "@/assets/miro/F3.png"
import F4 from "@/assets/miro/F4.png"
import F5 from "@/assets/miro/F5.png"
import { LuCircleArrowOutUpRight, LuGlobe } from 'react-icons/lu'
import FI from "@/assets/miro/FooterHero.svg"
import FL from "@/assets/miro/Footericon.svg"
import Play from "@/assets/miro/Gplay.svg"
import Appstore from "@/assets/miro/Appstore.svg"
import { RiInstagramFill } from 'react-icons/ri'
import Logo from "@/assets/miro/Logo.svg"

function page() {
    return (
        <>
            <main className='bg-[#fbf7f1]'>
                <div className='bg-[#ffdd33] py-3 flex items-center justify-center gap-4'>
                    <p>Go from idea to impact, faster than ever — with the latest Miro features.</p>
                    <button className='bg-black p-1 px-3 text-white rounded-md'>Watch now</button>
                </div>
                <nav className='max-w-7xl mx-auto bg-white rounded-xl shadow-md flex items-center place-content-between px-8 py-4 sticky top-8 z-10 my-6'>
                    <div className='flex items-center gap-6'>
                        <img src={Logo.src} alt="Logo" />
                        <a href="#">Product</a>
                        <a href="#">Solutions</a>
                        <a href="#">Resources</a>
                        <a href="#">Pricing</a>
                    </div>
                    <div className='flex items-center gap-6'>
                        <a href="#">Contact Sales</a>
                        <button className='bg-white p-1 px-3 rounded-md border-1 border-gray-300'>Login</button>
                        <button className='bg-[#506eff] p-1 px-3 text-white rounded-md border-1 border-gray-300'>Sign up free</button>
                    </div>
                </nav>
                <div className='max-w-7xl mx-auto'>
                    <section className='py-16 gap-8 flex flex-col items-center justify-center relative'>
                        <motion.div
                            animate={{
                                translateX: [0, 40, 20, 0],
                                translateY: [0, 20, 40, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                            }}
                            className='absolute top-24 left-18'
                        >
                            <img src={RCC.src} alt="Cursor" />
                        </motion.div>
                        <motion.div
                            animate={{
                                translateX: [0, -30, 20, 35, 0],
                                translateY: [0, 10, -20, 5, 0],
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                            }}
                            className='absolute top-52 left-24'
                        >
                            <img src={RC.src} alt="Cursor" />
                        </motion.div>
                        <motion.div
                            animate={{
                                translateX: [0, 30, 40, 35, -15, 0],
                                translateY: [0, -40, -20, 15, 40, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                            className='absolute top-48 right-24'
                        >
                            <img src={AIC.src} alt="Cursor" />
                        </motion.div>
                        <h1 className='font-bold text-5xl'>Innovation, redefined</h1>
                        <p className='max-w-3xl text-center'>Meet the Innovation Workspace, the AI-powered collaboration platform that helps your team build the right thing faster.</p>
                        <div className='flex flex-col gap-4'>
                            <input type="text" className='bg-white p-2 rounded-xl border-1 border-gray-300' placeholder='Enter your work email' />
                            <button className='bg-[#4a69ff] text-white p-2 px-4 rounded-xl'>Sign up free</button>
                        </div>
                        <img src={Hero.src} alt="Hero" className='mt-6 max-w-5xl border-6 rounded-xl border-[#fde050]' />
                    </section>
                </div>
                <main className='bg-white'>
                    <div className='max-w-7xl mx-auto'>
                        <section className='flex items-center justify-center flex-col gap-4 py-16'>
                            <h1 className='font-bold text-center text-3xl max-w-5xl'>More than 90M users and 250,000 companies collaborate in the Innovation Workspace.</h1>
                            <img src={Clients.src} alt="Clients" className='mt-8' />
                        </section>
                        <section className='flex items-center justify-center flex-col gap-4 py-16'>
                            <h1 className='font-bold text-center text-4xl max-w-4xl'>A better way to get from first idea to final outcome faster.</h1>
                            <img src={Hero2.src} alt="Hero" className='rounded-xl mt-8' />
                            <div className='grid grid-cols-3 mt-8 gap-8'>
                                <div className='border-t-2 border-[#7a90fe] rounded-t-xl flex flex-col gap-2 py-8 place-content-between'>
                                    <h1 className='font-bold text-2xl'>The Intelligent Canvas</h1>
                                    <p>{"Big ideas deserve room to grow. Our limitless canvas lets your team create and build together - from the first 'What if?' to the final 'Wow!' Add anything, plan everything, and watch collaboration come alive."}</p>
                                    <button className='w-fit p-2 px-4 bg-[#1c1c1e] text-white rounded-xl mt-8'>Learn more</button>
                                </div>
                                <div className='border-t-2 border-gray-300 rounded-t-xl flex flex-col gap-2 py-8 place-content-between'>
                                    <h1 className='font-bold text-2xl'>Custom-crafted to fit your needs</h1>
                                    <p>{"Power through any project with step-by-step templates that turn messy free-for-alls into super slick workflows. Then tweak and shape them until they're custom-fit for your team's needs."}</p>
                                    <button className='w-fit p-2 px-4 bg-[#1c1c1e] text-white rounded-xl mt-8'>Learn more</button>
                                </div>
                                <div className='border-t-2 border-gray-300 rounded-t-xl flex flex-col gap-2 py-8 place-content-between'>
                                    <h1 className='font-bold text-2xl'>Pure speed, no fluff</h1>
                                    <p>Focus on what matters with distraction-free formats like docs, data tables, timelines, and slides to keep your creative flow flowing. Get to work even faster by setting your favorite format as the default view when you open your board.</p>
                                    <button className='w-fit p-2 px-4 bg-[#1c1c1e] text-white rounded-xl mt-8'>Learn more</button>
                                </div>
                            </div>
                        </section>
                        <main className='bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl p-1 my-16'>
                            <section className='flex items-center gap-18 bg-white rounded-xl p-8'>
                                <div className='flex flex-col gap-6'>
                                    <h1 className='font-bold text-4xl'>Accelerate work and get more done with Miro AI</h1>
                                    <p>Unleash AI superpowers across your canvas. Breeze through boring tasks like staying on top of updates or comments with automated summaries. Transform brainstorms into polished diagrams or crisp project briefs in seconds. And create custom AI shortcuts to turn repetitive tasks into one-click wonders - giving your team more time for what truly matters.</p>
                                    <button className='w-fit p-2 px-4 bg-[#1c1c1e] text-white rounded-xl mt-8'>Learn more</button>
                                </div>
                                <img src={Hero3.src} alt="Hero" className='rounded-xl' />
                            </section>
                        </main>
                        <section className='flex items-center justify-center flex-col gap-4 py-16'>
                            <h1 className='font-bold text-center text-4xl max-w-4xl'>Make magic with your teammates</h1>
                            <p className='max-w-3xl text-center'>{"The best ideas are created when people get excited together. That's why we've made collaboration fun, easy, and engaging."}</p>
                            <img src={Hero4.src} alt="Hero" className='rounded-xl mt-8' />
                            <div className='grid grid-cols-3 mt-8 gap-8'>
                                <div className='border-t-2 border-[#7a90fe] rounded-t-xl flex flex-col gap-2 py-8'>
                                    <h1 className='font-bold text-2xl'>Meet less, achieve more</h1>
                                    <p>Share your brilliant ideas without scheduling another meeting - record a Talktrack any time and share it anywhere. Need to chat IRL? Launch a live call right on the canvas without wasting time or switching tools.</p>
                                </div>
                                <div className='border-t-2 border-gray-300 rounded-t-xl flex flex-col gap-2 py-8'>
                                    <h1 className='font-bold text-2xl'>Bring your tools together</h1>
                                    <p>Bring your favorite planning and productivity tools from Microsoft, Google, and Atlassian into Miro, and turn solo work into multiplayer action.</p>
                                </div>
                                <div className='border-t-2 border-gray-300 rounded-t-xl flex flex-col gap-2 py-8'>
                                    <h1 className='font-bold text-2xl'>Level-up the energy</h1>
                                    <p>Spark excitement with playful features that get everyone in the game - from quick-fire polls and dot voting to dynamic sliders and surprise spinners. Watch your team shift from passive observers to enthusiastic contributors.</p>
                                </div>
                            </div>
                        </section>
                        <section className='grid grid-cols-2 w-full gap-18 py-16'>
                            <div className='flex flex-col items-start justify-center'>
                                <h1 className='font-bold text-4xl'>The one place where all teams gather to build together</h1>
                                <div className='mt-6 flex flex-col gap-6'>
                                    <div className='flex flex-col gap-3 border-b-1 border-gray-300 pb-6'>
                                        <div className='flex items-center place-content-between'>
                                            <h1 className='font-bold text-xl'>Product</h1>
                                            <FaAngleUp />
                                        </div>
                                        <p>A single platform for product teams to deliver customer value faster. From strategic planning to roadmapping, product briefs, and sprints - it all lives here.</p>
                                        <button className='w-fit p-2 px-4 text-white bg-black rounded-md mt-8'>Learn more</button>
                                    </div>
                                    <div className='flex items-center place-content-between border-b-1 border-gray-300 pb-6'>
                                        <h1 className='font-bold text-xl'>UX Design & Research</h1>
                                        <FaAngleDown />
                                    </div>
                                    <div className='flex items-center place-content-between border-b-1 border-gray-300 pb-6'>
                                        <h1 className='font-bold text-xl'>Engineering</h1>
                                        <FaAngleDown />
                                    </div>
                                    <div className='flex items-center place-content-between border-b-1 border-gray-300 pb-6'>
                                        <h1 className='font-bold text-xl'>Program and Project Management</h1>
                                        <FaAngleDown />
                                    </div>
                                    <div className='flex items-center place-content-between border-b-1 border-gray-300 pb-6'>
                                        <h1 className='font-bold text-xl'>Marketing</h1>
                                        <FaAngleDown />
                                    </div>
                                    <div className='flex items-center place-content-between border-b-1 border-gray-300 pb-6'>
                                        <h1 className='font-bold text-xl'>IT</h1>
                                        <FaAngleDown />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#fde050] flex items-center justify-end rounded-xl'>
                                <img src={ACC.src} alt="Accoudien" className='rounded-l-xl' />
                            </div>
                        </section>
                        <section className='flex flex-col items-center justify-center py-16 gap-6'>
                            <h1 className='font-bold text-center text-4xl max-w-4xl'>Over 160 ways to do things your way</h1>
                            <p className='max-w-3xl text-center'>Connect your tools and close your tabs with 160+ integrations for everything from project management and task tracking to communication and data visualization. Or develop your own apps on our award-winning platform.</p>
                            <div className='grid grid-cols-2 gap-12 mt-4'>
                                <motion.div
                                    whileHover={{ scale: 1.025 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div>
                                        <img src={G1.src} alt="Grid" className='rounded-xl border-1 border-gray-300' />
                                        <div className='flex flex-col gap-4 mt-6'>
                                            <h1 className='font-bold text-2xl'>Integrations</h1>
                                            <p>Connect your favorite tools with integrations for everything from project management and task tracking to collaboration and design.</p>
                                            <button className='w-fit p-2 px-4 text-white bg-black rounded-md'>Learn more</button>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.025 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div>
                                        <img src={G2.src} alt="Grid" className='rounded-xl border-1 border-gray-300' />
                                        <div className='flex flex-col gap-4 mt-6'>
                                            <h1 className='font-bold text-2xl'>Developer portal</h1>
                                            <p>Discover tools, APIs, libraries, and documentation to develop Miro apps that businesses will love to use. Your most important work, our most comprehensive protection</p>
                                            <button className='w-fit p-2 px-4 text-white bg-black rounded-md'>Learn more</button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </section>
                        <section className='flex flex-col items-center justify-center py-16 gap-6'>
                            <h1 className='font-bold text-center text-4xl max-w-4xl'>Your most important work, our most comprehensive protection</h1>
                            <p className='max-w-3xl text-center'>{"You don't mess around when it comes to innovation. So we don't mess around when it comes to security and governance. We'll protect your IP while you focus on delivering the next big thing."}</p>
                            <div className='grid grid-cols-2 gap-12 mt-4 rounded-xl shadow-xl p-12'>
                                <div className='flex flex-col justify-center gap-6 mt-6'>
                                    <h1 className='font-bold text-2xl'>Safeguard your content</h1>
                                    <p>{"Miro offers the widest range of configurable, and native, security and governance controls. They all adapt to meet your specific requirements, no matter your organization's size or complexity."}</p>
                                    <button className='w-fit p-2 px-4 text-white bg-black rounded-md'>Learn more</button>
                                </div>
                                <div>
                                    <motion.div
                                        initial={{ translateX: 50, opacity: 0 }}
                                        whileInView={{ translateX: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <img src={G3.src} alt="Grid" />
                                    </motion.div>
                                </div>
                            </div>
                        </section >
                        <section className='flex flex-col items-center justify-center py-16 gap-6'>
                            <h1 className='font-bold text-center text-4xl max-w-4xl'>Work your way in a single, customizable platform</h1>
                            <p className='max-w-3xl text-center'>Create templates for your workflows and connect your favorite tools with 160+ integrations so that you can do things your way.</p>
                            <div className='grid grid-cols-5 gap-6'>
                                <div className='flex flex-col items-center justify-center gap-6 rounded-xl shadow-md hover:shadow-xl duration-200 p-8'>
                                    <h1 className='font-bold text-xl'>Customer Journey Mapping</h1>
                                    <img src={F1.src} alt="Feature" />
                                </div>
                                <div className='flex flex-col items-center justify-center gap-6 rounded-xl shadow-md hover:shadow-xl duration-200 p-8'>
                                    <h1 className='font-bold text-xl'>Technical Diagramming</h1>
                                    <img src={F2.src} alt="Feature" />
                                </div>
                                <div className='flex flex-col items-center justify-center gap-6 rounded-xl shadow-md hover:shadow-xl duration-200 p-8'>
                                    <h1 className='font-bold text-xl'>Wireframing</h1>
                                    <img src={F3.src} alt="Feature" />
                                </div>
                                <div className='flex flex-col items-center justify-center gap-6 rounded-xl shadow-md hover:shadow-xl duration-200 p-8'>
                                    <h1 className='font-bold text-xl'>Strategy & Planning Tool</h1>
                                    <img src={F4.src} alt="Feature" />
                                </div>
                                <div className='flex flex-col items-center justify-center gap-6 rounded-xl shadow-md hover:shadow-xl duration-200 p-8'>
                                    <h1 className='font-bold text-xl'>Process Mapping</h1>
                                    <img src={F5.src} alt="Feature" />
                                </div>
                            </div>
                        </section>
                        <section className='flex flex-col items-start py-16 gap-6'>
                            <h1 className='font-bold text-center text-4xl max-w-4xl'>Need help getting started?</h1>
                            <div className='grid grid-cols-5 gap-6'>
                                <div className='flex flex-col place-content-between gap-6 rounded-xl shadow-md hover:shadow-xl duration-200 p-8'>
                                    <span className='text-green-700 border-1 w-fit border-green-700 bg-green-200 p-1 px-2 rounded-full'>Template</span>
                                    <h1 className='font-bold text-xl'>Get started with templates</h1>
                                    <div className='flex items-end justify-end'>
                                        <button className='bg-black text-white p-2 rounded-full'><LuCircleArrowOutUpRight className='w-7 h-7' /></button>
                                    </div>
                                </div>
                                <div className='flex flex-col place-content-between gap-6 rounded-xl shadow-md hover:shadow-xl duration-200 p-8'>
                                    <span className='text-purple-700 border-1 w-fit border-purple-700 bg-purple-200 p-1 px-2 rounded-full'>Academy</span>
                                    <h1 className='font-bold text-xl'>Get started with Miro</h1>
                                    <div className='flex items-end justify-end'>
                                        <button className='bg-black text-white p-2 rounded-full'><LuCircleArrowOutUpRight className='w-7 h-7' /></button>
                                    </div>
                                </div>
                                <div className='flex flex-col place-content-between gap-6 rounded-xl shadow-md hover:shadow-xl duration-200 p-8'>
                                    <span className='text-purple-700 border-1 w-fit border-purple-700 bg-purple-200 p-1 px-2 rounded-full'>Academy</span>
                                    <h1 className='font-bold text-xl'>Crate with AI</h1>
                                    <div className='flex items-end justify-end'>
                                        <button className='bg-black text-white p-2 rounded-full'><LuCircleArrowOutUpRight className='w-7 h-7' /></button>
                                    </div>
                                </div>
                                <div className='flex flex-col place-content-between gap-6 rounded-xl shadow-md hover:shadow-xl duration-200 p-8'>
                                    <span className='text-pink-700 border-1 w-fit border-pink-700 bg-pink-200 p-1 px-2 rounded-full'>News</span>
                                    <h1 className='font-bold text-xl'>Introducing the Innovation..</h1>
                                    <div className='flex items-end justify-end'>
                                        <button className='bg-black text-white p-2 rounded-full'><LuCircleArrowOutUpRight className='w-7 h-7' /></button>
                                    </div>
                                </div>
                                <div className='flex flex-col place-content-between gap-6 rounded-xl shadow-md hover:shadow-xl duration-200 p-8'>
                                    <span className='text-orange-700 border-1 w-fit border-orange-700 bg-orange-200 p-1 px-2 rounded-full'>Blog</span>
                                    <h1 className='font-bold text-xl'>Browse the Miro blog</h1>
                                    <div className='flex items-end justify-end'>
                                        <button className='bg-black text-white p-2 rounded-full'><LuCircleArrowOutUpRight className='w-7 h-7' /></button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='flex items-center justify-center py-18'>
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                            >
                                <img src={FI.src} alt="Image" />
                            </motion.div>
                            <div className='absolute flex flex-col items-center justify-center gap-6 pr-32 pb-24'>
                                <h1 className='font-bold text-3xl'>Why teams innovate on Miro</h1>
                                <button className='bg-[#4d6bff] text-white p-2 px-4 rounded-md'>Sign up free</button>
                            </div>
                        </section>
                    </div>
                </main >
                <main className='bg-[#1c1c1e] w-full text-white'>
                    <main className='border-b-2 border-white'>
                        <section className='flex items-start place-content-between max-w-7xl mx-auto py-16 w-full'>
                            <div>
                                <h1 className="font-bold text-xl mb-3">Product</h1>
                                <div className='flex flex-col gap-2'>
                                    <a href="#">Online whiteboard</a>
                                    <a href="#">Apps & Integrations</a>
                                    <a href="#">Templates</a>
                                    <a href="#">Miroverse</a>
                                    <a href="#">Miro Developer Platform</a>
                                    <a href="#">Miro for Devices</a>
                                    <a href="#">Enterprise Guard</a>
                                    <a href="#">Accessibility</a>
                                    <a href="#">Changelog</a>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold text-xl mb-3">Solutions</h1>
                                <div className='flex flex-col gap-2'>
                                    <a href="#">Meetings and Workshops</a>
                                    <a href="#">Brainstorming & Ideation</a>
                                    <a href="#">Agile practices</a>
                                    <a href="#">Diagramming</a>
                                    <a href="#">Research & Design</a>
                                    <a href="#">Strategy & Planning</a>
                                    <a href="#">Mind Map</a>
                                    <a href="#">Concept Map</a>
                                    <a href="#">Online Sticky Notes</a>
                                    <a href="#">Flowchart Maker</a>
                                    <a href="#">Wireframe</a>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold text-xl mb-3">Resources</h1>
                                <div className='flex flex-col gap-2'>
                                    <a href="#">Miro Academy</a>
                                    <a href="#">Help Center</a>
                                    <a href="#">Blog</a>
                                    <a href="#">Status</a>
                                    <a href="#">Miro Community</a>
                                    <a href="#">Miro Events</a>
                                    <a href="#">Solution Partners</a>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold text-xl mb-3">Company</h1>
                                <div className='flex flex-col gap-2'>
                                    <a href="#">About us</a>
                                    <a href="#">Careers 🚀</a>
                                    <a href="#">Miro in the News</a>
                                    <a href="#">Customer Stories</a>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold text-xl mb-3">Plans and Pricing</h1>
                                <div className='flex flex-col gap-2'>
                                    <a href="#">Pricing</a>
                                    <a href="#">Business</a>
                                    <a href="#">Enterprise</a>
                                    <a href="#">Consultants</a>
                                    <a href="#">Education</a>
                                    <a href="#">Startups</a>
                                    <a href="#">NPOs</a>
                                    <a href="#">Contact sales</a>
                                </div>
                            </div>
                        </section>
                    </main>
                    <section className='flex items-start place-content-between max-w-7xl mx-auto py-10 w-full'>
                        <div className='flex flex-col gap-8'>
                            <div className='flex items-center gap-6'>
                                <FaXTwitter className='w-8 h-8' />
                                <FaFacebook className='w-8 h-8' />
                                <FaLinkedin className='w-8 h-8' />
                                <RiInstagramFill className='w-8 h-8' />
                                <FaYoutube className='w-8 h-8' />
                                <div className='flex items-center gap-2'>
                                    <p>English</p>
                                    <LuGlobe />
                                </div>
                            </div>
                            <div className='flex items-center gap-6'>
                                <div className='flex items-center gap-2'>
                                    <img src={FL.src} alt="Logo" />
                                    <p>Miro © 2025</p>
                                </div>
                                <a href="#">Terms of Service</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Manage Cookies</a>
                            </div>
                        </div>
                        <div className='flex items-center gap-6'>
                            <img src={Play.src} alt="Google play" />
                            <img src={Appstore.src} alt="Appstore" />
                        </div>
                    </section>
                </main>
            </main >
        </>
    )
}

export default page