import React from 'react'
import CLI from "@/assets/cashMarket/Clients.svg"
import HeloIMg from "@/assets/cashMarket/HeroFisrt.svg"
import G1 from "@/assets/cashMarket/Grid1.svg"
import G2 from "@/assets/cashMarket/Grid2.svg"
import G3 from "@/assets/cashMarket/Grid3.svg"
import F1 from "@/assets/cashMarket/FEA1.svg"
import F2 from "@/assets/cashMarket/FEA2.svg"
import { FaGhost } from 'react-icons/fa6'
import { RiBillLine } from 'react-icons/ri'
import F3 from "@/assets/cashMarket/FEA3.svg"
import Pro1 from "@/assets/cashMarket/User1.jpg"
import Pro2 from "@/assets/cashMarket/User2.jpg"
import Pro3 from "@/assets/cashMarket/User3.jpg"
import Pro4 from "@/assets/cashMarket/User4.jpg"
import Pro5 from "@/assets/cashMarket/User5.jpg"
import Pro6 from "@/assets/cashMarket/User6.jpg"
import BF from "@/assets/cashMarket/BF.svg"
import Logo from "@/assets/cashMarket/Logo.svg"

function page() {
    return (
        <>
            <nav className='max-w-7xl mx-auto place-content-between flex items-center py-6'>
                <img src={Logo.src} alt="Logo" />
                <div className='flex items-center gap-8 text-gray-500'>
                    <a href="#" className='text-black'>Home</a>
                    <a href="#">Product</a>
                    <a href="#">Service</a>
                    <a href="#">About us</a>
                    <a href="#">Blog</a>
                </div>
                <div className='flex items-center gap-4'>
                    <button className='bg-[#151716] text-[#eefbaa] p-3 px-4 rounded-full'>Sign In</button>
                    <button className='bg-[#dbf262] text-[#151716] p-3 px-4 rounded-full'>Register</button>
                </div>
            </nav>
            <main className='max-w-7xl mx-auto'>
                <section className='flex items-center place-content-between py-14'>
                    <div className='flex flex-col gap-8'>
                        <h1 className='font-bold text-5xl'>Modern Bank Card<br />For A Modern World</h1>
                        <p className='text-gray-500 max-w-lg'>Say hello to a new way of handling your money, With Hero Wallet, you can send spend, and save effortlessly-all in one secure app.</p>
                        <div className='flex items-center gap-3'>
                            <button className='bg-[#151716] text-[#eefbaa] p-3 px-4 rounded-full'>Get Started</button>
                            <button className='bg-[#dbf262] text-[#151716] p-3 px-4 rounded-full'>Request a Demo</button>
                        </div>
                        <div>
                            <p className='text-gray-500 mb-2'>Trusted by</p>
                            <img src={CLI.src} alt="Clients" />
                        </div>
                    </div>
                    <img src={HeloIMg.src} alt="Hero" className='rounded-lg max-w-lg' />
                </section>
                <section className='py-14'>
                    <p className='text-[#a08eee] text-center mb-2'>BENEFITS</p>
                    <h1 className='font-bold text-4xl text-center'>Everything by Your Hand</h1>
                    <div className='grid grid-cols-4 gap-8 mt-12'>
                        <div className='col-span-2'>
                            <img src={G1.src} alt="GIMG" className='rounded-xl' />
                        </div>
                        <div className='bg-[#dcf262] rounded-xl p-6 flex flex-col place-content-between items-center'>
                            <h1 className='font-bold text-xl'>Say No More for Transfer Fee</h1>
                            <img src={G2.src} alt="GIMG" />
                            <p>Only in the first months after you have finished the registration process. The fee limit acan be seen inside your Account.</p>
                        </div>
                        <div className='flex flex-col place-content-between'>
                            <img src={G3.src} alt="GIMG" className='rounded-xl h-[370px] object-cover' />
                            <h1 className='font-bold text-xl'>Debit Card for Seamless Payment</h1>
                        </div>
                    </div>
                </section>
                <section className='flex items-center place-content-between py-14'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[#a08eee]'>NO TRANSFER FEE</p>
                            <h1 className='font-bold text-4xl'>Say No More for Transfer Fee</h1>
                            <p className='text-gray-500 max-w-lg'>Get 25 times free of transfer fee to other banks per month, only in the first month after you have finished the registration precess. The for limit can be seen inside your Account.</p>
                        </div>
                        <div className='flex items-center gap-0'>
                            <div className='w-fit'>
                                <FaGhost className='p-2 h-10 w-10' />
                                <div className='mt-1'>
                                    <h1 className='font-bold text-xl'>Faster than Ghost</h1>
                                    <p className='text-gray-500'>Cashmarket will use BI-FAST service automaticlly</p>
                                </div>
                            </div>
                            <div className='w-fit'>
                                <RiBillLine className='p-2 h-10 w-10' />
                                <div>
                                    <h1 className='font-bold text-xl'>Paying Bills</h1>
                                    <p className='text-gray-500'>Status will always appear on your dashboard.</p>
                                </div>
                            </div>
                        </div>
                        <button className='w-fit p-2 px-3 rounded-full border-2 border-gray-300'>Request a Demo</button>
                    </div>
                    <img src={F1.src} alt="FEATURE" className='max-w-[600px] rounded-xl' />
                </section>
                <section className='flex flex-row-reverse items-center place-content-between py-14 gap-32'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[#a08eee]'>CONTROL MONEY</p>
                            <h1 className='font-bold text-4xl'>Easy to Monitoor Your Money Cashflow</h1>
                            <p className='text-gray-500 max-w-lg'>{"Personal financial diary that helps you manager your cash flow to have a healthier life and finances. With Cashmarket, you don't need to reacord your income and expense ,anuaily. You can have a simple way to see your cash flow more clearly."}</p>
                        </div>
                        <button className='w-fit p-2 px-3 rounded-full border-2 border-gray-300'>Request a Demo</button>
                    </div>
                    <img src={F2.src} alt="FEATURE" className='max-w-[600px] rounded-xl' />
                </section>
                <section className='flex items-center place-content-between py-14'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[#a08eee]'>SPEND CATEGORY</p>
                            <h1 className='font-bold text-4xl'>Spending Category is Satisfying!</h1>
                            <p className='text-gray-500 max-w-lg'>Category that summarizes income and expenses. Part of the main category cintains several other category that are more detailed.</p>
                        </div>
                        <button className='w-fit p-2 px-3 rounded-full border-2 border-gray-300'>Request a Demo</button>
                    </div>
                    <img src={F3.src} alt="FEATURE" className='max-w-[600px] rounded-xl' />
                </section>
                <section className='py-14 flex flex-col items-center justify-center'>
                    <p className='text-[#a08eee] text-center mb-2'>TESTIMONIALS</p>
                    <h1 className='font-bold text-4xl text-center'>What They Said</h1>
                    <div className='grid grid-cols-3 gap-6 mt-10'>
                        <div className='bg-[#f9fafe] rounded-xl p-6'>
                            <h1 className='font-bold text-2xl mb-6'>Easy to Use & Intuitive</h1>
                            <p>{"The user interface is so clean and easy to navigate. Even my parents, who aren't tech-savy, use it without any issues. Highly recommend!"}</p>
                            <div className='flex items-center place-content-between mt-6'>
                                <p>Daniel R.</p>
                                <img src={Pro1.src} alt="Profile" className='rounded-full w-12' />
                            </div>
                        </div>
                        <div className='bg-[#f9fafe] rounded-xl p-6'>
                            <h1 className='font-bold text-2xl mb-6'>Smooth & Secure Transactions</h1>
                            <p>{"I've been using this wallet app for month, and it's incredibly smooth. The transactions are fast, secure, and hassle-free, I no longer worry about carrying cash!"}</p>
                            <div className='flex items-center place-content-between mt-6'>
                                <p>Daniel R.</p>
                                <img src={Pro2.src} alt="Profile" className='rounded-full w-12' />
                            </div>
                        </div>
                        <div className='bg-[#f9fafe] rounded-xl p-6'>
                            <h1 className='font-bold text-2xl mb-6'>All-in-One Payment Solution</h1>
                            <p>From paying bills to splitting dinner with friends, this app does it all. I love how I can store multiple cards and even track my expenses effortlessly</p>
                            <div className='flex items-center place-content-between mt-6'>
                                <p>James T.</p>
                                <img src={Pro3.src} alt="Profile" className='rounded-full w-12' />
                            </div>
                        </div>
                        <div className='bg-[#f9fafe] rounded-xl p-6'>
                            <h1 className='font-bold text-2xl mb-6'>Enhanced Security</h1>
                            <p>The security feature are top-notch. With biometric authentication and fraud protection, I feel completely safe using this wallet app for all my transactions</p>
                            <div className='flex items-center place-content-between mt-6'>
                                <p>Daniel R.</p>
                                <img src={Pro4.src} alt="Profile" className='rounded-full w-12' />
                            </div>
                        </div>
                        <div className='bg-[#f9fafe] rounded-xl p-6'>
                            <h1 className='font-bold text-2xl mb-6'>Lightning-Fast Transfers</h1>
                            <p>{"I was amazed by how quickly money transfers happend! Whetheri t's sending money to friend or receiving payment, it's always instat and reliable"}</p>
                            <div className='flex items-center place-content-between mt-6'>
                                <p>Daniel R.</p>
                                <img src={Pro5.src} alt="Profile" className='rounded-full w-12' />
                            </div>
                        </div>
                        <div className='bg-[#f9fafe] rounded-xl p-6'>
                            <h1 className='font-bold text-2xl mb-6'>Smooth & Secure Transactions</h1>
                            <p>{"I've been using this wallet app for months, and it's incredibly smooth. The transctions are fast, secure and hassle-free. I no longer worry about carrying cash!"}</p>
                            <div className='flex items-center place-content-between mt-6'>
                                <p>Daniel R.</p>
                                <img src={Pro6.src} alt="Profile" className='rounded-full w-12' />
                            </div>
                        </div>
                    </div>
                    <button className='bg-[#dbf262] text-[#151716] p-3 px-4 rounded-full mt-8'>Show More</button>
                </section>
                <section className='bg-[#131615] text-white px-16 py-10 rounded-xl my-14'>
                    <section className='flex items-center place-content-between'>
                        <div className='flex flex-col gap-8'>
                            <div className='flex flex-col gap-4'>
                                <p className='text-[#a08eee]'>GET IN TOUCH</p>
                                <h1 className='font-bold text-4xl'>Achieve Peace of<br />Mind, Choose Cashmarket</h1>
                                <p className='text-gray-300 max-w-lg'>Join millions going cashless! Simplify your transactions with CashMarket-fast, secure, and hassle-free.</p>
                            </div>
                            <button className='bg-[#dbf262] text-[#151716] w-fit p-3 px-4 rounded-full mt-8'>Get Started</button>
                        </div>
                        <img src={BF.src} alt="FEATURE" className='max-w-[600px] rounded-xl' />
                    </section>
                </section>
            </main>
            <footer className='max-w-7xl mx-auto'>
                <section className='w-full flex items-start place-content-between py-10'>
                    <div>
                        <p className='text-gray-400 text-sm'>PRODUCTS</p>
                        <div className='flex flex-col gap-2 mt-2'>
                            <a href="#">Atlas</a>
                            <a href="#">Billing</a>
                            <a href="#">Capital</a>
                            <a href="#">Checkout</a>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-400 text-sm'>USE CASE</p>
                        <div className='flex flex-col gap-2 mt-2'>
                            <a href="#">E-Commerce</a>
                            <a href="#">SaaS</a>
                            <a href="#">Maketplaces</a>
                            <a href="#">Embedded Finance</a>
                            <a href="#">Creator Economy</a>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-400 text-sm'>USE CASE</p>
                        <div className='flex flex-col gap-2 mt-2'>
                            <a href="#">Platforms</a>
                            <a href="#">Creator Economy</a>
                            <a href="#">Crypto</a>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-400 text-sm'>RESOURCES</p>
                        <div className='flex flex-col gap-2 mt-2'>
                            <a href="#">Support Centre</a>
                            <a href="#">Support Plans</a>
                            <a href="#">Guides</a>
                            <a href="#">Customer Stories</a>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-400 text-sm'>RESOURCES</p>
                        <div className='flex flex-col gap-2 mt-2'>
                            <a href="#">Blog</a>
                            <a href="#">Annual Conference</a>
                            <a href="#">Privacy & Terms</a>
                            <a href="#">Checkout</a>
                        </div>
                    </div>
                </section>
                <section className='flex items-start place-content-between gap-18 pb-10'>
                    <h1 className='font-bold text-xl'>Cashmarket</h1>
                    <div>
                        <p>{"CashMarket is a powerful all-in-one wallet app designed to make your financial transaction fast, easy and secure. Whather your're playing bills, making online purchases, or sending money to friends and family, CashMarket offers a smooth and intutive experience"}</p>
                        <p className='text-gray-400 text-sm mt-2'>© 2025 Cashmarket. Inc</p>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default page