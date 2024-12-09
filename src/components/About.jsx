import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div id = 'about' className="max-w-[1200px] mt-[-100px] sm:mt-[-90px] md:mt-[-80px] mx-auto w-full h-screen">
      <div className="grid md:grid-cols-2 gap-8 items-center justify-center h-full">
        <div className="text-center">
          <img
            src="/images/avatartion-blue.png" alt='/'
            className="md:max-w-xs sm:max-w-64 max-w-48 mx-auto"
          />
          <div className='block md:hidden'>
            <h1 className="pt-8 pb-4 sm:pb-6 text-lg sm:text-xl">
                Hi, I'm <span className="font-bold">Dastan Nurbekuly</span>!👋
            </h1>
            <div>
                <p className='text-lg sm:text-xl'>
                    I'm an <span className="font-bold">Earth Observation Researcher</span><br /> 
                    and a <TypeAnimation 
                    className='text-lg sm:text-xl font-bold' 
                    sequence={[' Developer', 1000, ' Data Scientist', 1000, ' Student', 1000]} 
                    wrapper="span" speed={50} repeat={Infinity} />
                </p>
            </div>
            <h1 className="pt-4 sm:pt-6 text-sm sm:text-base">
                Get in touch 👉 <a className='underline underline-offset-4 decoration-2 decoration-[#93c5fd]' href='mailto: dastan.nurbek22@gmail.com'>dastan.nurbek22@gmail.com</a>
            </h1>
          </div>
        </div>
        <div className="hidden md:block text-left">
            <h1 className="pt-8 pb-8 text-2xl">
                Hi, I'm <span className="font-bold">Dastan Nurbekuly</span>!👋
            </h1>
            <div>
                <p className='text-2xl'>
                    I'm an <span className="font-bold">Earth Observation Researcher</span><br />
                    and a <TypeAnimation 
                    className='text-2xl font-bold'
                    sequence={[' Developer', 1000, ' Data Scientist', 1000, ' Student', 1000]} 
                    wrapper="span" speed={50} repeat={Infinity} />
                </p>
            </div>
            <h1 className="pt-8 text-lg">
                Get in touch 👉 <a className='underline underline-offset-4 decoration-2 decoration-[#93c5fd]' href='mailto: dastan.nurbek22@gmail.com'>dastan.nurbek22@gmail.com</a>
            </h1>
        </div>
      </div>
    </div>
  )
}

export default About