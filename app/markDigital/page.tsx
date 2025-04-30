import React from 'react'
import BG from "@/assets/markDigital/BG.jpg"
import { FaArrowRight, FaChevronDown, FaHandHoldingHeart, FaLaptopCode, FaLinkedin, FaQuoteLeft, FaShop, FaSquareXTwitter, FaTableCellsColumnLock } from 'react-icons/fa6'
import UW from "@/assets/markDigital/Upwork.svg"
import Star from "@/assets/markDigital/stars.svg"
import GF from "@/assets/markDigital/goodfirsr.svg"
import LKI from "@/assets/markDigital/linked.svg"
import { IoIosArrowBack, IoIosArrowForward, IoIosChatboxes, IoIosRocket } from 'react-icons/io'
import TSM from "@/assets/markDigital/TESTM.png"
import F1 from "@/assets/markDigital/F1.png"
import F2 from "@/assets/markDigital/F2.jpg"
import { TbDeviceDesktopCode, TbFileDatabase } from 'react-icons/tb'
import { MdDeveloperMode, MdOutlinePhone } from 'react-icons/md'
import { BsDatabaseFillGear } from 'react-icons/bs'
import Client from "@/assets/markDigital/Client.svg"
import { RiDashboard2Line, RiTeamFill } from 'react-icons/ri'
import { GrCloudComputer } from 'react-icons/gr'
import RB1 from "@/assets/markDigital/Ribbions1.svg"
import RB2 from "@/assets/markDigital/Ribbions2.svg"
import RB3 from "@/assets/markDigital/Ribbions3.svg"
import RB4 from "@/assets/markDigital/Ribbions4.svg"
import RB5 from "@/assets/markDigital/Ribbions5.svg"
import RB6 from "@/assets/markDigital/Ribbions6.svg"
import { FaCheckCircle, FaFacebookSquare } from 'react-icons/fa'
import QUST from "@/assets/markDigital/Question.png"
import FLOGO from "@/assets/markDigital/footer-logo.svg"
import GLOGO from "@/assets/markDigital/google-partner-2.svg"
import DMCA from "@/assets/markDigital/DMCA.svg"
import { CiMail } from 'react-icons/ci'
import LOGO from "@/assets/markDigital/Logo.svg"

