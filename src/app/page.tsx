'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {FaChevronRight, FaSearch} from "react-icons/fa";
import {FaSliders, FaSort} from "react-icons/fa6";
import FooterBar from "@/components/FooterBar";

export default function Home() {
  return (
      <div className={'w-screen'}>
        <div className={''}>
          <div className={'mx-auto flex flex-col sm:flex-row items-center px-2 py-2 bg-[#277B12]'}>
            <div className="flex items-center">
              <Image className={'mr-2'} src={'/images/fmyd_logo.png'} alt={'logo'} width={80} height={80} />
              <h1 className={'text-white text-xl sm:text-2xl font-bold'}>Yopi Tracker</h1>
            </div>
            <div className={'grow sm:my-0'}>
              <div className={'flex flex-wrap items-center justify-center gap-2 md:gap-4 lg:gap-8'}>
                <Link className={'text-white text-sm sm:text-base md:text-lg'} href= '/'>Home</Link>
                <Link className={'text-white text-sm sm:text-base md:text-lg'} href= '/'>About</Link>
                <Link className={'text-white text-sm sm:text-base md:text-lg'} href= '/'>Program</Link>
                <Link className={'text-white text-sm sm:text-base md:text-lg'} href= '/'>Youth Policy</Link>
                <Link className={'text-white text-sm sm:text-base md:text-lg'} href= '/'>Privacy Policy</Link>
              </div>
            </div>
            <div className="flex gap-2">
              <Link href="/login" className={'bg-white text-black hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-md px-3 sm:px-4 py-2 sm:py-2.5 text-center'}>Login</Link>
              <Link href={'/register'} className={'bg-[#277B12] text-white hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:text-md px-3 sm:px-4 py-2 sm:py-2.5 text-center border-white border-2'}>Register</Link>
            </div>
          </div>

          <div className={'flex flex-col items-center w-full'}>
            <div className={'flex flex-col md:flex-row justify-center items-center gap-6 md:gap-x-8 lg:gap-x-16'}>
              <Image src={'/images/man1.png'} alt={'man'} width={300} height={300} className="hidden md:block" />

              <div className={'flex flex-col items-center gap-y-2 text-center px-4'}>
                <h1 className={'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#277B12]'}>FMYD</h1>
                <h2 className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black'}>UNIFIED REGISTRATION PORTAL</h2>
                <h2 className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black'}>(UREP)</h2>
                <h4 className={'text-black text-base sm:text-lg md:text-xl text-center'}>REALTIME YOUTH POLICY MONITORING AND EMPOWERMENT PROGRAMS</h4>
              </div>

              <Image src={'/images/man2.png'} alt={'man'} width={300} height={300} className="hidden md:block" />
            </div>
          </div>
          {/* Programs Sections */}
          <div className={'w-full bg-[#277B12]  overflow-hidden'}>
            <div className={'flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4'}>
              <Image src={'/images/chef_small.png'} alt={'Chefs'} width={510} height={300} className={'w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] h-[200px] sm:h-[250px] md:h-[300px] object-cover'}/>
              <Image src={'/images/corpers.png'} alt={'Chefs'} width={510} height={300} className={'w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] h-[200px] sm:h-[250px] md:h-[300px] object-cover'} />
              <Image src={'/images/students.png'} alt={'Chefs'} width={510} height={300} className={'w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] h-[200px] sm:h-[250px] md:h-[300px] object-cover'} />
              <Image src={'/images/speaker.png'} alt={'Chefs'} width={510} height={300} className={'w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] h-[200px] sm:h-[250px] md:h-[300px] object-cover'} />
            </div>
          </div>

          {/* Search and Sort Buttons */}
          <div className={'flex flex-row space-x-4 mt-6 md:mt-10 justify-between w-full px-8'}>
            <div className={'w-44 h-12 bg-[#277B12] rounded-lg flex flex-row justify-evenly items-center'}>
              <FaSearch color={'white'} size={18}></FaSearch>
              <p className={'text-white text-center font-medium'}>Search</p>
            </div>
            <div className={'w-32 h-12 border border-[#277B12] rounded-lg flex flex-row justify-evenly items-center'}>
              <FaSliders color={'black'} size={18}></FaSliders>
              <p className={'text-black text-center font-medium'}>Sort</p>
              <FaSort color={'black'} size={18}></FaSort>
            </div>
          </div>


          {/*Program specific sections*/}
          {/* Bakeprenuer Nigeria */}
          {/* TODO: Make section like a carousel, with a button to scroll to next/prev program. Each program should have a title, description, image, and a link to the program page */}
          <div className={'flex flex-col justify-center bg-gradient-to-b from-[#277B12] to-[#F9E79F] my-6 md:mt-10 py-2 px-4 h-[3%] w-[95%] mx-auto'}>
            <h2 className={'font-semibold text-xl text-center text-black mb-2 md:mb-3'}>Bakeprenuer Nigeria</h2>
            <div className={'flex flex-col lg:flex-row items-center gap-3 lg:gap-x-5 xl:gap-x-10'}>
              <div className={'flex-col justify-start w-full lg:w-1/2 pl-16'}>
                <h1 className={'text-white text-lg md:text-xl lg:text-2xl font-semibold '}>Background</h1>
                <p className={'text-gray-500 font-normal text-xs md:text-sm text-wrap leading-4 md:leading-5'}>The Federal Ministry of Youth Development,
                  is introducing Bakeprenuer Nigeria a Special Skills Training Programme in
                  Modern Baking and Confectionery Technologies for youth across all the six
                  geo-political zones.
                </p>
                <h3 className={'justify-self-end text-sm md:text-base text-white font-semibold'}>Learn More</h3>
                <hr className="my-1"/>
                <h1 className={'text-white text-lg md:text-xl lg:text-2xl font-semibold'}>Objective</h1>
                <ul className="pl-2">
                  <li className={'text-gray-500 font-normal text-xs md:text-sm text-wrap leading-4 md:leading-5'}>To provide Nigerian youths with modern baking and confectionery skills aligned with industry standards.</li>
                  <li className={'text-gray-500 font-normal text-xs md:text-sm text-wrap leading-4 md:leading-5'}>To promote entrepreneurship and self-reliance through practical, hands-on learning.</li>
                </ul>
                <h3 className={'justify-self-end text-sm md:text-base text-white font-semibold'}>Learn More</h3>
                <hr className="my-1"/>
                <h1 className={'text-white text-lg md:text-xl lg:text-2xl font-semibold'}>Who Should Attend</h1>
                <ul className="pl-2">
                  <li className={'text-gray-500 font-normal text-xs md:text-sm text-wrap leading-4 md:leading-5'}>Unemployed and underemployed youths aged 18–35 years.</li>
                  <li className={'text-gray-500 font-normal text-xs md:text-sm text-wrap leading-4 md:leading-5'}>Young school leavers and graduates seeking practical livelihood skills.</li>
                </ul>
                <h3 className={'justify-self-end text-sm md:text-base text-white font-semibold'}>Learn More</h3>
              </div>
              <div className={'flex flex-col justify-center items-center w-full'}>
                <div className={'w-[57%] object-cover'}>
                  <Image src={'/images/cooking_chefs.png'} alt={'Bakeprenuer'} width={450} height={80} className={'rounded-lg w-full h-[350px]'}/>
                </div>
                <h3 className={'text-center text-base md:text-lg text-[#277B12] font-semibold mt-3 rounded-lg bg-white px-6 py-3'}>Register Now</h3>
              </div>
                <FaChevronRight width={200} height={200} color={'#277B12'} className={'text-white text-6xl cursor-pointer'}/>
            </div>
          </div>

            {/* Other Programs Section */}
          <div className={'flex flex-col w-full items-center justify-center px-8'}>
            <h3 className={'text-center text-xl md:text-xl text-[#277B12] font-semibold my-7'}>Other Programs</h3>

            <div className={'w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'}>
              <div className={'h-[250px] px-4 py-4 flex flex-col justify-center items-center shadow-2xl rounded-md'}>
                <p className="text-center mb-4">LOCAL YOUTH EXCHANGE PROGRAMME</p>
                <div className={'flex items-center justify-center rounded-lg bg-[#277B12] py-1 w-20'}>
                  <p className={'text-white text-sm text-center'}>Read More</p>
                </div>
              </div>
              <div className={'h-[250px] px-4 py-4 flex flex-col justify-center items-center shadow-2xl rounded-md'}>
                <p className="text-center mb-4">TRAINING AND EMPOWERMENT OF
                  YOUTH ON WASTE TO WEALTH
                  MANAGEMENT, RECYCLING
                  AND REUSE IN EACH OF
                  THE 6 GEO-POLITICAL ZONES</p>
                <div className={'flex items-center justify-center rounded-lg bg-[#277B12] py-1 w-20'}>
                  <p className={'text-white text-sm text-center'}>Read More</p>
                </div>
              </div>
              <div className={'h-[250px] px-4 py-4 flex flex-col justify-center items-center shadow-2xl rounded-md'}>
                <p className="text-center mb-4">YOUTH MENTAL HEALTH AND
                  PSYCHOSOCIAL SUPPORT (MHPS)
                  PROGRAMME NATION-WIDE</p>
                <div className={'flex items-center justify-center rounded-lg bg-[#277B12] py-1 w-20'}>
                  <p className={'text-white text-sm text-center'}>Read More</p>
                </div>
              </div>
              <div className={'h-[250px] px-4 py-4 flex flex-col justify-center items-center shadow-2xl rounded-md'}>
                <p className="text-center mb-4">REVIEW AND IMPLEMENTATION
                  OF NIGERIA YOUTH EMPLOYMENT
                  ACTION PLAN (NIYEAP)</p>
                <div className={'flex items-center justify-center rounded-lg bg-[#277B12] py-1 w-20'}>
                  <p className={'text-white text-sm text-center'}>Read More</p>
                </div>
              </div>
              <div className={'h-[250px] px-4 py-4 flex flex-col justify-center items-center shadow-2xl rounded-md'}>
                <p className="text-center mb-4">ESTABLISHMENT OF TECH/SOCIAL
                  HUBS IN THE NATIONAL YOUTH
                  DEVELOPMENT CENTRES
                  IN TWO ZONES SOUTH AND NORTH</p>
                <div className={'flex items-center justify-center rounded-lg bg-[#277B12] py-1 w-20'}>
                  <p className={'text-white text-sm text-center'}>Read More</p>
                </div>
              </div>
              <div className={'h-[250px] px-4 py-4 flex flex-col justify-center items-center shadow-2xl rounded-md'}>
                <p className="text-center mb-4">YOUTH ENTREPRENEURSHIP
                  DEVELOPMENT PROGRAM
                  FOR SUSTAINABLE GROWTH</p>
                <div className={'flex items-center justify-center rounded-lg bg-[#277B12] py-1 w-20'}>
                  <p className={'text-white text-sm text-center'}>Read More</p>
                </div>
              </div>
              <div className={'h-[250px] px-4 py-4 flex flex-col justify-center items-center shadow-2xl rounded-md'}>
                <p className="text-center mb-4">DIGITAL SKILLS TRAINING
                  FOR RURAL YOUTH
                  EMPOWERMENT</p>
                <div className={'flex items-center justify-center rounded-lg bg-[#277B12] py-1 w-20'}>
                  <p className={'text-white text-sm text-center'}>Read More</p>
                </div>
              </div>
              <div className={'h-[250px] px-4 py-4 flex flex-col justify-center items-center shadow-2xl rounded-md'}>
                <p className="text-center mb-4">AGRICULTURAL INNOVATION
                  AND MODERNIZATION
                  FOR YOUTH FARMERS</p>
                <div className={'flex items-center justify-center rounded-lg bg-[#277B12] py-1 w-20'}>
                  <p className={'text-white text-sm text-center'}>Read More</p>
                </div>
              </div>
              <div className={'h-[250px] px-4 py-4 flex flex-col justify-center items-center shadow-2xl rounded-md'}>
                <p className="text-center mb-4">CREATIVE ARTS AND
                  CULTURAL HERITAGE
                  PRESERVATION INITIATIVE</p>
                <div className={'flex items-center justify-center rounded-lg bg-[#277B12] py-1 w-20'}>
                  <p className={'text-white text-sm text-center'}>Read More</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <FooterBar/>
      </div>
  );
}
