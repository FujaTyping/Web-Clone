import React from 'react'
import LH from "@/assets/untitledUI/LHERO.svg"
import RH from "@/assets/untitledUI/EHERO.svg"
import Hero from "@/assets/untitledUI/HeroPreview.svg"
import Client from "@/assets/untitledUI/UCLIENT.svg"
import Logo from "@/assets/untitledUI/UUI.svg"
import VDO from "@/assets/untitledUI/VIDEO.svg"
import TPLOT from "@/assets/untitledUI/Trustpilot.svg"
import Profile from "@/assets/untitledUI/Profile.jpg"
import FICO from "@/assets/untitledUI/FooterICO.svg"
import { FaAngleDown } from 'react-icons/fa6'
import { FiZap } from 'react-icons/fi'
import { LuMessageSquareHeart, LuMessagesSquare } from 'react-icons/lu'
import { RiRecycleLine } from 'react-icons/ri'
import { FaRegSmileWink } from 'react-icons/fa'
import { MdKeyboardCommandKey } from 'react-icons/md'

function page() {
    return (
        <>
            <main className='bg-lime-300 rounded-b-xl'>
                <nav className='px-12 flex items-center w-full place-content-between py-3'>
                    <div className='flex items-center'>
                        <img src={Logo.src} alt="Logo" />
                        <div className='flex items-center gap-6 ml-4'>
                            <a href="#">Pricing</a>
                            <a href="#">Bank Connect</a>
                            <a href="#" className='flex items-center gap-2'>Financial Guides <FaAngleDown /></a>
                            <a href="#">About Us</a>
                            <a href="#" className='flex items-center gap-2'>Blog <FaAngleDown /></a>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <a href="#">Log in</a>
                        <button className='bg-neutral-800 text-white flex items-center p-1 rounded-full gap-2'><div className='bg-lime-400 rounded-full h-7 w-10 flex items-center justify-center'><FiZap className='text-black' size={18} /></div><p className='pr-3'>Get started</p></button>
                    </div>
                </nav>
                <section className='mx-auto flex flex-col items-center justify-center max-w-7xl pt-10 square'>
                    <h1 className='font-bold text-5xl max-w-xl'>Sell globally easily,<br />quickly and seamlessly.</h1>
                    <p className='max-w-3xl mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore consequatur eos inventore quis minus quisquam debitis. In nostrum voluptates, porro architecto nihil quod iure quo distinctio ipsum, voluptate magni.</p>
                    <div className='flex place-content-between items-center w-full py-6'>
                        <img className='w-46' src={LH.src} alt="Award" />
                        <button className='bg-neutral-800 text-white flex items-center p-1 rounded-full gap-2'><div className='bg-lime-400 rounded-full h-8 w-12 flex items-center justify-center'><FiZap className='text-black' size={24} /></div><p className='pr-4'>Get started</p></button>
                        <img className='w-46' src={RH.src} alt="Award" />
                    </div>
                    <img src={Hero.src} alt="Hero" className='rounded-lg' />
                </section>
            </main>
            <section className='max-w-7xl mx-auto my-4'>
                <img src={Client.src} alt="Client" />
            </section>
            <section className='max-w-7xl mx-auto flex items-center justify-center flex-col my-12'>
                <h1 className='font-bold text-3xl mb-2'>Save time and money with Untitled</h1>
                <p>Replace mutiple tools and subscriptions, conplex setup and outrageous fees.</p>
                <div className='grid grid-cols-3 mt-8 gap-6'>
                    <div className='flex flex-col gap-1 bg-gray-100 rounded-lg p-4 py-8'>
                        <div className='mb-1 bg-lime-400 w-fit p-2 rounded-lg'>
                            <LuMessagesSquare />
                        </div>
                        <h1 className='font-bold text-xl'>Share team inboxes</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo, saepe recusandae magni consequatur architecto dolores</p>
                    </div>
                    <div className='flex flex-col gap-1 bg-gray-100 rounded-lg p-4 py-8'>
                        <div className='mb-1 bg-lime-400 w-fit p-2 rounded-lg'>
                            <FiZap />
                        </div>
                        <h1 className='font-bold text-xl'>Deliver instant answers</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo, saepe recusandae magni consequatur architecto dolores</p>
                    </div>
                    <div className='flex flex-col gap-1 bg-gray-100 rounded-lg p-4 py-8'>
                        <div className='mb-1 bg-lime-400 w-fit p-2 rounded-lg'>
                            <RiRecycleLine />
                        </div>
                        <h1 className='font-bold text-xl'>Manage your team with reports</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo, saepe recusandae magni consequatur architecto dolores</p>
                    </div>
                    <div className='flex flex-col gap-1 bg-gray-100 rounded-lg p-4 py-8'>
                        <div className='mb-1 bg-lime-400 w-fit p-2 rounded-lg'>
                            <FaRegSmileWink />
                        </div>
                        <h1 className='font-bold text-xl'>Connect with customers</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo, saepe recusandae magni consequatur architecto dolores</p>
                    </div>
                    <div className='flex flex-col gap-1 bg-gray-100 rounded-lg p-4 py-8'>
                        <div className='mb-1 bg-lime-400 w-fit p-2 rounded-lg'>
                            <MdKeyboardCommandKey />
                        </div>
                        <h1 className='font-bold text-xl'>Connect the tools you already use</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo, saepe recusandae magni consequatur architecto dolores</p>
                    </div>
                    <div className='flex flex-col gap-1 bg-gray-100 rounded-lg p-4 py-8'>
                        <div className='mb-1 bg-lime-400 w-fit p-2 rounded-lg'>
                            <LuMessageSquareHeart />
                        </div>
                        <h1 className='font-bold text-xl'>Our people make the difference</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo, saepe recusandae magni consequatur architecto dolores</p>
                    </div>
                </div>
            </section>
            <section className='max-w-7xl flex flex-col items-center justify-center my-12 mx-auto'>
                <div className='mb-1 bg-lime-400 w-fit p-2 rounded-lg'>
                    <FiZap />
                </div>
                <h1 className='font-bold text-3xl mb-2'>Go from idea to online in 5 minutes</h1>
                <p>Replace mutiple tolls and subscription, complex setup and outrageous fees.</p>
                <img src={VDO.src} alt="VIDEO" className='rounded-lg border-2 border-gray-200 mt-8' />
            </section>
            <main className='bg-gray-100 rounded-xl w-[97%] mx-auto'>
                <section className='max-w-7xl flex flex-col items-center justify-center my-12 mx-auto p-6 py-8'>
                    <h1 className='text-4xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat laboriosam amet quo officia quasi reiciendis vitae tempora cum. Nihil doloremque minima rerum ab facere doloribus</h1>
                    <div className='flex items-center place-content-between w-full mt-8'>
                        <div className='flex items-center gap-3'>
                            <img src={Profile.src} alt="Dummy" className='rounded-full w-10' />
                            <div>
                                <h1 className='font-bold'>Maya Peterson</h1>
                                <p>Founder, <span className='underline'>Figma2code</span></p>
                            </div>
                        </div>
                        <img src={TPLOT.src} alt="Score" className='w-24' />
                    </div>
                </section>
            </main>
            <main className='bg-gray-100 rounded-xl w-[97%] mx-auto'>
                <main className='max-w-7xl mx-auto py-10'>
                    <div className='w-full flex items-center place-content-between'>
                        <div>
                            <h1 className='font-bold text-2xl mb-1'>Start your Untitled store today</h1>
                            <p>Start a free trail and explore Untitled for 14 days. No card required</p>
                        </div>
                        <button className='bg-neutral-800 text-white flex items-center p-1 rounded-full gap-2'><div className='bg-lime-400 rounded-full h-7 w-10 flex items-center justify-center'><FiZap className='text-black' size={18} /></div><p className='pr-3'>Get started</p></button>
                    </div>
                    <div className='py-14 flex items-start place-content-between'>
                        <div>
                            <img src={Logo.src} alt="Logo" />
                            <p className='ml-2 max-w-xs'>The all-in-one platform for your-digital product empire</p>
                        </div>
                        <div className='flex gap-20'>
                            <div className='flex flex-col gap-4'>
                                <a href="#">Product</a>
                                <a href="#">Overview</a>
                                <a href="#">Feature</a>
                                <a href="#">Solutions</a>
                                <a href="#">Tutorials</a>
                                <a href="#">Pricing</a>
                                <a href="#">Releases</a>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <a href="#">Product</a>
                                <a href="#">Overview</a>
                                <a href="#">Feature</a>
                                <a href="#">Solutions</a>
                                <a href="#">Tutorials</a>
                                <a href="#">Pricing</a>
                                <a href="#">Releases</a>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <a href="#">Product</a>
                                <a href="#">Overview</a>
                                <a href="#">Feature</a>
                                <a href="#">Solutions</a>
                                <a href="#">Tutorials</a>
                                <a href="#">Pricing</a>
                                <a href="#">Releases</a>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <a href="#">Product</a>
                                <a href="#">Overview</a>
                                <a href="#">Feature</a>
                                <a href="#">Solutions</a>
                                <a href="#">Tutorials</a>
                                <a href="#">Pricing</a>
                                <a href="#">Releases</a>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <a href="#">Product</a>
                                <a href="#">Overview</a>
                                <a href="#">Feature</a>
                                <a href="#">Solutions</a>
                                <a href="#">Tutorials</a>
                                <a href="#">Pricing</a>
                                <a href="#">Releases</a>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center place-content-between'>
                        <p>2077 Untitled UI.All rights reserved.</p>
                        <img src={FICO.src} alt="Footer" className='w-72' />
                    </div>
                </main>
            </main>
            <div className='h-5'></div>
        </>
    )
}

export default page