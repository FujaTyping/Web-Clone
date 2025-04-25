"use client"

import React from 'react'
import { FaAngleDown, FaBoltLightning, FaQrcode } from 'react-icons/fa6'
import USRH1 from "@/assets/clause/HUO.svg"
import USRH2 from "@/assets/clause/HUT.svg"
import USRH3 from "@/assets/clause/HUTR.svg"
import USRH4 from "@/assets/clause/HUF.svg"
import CLI from "@/assets/clause/clients.svg"
import FEA1 from "@/assets/clause/P1.svg"
import FEA2 from "@/assets/clause/F2.svg"
import FEA3 from "@/assets/clause/F3.svg"
import MQ1 from "@/assets/clause/MQR1.svg"
import MQ2 from "@/assets/clause/MQR2.svg"
import { MdOutlineLan } from 'react-icons/md'
import { FaLongArrowAltRight } from 'react-icons/fa'
import TSM from "@/assets/clause/Testmonails.svg"
import { CgQuote } from 'react-icons/cg'
import FTCO from "@/assets/clause/FooterICO.svg"
import FSO from "@/assets/clause/SOCIAL.svg"
import { IoMailOutline } from 'react-icons/io5'
import { BsFillTelephonePlusFill } from 'react-icons/bs'
import ICON from "@/assets/clause/ICON.svg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function page() {

    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.to('.PO', { x: 50, y: 30 });
        gsap.to('.PT', { x: 5, y: -20, delay: 0.1 });
        gsap.to('.PTR', { x: -20, y: -50, delay: 0.2 });
        gsap.to('.PF', { x: -40, y: 50, delay: 0.3 });
    });
    return (
        <>
            <section className='bg-[#f6f6f4]'>
                <nav className='max-w-7xl mx-auto flex items-center place-content-between py-6'>
                    <div className='flex items-center gap-10'>
                        <img src={ICON.src} alt="icon" className='w-36' />
                        <div className='flex items-center gap-8 pt-2'>
                            <a href="#" className='flex items-center gap-2'>Solutions <FaAngleDown /></a>
                            <a href="#" className='flex items-center gap-2'>Customers <FaAngleDown /></a>
                            <a href="#">Pricing</a>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className='bg-white text-[#083324] p-3 px-4 rounded-xl shadow-xl'>Log In</button>
                        <button className='bg-[#083324] text-[#ccf116] p-3 px-4 rounded-xl shadow-xl'>Start Now</button>
                    </div>
                </nav>
                <main className='max-w-7xl mx-auto'>
                    <section className='relative flex flex-col items-center justify-center gap-8 py-18'>
                        <span className='flex items-center gap-2 p-2 border-2 rounded-full px-3 text-[#083324] text-sm bg-white'><FaBoltLightning /> CREATE FOR FAST</span>
                        <h1 className='font-bold text-5xl max-w-2xl text-center text-[#083324]'>One tool to <span className='underline decoration-[#ccf116] decoration-4'>manage</span> contracts and your team</h1>
                        <p className='max-w-2xl text-center'>Clause helps legal teams work faster, smarter and more effectively, delivering the visibility and data-driven insights to mitigate risk and ensure compliance.</p>
                        <div className='flex items-center gap-4'>
                            <button className='bg-[#083324] text-[#ccf116] p-3 px-4 rounded-xl shadow-xl'>Start for Free</button>
                            <button className='bg-white text-[#083324] p-3 px-4 rounded-xl shadow-xl'>Get a Demo</button>
                        </div>
                        <img src={USRH1.src} alt="Cursor" className='PO absolute top-12 left-14 w-24' />
                        <img src={USRH2.src} alt="Cursor" className='PT absolute bottom-8 right-18 w-28' />
                        <img src={USRH3.src} alt="Cursor" className='PTR absolute bottom-8 left-30 w-30' />
                        <img src={USRH4.src} alt="Cursor" className='PF absolute top-14 right-30 w-24' />
                    </section>
                    <section className='flex items-center w-full place-content-between py-10'>
                        <p className='text-[#083324] font-bold'>More than 100+<br />companies partner</p>
                        <img src={CLI.src} alt="Clients" className='w-[1000px]' />
                    </section>
                </main>
            </section>
            <main className='max-w-7xl mx-auto'>
                <section className='flex flex-col items-center justify-center gap-8 py-14'>
                    <span className='flex items-center gap-2 p-2 border-2 rounded-full px-3 text-[#083324] text-sm'><FaQrcode /> FEATURES</span>
                    <h1 className='font-bold text-4xl max-w-2xl text-center text-[#083324] '>Latest advanced technologies to ensure everything you needs</h1>
                    <p className='max-w-xl'>Maximie your team's productivity and security with our affordable, user-friendly contract management system.</p>
                    <div className='mt-10'>
                        <div className='flex bg-[#ebeee8] rounded-xl border-4 border-[#ebeee8]'>
                            <div className='flex flex-col place-content-between p-10'>
                                <div>
                                    <h1 className='font-bold text-4xl mb-2 text-[#083324]'>Dynamic dashboard</h1>
                                    <p>Clause helps legel teams work faster, msarter and more efficiently, deliverling the visibility and data-driven insights to mitigate risk and ensure compliance</p>
                                </div>
                                <button className='bg-[#083324] w-fit text-[#ccf116] p-3 px-4 rounded-xl shadow-xl'>Explore all</button>
                            </div>
                            <img src={FEA1.src} alt="FRATURE" />
                        </div>
                        <div className='grid grid-cols-2 mt-8 gap-8'>
                            <div className='flex flex-col bg-[#ebeee8] rounded-xl border-4 border-[#ebeee8]'>
                                <div className='p-10'>
                                    <h1 className='font-bold text-4xl mb-2 text-[#083324] text-center'>Smart notifications</h1>
                                    <p className='text-center'>Easily accessible from the notifications center, calendar<br />or email with the relevant activities.</p>
                                </div>
                                <img src={FEA2.src} alt="FEATURE" />
                            </div>
                            <div className='flex flex-col bg-[#ebeee8] rounded-xl border-4 border-[#ebeee8]'>
                                <div className='p-10'>
                                    <h1 className='font-bold text-4xl mb-2 text-[#083324] text-center'>Task management</h1>
                                    <p className='text-center'>Discuss contract queries, manage tasks, secure<br />approvals,track progress in the workspace.</p>
                                </div>
                                <img src={FEA3.src} alt="FEATURE" />
                            </div>
                        </div>
                    </div>
                </section>
                <main className='flex flex-col items-center justify-center bg-[#273e3d] rounded-xl py-14 gap-8'>
                    <span className='flex items-center gap-2 p-2 border-2 rounded-full px-3 text-white bg-[#374e4d] text-sm'><MdOutlineLan /> INTERRATIONS</span>
                    <h1 className='text-white font-bold text-4xl'>Don't replace. Integrate</h1>
                    <p className='text-white text-center'>We understand the hussle of replacing the long used tools in your process<br />That's why we intergrate tools you use in your day-to-day work.</p>
                    <a href="#" className='flex items-center text-white underline gap-2'>All Intergrations <FaLongArrowAltRight /></a>
                    <div className='flex flex-col gap-4 items-center justify-center w-full'>
                        <img src={MQ1.src} alt="MAQUEE" className='w-[1200px]' />
                        <img src={MQ2.src} alt="MAQUEE" className='w-[1280px]' />
                    </div>
                </main>
                <section className='text-[#06281b] flex flex-col items-center justify-center gap-8 py-10'>
                    <CgQuote className='w-12 h-12' />
                    <h1 className='font-bold text-4xl max-w-4xl text-center text-[#083f2c]'>"Clause is helping opur company to decrease operational expenses and turnaround time, while increasing the compliance, resource allocation and effectiveness of our contract management. "</h1>
                    <div className='flex flex-col items-center justify-center mt-4'>
                        <img src={TSM.src} alt="TEST" />
                        <p className='font-bold text-xl mt-4'>Darlene Robertson</p>
                        <p>Head of Strategy at Mailchimp</p>
                    </div>
                </section>
                <section className='bg-[#f6f6f4] grid grid-cols-3 text-[#083f2c] rounded-lg py-12 my-6'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <h1 className='font-bold text-4xl'>2021</h1>
                        <p>Clause Founded</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <h1 className='font-bold text-4xl'>50K+</h1>
                        <p>Active Users</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <h1 className='font-bold text-4xl'>1K+</h1>
                        <p>Company Partners</p>
                    </div>
                </section>
            </main>
            <main className='bg-[#273e3d] text-white py-16 mt-14'>
                <section className='max-w-7xl mx-auto flex items-center place-content-between'>
                    <div>
                        <h1 className='font-bold text-4xl'>Discover the full scale of<br /><span className='underline decoration-[#ccf116] decoration-4'>Clause</span> capabilities</h1>
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className='bg-white text-[#083324] p-3 px-4 rounded-xl shadow-xl'>Get a Demo</button>
                        <button className='text-[#083324] bg-[#ccf116] p-3 px-4 rounded-xl shadow-xl'>Start for Free</button>
                    </div>
                </section>
            </main>
            <main className='bg-[#101c1c] text-white pt-14'>
                <section className='max-w-7xl mx-auto'>
                    <div className='flex items-start place-content-between'>
                        <div className='flex flex-col gap-3'>
                            <img src={FTCO.src} alt="ICON" className='w-32' />
                            <p className='flex items-center gap-2'><IoMailOutline /> hello@clause.com</p>
                            <p className='flex items-center gap-2'><BsFillTelephonePlusFill /> +621 098 654 321</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1>Solution</h1>
                            <a href="#">Why Cequence</a>
                            <a href="#">Features</a>
                            <a href="#">OpenAI</a>
                            <a href="#">Techology</a>
                            <a href="#">Security</a>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1>Customers</h1>
                            <a href="#">Procurement</a>
                            <a href="#">Sales</a>
                            <a href="#">Legal</a>
                            <a href="#">Medium</a>
                            <a href="#">Enterprise</a>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1>Resources</h1>
                            <a href="#">Pricing</a>
                            <a href="#">Contact Sales</a>
                            <a href="#" className='relative'>Changelog <div className='bg-[#e1fe64] w-2 h-2 rounded-full absolute top-0 right-2'></div></a>
                            <a href="#">Blog</a>
                        </div>
                    </div>
                    <div className='flex items-center place-content-between mt-10 pb-10'>
                        <p>© Copyright 2024 Clause. All rights reserved.</p>
                        <img src={FSO.src} alt="Social" className='w-52' />
                    </div>
                </section>
            </main>
        </>
    )
}

export default page