import Hero from "@/assets/neuroHR/Hero.svg"
import HUser from "@/assets/neuroHR//Userstar.png"
import MoreHO from "@/assets/neuroHR//MoreH1.svg"
import MoreH2 from "@/assets/neuroHR//MoreH2.svg"
import TMPFP from "@/assets/neuroHR//TextmontilsPFP.svg"
import { FaQuoteLeft, FaLongArrowAltLeft, FaLongArrowAltRight, FaMinus, FaPlus, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbUsers } from "react-icons/tb"
import { GoMegaphone, GoOrganization } from "react-icons/go"
import { TfiCup } from "react-icons/tfi"
import { MdOpenInNew } from "react-icons/md"
import Logo from "@/assets/neuroHR/Logo.svg"
import { BsTwitterX } from "react-icons/bs"

export default function Home() {
  return (
    <>
      <nav className="flex items-center w-full max-w-7xl mx-auto place-content-between py-6">
        <img src={Logo.src} className="w-42" alt="Logo" />
        <div className="flex items-center gap-12 font-bold">
          <a href="#">Product</a>
          <a href="#">Industries</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
        <button className="bg-black text-white rounded-lg p-3 px-7 w-fit">Try Now</button>
      </nav>
      <main className="max-w-7xl mx-auto">
        <section className="flex items-center gap-6 py-16">
          <div className="flex flex-col gap-8">
            <p className="bg-blue-100 text-blue-700 w-fit p-1 px-2 rounded-lg">#1 TOP HRM IN MARKET</p>
            <h1 className="font-bold text-6xl">Revolutionizing HR Oprations with AI</h1>
            <p className="max-w-lg text-gray-500">AI-powered HRM platform automates workflows & optimizes workforce management</p>
            <button className="bg-black text-white rounded-lg p-3 px-7 w-fit">Try Now</button>
            <div className="flex items-center gap-3">
              <img src={HUser.src} alt="Star" />
              <p className="font-bold">4.8 <span className="text-gray-500">{"(150K)"}</span></p>
            </div>
          </div>
          <img className="max-w-xl" src={Hero.src} alt="Image" />
        </section>
      </main>
      <section className="bg-blue-500 py-10 text-white w-full">
        <div className="grid grid-cols-4 gap-24 py-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="font-bold text-5xl">5x</h1>
            <p>Faster Hiring</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="font-bold text-5xl">150+</h1>
            <p>Company</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="font-bold text-5xl">98%</h1>
            <p>Customer Satisfaction</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="font-bold text-5xl">30%</h1>
            <p>Lower Turnover</p>
          </div>
        </div>
      </section>
      <main className="max-w-7xl mx-auto">
        <section className="flex items-center gap-6 mx-auto place-content-between px-8 py-10">
          <div>
            <div className="flex flex-col gap-4">
              <p className="text-blue-400">AI-DRIVEN AUTOMATION</p>
              <h1 className="font-bold text-5xl max-w-lg">Automate, Optimize and Save Time</h1>
              <p className="max-w-md text-gray-500">Say goodbye to manual HR tasks. Our AI-powered automation takes care of payroll, attendance and more</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input checked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Automated Payroll & Benefits</p>
                </div>
                <div className="flex items-center gap-2">
                  <input checked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Smart Scheduling</p>
                </div>
                <div className="flex items-center gap-2">
                  <input checked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Compliance Monitoring</p>
                </div>
              </div>
            </div>
          </div>
          <img src={MoreHO.src} className="max-w-lg" alt="Hero" />
        </section>
        <section className="flex items-center gap-6 mx-auto place-content-between px-8 py-10 flex-row-reverse">
          <div>
            <div className="flex flex-col gap-4">
              <p className="text-blue-400">DATA-DRIVEN HR INSIGHTS</p>
              <h1 className="font-bold text-5xl max-w-lg">AI Chatbots & Employee Support</h1>
              <p className="max-w-md text-gray-500">Gain real-time insights into employee performance, engagement, and workforce trends.</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Custom HR Dashboards</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Retention & Engagement Tracking</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>AI-Powered Forecasting</p>
                </div>
              </div>
            </div>
          </div>
          <img src={MoreH2.src} className="max-w-lg" alt="Hero" />
        </section>
      </main>
      <section className="bg-[#111729] text-white">
        <main className="flex items-center px-6 gap-8 place-content-between w-full py-10 max-w-7xl mx-auto">
          <button className="bg-gray-700 rounded-full p-3"><FaLongArrowAltLeft /></button>
          <div className="flex flex-col items-center justify-center gap-6">
            <FaQuoteLeft className="text-gray-400 w-8 h-8" />
            <h1 className="font-bold text-3xl text-center max-w-2xl">"This platform has completely <span className="text-blue-400">transformed</span> our HR process. The automation saves us hours every week!"</h1>
            <div className="flex flex-col items-center justify-center gap-1">
              <img src={TMPFP.src} alt="PFP" />
              <h1 className="font-bold text-xl">John Doe</h1>
              <p>HR Manager at Snubble</p>
            </div>
          </div>
          <button className="bg-blue-500 rounded-full p-3"><FaLongArrowAltRight /></button>
        </main>
      </section>
      <main className="max-w-7xl mx-auto">
        <section className="place-content-between flex flex-col items-center justify-center gap-8 py-10">
          <p className="text-blue-400">PRICING PLANS</p>
          <h1 className="font-bold text-5xl max-w-sm text-center">Simple & Scalable Pricing</h1>
          <div className="bg-gray-300 p-2 px-2 rounded-lg flex gap-4">
            <button className="bg-white p-2 px-4 rounded-lg">Monthly</button>
            <button className="px-3">Yearly</button>
          </div>
          <div className="grid grid-cols-3 gap-6 w-full mt-6">
            <div className="border-2 border-gray-200 rounded-xl p-8 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <TbUsers className="bg-gray-200 p-2 rounded-lg text-black w-8 h-8" />
                <h1 className="text-3xl">Starter Plan</h1>
              </div>
              <div className="flex items-end gap-2">
                <h1 className="font-bold text-5xl">$75</h1>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-gray-500">Perfect solution for startups & smaill business.</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Employee database management</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Payroll processing {"(basic)"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>AI-powered tracking & attendance</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Basic reporting & analytics</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Self-service employee portal</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Email support</p>
                </div>
              </div>
              <button className="bg-neutral-900 text-white p-3 rounded-lg">Book a Demo</button>
            </div>
            <div className="place-content-between border-2 border-gray-200 text-white bg-neutral-900 rounded-xl p-8 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <TfiCup className="bg-blue-500 p-2 rounded-lg text-white w-8 h-8" />
                <h1 className="text-3xl">Growth Plan</h1>
              </div>
              <div className="flex items-end gap-2">
                <h1 className="font-bold text-5xl">$150</h1>
                <span className="text-gray-500">/month</span>
              </div>
              <p>Best for mid-sized companies</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Everything in Starter, plus:</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Ai-assisted recruitment & screening</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Automated shift & scheduling</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Performance tracking & feedback tools</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Advanced analytics & custom HR reports</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Priotity email & chat support</p>
                </div>
              </div>
              <button className="bg-white text-black p-3 rounded-lg">Book a Demo</button>
            </div>
            <div className="place-content-between border-2 border-gray-200 rounded-xl p-8 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <GoOrganization className="bg-gray-200 p-2 rounded-lg text-black w-8 h-8" />
                <h1 className="text-3xl">Enterprise Plan</h1>
              </div>
              <h1 className="font-bold text-5xl">Custom</h1>
              <p className="text-gray-500">A fully scalable HR solution with advanced AI</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Everything in Growth, plus:</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Custom AI automation workflow</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Predictive workforce planning & insights</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>Compliance monitoring & legal tools</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>API access & third-party intergrations</p>
                </div>
                <div className="flex items-center gap-2">
                  <input defaultChecked type="checkbox" className="accent-blue-500 rounded-lg w-5 h-5" />
                  <p>24/7 support</p>
                </div>
              </div>
              <button className="bg-neutral-900 text-white p-3 rounded-lg">Contact Sales</button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <GoMegaphone className="text-blue-400 p-1 rounded-lg border-1 border-gray-300 w-8 h-8" />
            <p>Try It <span className="text-blue-400 font-bold">FREE</span> for 14 Days! NO credit card required. <a href="#" className="text-blue-400 underline">Click here</a></p>
          </div>
        </section>
        <section className="grid grid-cols-2 my-16 gap-4">
          <div className="flex flex-col h-full place-content-between">
            <div className="flex flex-col gap-4">
              <p className="text-blue-400">FAQ</p>
              <h1 className="font-bold text-4xl">Your Question, Answered</h1>
              <p className="text-gray-500">All the information you need about our AI-powered HRM platform.</p>
            </div>
            <button className="w-fit bg-black text-white p-3 px-6 rounded-lg font-bold flex items-center gap-2">Help Center <MdOpenInNew /></button>
          </div>
          <div>
            <div className="border-b-2 border-gray-300 pb-4">
              <h1 className="flex w-full place-content-between font-bold text-2xl items-center">Is my data secure? <FaMinus className="w-5 h-5" /></h1>
              <p>Yes, we use enterprise-grade encryption to protect your data</p>
            </div>
            <div className="border-b-2 border-gray-300 py-4">
              <h1 className="flex w-full place-content-between font-bold text-2xl items-center">Can I intergrate with my existing HR software? <FaPlus className="w-5 h-5" /></h1>
            </div>
            <div className="border-b-2 border-gray-300 py-4">
              <h1 className="flex w-full place-content-between font-bold text-2xl items-center">How quickly can I get started? <FaPlus className="w-5 h-5" /></h1>
            </div>
            <div className="border-b-2 border-gray-300 py-4">
              <h1 className="flex w-full place-content-between font-bold text-2xl items-center">Does the AI replace my HR team? <FaPlus className="w-5 h-5" /></h1>
            </div>
            <div className="border-b-2 border-gray-300 py-4">
              <h1 className="flex w-full place-content-between font-bold text-2xl items-center">What industries in the platform best for? <FaPlus className="w-5 h-5" /></h1>
            </div>
            <div className="border-b-2 border-gray-300 py-4">
              <h1 className="flex w-full place-content-between font-bold text-2xl items-center">How does AI improve hiring and recruitment? <FaPlus className="w-5 h-5" /></h1>
            </div>
          </div>
        </section>
      </main>
      <section className="bg-neutral-900 py-10 text-white w-full">
        <div className="flex items-center place-content-between gap-2 max-w-7xl mx-auto py-6">
          <div>
            <p className="text-blue-300">HET STARTED TODAY</p>
            <h1 className="font-bold text-4xl max-w-lg mt-4">Revolutionize Your HR with AI-Powered Automation</h1>
          </div>
          <div className="flex gap-3 items-center">
            <button className="w-fit bg-blue-500 text-white p-3 px-6 rounded-lg font-bold flex items-center gap-2">Get Started <MdOpenInNew /></button>
            <button className="w-fit bg-white text-black p-3 px-6 rounded-lg font-bold flex items-center gap-2">Book a Demo</button>
          </div>
        </div>
      </section>
      <footer className="flex place-content-between max-w-7xl mx-auto py-10 border-b-2 border-gray-300">
        <div className="flex flex-col gap-6">
          <img src={Logo.src} alt="Logo" className="w-48" />
          <p className="font-bold text-lg max-w-xs">Ready to transform your HR operations?</p>
          <div className="flex items-center gap-6">
            <BsTwitterX className="p-1 rounded-full border-1 w-8 h-8" />
            <FaLinkedinIn className="p-1 rounded-full border-1 w-8 h-8" />
            <FaFacebookF className="p-1 rounded-full border-1 w-8 h-8" />
          </div>
        </div>
        <div className="flex items-start gap-16">
          <div>
            <h1 className="font-bold text-xl mb-4">Company</h1>
            <div className="flex flex-col gap-2">
              <a href="#">About</a>
              <a href="#">Blogs</a>
              <a href="#">Careers</a>
              <a href="#">Referral Program</a>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl mb-4">Resources</h1>
            <div className="flex flex-col gap-2">
              <a href="#">Tools & Intergrations</a>
              <a href="#">Function</a>
              <a href="#">Product</a>
              <a href="#">API</a>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl mb-4">Community</h1>
            <div className="flex flex-col gap-2">
              <a href="#">Tutorials</a>
              <a href="#">FAQ</a>
              <a href="#">Current Research</a>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-xl mb-4">Contact</h1>
            <div className="flex flex-col gap-2">
              <a href="#">Support</a>
              <a href="#">Sales</a>
            </div>
          </div>
        </div>
      </footer>
      <section className="py-6">
        <p className="text-center">© 2025 NeuroHR, Copyrights all reserved.</p>
      </section>
    </>
  );
}
