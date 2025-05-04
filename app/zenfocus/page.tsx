"use client"

import { useState, useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from "@/assets/zenfocus/ZenFocusLogo.png"
import Hero from "@/assets/zenfocus/Hero.svg"
import T1 from "@/assets/zenfocus/T1.jpg"
import T2 from "@/assets/zenfocus/T2.jpg"
import T3 from "@/assets/zenfocus/T3.jpg"
import CEO from "@/assets/zenfocus/CEO.jpg"
import { BellOff, Target, Timer, Twitter, Facebook, Youtube, Github, X, ChartNoAxesCombined, Brain, CloudUpload, CircleChevronLeft, CircleChevronRight, SearchSlash, Menu } from "lucide-react"
import CL1 from "@/assets/zenfocus/accenture.webp"
import CL2 from "@/assets/zenfocus/amazon.svg"
import CL3 from "@/assets/zenfocus/dell.svg"
import CL4 from "@/assets/zenfocus/merck.svg"
import CL5 from "@/assets/zenfocus/openai-v2.svg"
import CL6 from "@/assets/zenfocus/ramp.svg"
import Marquee from "react-fast-marquee"

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, [])

  return (
    <>
      <main className="bg-violet-300">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex place-content-between items-center py-2">
            <div className="flex flex-row items-center gap-3">
              <img src={Logo.src} alt="Logo" className="w-16" />
              <p className="text-xl font-medium text-purple-900">ZenFocus</p>
            </div>
            <div className="items-center gap-10 hidden md:flex">
              <a href="#" className="hover:text-purple-900">Home</a>
              <a href="#" className="hover:text-purple-900" > Pricing</a>
              <a href="#" className="hover:text-purple-900" > About us</a>
              <a href="#" className="hover:text-purple-900" > Document</a>
            </div>
            <div className="items-center gap-3 hidden md:flex">
              <button className="bg-purple-700 hover:bg-purple-900 text-white rounded-xl h-10 w-30 font-medium cursor-pointer">Try Demo</button>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer block md:hidden bg-purple-700 text-white rounded-xl h-10 px-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
        {isOpen && <>
          <nav className="py-4 border-t-1 border-violet-200">
            <div className="flex flex-col items-center gap-3">
              <a href="#" className="hover:text-purple-900" > Home</a>
              <a href="#" className="hover:text-purple-900" > Pricing</a>
              <a href="#" className="hover:text-purple-900" > About us</a>
              <a href="#" className="hover:text-purple-900" > Document</a>
            </div>
          </nav>
        </>}
      </main>
      <main className="bg-violet-200">
        <section className="max-w-7xl mx-auto py-20 px-4" data-aos="fade-up">
          <section className="gap-8 flex flex-wrap flex-col text-center items-center justify-center">
            <span className="bg-white rounded-full p-2 px-4 border-2 border-violet-400">ZenFocus</span>
            <h1 className="text-5xl md:text-6xl font-bold max-w-3xl">Stay calm. Stay focused. Get things done.</h1>
            <p className="max-w-4xl">{"ZenFocus is a minimalist productivity app that combines focus timers, daily goals, and calming design to help you stay on track. Whether you're studying, working, or just organizing your day, ZenFocus keeps you centered and effective."}</p>
            <button className="hover:bg-purple-900 h-13 font-medium w-35 bg-purple-700 text-white rounded-xl cursor-pointer">Get Started</button>
            <img src={Hero.src} alt="Hero" />
          </section>
        </section>
      </main>
      <main className="max-w-7xl mx-auto">
        <section className="flex flex-wrap items-center gap-6 md:gap-18 justify-center w-full py-8 px-4" data-aos="fade-up">
          <Marquee>
            <img src={CL1.src} alt="Clients" className="w-[150px] mr-28" />
            <img src={CL2.src} alt="Clients" className="w-[100px] mr-28" />
            <img src={CL3.src} alt="Clients" className="w-[70px] mr-28" />
            <img src={CL4.src} alt="Clients" className="w-[120px] mr-28" />
            <img src={CL5.src} alt="Clients" className="w-[100px] mr-28" />
            <img src={CL6.src} alt="Clients" className="w-[100px] mr-28" />
          </Marquee>
        </section>
        <section className="flex flex-col pt-16 pb-18 px-4" data-aos="fade-up">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold text-center">Stay Productive with ZenFocus Features</h2>
            <p className="text-center">Discover powerful features designed to help you focus better, achieve more, and stay on track every day.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-2">
              <div className="flex flex-col items-center bg-violet-200 p-4 rounded-lg gap-2 py-8">
                <BellOff className="bg-white text-violet-600 rounded-full p-4 w-16 h-16" />
                <p className="flex font-bold text-xl gap-1 items-center">Distraction-Free Mode</p>
                <p className="text-center">Stay in the zone by blocking distracting apps and notifications, helping you focus without interruptions.</p>
              </div>
              <div className="flex flex-col items-center bg-violet-200 p-4 rounded-lg gap-2 py-8">
                <Target className="bg-white text-violet-600 rounded-full p-4 w-16 h-16" />
                <p className="flex font-bold text-xl gap-1 items-center">Daily Goals</p>
                <p className="text-center">Set and track daily goals to bring structure to your day and build lasting productivity habits.</p>
              </div>
              <div className="flex flex-col items-center bg-violet-200 p-4 rounded-lg gap-2 py-8">
                <Timer className="bg-white text-violet-600 rounded-full p-4 w-16 h-16" />
                <p className="flex font-bold text-xl gap-1 items-center">Focus Timer</p>
                <p className="text-center">Structure your workflow with timed focus sessions and breaks using the built-in Pomodoro-style timer.</p>
              </div>
              <div className="flex flex-col items-center bg-violet-200 p-4 rounded-lg gap-2 py-8">
                <ChartNoAxesCombined className="bg-white text-violet-600 rounded-full p-4 w-16 h-16" />
                <p className="flex font-bold text-xl gap-1 items-center">Productivity Insights</p>
                <p className="text-center">Gain a clear view of your progress through simple charts that highlight your focus patterns and habits.</p>
              </div>
              <div className="flex flex-col items-center bg-violet-200 p-4 rounded-lg gap-2 py-8">
                <Brain className="bg-white text-violet-600 rounded-full p-4 w-16 h-16" />
                <p className="flex font-bold text-xl gap-1 items-center">Mindful Breaks</p>
                <p className="text-center">Avoid burnout with gentle reminders to pause and recharge through guided breathing or stretch breaks.</p>
              </div>
              <div className="flex flex-col items-center bg-violet-200 p-4 rounded-lg gap-2 py-8">
                <CloudUpload className="bg-white text-violet-600 rounded-full p-4 w-16 h-16" />
                <p className="flex font-bold text-xl gap-1 items-center">Cloud Sync</p>
                <p className="text-center">Keep your tasks, goals, and stats synced across all your devices for seamless productivity anywhere.</p>
              </div>
            </div>
          </div>
        </section>
      </main >
      <main className="bg-violet-200">
        <section className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto py-12 md:py-18 px-4" data-aos="fade-up">
          <div className="flex flex-col place-content-between h-full col-span-3">
            <div className="flex flex-col items-center md:items-start max-w-2xl mt-6 text-lg gap-8">
              <h2 className="flex items-center text-4xl font-bold gap-2 mb-4"><SearchSlash size={40} /> About ZenFocus</h2>
              <div className="block md:hidden">
                <img className="max-w-sm rounded-t-xl" src={CEO.src} alt="CEO Pic" />
                <div>
                  <div className="flex-col items-center bg-white rounded-b-xl text-center py-2">
                    <h1 className="font-bold text-xl mb-2">Jensen Musk</h1>
                    <p>CEO of ZenFocus corp.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start gap-2">
                <p>•</p>
                <p className="flex gap-1">Focused in a Distracted World ZenFocus was created to help you reclaim your attention in a world full of noise. With a clean interface and calming design, it supports deep focus and mindful work.</p>
              </div>
              <div className="flex-row items-start gap-2 hidden md:flex">
                <p>•</p>
                <p className="flex gap-1">Tools That Empower You Featuring Distraction-Free Mode, Daily Goals, and a built-in Focus Timer, ZenFocus gives you the structure and clarity needed to stay productive and stress-free.</p>
              </div>
              <div className="flex-row items-start gap-2 hidden md:flex">
                <p>•</p>
                <p className="flex gap-1">{`Made for Modern Workflows Whether you're a student, creator, or busy professional, ZenFocus adapts to your routine and helps you stay consistent—one focused session at a time.`}</p>
              </div>
            </div>
            <div className="flex-col mt-8 mb-4 items-center md:mt-0 md:mb-0 md:items-start hidden md:block">
              <h1 className="font-bold text-xl mb-2">Jensen Musk</h1>
              <p>CEO of ZenFocus corp.</p>
            </div>
          </div>
          <img className="max-w-sm rounded-xl hidden md:block" src={CEO.src} alt="CEO Pic" />
        </section>

      </main>
      <main className="max-w-7xl mx-auto">
        <section className="flex items-center flex-col py-20 gap-4 px-4" data-aos="fade-up">
          <div className="w-full flex items-center place-content-between">
            <div>
              <h2 className="text-4xl font-bold mb-2">What Our Users Say</h2>
              <p >{`People around the world use ZenFocus to stay productive and stress-free. Here’s what they’re saying.`}</p>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <button className="bg-purple-700 hover:bg-purple-900 rounded-xl text-white p-2 cursor-pointer"><CircleChevronLeft className="w-7 h-7" /></button>
              <button className="bg-purple-700 hover:bg-purple-900 rounded-xl text-white p-2 cursor-pointer"><CircleChevronRight className="w-7 h-7" /></button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-violet-200 rounded-xl p-6 flex gap-2 flex-col place-content-between">
              <div>
                <h1 className="font-bold text-xl mb-2">{`"ZenFocus changed the way I work."`}</h1>
                <p>I used to struggle with staying on task, but the focus timer and clean interface keep me grounded. Highly recommended!</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <img src={T1.src} alt="User" className="w-12 rounded-xl" />
                <div>
                  <h1 className="font-bold">Alex T.</h1>
                  <p>Developer</p>
                </div>
              </div>
            </div>
            <div className="bg-violet-200 rounded-xl p-6 flex gap-2 flex-col place-content-between">
              <div>
                <h1 className="font-bold text-xl mb-2">{`"Simple, beautiful, and effective."`}</h1>
                <p>{`I’ve tried tons of productivity apps, but ZenFocus is the only one that doesn’t overwhelm me. Just what I need to stay focused.`}</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <img src={T2.src} alt="User" className="w-12 rounded-xl" />
                <div>
                  <h1 className="font-bold">Maria L.</h1>
                  <p>Student</p>
                </div>
              </div>
            </div>
            <div className="bg-violet-200 rounded-xl p-6 flex gap-2 flex-col place-content-between">
              <div>
                <h1 className="font-bold text-xl mb-2">{`"It feels like a digital workspace made for my brain."`}</h1>
                <p>ZenFocus helps me get into the zone faster than anything else. The design is calming and the tools are just right.</p>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <img src={T3.src} alt="User" className="w-12 rounded-xl" />
                <div>
                  <h1 className="font-bold">Kenji S.</h1>
                  <p>Freelancer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <main className="bg-violet-300">
        <section className="max-w-7xl mx-auto py-14 flex flex-col md:flex-row gap-6 md:gap-0 items-center md:place-content-between px-4" data-aos="fade-up">
          <div>
            <h1 className="font-bold text-2xl mb-2 text-center md:text-left">Ready to Focus?</h1>
            <p className="text-center md:text-left">Start your journey toward mindful productivity today. ZenFocus is simple, powerful, and completely free to use.</p>
          </div>
          <div>
            <button className="bg-white rounded-xl p-2 px-4 font-medium cursor-pointer hover:bg-gray-100">Get Started Now</button>
          </div>
        </section>
      </main>
      <main className="bg-violet-200">
        <footer className="max-w-7xl mx-auto py-8 px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 justify-between md:items-start pb-10">
            <div className="flex flex-row gap-3">
              <div className="flex flex-row items-center gap-3">
                <img src={Logo.src} alt="Logo" className="w-14" />
                <p className="text-xl font-medium text-purple-900 cursor-default">ZenFocus</p>
              </div>
            </div>
            <div className="flex flex-warp md:flex-row justify-between gap-9 md:gap-30">
              <div className="flex flex-col gap-4">
                <h1 className="font-medium text-lg">Homepage</h1>
                <div className="gap-2 flex flex-col">
                  <a href="#" className="hover:text-purple-900">Main page</a>
                  <a href="#" className="hover:text-purple-900">Features</a>
                  <a href="#" className="hover:text-purple-900">About us</a>
                  <a href="#" className="hover:text-purple-900">Users comment</a>
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                <h1 className="font-medium text-lg">Pricing</h1>
                <div className="gap-2 flex flex-col">
                  <a href="#" className="hover:text-purple-900">Showcase</a>
                  <a href="#" className="hover:text-purple-900">Price choice</a>
                  <a href="#" className="hover:text-purple-900">Our team</a>
                  <a href="#" className="hover:text-purple-900">Our clients</a>
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                <h1 className="font-medium text-lg">Document</h1>
                <div className="gap-2 flex flex-col">
                  <a href="#" className="hover:text-purple-900">Term of services</a>
                  <a href="#" className="hover:text-purple-900">Privacy</a>
                  <a href="#" className="hover:text-purple-900">Company Timeline</a>
                  <a href="#" className="hover:text-purple-900">Management</a>
                </div>
              </div>
            </div>
            <div className="md:self-end flex flex-row gap-5 justify-center items-center">
              <Twitter className="cursor-pointer hover:text-blue-400" />
              <Facebook className="cursor-pointer hover:text-blue-600" />
              <Youtube className="cursor-pointer hover:text-red-500" />
              <Github className="cursor-pointer hover:text-gray-500" />
            </div>
          </div>
          <div className="pt-4 border border-t-black border-transparent text-center" >©2025 ZenFocus Inc.</div>
        </footer>
      </main>
    </>
  );
}
