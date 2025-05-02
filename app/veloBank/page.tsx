import React from 'react'
import AppStore from '@/assets/veloBank/AppStore.svg'
import GPlay from '@/assets/veloBank/GPlay.svg'
import Phone from '@/assets/veloBank/CPhoneUI.svg'
import LLOGO from '@/assets/veloBank/ClientL.svg'
import RLOGO from '@/assets/veloBank/ClientR.svg'
import { FaCreditCard, FaCrown, FaStar, FaUser } from 'react-icons/fa6'
import { IoIosSend } from 'react-icons/io'
import G1 from "@/assets/veloBank/Grid1.svg"
import G2 from "@/assets/veloBank/Grid2.svg"
import G3 from "@/assets/veloBank/Grid3.svg"
import { MdTableChart } from 'react-icons/md'
import { FaUnlockAlt } from 'react-icons/fa'
import VDO from "@/assets/veloBank/Player.svg"
import { TbRosetteDiscount } from 'react-icons/tb'
import FIMG from "@/assets/veloBank/FIMG.svg"
import Marquee from "react-fast-marquee";
import Logo from "@/assets/veloBank/Logo.svg"
import { IoGrid } from 'react-icons/io5'

function page() {
    return (
        <>
            <nav className='flex items-center justify-center gap-8 pt-8 pb-16'>
                <img src={Logo.src} alt="LOGO" className='w-12' />
                <div className='bg-[#232323] text-white p-2 flex items-center gap-10 px-2 rounded-full'>
                    <a href="#" className='bg-[#383838] p-2 rounded-full px-4'>Feature</a>
                    <a href="#" className='px-4'>Company</a>
                    <a href="#" className='px-4'>Pricing</a>
                    <a href="#" className='px-4'>Business</a>
                </div>
                <div className='bg-[#232323] p-3 rounded-full flex items-center justify-center'>
                    <button><IoGrid className='text-white w-8 h-7' /></button>
                </div>
            </nav>
            <main className='max-w-7xl mx-auto'>
                <section className='flex flex-col items-center justify-center gap-6 pb-16'>
                    <p className='text-[#de2f90] bg-[#faf3ef] p-2 px-3 rounded-full flex items-center gap-2'><FaCrown />Ultimate Neo Bank</p>
                    <h1 className='font-bold text-6xl text-center'>Effortless<br />Bank <span className="bg-gradient-to-r from-[#f86c2e] to-[#cd1eab] inline-block text-transparent bg-clip-text">Simplified</span></h1>
                    <p className='max-w-md text-center'>Experience seamless financial management makes managing your finances easy and intutitive</p>
                    <div className='flex items-center gap-4'>
                        <img src={AppStore.src} alt="AppStore" className='w-[250]' />
                        <img src={GPlay.src} alt="GooglePlay" className='w-[250]' />
                    </div>
                    <div className='grid grid-cols-3 gap-12'>
                        <div className='flex items-center justify-between'>
                            <img src={LLOGO.src} alt="LeftLogo" />
                        </div>
                        <img src={Phone.src} alt="LeftLogo" />
                        <div className='flex items-center justify-between'>
                            <img src={RLOGO.src} alt="LeftLogo" />
                        </div>
                    </div>
                </section>
                <section className='w-full py-16 flex flex-col gap-8'>
                    <div className='flex items-center place-content-between w-full'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#de2f90] bg-[#faf3ef] p-2 px-3 rounded-full flex items-center gap-2 w-fit'><FaStar />Feature</p>
                            <h1 className='font-bold text-5xl'>A Bank Built<br /><span className="bg-gradient-to-r from-[#f86c2e] to-[#cd1eab] inline-block text-transparent bg-clip-text">Around You</span></h1>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='max-w-lg'>This modern, straightforward copy captures {"Velobank's"} forward-thinking approach to banking while maintaining simplicity.</p>
                            <button className='bg-[#393939] w-fit p-2 rounded-full'><a href="#" className='rounded-full bg-[#5d5d5d] p-1 px-3 text-white flex items-center gap-2'>Learn More <IoIosSend className='bg-gradient-to-r from-[#f86c2e] to-[#cd1eab] rounded-full p-1 w-6 h-6' /></a></button>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 bg-[#efefef] rounded-xl p-4 gap-4'>
                        <div className='bg-[#131111] rounded-xl relative'>
                            <div className="text-white absolute right-0 p-6 flex flex-col items-end gap-2">
                                <MdTableChart className='bg-gradient-to-r from-[#f86c2e] to-[#cd1eab] rounded-full p-2 w-12 h-12' />
                                <p className='font-bold text-2xl text-right'>Smart<br />Insights</p>
                            </div>
                            <img src={G1.src} alt="Grid" className='w-[310px] pt-24 absolute bottom-0' />
                        </div>
                        <div className='bg-[#fafafa] rounded-xl relative'>
                            <div className="absolute right-0 p-6 flex flex-col items-end gap-2">
                                <div className='bg-gradient-to-r from-[#f86c2e] to-[#cd1eab] rounded-full'>
                                    <FaUnlockAlt className='text-white p-2 w-12 h-12' />
                                </div>
                                <p className='font-bold text-2xl text-right'>Advanced<br />Security</p>
                            </div>
                            <img src={G2.src} alt="Grid" className='w-[310px] pt-24' />
                        </div>
                        <div className='bg-[#fafafa] rounded-xl relative'>
                            <div className="absolute right-0 p-6 flex flex-col items-end gap-2">
                                <div className='bg-gradient-to-r from-[#f86c2e] to-[#cd1eab] rounded-full'>
                                    <FaCreditCard className='text-white p-2 w-12 h-12' />
                                </div>
                                <p className='font-bold text-2xl text-right'>Global<br />Payments</p>
                            </div>
                            <img src={G3.src} alt="Grid" className='w-[310px] pt-24 absolute bottom-0' />
                        </div>
                    </div>
                </section>
            </main>
            <main className='bg-[#131111]'>
                <section className='max-w-7xl mx-auto flex items-center place-content-between w-full text-white py-16'>
                    <div className='flex flex-col gap-2'>
                        <p className='bg-[#272425] p-2 px-3 rounded-full flex items-center gap-2 w-fit'><FaUser />About</p>
                        <h1 className='font-bold text-5xl'>About<br /><span className="bg-gradient-to-r from-[#f86c2e] to-[#cd1eab] inline-block text-transparent bg-clip-text">Velobank</span></h1>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='max-w-lg'>We bring a fast,secure, and intuitive banking experience directly to your fingertips effortless,accessible, and transparent.</p>
                        <button className='bg-[#393939] w-fit p-2 rounded-full'><a href="#" className='rounded-full bg-gradient-to-r from-[#f86c2e] to-[#cd1eab] p-1 px-3 text-white flex items-center gap-2'>More Details <IoIosSend className='bg-white text-[#cf28a6] rounded-full p-1 w-6 h-6' /></a></button>
                    </div>
                </section>
                <section className='flex items-center justify-center pb-16 text-white flex-col max-w-7xl mx-auto gap-8'>
                    <img src={VDO.src} alt="Video" className='bg-[#272425] p-3 rounded-2xl' />
                    <p className='text-center text-5xl font-bold bg-gradient-to-b from-[#232021] via-white to-white inline-block text-transparent bg-clip-text'>Our mission?<br />To make banking effortless,<br />accessible, and transparent for<br /><span className='bg-gradient-to-r from-[#f86c2e] to-[#cd1eab] inline-block text-transparent bg-clip-text'>everyone</span></p>
                </section>
                <section className='max-w-7xl mx-auto text-white flex flex-col items-center justify-center py-16 gap-3'>
                    <p className='bg-[#272425] p-2 px-3 rounded-full flex items-center gap-2 w-fit'><FaUser />Pricing</p>
                    <h1 className='font-bold text-5xl text-center'>Simple<br />Trabsparent <span className="bg-gradient-to-r from-[#f86c2e] to-[#cd1eab] inline-block text-transparent bg-clip-text">Pricing</span></h1>
                    <div className='bg-[#272425] p-3 w-full rounded-2xl mt-8'>
                        <div className='bg-[#131111] rounded-2xl grid grid-cols-3 w-full'>
                            <div className='flex items-center flex-col justify-between place-content-between w-full bg-[#131111] p-4 rounded-2xl'>
                                <div className='flex items-center justify-center flex-col gap-5'>
                                    <div className='bg-gradient-to-r from-[#f86c2e] to-[#cd1eab] rounded-full p-1'>
                                        <TbRosetteDiscount className='w-10 h-10' />
                                    </div>
                                    <h1 className='font-bold text-2xl'>Basic Plan</h1>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <p>Zero monthly fees</p>
                                        <p>Essential banking features</p>
                                        <p>2-factor authentication</p>
                                        <p>Access to global payments</p>
                                    </div>
                                </div>
                                <button className='bg-[#393939] mt-12 w-full p-2 rounded-full'><span className='rounded-full bg-gradient-to-b from-[#f86c2e] to-[#cd1eab] flex justify-center p-1 px-3 text-white items-center  gap-2 w-full'><a href="#">Join Now</a></span></button>
                            </div>
                            <div className='flex items-center flex-col justify-between place-content-between w-full bg-gradient-to-b from-[#f86c2e] to-[#cd1eab] p-4 rounded-2xl'>
                                <div className='flex items-center justify-center flex-col gap-5'>
                                    <div className='bg-white rounded-full p-2'>
                                        <FaStar className='w-8 h-8 text-[#ea436d]' />
                                    </div>
                                    <h1 className='font-bold text-2xl'>Premium Plan</h1>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <p>$9.99/month</p>
                                        <p>Everything in Basic, plus:</p>
                                        <p>Priority customer support</p>
                                        <p>Higher withdrawal & transfer limits</p>
                                        <p>Fee-free global payments</p>
                                        <p>Virtual and physical debit cards</p>
                                        <p>Exclusive financiall insights and tools</p>
                                    </div>
                                </div>
                                <button className='bg-[#e053af] mt-12 w-full p-2 rounded-full'><span className='rounded-full bg-white flex justify-center p-1 px-3 text-[#d83a6a] items-center  gap-2 w-full'><a href="#">Join Now</a></span></button>
                            </div>
                            <div className='flex items-center flex-col justify-between place-content-between w-full bg-[#131111] p-4 rounded-2xl'>
                                <div className='flex items-center justify-center flex-col gap-5'>
                                    <div className='bg-gradient-to-r from-[#f86c2e] to-[#cd1eab] rounded-full p-1'>
                                        <TbRosetteDiscount className='w-10 h-10' />
                                    </div>
                                    <h1 className='font-bold text-2xl'>Business Plan</h1>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <p>Custom pricing</p>
                                        <p>All Premium Plan features, plus;</p>
                                        <p>Dadicated account manager</p>
                                        <p>Payroll management</p>
                                        <p>Muti-user access</p>
                                        <p>API for seamless intergration</p>
                                        <p>Advenced analytices to track</p>
                                        <p>Discounted international fees</p>
                                    </div>
                                </div>
                                <button className='bg-[#393939] mt-12 w-full p-2 rounded-full'><span className='rounded-full bg-gradient-to-b from-[#f86c2e] to-[#cd1eab] flex justify-center p-1 px-3 text-white items-center  gap-2 w-full'><a href="#">Join Now</a></span></button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <main className='max-w-7xl mx-auto'>
                <section className='flex flex-col items-center justify-center pt-16 gap-6'>
                    <h1 className='font-bold text-6xl text-center'>Ready to<br />Experience<br /><span className="bg-gradient-to-r from-[#f86c2e] to-[#cd1eab] inline-block text-transparent bg-clip-text">the Future</span></h1>
                    <p className='max-w-md text-center'>Join Velobank today and take control of your financial future with modern, seamless banking.</p>
                    <button className='bg-[#393939] w-fit p-2 rounded-full'><a href="#" className='rounded-full bg-[#6f6f6f] p-1 px-3 text-white flex items-center gap-2'>Join Community Now <IoIosSend className='bg-gradient-to-r from-[#f86c2e] to-[#cd1eab] rounded-full p-1 w-6 h-6' /></a></button>
                </section>
            </main>
            <section className='flex items-center flex-col justify-center mt-[400px] relative'>
                <img src={FIMG.src} alt="Image" className='max-w-[400px] z-10 absolute bottom-0' />
                <Marquee className='flex items-center'>
                    <p className='font-bold text-6xl mr-8'>VELOBANK</p>
                    <p className='font-bold text-6xl mr-8'>VELOBANK</p>
                    <p className='font-bold text-6xl mr-8'>VELOBANK</p>
                    <p className='font-bold text-6xl mr-8'>VELOBANK</p>
                    <p className='font-bold text-6xl mr-8'>VELOBANK</p>
                    <p className='font-bold text-6xl mr-8'>VELOBANK</p>
                    <p className='font-bold text-6xl mr-8'>VELOBANK</p>
                </Marquee>
            </section>
        </>
    )
}

export default page