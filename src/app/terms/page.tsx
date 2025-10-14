import FooterBar from "@/components/FooterBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TermsPage() {
  return (
      <div className={'w-screen h-screen pt-1'}>
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
                      <Link href={'/program_register'} className={' bg-[#277B12] text-white hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2.5 text-center mb-2 md:mb-0 border-white border-2'}>Register</Link>
                  </div>
              </div>
              <div className={'flex flex-col items-center w-full mt-20 mb-40'}>
                  <h1 className={'font-bold text-3xl my-8'}>TERMS AND CONDITIONS</h1>
                  <ul className={'list-disc text-black leading-8 text-xl mb-8'}>
                      <li>Make sure all information provided are accurate. Multiple registration by the same person is not allowed.</li>
                      <li>This Program will be taken place in Ondo State</li>
                      <li>Free transportation will be provided by the ministry from Headquarter everyday during the program</li>
                      <li>This is a three day program.</li>
                  </ul>
                  <button
                      type="submit"
                      className={'w-full bg-[#277B12] text-white py-4 px-4 mb-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors'}
                  >
                      Continue
                  </button>
              </div>
          </div>
          <div className={'w-screen fixed bottom-0 right-0 left-0'}>
              <FooterBar/>
          </div>
      </div>
  );
}