function page() {
  return (
    <>
      <nav className='bg-[#222222] text-white'>
        <main className='max-w-7xl mx-auto flex items-center place-content-between py-4'>
          <img src={LOGO.src} alt="LOGO" className='w-38' />
          <div className="flex items-center gap-8">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Our work</a>
            <button className='hover:bg-[#ffffff] w-fit text-white rounded-full p-2 px-4 hover:text-black border-2 duration-200'>Contact Us</button>
          </div>
        </main>
      </nav>
      <main className='bg-no-repeat bg-cover' style={{ backgroundImage: `url(${BG.src})` }}>
        <section className='text-white max-w-7xl mx-auto flex items-center place-content-between py-24 pb-28'>
          <div className='flex flex-col gap-6'>
            <span className='text-[#d2e370]'>Home {">"} Custom Web Development</span>
            <h1 className='font-bold text-5xl max-w-md'>Custom Web Development Services</h1>
            <p className='max-w-xl'>At Mark-Digital. we specialize in delivering high-quality. custom web development services tailored to your specific goals. Whather you need a CMS-powerd website or a full bespoke non-CMS solution. we ensure your web presence stands out and performs seamlessly.</p>
          </div>
          <div className='bg-white flex flex-col p-8 py-10 rounded-xl gap-6 min-w-lg'>
            <input type="text" placeholder='Name' className='pl-4 h-12 placeholder-gray-400 border-1 border-gray-300 rounded-md' />
            <input type="text" placeholder='Email' className='pl-4 h-12 placeholder-gray-400 border-1 border-gray-300 rounded-md' />
            <select
              name="dd"
              defaultValue=""
              className='pl-4 h-12 text-gray-500 border border-gray-300 rounded-md'
            >
              <option value="" disabled className="text-gray-400">
                Select a service...
              </option>
              <option value="web_development">Web development</option>
              <option value="seo">SEO</option>
              <option value="ppc">Pay-Per-Click {"(PPC)"} Ads</option>
              <option value="ux_ui">UX/UI Design</option>
              <option value="ai_integration">AI Integration</option>
              <option value="other">Other / Custom</option>
            </select>
            <textarea placeholder="Project Despription" className='pl-4 h-28 placeholder-gray-400 border-1 border-gray-300 rounded-md' />
            <button className='bg-[#7a30f3] rounded-full py-3 flex items-center justify-center gap-2'>Send <FaArrowRight className='bg-[#aa7af7] rounded-full p-1 w-6 h-6' /></button>
          </div>
        </section>
      </main>
      <main className='absolute w-full -mt-14'>
        <main className='max-w-7xl mx-auto w-full'>
          <section className='flex items-center place-content-between p-6 shadow-xl rounded-xl px-10 bg-white'>
            <div className='text-center'>
              <h1 className='font-bold text-3xl'>100+</h1>
              <p>Successful cases</p>
            </div>
            <div className='w-0.5 h-14 bg-gray-200'></div>
            <div className='text-center'>
              <h1 className='font-bold text-3xl'>330%+</h1>
              <p>Average conversions rate increase</p>
            </div>
            <div className='w-0.5 h-14 bg-gray-200'></div>
            <div className='text-center'>
              <h1 className='font-bold text-3xl'>2.8x</h1>
              <p>Average traffic increase</p>
            </div>
          </section>
        </main>
      </main>
      <main className='max-w-7xl mx-auto'>
        <section className='py-18 pt-28 flex items-center justify-center gap-6'>
          <div className='flex items-center gap-3 p-2 px-6 border-1 rounded-lg w-fit border-gray-300'>
            <div>
              <img className='w-18 mb-1' src={UW.src} alt="UpWork" />
              <img src={Star.src} alt="Star" />
            </div>
            <div>
              <h1 className='font-bold text-2xl'>4.9</h1>
              <p className='font-bold'>175+ reviews</p>
            </div>
          </div>
          <div className='flex items-center gap-3 p-2 px-6 border-1 rounded-lg w-fit border-gray-300'>
            <div>
              <img className='w-24 mb-1' src={GF.src} alt="UpWork" />
              <img src={Star.src} alt="Star" />
            </div>
            <div>
              <h1 className='font-bold text-2xl'>4.9</h1>
              <p className='font-bold'>23 reviews</p>
            </div>
          </div>
          <div className='flex items-center gap-3 p-2 px-6 border-1 rounded-lg w-fit border-gray-300'>
            <div>
              <img className='w-22 mb-1' src={LKI.src} alt="UpWork" />
            </div>
            <div>
              <h1 className='font-bold text-2xl'>10K+</h1>
              <p className='font-bold'>Followers</p>
            </div>
          </div>
        </section>
      </main>
      <main className='bg-gray-200 py-14'>
        <section className='max-w-7xl mx-auto'>
          <div className='flex items-center place-content-between'>
            <h1 className='font-bold text-4xl'>What our clients say</h1>
            <div className='flex items-center gap-3'>
              <IoIosArrowBack className='p-2 border-1 rounded-full text-black w-11 h-11' />
              <IoIosArrowForward className='p-2 border-1 rounded-full text-black w-11 h-11' />
            </div>
          </div>
          <div className='grid grid-cols-4 w-full gap-10 mt-10'>
            <div className='bg-white col-span-3 p-8 pl-16 rounded-3xl flex flex-col place-content-between'>
              <div>
                <div className='relative flex items-center'>
                  <h1 className='text-[#a452f7] font-bold text-2xl mb-4'>Project: Web development</h1>
                  <FaQuoteLeft className='absolute left-0 text-[#a452f7] w-6 h-6 -ml-9 -mt-4' />
                </div>
                <p>{`"I absolutely recommend Mark Digital for web development. Their knowledge and ability to deliver projects on time and to an exceptional standard is great. Their commitment to excellence in both the process and the final product is what sets them apart."`}</p>
              </div>
              <div>
                <h1 className='font-bold text-xl'>Carolina M.</h1>
                <p>Thriive, Head of Marketing</p>
              </div>
            </div>
            <img src={TSM.src} alt="Testmonils" />
          </div>
        </section>
      </main>
      <main className='max-w-7xl mx-auto'>
        <section className='flex items-center place-content-between py-18 '>
          <img src={F1.src} alt="Feature" className='max-w-[600px]' />
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl font-bold max-w-lg'>Need Custom Web Development?</h1>
            <p>Unlock your business potential unique website:</p>
            <ul className='max-w-lg'>
              <li><b>Tailored to Your Vission:</b> We create solutions that align perfectly with your goals and brand indentity</li>
              <li><b>Technology-Agnostic Approach:</b> Our expertise spans across multiple technologies, ensuring the right tools for the job.</li>
              <li><b>Future-Proof Scalability:</b> Build a foundation designed to grow with your business needs.</li>
            </ul>
            <p className='max-w-lg'>Our custom solution go beyond templates, offering flexibility, security, and performance optimized for your business.</p>
          </div>
        </section>
        <section className='flex flex-row-reverse items-center place-content-between py-18 '>
          <img src={F2.src} alt="Feature" className='max-w-[600px] rounded-xl' />
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl font-bold max-w-lg'>How Can We Help?</h1>
            <p>At Mark-Digital, we excel in a variety of technologies to meet your development needs:</p>
            <ul className='max-w-lg'>
              <li><b>CMS-Based Development:</b> WordPress, Drupal, Joomla, Shopify, and more.</li>
              <li><b>Custom Frameworks:</b>Lavavel, Codelgniter, Symfony, and other PHP frameworks.</li>
              <li><b>Modern Frontend Frameworks:</b> React, Angular, Vue.js, and Svelte.</li>
              <li><b>E-commerce Solutions:</b> Magento, WooCommerce, OpenCart, and bespoke e-commerce platforms.</li>
              <li><b>Non-CMS Solutions:</b> Static sites, custom-built admin panels, or headless architectures.</li>
              <li><b>Backend Technologies:</b> node.js, Python, Ruby on Rails, and PHP</li>
            </ul>
          </div>
        </section>
        <section className='flex items-center justify-center flex-col py-16 gap-4'>
          <p className='text-[#7a30f3]'>What we do <b className='font-bold'>-</b></p>
          <h1 className='font-bold text-4xl'>Our Custom Web Development Services</h1>
          <div className='grid grid-cols-3 gap-6 mt-6'>
            <div className='flex items-center flex-col gap-3 border-2 border-gray-200 rounded-xl p-6 py-10 hover:bg-gray-200'>
              <TbDeviceDesktopCode className='text-[#7f39f4] w-16 h-16 border-2 border-[#7f39f4] bg-[#eeedff] p-2 rounded-full' />
              <h1 className='font-bold text-2xl text-center'>Bespoke Website Development</h1>
              <p className='text-center'>Unique, scalable websites crafted specifically to meet your business goals and brand indentity.</p>
            </div>
            <div className='flex items-center flex-col gap-3 border-2 border-gray-200 rounded-xl p-6 py-10 hover:bg-gray-200'>
              <MdDeveloperMode className='text-[#7f39f4] w-16 h-16 border-2 border-[#7f39f4] bg-[#eeedff] p-2 rounded-full' />
              <h1 className='font-bold text-2xl text-center'>Custom Application Development</h1>
              <p className='text-center'>Build powerful web applications with tailcred features to address your exact requirements.</p>
            </div>
            <div className='flex items-center flex-col gap-3 border-2 border-gray-200 rounded-xl p-6 py-10 hover:bg-gray-200'>
              <FaShop className='text-[#7f39f4] w-16 h-16 border-2 border-[#7f39f4] bg-[#eeedff] p-2 rounded-full' />
              <h1 className='font-bold text-2xl text-center'>E-commerce Solutions & Platforms</h1>
              <p className='text-center'>Create robust online stores on Shopify, Magento, WooCommerce, or fully custom solutions for seamless trransactions..</p>
            </div>
            <div className='flex items-center flex-col gap-3 border-2 border-gray-200 rounded-xl p-6 py-10 hover:bg-gray-200'>
              <IoIosRocket className='text-[#7f39f4] w-16 h-16 border-2 border-[#7f39f4] bg-[#eeedff] p-2 rounded-full' />
              <h1 className='font-bold text-2xl text-center'>Performance Optimization</h1>
              <p className='text-center'>Ensure your website or application is lighting-fast secure, and optimized for exceptional user experiences.</p>
            </div>
            <div className='flex items-center flex-col gap-3 border-2 border-gray-200 rounded-xl p-6 py-10 hover:bg-gray-200'>
              <BsDatabaseFillGear className='text-[#7f39f4] w-16 h-16 border-2 border-[#7f39f4] bg-[#eeedff] p-2 rounded-full' />
              <h1 className='font-bold text-2xl text-center'>Third-Party Integrations</h1>
              <p className='text-center'>Seamlessly integrate CRMs, payment gateways, markeing tools, and other third-party services into your platform.</p>
            </div>
            <div className='flex items-center flex-col gap-3 border-2 border-gray-200 rounded-xl p-6 py-10 hover:bg-gray-200'>
              <TbFileDatabase className='text-[#7f39f4] w-16 h-16 border-2 border-[#7f39f4] bg-[#eeedff] p-2 rounded-full' />
              <h1 className='font-bold text-2xl text-center'>Website Migrations</h1>
              <p className='text-center'>Smoothly transition your exitsting website or application to a new platform or technology without disruption.</p>
            </div>
          </div>
        </section>
        <section className='flex items-center justify-center flex-col py-16 gap-4'>
          <p className='text-[#7a30f3]'>Our Tech Stack <b className='font-bold'>-</b></p>
          <h1 className='font-bold text-4xl'>Top Tools & Technologies Expertise</h1>
          <p>We leverage cutting-edge technologies and tools to deliver exceptional WordPress solutions:</p>
          <img src={Client.src} alt="Clients" className='mt-4' />
        </section>
      </main>
      <main className='bg-[#1c1d22] text-white w-full'>
        <section className='max-w-7xl mx-auto py-16 flex items-center place-content-between w-full gap-18'>
          <div className='flex flex-col gap-4'>
            <p className='text-[#ddef75]'>Our Tech Stack <b className='font-bold'>-</b></p>
            <h1 className='font-bold text-4xl'>What Will You Get?</h1>
            <p className='max-w-lg'>With Mark-Digital, you are getting a custom-built web solution designed for exceptional performance, flexibility, and growth. Our custom web development services ensure your website or application delivers measurable results and meets your unique business needs.</p>
            <button className='bg-[#ddef75] w-fit text-[#1c1d22] rounded-full p-2 px-4 hover:bg-[#1c1d22] hover:text-[#ddef75] border-2 duration-200'>Estimate your project</button>
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2 bg-[#313436] p-4 rounded-xl py-6'>
              <RiDashboard2Line className='w-12 h-12' />
              <h1 className='font-bold text-xl'>Blazing-Fast Performance</h1>
              <p className='max-w-sm'>Achieve superior load times and seamless user experiences with optimized, high-performance code.</p>
            </div>
            <div className='flex flex-col gap-2 bg-[#313436] p-4 rounded-xl py-6'>
              <FaHandHoldingHeart className='w-12 h-12' />
              <h1 className='font-bold text-xl'>Tailored to Your Needs</h1>
              <p className='max-w-sm'>We deliver fully customized solutions built around your specific requirements.</p>
            </div>
            <div className='flex flex-col gap-2 bg-[#313436] p-4 rounded-xl py-6'>
              <FaTableCellsColumnLock className='w-12 h-12' />
              <h1 className='font-bold text-xl'>Enhanced Website Security</h1>
              <p className='max-w-sm'>Implement cutting-edge security protocols to safeguard your website and data from threats.</p>
            </div>
            <div className='flex flex-col gap-2 bg-[#313436] p-4 rounded-xl py-6'>
              <GrCloudComputer className='w-12 h-12' />
              <h1 className='font-bold text-xl'>Scalable & Future-Ready Solutions</h1>
              <p className='max-w-sm'>Flexible, custom-built platforms designed to scale effortlessly as your business grows.</p>
            </div>
          </div>
        </section>
      </main>
      <main className='bg-[#faf9ff]'>
        <section className='max-w-7xl mx-auto flex items-center justify-center flex-col gap-3 py-16'>
          <p className='text-[#7a30f3]'>Advantages <b className='font-bold'>-</b></p>
          <h1 className='font-bold text-4xl max-w-3xl text-center'>Why Choose Mark-Digital for Custom Web Development?</h1>
          <div className='grid grid-cols-3 mt-4 gap-8'>
            <div className='shadow-xl p-6 py-12 rounded-xl flex flex-col gap-2 relative'>
              <img src={RB1.src} alt="RB" className='absolute top-0 right-0 w-[100px] -mr-1' />
              <h1 className='text-[#7a30f3] font-bold text-xl'>Proven Expertise</h1>
              <p>With years of expertise in custom development, we’ve delivered innovative and successful solutions across industries.</p>
            </div>
            <div className='shadow-xl p-6 py-12 rounded-xl flex flex-col gap-2 relative'>
              <img src={RB2.src} alt="RB" className='absolute top-0 right-0 w-[100px] -mr-1' />
              <h1 className='text-[#7a30f3] font-bold text-xl'>Unique Solutions</h1>
              <p>Every project is crafted to match your exact requirements, ensuring a perfect fit for your business goals.</p>
            </div>
            <div className='shadow-xl p-6 py-12 rounded-xl flex flex-col gap-2 relative'>
              <img src={RB3.src} alt="RB" className='absolute top-0 right-0 w-[100px] -mr-1' />
              <h1 className='text-[#7a30f3] font-bold text-xl'>Top Performance</h1>
              <p>Our focus on speed, quality, and optimization guarantees seamless performance and exceptional user experiences.</p>
            </div>
            <div className='shadow-xl p-6 py-12 rounded-xl flex flex-col gap-2 relative'>
              <img src={RB4.src} alt="RB" className='absolute top-0 right-0 w-[100px] -mr-1' />
              <h1 className='text-[#7a30f3] font-bold text-xl'>End-to-End Support</h1>
              <p>From initial planning to ongoing maintenance, we are with you through every stage of development.</p>
            </div>
            <div className='shadow-xl p-6 py-12 rounded-xl flex flex-col gap-2 relative'>
              <img src={RB5.src} alt="RB" className='absolute top-0 right-0 w-[100px] -mr-1' />
              <h1 className='text-[#7a30f3] font-bold text-xl'>Seamless Integrations</h1>
              <p>We connect your platforms with CRMs, APIs, and essential tools to enhance efficiency and functionality.</p>
            </div>
            <div className='shadow-xl p-6 py-12 rounded-xl flex flex-col gap-2 relative'>
              <img src={RB6.src} alt="RB" className='absolute top-0 right-0 w-[100px] -mr-1' />
              <h1 className='text-[#7a30f3] font-bold text-xl'>Transparent Communication</h1>
              <p>Stay informed with regular updates, ensuring a smooth and collaborative development process.</p>
            </div>
          </div>
        </section>
        <section className='max-w-7xl mx-auto flex items-center justify-center flex-col gap-3 py-16'>
          <h1 className='font-bold text-4xl max-w-3xl'>Start Your ProjectIn 4 Easy Steps</h1>
          <div className='flex items-start gap-6 mt-5'>
            <div className='flex items-center justify-center flex-col gap-2'>
              <IoIosChatboxes className='w-18 h-18 bg-[#f3f3f3] p-3 rounded-full shadow-xl' />
              <h1 className='text-xl font-bold'>Tell Us What You Need</h1>
              <p>Begin by sharing your vision and objectives. Let us know your challenges and expectations so we can tailor our approach to meet your specific needs</p>
            </div>
            <div className='flex items-center justify-center flex-col gap-2'>
              <RiTeamFill className='w-18 h-18 bg-[#f3f3f3] p-3 rounded-full shadow-xl' />
              <h1 className='text-xl font-bold'>Meet Our Team</h1>
              <p>{"Get acquainted with our dedicated experts. We'll set up a meeting to discuss your project in detail and ensure our team aligns with your goals."}</p>
            </div>
            <div className='flex items-center justify-center flex-col gap-2'>
              <FaLaptopCode className='w-18 h-18 bg-[#f3f3f3] p-3 rounded-full shadow-xl' />
              <h1 className='text-xl font-bold'>Strategy, Plan & Review</h1>
              <p>{"We'll present a customized strategy and proposal for your project. This step involves reviewing our plan, timelines, and deliverables to ensure they align perfectly with your objectives."}</p>
            </div>
            <div className='flex items-center justify-center flex-col gap-2'>
              <FaCheckCircle className='w-18 h-18 bg-[#f3f3f3] p-3 rounded-full shadow-xl' />
              <h1 className='text-xl font-bold'>Start with Confidence</h1>
              <p>{"Once you're satisfied with the plan, we kick off the project. Rest assured, our team is committed to delivering excellence, keeping you informed and involved at every stage."}</p>
            </div>
          </div>
        </section>
      </main>
      <main className='bg-[#1c1d22]'>
        <section className='max-w-7xl mx-auto flex items-center place-content-between w-full py-16 text-white'>
          <div>
            <p className='text-[#ddef75]'>FAQ <b className='font-bold'>-</b></p>
            <h1 className='font-bold text-4xl'>Frequently Asked Questions</h1>
            <div className='grid grid-cols-1 gap-6 mt-8'>
              <div className='flex items-start gap-3 bg-[#2e2f34] p-4 rounded-xl place-content-between'>
                <p className='font-bold text-xl'>How do you determine the best technology for my project?</p>
                <FaChevronDown className='bg-[#ddef75] p-1 w-7 h-7 rounded-full text-black' />
              </div>
              <div className='flex items-start gap-3 bg-[#2e2f34] p-4 rounded-xl place-content-between'>
                <p className='font-bold text-xl'>How long does it take to complete a proejct?</p>
                <FaChevronDown className='bg-[#ddef75] p-1 w-7 h-7 rounded-full text-black' />
              </div>
              <div className='flex items-start gap-3 bg-[#2e2f34] p-4 rounded-xl place-content-between'>
                <p className='font-bold text-xl'>Is custom web development suitable for small businesses or only for large enterprises?</p>
                <FaChevronDown className='bg-[#ddef75] p-1 w-7 h-7 rounded-full text-black' />
              </div>
              <div className='flex items-start gap-3 bg-[#2e2f34] p-4 rounded-xl place-content-between'>
                <p className='font-bold text-xl'>Do you provide post-launch support and maintenance?</p>
                <FaChevronDown className='bg-[#ddef75] p-1 w-7 h-7 rounded-full text-black' />
              </div>
              <div className='flex items-start gap-3 bg-[#2e2f34] p-4 rounded-xl place-content-between'>
                <p className='font-bold text-xl'>How do you ensure my custom-built website is secure and future-proof?</p>
                <FaChevronDown className='bg-[#ddef75] p-1 w-7 h-7 rounded-full text-black' />
              </div>
            </div>
          </div>
          <img src={QUST.src} alt="ICON" className='max-w-[600px]' />
        </section>
        <footer className='max-w-7xl mx-auto flex items-start place-content-between text-white py-16 border-b-2 border-gray-800'>
          <div className='flex flex-col items-start gap-3'>
            <img src={FLOGO.src} alt="Logo" className='h-8' />
            <p>Copyright © Mark-Digital LLC. All rights reserved.</p>
            <div className='flex items-center gap-4'>
              <FaLinkedin className='w-8 h-8' />
              <FaSquareXTwitter className='w-8 h-8' />
              <FaFacebookSquare className='w-8 h-8' />
              <select
                name="dd"
                defaultValue=""
                className='pl-4 py-3 pr-2 bg-[#393939] border-gray-300 rounded-full'
              >
                <option value="" className="text-gray-400">
                  English
                </option>
                <option value="de">Deutsch</option>
              </select>
            </div>
            <div className='flex items-center gap-3'>
              <img src={GLOGO.src} className='max-w-30' alt="Logo" />
              <img src={DMCA.src} alt="DMCA" className='max-w-42' />
            </div>
          </div>
          <div>
            <h1 className='font-bold text-xl'>Web Development</h1>
            <div className='flex flex-col gap-2 mt-3'>
              <a href="#">Custom Web Development</a>
              <a href="#">WordPress Development</a>
              <a href="#">Shopify Development</a>
              <a href="#">BigCommerce Development</a>
              <a href="#">Woocommerce Development</a>
              <a href="#">JavaScript Development</a>
            </div>
          </div>
          <div>
            <h1 className='font-bold text-xl'>Digital Marketing & SEO</h1>
            <div className='flex flex-col gap-2 mt-3'>
              <a href="#">Search Engine Optimization</a>
              <a href="#">PPC Advertising</a>
              <a href="#">Local SEO Services</a>
              <a href="#">Full SEO Audit</a>
              <a href="#">Keyword Resarch</a>
              <a href="#">Technical SEO</a>
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-2 mb-3'>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Cases/Protfolio</a>
            </div>
            <h1 className='font-bold text-xl'>Digital Marketing & SEO</h1>
            <div className='flex flex-col gap-2 mt-3'>
              <div className='flex items-center gap-3'>
                <MdOutlinePhone />
                <p>{"+1(209)650-3851"}</p>
              </div>
              <div className='flex items-center gap-3'>
                <CiMail />
                <p>contact@mark-digital.com</p>
              </div>
            </div>
          </div>
        </footer>
        <section className='flex items-center flex-row-reverse py-6 max-w-7xl mx-auto text-white'>
          <div className='flex items-center gap-4'>
            <a href="#">Privacy policy</a>
            <a href="#">Contact us</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default page