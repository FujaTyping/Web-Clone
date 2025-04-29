import React from 'react'
import { Banknote, Check, CircleDollarSign, Videotape, Plus, HandHelping, Star, Presentation, Sprout, Flower, Play, ChevronDown, MoveUpRight, Brain } from 'lucide-react';
import Hero from "@/assets/taxus/Hero.svg"
import BG from "@/assets/taxus/BG.svg"
import HeroL from "@/assets/taxus/HeroLeft.svg"
import appleLoad from "@/assets/taxus/image.png"
import playLoad from "@/assets/taxus/eimage.png"
import port1 from "@/assets/taxus/port1.png"
import port2 from "@/assets/taxus/port2.png"
import coinBackground from "@/assets/taxus/coin_background.webp"
import Client from "@/assets/taxus/Client.svg"
import Bento from "@/assets/taxus/Bento.svg"
import p1 from "@/assets/taxus/p1.png"
import p2 from "@/assets/taxus/p2.png"
import p3 from "@/assets/taxus/p3.png"
import Logo from "@/assets/taxus/Logo.svg"

function page() {
  return (
    <>
      <nav className='bg-[#f5112c] text-white p-4'>
        <div className='max-w-7xl mx-auto flex items-center place-content-between'>
          <img src={Logo.src} alt="Logo" />
          <div className='flex items-center gap-10'>
            <a href="#" className='flex items-center gap-2'>Services<ChevronDown /></a>
            <a href="#">Invvesting</a>
            <a href="#">Pricing</a>
            <a href="#" className='flex items-center gap-2'>Resource<ChevronDown /></a>
            <a href="#">News</a>
            <a href="#">About</a>
          </div>
          <button className='text-black bg-white p-2 px-4 rounded-full flex items-center gap-2'><Play /> Watch Videos</button>
        </div>
      </nav>
      <main className='bg-[#f5112c] flex flex-col text-white items-center justify-center gap-8 pt-18'>
        <h1 className='text-5xl font-bold max-w-2xl text-center'>Change the bank account you use. Obtain more</h1>
        <p className='max-w-xl text-center'>Get a $100 bonus when you move qualifying direct deposit to Taxus - our high interest, no monthly free account. T&Cs apply.Change the bank account you use. Obtain more.</p>
        <button className='bg-white text-black p-3 px-4 rounded-full'>Open a Cast Account</button>
        <div className='flex items-center gap-8'>
          <span className='flex items-center gap-2'><Check className='w-6 h-6 bg-white text-[#f5112c] rounded-full p-1' />Exempt from state taxes</span>
          <span className='flex items-center gap-2'><Check className='w-6 h-6 bg-white text-[#f5112c] rounded-full p-1' />Backend by the US Govt</span>
          <span className='flex items-center gap-2'><Check className='w-6 h-6 bg-white text-[#f5112c] rounded-full p-1' />Easy to use experience</span>
        </div>
        <img src={Hero.src} alt="Hero" className='w-[700px]' />
      </main>

      <main className='my-20'>
        <section className='flex flex-col justify-center items-center gap-8'>
          <div className='text-5xl font-bold'>{`Your money's`} <span className='text-[#f5112c]'>worth</span> more</div>
          <div className='text-center w-[600px]'>Maximize your financial returns with astute investment solutions
            and tailored guidance to cultivate enduring wealth.</div>
          <div className='flex gap-2'>
            <button className='rounded-full w-40 h-12 text-white text-light bg-[#f5112c]'>Get Started</button>
            <button className='rounded-full w-40 h-12 text-light border-2 border-[#f5112c]'>Learn More</button>
          </div>
        </section>
      </main>

      <main className='max-w-7xl mx-auto my-20'>
        <section className='grid grid-cols-3 gap-24'>
          <div className='flex flex-col place-content-between items-center gap-4'>
            <Flower className='text-[#f5112c] w-18 h-18 rounded-full p-4 border-2 border-gray-300' />
            <div className='text-center'>
              <p className='font-bold text-xl'>Unrivaled accessibility</p>
              <p className='text-center w-[400px]'>Get sophisticated investment opportunities traditionally reserved for industry insiders and the ultra-wealthy.</p>
            </div>
            <p className='font-bold text-[#f5112c]'>Readmore</p>
          </div>
          <div className='flex place-content-between flex-col items-center gap-4'>
            <MoveUpRight className='text-[#f5112c] w-18 h-18 rounded-full p-4 border-2 border-gray-300' />
            <div className='text-center'>
              <p className='font-bold text-xl'>Higher yields with lower fees</p>
              <p className='text-center w-[400px]'>{`Your money's always making more with low-fee investing and high-interest savings.`}</p>
            </div>
            <p className='font-bold text-[#f5112c]'>Readmore</p>
          </div>
          <div className='flex flex-col place-content-between items-center gap-4'>
            <Brain className='text-[#f5112c] w-18 h-18 rounded-full p-4 border-2 border-gray-300' />
            <div className='text-center'>
              <p className='font-bold text-xl'>Smart & simple</p>
              <p className='text-center w-[400px]'>In just a few taps, set your financial goals in motion, and let our easy-to-use products handle the rest.</p>
            </div>
            <p className='font-bold text-[#f5112c]'>Readmore</p>
          </div>
        </section>
      </main>

      <main className='bg-no-repeat bg-cover text-white' style={{ backgroundImage: `url(${BG.src})` }}>
        <section className='max-w-7xl mx-auto py-14'>
          <div className='flex items-center place-content-between border-b-2 border-gray-300 w-full pb-14'>
            <div>
              <h1 className='fontt-bold text-4xl mb-4'>Trusted by over <span className='text-[#f1021c]'>7 Million</span> Wakanda</h1>
              <p className='max-w-lg'>Our simple business strategy is to prioritize the needs of our clients. That includes providing industry-leading interest on your checking account and never charging commissions on trades, but it also entails much more. For example, complete transparency about your investments and a creative cost structure that guarantees our success solely depends on your success.</p>
            </div>
            <img src={HeroL.src} alt="Hero" className='w-[500px]' />
          </div>
          <div className='grid grid-cols-3 pt-14'>
            <div className='flex flex-col gap-2 items-center justify-center'>
              <Banknote className='p-2 border-1 border-gray-300 w-12 h-12 rounded-full' />
              <h1 className='font-bold text-2xl'>$54+ Billion</h1>
              <p className='max-w-xs'>Value of Assets Managed</p>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center'>
              <CircleDollarSign className='p-2 border-1 border-gray-300 w-12 h-12 rounded-full' />
              <h1 className='font-bold text-2xl'>$500,000</h1>
              <p className='max-w-xs'>CDIC coverage on eligible deposits</p>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center'>
              <Videotape className='p-2 border-1 border-gray-300 w-12 h-12 rounded-full' />
              <h1 className='font-bold text-2xl'>4x lower</h1>
              <p className='max-w-xs text-center'>VManagement fees than the avarage Wakanda mutual fund</p>
            </div>
          </div>
        </section>
      </main>
      <main className='max-w-7xl mx-auto'>
        <img src={Client.src} alt="Client" className='py-14' />
        <section className='flex items-center justify-center flex-col py-14'>
          <h1 className='font-bold text-4xl'>Make more on your every day earnings</h1>
          <p className='text-center max-w-xl mt-4'>Increase Your Daily Income with Taxus Finance@ We provide innovative fiancial solutions to help you optimize your income every day.</p>
          <div className='grid grid-cols-3 gap-8 mt-10'>
            <div className='grid grid-cols-1 gap-8'>
              <div className='p-4 border-2 border-gray-300 rounded-xl flex flex-col gap-2'>
                <HandHelping className='text-[#f5112c] w-10 h-10' />
                <h1 className='font-bold text-xl'>Extra highinterest meets extra pearks</h1>
                <p>{`Your money's always making more with low-free investing and high-interestsvings.`}</p>
              </div>
              <div className='p-4 border-2 border-gray-300 rounded-xl flex flex-col gap-2'>
                <Banknote className='text-[#f5112c] w-10 h-10' />
                <h1 className='font-bold text-xl'>Smart Investment</h1>
                <p>Get access to a variety of investment products designed to deliver maximum returns.</p>
              </div>
            </div>
            <img src={Bento.src} alt="Bento" className='w-full object-cover' />
            <div className='grid grid-cols-1 gap-8'>
              <div className='p-4 border-2 border-gray-300 rounded-xl flex flex-col gap-2'>
                <Presentation className='text-[#f5112c] w-10 h-10' />
                <h1 className='font-bold text-xl'>Take full control of your trades</h1>
                <p>Choose from thousands of commission-free stocks and ETFs, or buy, sell, and stake 60+ crytocurrencies</p>
              </div>
              <div className='p-4 border-2 border-gray-300 rounded-xl flex flex-col gap-2'>
                <Sprout className='text-[#f5112c] w-10 h-10' />
                <h1 className='font-bold text-xl'>Automatic investment plan</h1>
                <p>Create an automatic savings investment that automantically sets aside a portition of your daily income into a saving or inverstment account.</p>
              </div>
            </div>
          </div>
        </section>
        <section id='portf' className='my-16 flex flex-col jusify-between items-center'>
          <div className=' flex flex-col items-center gap-6 mb-18'>
            <h1 className='text-4xl font-bold'>Custom portfolios, designed by experts</h1>
            <p className='text-center text-xl'>Custom Portfolios, Designed by Experts. At Taxus Finance, we understand <br /> that every individual has unique financial goals and needs</p>
            <button className='rounded-full w-40 h-12 text-white text-light bg-[#f5112c]'>Get Started</button>
          </div>
          <div className='grid grid-cols-2 gap-5 w-full'>
            <img src={port1.src} alt="port1" />
            <img src={port2.src} alt="port2" />
          </div>
        </section>
        <section id='question' className='grid grid-cols-2 w-full my-20'>
          <div className='flex flex-col gap-10 pt-20'>
            <h1 className='text-4xl'>Have Questions? <br />We have answers</h1>
            <p className='text-xl'>Our team of experts is ready to help answer all your <br /> questions regarding invesment, financial management, <br />and other financial solutions.</p>
            <button className='text-xl rounded-full w-50 h-12 text-white font-light bg-[#f5112c]'>Any Questions?</button>
          </div>
          <div className='pt-15 text-xl flex flex-col w-full border border-transparent border-l-black pl-15 '>
            <div className='flex flex-row justify-between items-center h-26 border border-transparent border-b-black'>
              <p>How to register for Digital Mobile Banking services?</p>
              <div className='justify-center items-center flex h-10 w-10 rounded-full border'>
                <Plus />
              </div>
            </div>
            <div className='flex flex-row justify-between items-center h-26 border border-transparent border-b-black'>
              <p>What feature are available in this application?</p>
              <div className='justify-center items-center flex h-10 w-10 rounded-full border'>
                <Plus />
              </div>
            </div>
            <div className='flex flex-row justify-between items-center h-26 border border-transparent border-b-black'>
              <p>What if I forget my PIN or password?</p>
              <div className='justify-center items-center flex h-10 w-10 rounded-full border'>
                <Plus />
              </div>
            </div>
            <div className='flex flex-row justify-between items-center h-26 border border-transparent border-b-black'>
              <p>Is there a fee for using the Digital Mobile Banking service?</p>
              <div className='justify-center items-center flex h-10 w-10 rounded-full border'>
                <Plus />
              </div>
            </div>
            <div className='flex flex-row justify-between items-center h-26 border border-transparent border-b-black'>
              <p>How do I contact customer service?</p>
              <div className='justify-center items-center flex h-10 w-10 rounded-full border'>
                <Plus />
              </div>
            </div>
            <div className='flex flex-row justify-between items-center h-26 border border-transparent border-b-black'>
              <p>Can I open a new account through this application?</p>
              <div className='justify-center items-center flex h-10 w-10 rounded-full border'>
                <Plus />
              </div>
            </div>
            <div className='flex flex-row justify-between items-center h-26 border border-transparent border-b-black'>
              <p>How can I change my investment strategy?</p>
              <div className='justify-center items-center flex h-10 w-10 rounded-full border'>
                <Plus />
              </div>
            </div>
            <div className='flex flex-row justify-between items-center h-26 border border-transparent border-b-black'>
              <p>How do I contact cust?mer service if I have a problem</p>
              <div className='justify-center items-center flex h-10 w-10 rounded-full border'>
                <Plus />
              </div>
            </div>
            <div className='flex flex-row justify-between items-center h-26'>
              <p>How to register for Digital Mobile Banking services?</p>
              <div className='justify-center items-center flex h-10 w-10 rounded-full border'>
                <Plus />
              </div>
            </div>
          </div>
        </section>
        <section id='comment' className='flex flex-col items-center gap-18 my-16'>
          <h1 className='text-4xl font-bold'>Loved by your best customers</h1>
          <div className='grid grid-cols-3 gap-15'>
            <div className='flex flex-col gap-20'>
              <p>{`Since we started using Taxus, managing our company's finances has become much easier and more efficient. This application not only makes it easier for us to organize budgets and financial reports, but also provides accurate and easy-to-use tax reporting features. We are very satisfied with its convenience and reliability!`}
              </p>
              <div className='flex flex-row gap-5 items-center'>
                <img className='w-15 h-15 rounded-full' src={p1.src} alt="p1" />
                <div className='flex flex-col gap-1'>
                  <p className='text-xl'>Jaylon Carder</p>
                  <div className='flex flex-row gap-[1px] text-[#f5112c]'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col place-content-between'>
              <p>Taxus has been an invaluable tool for our business. The intuitive interface and advanced features help us in financial planning and tax reporting in a more efficient manner. With Taxus , we can focus on growing our business without worrying about financial management.</p>
              <div className='flex flex-row gap-3 items-center'>
                <img className='w-15 h-15 rounded-full' src={p2.src} alt="p2" />
                <div className='flex flex-col gap-1'>
                  <p className='text-xl'>Paityn Lubin</p>
                  <div className='flex flex-row gap-[1px] text-[#f5112c]'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col  place-content-between'>
              <p>{`Our experience with Taxus has been very satisfying. The application provides clear and real-time visibility into our company's financial condition, and simplifies the tax report process. The customer support team is also very responsive and helpful when we need help, We highly recommend Taxus to all companies looking to manage their finances better.`}</p>
              <div className='flex flex-row gap-3 items-center'>
                <img className='w-15 h-15 rounded-full' src={p3.src} alt="p3" />
                <div className='flex flex-col gap-1'>
                  <p className='text-xl'>Kadin Press</p>
                  <div className='flex flex-row gap-[1px] text-[#f5112c]'>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <main className='mx-10 my-24'>
        <section className='text-white item relative'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='flex flex-col justify-center items-center gap-8'>
              <div className='text-center text-5xl/20'>Prove the value of your money.</div>
              <p className='text-center w-[650px]'>They are happy to share their positive experiences, leaving reviews that describe how your service has made their financial lives easier.</p>
              <button className='rounded-full w-40 h-12 text-white text-light bg-[#f5112c]'>Get Started</button>
            </div>
          </div>
          <img className='w-full' src={coinBackground.src} alt="coin background" />
        </section>
      </main>

      <div className='border-1 border-gray-300 ' />
      <footer className='max-w-7xl mx-auto'>
        <section className='flex flex-col'>
          <div className='flex py-24 border-b-2 border-gray-300 place-content-between'>
            <div className='flex flex-col'>
              <div className='font-bold'>About</div>
              <div className='flex flex-col gap-4 mt-5'>
                <div>Our Company</div>
                <div>Mision and Vison</div>
                <div>The Team</div>
                <div>Careers</div>
                <div>Newsroom</div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='font-bold'>Legal</div>
              <div className='flex flex-col gap-4 mt-5'>
                <div>Accessibility</div>
                <div>Privacy policy</div>
                <div>Terms of use</div>
                <div>Cookies</div>
                <div>Terms of conditions</div>
                <div>Sitemap</div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='font-bold'>Resource</div>
              <div className='flex flex-col gap-4 mt-5'>
                <div>Blog</div>
                <div>Partnership</div>
                <div>Awards</div>
                <div>Testimonials</div>
                <div>Press</div>
                <div>Documentation</div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='font-bold'>Product</div>
              <div className='flex flex-col gap-4 mt-5'>
                <div>Managed investing</div>
                <div>Key Management</div>
                <div>Private equity</div>
                <div>Mortgages</div>
                <div>Investment</div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='font-bold'>Social Media</div>
              <div className='flex flex-col gap-4 mt-5'>
                <div>Instagram</div>
                <div>X</div>
                <div>LinkedIn</div>
                <div>Youtube</div>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <img width={150} src={appleLoad.src} alt="apple load" />
              <img width={150} src={playLoad.src} alt="playstore load" />
            </div>
          </div>
          <div className='pb-8'>
            <div className='font-light pb-2 mt-16'>Copyright 2024, Taxus Technology Company. All Rights Reserved.</div>
            <div className='font-light'>All materials contained in this site, including but not limited to text, graphics, logos, and designs, are protected by copyright and other intellectual property laws. Use, reproduction, or distribution of the materials without the written permission of Taxus Technology Company is strictly prohibited.</div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default page