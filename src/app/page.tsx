'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {FaSearch} from "react-icons/fa";
import {FaSliders, FaSort} from "react-icons/fa6";
import FooterBar from "@/components/FooterBar";

export default function Home() {
  const programs = [

  ]

  return (
      <div className={'pt-1'}>
        <div className={'pt-1 px-32'}>
          <div className={'mx-auto flex items-center px-1 py-2 h-20 bg-[#277B12] mb-4'}>
            <Image className={'mr-2'} src={'/images/fmyd_logo.png'} alt={'logo'} width={80} height={80} />
            <h1 className={'text-white text-2xl font-bold'}>Yopi Tracker</h1>
            <div className={'grow'}>
              <div className={' flex items-center justify-center gap-2 md:gap-8'}>
                <Link className={'text-white text-lg'} href= '/'>Home</Link>
                <Link className={'text-white text-lg'} href= 'about'>About</Link>
                <Link className={'text-white text-lg'} href= 'contact'>Program</Link>
                <Link className={'text-white text-lg'} href= 'youth'>Youth Policy</Link>
                <Link className={'text-white text-lg'} href= 'privacy'>Privacy Policy</Link>
              </div>
            </div>
            <div>
              <Link href="/login" className={' bg-white text-black hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2.5 text-center md:mr-2 mb-2 md:mb-0'}>Login</Link>
              <Link href={'/register'} className={' bg-[#277B12] text-white hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2.5 text-center mb-2 md:mb-0 border-white border-2'}>Register</Link>
            </div>
          </div>

          <div className={'flex flex-col items-center w-full'}>
            <div className={'flex flex-row justify-evenly  items-center md:flex md:flex-row md:gap-x-16 md:items-center mt-10'}>
              <Image src={'/images/man1.png'} alt={'man'} width={250} height={250} />

              <div className={'flex flex-col items-center gap-y-2'}>
                <h1 className={'text-7xl font-bold text-[#277B12]'}>FMYD</h1>
                <h2 className={'text-5xl font-semibold text-black'}>UNIFIED REGISTRATION PORTAL</h2>
                <h2 className={'text-5xl font-semibold text-black'}>(UREP)</h2>
                <h4 className={'text-black text-xl'}>REALTIME YOUTH POLICY MONITORING AND EMPOWERMENT PROGRAMS</h4>
              </div>

              <Image src={'/images/man2.png'} alt={'man'} width={250} height={250} />
            </div>
            <div className={'flex space-x-4 mt-10 justify-between w-full'}>
              <div className={'w-32 h-12 bg-[#277B12] rounded-lg flex flex-row justify-evenly items-center'}>
                <FaSearch color={'white'} size={18}></FaSearch>
                <p className={'text-white text-center font-medium'}>Search</p>
              </div>
              <div className={'w-32 h-12 border border-[#277B12] rounded-lg flex flex-row justify-evenly items-center'}>
                <FaSliders color={'black'} size={18}></FaSliders>
                <p className={'text-black text-center font-medium'}>Sort</p>
                <FaSort color={'black'} size={18}></FaSort>
              </div>
            </div>
          </div>
          {/* Programs Sections */}
          <div className={'flex flex-row items-center w-full bg-[#277B12] mt-10 gap-x-4'}>
            <Image src={'/images/chef_small.png'} alt={'Chefs'} width={510} height={300} className={'w-[510px] h-[300px] object-cover'}/>
            <Image src={'/images/corpers.png'} alt={'Chefs'} width={510} height={300} className={'w-[510px] h-[300px] object-cover'} />
            <Image src={'/images/students.png'} alt={'Chefs'} width={510} height={300} className={'w-[510px] h-[300px] object-cover'} />
            <Image src={'/images/speaker.png'} alt={'Chefs'} width={510} height={300} className={'w-[510px] h-[300px] object-cover'} />
          </div>

          {/*Program specific sections*/}
          {/* Bakeprenuer Nigeria */}
          {/* TODO: Make section like a carousel, with a button to scroll to next/prev program. Each program should have a title, description, image, and a link to the program page */}
          <div className={'flex flex-col justify-center w-full bg-gradient-to-b from-[#277B12] to-[#F9E79F] mt-10 py-6 px-4'}>
            <h2 className={'font-semibold text-4xl text-center text-white'}>Bakeprenuer Nigeria</h2>
            <div className={'flex flex-row items-center gap-x-20'}>
              <div className={'flex-col justify-start'}>
                <h1 className={'text-white text-4xl font-semibold'}>Background</h1>
                <p className={'text-gray-500 font-normal text-lg text-wrap leading-8'}>The Federal Ministry of Youth Development,
                  is introducing Bakeprenuer Nigeria a Special Skills Training Programme in
                  Modern Baking and Confectionery Technologies for youth across all the six
                  geo-political zones.
                </p>
                <h3 className={'justify-self-end text-xl text-white font-semibold'}>Learn More</h3>
                <hr/>
                <h1 className={'text-white text-4xl font-semibold'}>Objective</h1>
                <ul>
                  <li className={'text-gray-500 font-normal text-lg text-wrap leading-8'}>To provide youth with modern baking and confectionery skills to enable them become self-reliant and employers of labour.</li>
                  <li className={'text-gray-500 font-normal text-lg text-wrap leading-8'}>To empower youth to establish small and medium scale enterprises in the baking and confectionery industry.</li>
                  <li className={'text-gray-500 font-normal text-lg text-wrap leading-8'}>To reduce youth unemployment and restiveness in the country.</li>
                  <li className={'text-gray-500 font-normal text-lg text-wrap leading-8'}>To promote the culture of entrepreneurship among the youth.</li>
                </ul>
                <h3 className={'justify-self-end text-xl text-white font-semibold'}>Learn More</h3>
                <hr/>
              </div>
              <div className={'flex-col justify-center items-center gap-x-6'}>
                <Image src={'/images/cooking_chefs.png'} alt={'Bakeprenuer'} width={900} height={500} className={'rounded-lg'}/>
                <h3 className={'text-center text-2xl text-[#277B12] font-semibold'}>Register Now</h3>
              </div>
            </div>
          </div>

        </div>
        <FooterBar/>
      </div>
  );
}
