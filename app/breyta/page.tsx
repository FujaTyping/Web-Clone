import React from 'react'
import VDO from "@/assets/breyta/Tirein.svg"
import Client from "@/assets/breyta/Clients.svg"
import { Binoculars, ChevronDown, CircleCheck, GitBranch, Lightbulb, Quote, Search, Zap } from 'lucide-react'
import ClientIcon from "@/assets/breyta/Norwegian.svg"
import F1 from "@/assets/breyta/F1.webp"
import F2 from "@/assets/breyta/F2.webp"
import F3 from "@/assets/breyta/F3.webp"
import ClientsIcon2 from "@/assets/breyta/NetlifeIcon.svg"
import LookerImg from "@/assets/breyta/FooterImg.svg"
import FL from "@/assets/breyta/FooterLogo.svg"
import Logo from "@/assets/breyta/Logo.svg"

function page() {
    return (
        <>
            <main className='bg-[#fffc92] text-[#311f35]'>
                <nav className='flex items-start place-content-between py-7 px-16'>
                    <div className='flex items-center gap-8'>
                        <a href="#" className='flex items-center gap-1'>Product<ChevronDown /></a>
                        <a href="#" className='flex items-center gap-1'>Resources<ChevronDown /></a>
                        <a href="#">Contact sales</a>
                        <a href="#">Pricing</a>
                    </div>
                    <div className='flex items-center gap-6'>
                        <button className='bg-[#d5d3dd] p-2 px-6 rounded-full w-fit'>Login</button>
                        <button className='bg-[#2add8c] p-2 px-6 rounded-full w-fit'>Start 14-day free trial</button>
                    </div>
                </nav>
                <div className='absolute top-7 flex items-center justify-center w-full'>
                    <img src={Logo.src} alt="Logo" />
                </div>
                <section className='max-w-7xl mx-auto flex items-center place-content-between py-16 pt-24'>
                    <div className='flex flex-col gap-8'>
                        <h1 className='font-bold text-5xl'>Supercharge your qualitative data analysis</h1>
                        <div className='flex flex-col gap-1 pl-4'>
                            <li><b>Fast</b>. Deep, comprehensive answers in seconds</li>
                            <li><b>Accurate</b>. Built to minimise errors/hallucination.</li>
                            <li><b>Trustworthy</b>. Always backed by evidence.</li>
                            <li><b>Scalable</b>. Analyse hours of conversations in one go.</li>
                        </div>
                        <button className='bg-[#311f35] text-[#fffc92] p-2 px-6 rounded-full w-fit'>Start 14-day free trial</button>
                    </div>
                    <img src={VDO.src} alt="VIDEO" className='max-w-lg' />
                </section>
                <section className='flex items-center justify-center pb-8 gap-6'>
                    <p className='flex items-center gap-2 font-bold'><CircleCheck />SOC 2 Type II</p>
                    <p className='flex items-center gap-2 font-bold'><CircleCheck />Data stored in Scandinavia</p>
                    <p className='flex items-center gap-2 font-bold'><CircleCheck />PII Redaction</p>
                    <p className='flex items-center gap-2 font-bold'><CircleCheck />GDPR</p>
                    <p className='flex items-center gap-2 font-bold'><CircleCheck />No AI training using your data</p>
                </section>
                <section className='flex items-center flex-col justify-center pt-12 pb-16 gap-6'>
                    <h1 className='font-bold text-2xl'>Trusted by research, UX and product teams at...</h1>
                    <img src={Client.src} alt="Client" />
                </section>
            </main>
            <main className='bg-[#f8f4fb] text-[#311f35]'>
                <section className='max-w-7xl mx-auto flex items-center justify-center flex-col py-16 gap-10'>
                    <h1 className='font-bold text-4xl'>Unlock massive scale</h1>
                    <div className='flex items-center gap-10'>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Search className='w-12 h-12' />
                            <p className='max-w-[200px] text-center'>Search across unlimited files</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Zap className='w-12 h-12' />
                            <p className='max-w-[200px] text-center'>Optimised for analysis across many files</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center justify-center'>
                            <Lightbulb className='w-12 h-12' />
                            <p className='max-w-[200px] text-center'>Deep analysis of 30+ hrs of interviews at once</p>
                        </div>
                    </div>
                </section>
                <main className='pt-6 pb-16'>
                    <section className='bg-[#f1ebf5] max-w-7xl mx-auto rounded-xl p-10 px-14 flex flex-col items-center justify-center text-center gap-5'>
                        <Quote className='w-8 h-8' />
                        <p className='font-semibold text-lg'>{`"Really like that it's more scalable than ChatGPT by analyzing a lot of files at the same time. Love that all insights are very accurate and are supported by quotes from the raw transcript automatically"`}</p>
                        <div className='flex items-center flex-col gap-1'>
                            <img src={ClientIcon.src} alt="Icon" />
                            <h1 className='font-bold'>Mohamed Hersi</h1>
                            <p>UX Designer & User Research Lead</p>
                        </div>
                    </section>
                </main>
            </main>
            <section className='text-[#311f35] max-w-7xl mx-auto flex items-center place-content-between py-16'>
                <div className='flex flex-col gap-6'>
                    <Search className='w-14 h-14' />
                    <h1 className='font-bold text-4xl max-w-md'>Find anything in your research repository</h1>
                    <p className='max-w-sm'>Never lose an insight again. Search across <b>unlimited files</b>.</p>
                    <div className='flex flex-col gap-1 ml-4 max-w-md'>
                        <li>Find mentions in your data</li>
                        <li>Surface all files that match a search</li>
                        <li>Easily dive into deep analysis</li>
                        <li>Minimised hallucination – if we can’t find an answer, we’ll say so.</li>
                    </div>
                </div>
                <img src={F1.src} alt="Feature" className='max-w-lg rounded-xl shadow-md' />
            </section>
            <main className='bg-[#f8f4fb] text-[#311f35]'>
                <section className='text-[#311f35] flex-row-reverse max-w-7xl mx-auto flex items-center place-content-between py-16'>
                    <div className='flex flex-col gap-6'>
                        <GitBranch className='w-14 h-14' />
                        <h1 className='font-bold text-4xl max-w-md'>Flexible analysis that serves you</h1>
                        <p className='max-w-sm'>Our AI is dependent on you to direct it. <b>Ask any question, any time</b>.</p>
                        <div className='flex flex-col gap-1 ml-4 max-w-md'>
                            <li>Go beyond interview questions</li>
                            <li>Dig deeper with follow-ups</li>
                            <li>Start analysis as soon as you have your first data point. Answers auto-update as you add more files.</li>
                        </div>
                    </div>
                    <img src={F2.src} alt="Feature" className='max-w-xl rounded-xl shadow-md' />
                </section>
                <section className='text-[#311f35] max-w-7xl mx-auto flex items-center place-content-between py-16'>
                    <div className='flex flex-col gap-6'>
                        <Binoculars className='w-14 h-14' />
                        <h1 className='font-bold text-4xl max-w-md'>No magic. Just answers backed by evidence.</h1>
                        <div className='flex flex-col gap-1 ml-4 max-w-md'>
                            <li>References/quotes for all results</li>
                            <li>Instantly see quotes in context (in video, audio or text)</li>
                            <li>Copy and share quotes</li>
                            <li>Only answers from your data (no random input from the web)</li>
                        </div>
                    </div>
                    <img src={F3.src} alt="Feature" className='max-w-2xl rounded-xl shadow-md' />
                </section>
                <main className='py-16'>
                    <section className='bg-[#f1ebf5] max-w-7xl mx-auto rounded-xl p-10 px-14 flex flex-col items-center justify-center text-center gap-5'>
                        <Quote className='w-8 h-8' />
                        <p className='font-semibold text-lg'>{`"It is such a game changer to get all the transcripts and insights in seconds, and to be able to cross check hypotheses based on many participants. Still by manually checking all the key findings, we save loads of time by using Breyta. I love seeing Breyta doing the job, and doing it so well!"`}</p>
                        <div className='flex items-center flex-col gap-1'>
                            <img src={ClientsIcon2.src} alt="Icon" className='max-w-[150px]' />
                            <h1 className='font-bold'>Cecilie Smestad</h1>
                            <p>User Experience Consultant</p>
                        </div>
                    </section>
                </main>
                <section className='max-w-7xl mx-auto pt-16 flex items-center flex-col justify-center gap-10'>
                    <h1 className='font-bold text-4xl'>Privacy and security first</h1>
                    <div className='grid grid-cols-1'>
                        <div className='flex items-center place-content-between w-full gap-14 py-4 border-t-1 border-b-1'>
                            <p className='text-2xl'>We are SOC 2 Type 2 certified</p>
                            <ChevronDown className='w-8 h-8' />
                        </div>
                        <div className='flex items-center place-content-between w-full gap-14 py-4 border-b-1'>
                            <p className='text-2xl'>We store data in Scandinavia, Europe</p>
                            <ChevronDown className='w-8 h-8' />
                        </div>
                        <div className='flex items-center place-content-between w-full gap-14 py-4 border-b-1'>
                            <p className='text-2xl'>Can you help me anonymise my data? I don’t want any PII in my data. </p>
                            <ChevronDown className='w-8 h-8' />
                        </div>
                        <div className='flex items-center place-content-between w-full gap-14 py-4 border-b-1'>
                            <p className='text-2xl'>We are GDPR compliant</p>
                            <ChevronDown className='w-8 h-8' />
                        </div>
                        <div className='flex items-center place-content-between w-full gap-14 py-4 border-b-1'>
                            <p className='text-2xl'>We handle data deletion for you</p>
                            <ChevronDown className='w-8 h-8' />
                        </div>
                        <div className='flex items-center place-content-between w-full gap-14 py-4 border-b-1'>
                            <p className='text-2xl'>Your data will never be used to train AI models</p>
                            <ChevronDown className='w-8 h-8' />
                        </div>
                        <div className='flex items-center place-content-between w-full gap-14 py-4 border-b-1'>
                            <p className='text-2xl'>Which languages do you transcribe to?</p>
                            <ChevronDown className='w-8 h-8' />
                        </div>
                    </div>
                    <button className='bg-[#311f35] text-[#fffc92] p-2 px-6 rounded-full w-fit'>Get started for free</button>
                    <img src={LookerImg.src} alt="Looker" className='max-w-lg' />
                </section>
            </main>
            <main className='bg-[#311f35] text-[#b1a1b5]'>
                <section className='max-w-7xl mx-auto flex items-start place-content-between py-16 border-b-1'>
                    <div>
                        <h1 className='font-bold text-xl'>Company</h1>
                        <div className='mt-2 flex flex-col gap-1'>
                            <a href="#" className='underline'>About</a>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>Resources</h1>
                        <div className='mt-2 flex flex-col gap-1'>
                            <a href="#" className='underline'>Blog</a>
                            <a href="#" className='underline'>Free YouTube analysis</a>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>Legal</h1>
                        <div className='mt-2 flex flex-col gap-1'>
                            <a href="#" className='underline'>Privacy policy</a>
                            <a href="#" className='underline'>Limited Use Disclosure</a>
                            <a href="#" className='underline'>Cookie policy</a>
                            <a href="#" className='underline'>Terms and conditions</a>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>Comparisons</h1>
                        <div className='mt-2 flex flex-col gap-1'>
                            <a href="#" className='underline'>Breyta vs Dovetai</a>
                            <a href="#" className='underline'>Breyta vs Copilot</a>
                        </div>
                    </div>
                </section>
                <section className='max-w-7xl mx-auto flex items-center place-content-between py-8'>
                    <img src={FL.src} alt="Logo" />
                    <p>Copyright © 2025 Breyta AS.</p>
                </section>
            </main>
        </>
    )
}

export default page