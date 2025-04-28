import React from 'react'
import { FaCircle, FaRegImages, FaUserCheck } from 'react-icons/fa6'
import { LuBrain } from 'react-icons/lu'
import F1 from "@/assets/abelle/FEATURE1.svg"
import F2 from "@/assets/abelle/FEATURE2.svg"
import BG from "@/assets/abelle/BG.jpg"
import { AiOutlineDashboard } from 'react-icons/ai'
import BG2 from "@/assets/abelle/BG2.jpg"
import Logo from "@/assets/abelle/Logo.svg"
import FLOGO from "@/assets/abelle/Footer.svg"

function page() {
    return (
        <>
            <main className='bg-neutral-950'>
                <section className={`flex items-center justify-center w-full text-white py-32 pt-38 bg-no-repeat bg-cover flex-col gap-10`} style={{ backgroundImage: `url(${BG.src})` }}>
                    <nav className='absolute top-0 left-0 flex items-center place-content-between w-full p-6'>
                        <img src={Logo.src} alt="Logo" />
                        <div className='flex items-center gap-8'>
                            <a href="#">Sagittari Engine</a>
                            <a href="#">API Platform</a>
                            <a href="#">Reserch</a>
                            <a href="#">News</a>
                            <a href="#">Pricings</a>
                            <a href="#">Carrer</a>
                            <button className='text-black bg-white p-2 px-3 rounded-md border-2 border-white'>Try Abelle 2.1</button>
                        </div>
                    </nav>
                    <span className='bg-gray-800 p-2 px-5 rounded-full'>Abelle 2.2 Launched At 21st May 2025</span>
                    <h1 className='font-bold text-5xl text-center'>Always Make Things<br /> Understandable</h1>
                    <p className='max-w-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor consequatur dolore eveniet omnis. Eligendi vel corporis praesentium consequuntur.</p>
                    <div className='flex items-center gap-4'>
                        <button className='bg-neutral-900 text-white p-2 px-3 rounded-md border-2 border-white'>Build With API</button>
                        <button className='text-black bg-white p-2 px-3 rounded-md border-2 border-white'>Try Abelle 2.1</button>
                    </div>
                </section>
                <section className='max-w-7xl mx-auto text-white py-16'>
                    <div className='flex'>
                        <div>
                            <span className='text-[#aa856b] flex items-center gap-2'><FaCircle className='w-3 h-3' />Meet Abelle 2.1</span>
                            <h1 className='font-bold text-4xl max-w-2xl mt-3'>Abeele is an intelligent system designed to handle complex tasks, generate visuals, and repond with a deep sense of personalization and adapting to your needs with a remarkably human touch</h1>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse mt-6'>
                        <div>
                            <p className='max-w-md mb-5'>{`Whether you're crafting idea, solving challenges, or simply exploring-Abelle understands your context`}</p>
                            <button className='text-black bg-white p-2 px-3 rounded-md border-2 border-white'>Try Abelle 2.1</button>
                        </div>
                    </div>
                </section>
                <main className='max-w-7xl mx-auto text-white'>
                    <section className='flex flex-col items-center justify-center w-full py-14 gap-4'>
                        <span className='text-[#aa856b] flex items-center gap-2'><FaCircle className='w-3 h-3' />Why Abelle Standout</span>
                        <h1 className='font-bold text-4xl text-center'>Smarter responses. Stunning<br />visuals. Always adaptive</h1>
                        <p className='text-center'>Abelle providers powerful, personalized support that<br />fells intutitive and responsive.</p>
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className='flex flex-col gap-2'>
                                <LuBrain className='text-[#b68573] bg-[#1a1615] p-2 w-15 h-15 rounded-md' />
                                <h1 className='font-bold text-xl'>Handles Complexity with Ease</h1>
                                <p>Abelle understands layers of context, nuance, and intent-enabling it to solve problesms that go beyond basic logic and sirface-level prompts.</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <FaRegImages className='text-[#b68573] bg-[#1a1615] p-2 w-15 h-15 rounded-md' />
                                <h1 className='font-bold text-xl'>Generates Visuals Instantly</h1>
                                <p>From abstract thoughts to vivid scenes, Abelle transforms your words into striking AI-grnerated visuals that ready to inspire or communicate.</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <FaUserCheck className='text-[#b68573] bg-[#1a1615] p-2 w-15 h-15 rounded-md' />
                                <h1 className='font-bold text-xl'>Personalized Just for You</h1>
                                <p>Every response reflects your intent-Abelle listens, adapts, and answers with tone and context that feel uniquely yours.</p>
                            </div>
                        </div>
                    </section>
                    <section className='flex place-content-between w-full py-24'>
                        <div className='flex flex-col place-content-between'>
                            <div>
                                <span className='text-[#aa856b] flex items-center gap-2'><FaCircle className='w-3 h-3' />Text-to-Image Generation</span>
                                <h1 className='font-bold text-4xl max-w-md mt-2'>Describe it,and watch your imagination come to life with stunning detail</h1>
                            </div>
                            <p className='max-w-xl'>Abelle understands even the most complex cisual prompts. transforming abstract, surreal, or hyper-specific ideas into high-quality images, from dreamy landscapes to trchnical compositions.</p>
                        </div>
                        <img className='max-w-[600px] rounded-lg' src={F1.src} alt="Feature" />
                    </section>
                    <section className='flex flex-col items-center justify-center w-full py-24'>
                        <span className='text-[#aa856b] flex items-center gap-2'><FaCircle className='w-3 h-3' />Inside Abelle 2.1 Engines</span>
                        <h1 className='font-bold text-4xl text-center'>Unleashing the Power of<br />Abelle 2.1 Engine</h1>
                        <div className='flex items-end gap-18 mt-12'>
                            <img src={F2.src} className='max-w-[600px] rounded-lg' alt="Feature" />
                            <div className='flex flex-col gap-5'>
                                <AiOutlineDashboard className='text-[#b68573] bg-[#1a1615] p-2 w-15 h-15 rounded-md' />
                                <h1 className='font-bold text-4xl'>Faster than ever before, delivering results in seconds</h1>
                                <p>With improved effciency and responsiveness, evey interaction feels natural and instantaneous, making it easier to achieve your goals quickly and effortlessly.</p>
                                <button className='w-fit text-black bg-white p-2 px-3 rounded-md border-2 border-white'>Try Abelle 2.1</button>
                            </div>
                        </div>
                    </section>
                    <main className='py-16'>
                        <section className={`flex items-center justify-center w-full text-white py-24 bg-no-repeat bg-cover flex-col gap-10 rounded-lg`} style={{ backgroundImage: `url(${BG2.src})` }}>
                            <span className='bg-gray-700 p-2 px-5 rounded-full'>Abelle 2.2 Launched At 21st May 2025</span>
                            <h1 className='font-bold text-5xl'>Do More With Abelle</h1>
                            <div className='flex items-center gap-4'>
                                <button className='bg-neutral-900 text-white p-2 px-3 rounded-md border-2 border-white'>Build With API</button>
                                <button className='text-black bg-white p-2 px-3 rounded-md border-2 border-white'>Try Abelle 2.1</button>
                            </div>
                        </section>
                    </main>
                </main>
            </main>
            <footer className='bg-neutral-950 w-full pt-10'>
                <section className='max-w-7xl mx-auto text-white'>
                    <div className='flex items-center place-content-between'>
                        <a href="#">Sagittari Engine</a>
                        <a href="#">API Platform</a>
                        <a href="#">Reserch</a>
                        <a href="#">News</a>
                        <a href="#">Pricings</a>
                        <a href="#">Carrer</a>
                    </div>
                </section>
                <img src={FLOGO.src} alt="Footer" className='rounded-xl mt-10 w-full' />
            </footer>
        </>
    )
}

export default page