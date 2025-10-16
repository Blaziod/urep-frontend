'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {TextField} from "@/components";
import {useRouter} from "next/navigation";

export default function NationalYouthPage() {

    const router = useRouter();
    const backToPreviousPage = () => {
        router.back();
    }
    const routeToNextPage = () => {
        router.push('/success');
    }

    const [stakeholder, setStakeholder] = useState('');
    const [organization, setOrganization] = useState('');
    const [expectation, setExpectation] = useState('');
    const [application, setApplication] = useState('');

    const embassyOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const bakingBusinessOptions = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
    ];



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt with:', { stakeholder, organization, expectation });
    };
    return (
        <div className={'w-screen'}>
            <div className={'mx-auto flex items-center px-1 py-2 h-20 bg-[#277B12] mb-4'}>
                <Image className={'mr-2'} src={'/images/fmyd_logo.png'} alt={'logo'} width={80} height={80} />
                <h1 className={'text-white text-2xl font-bold'}>Yopi Tracker</h1>
                <div className={'grow'}>
                    <div className={' flex items-center justify-center gap-2 md:gap-8'}>
                        <Link className={'text-white text-lg'} href= '/'>Home</Link>
                        <Link className={'text-white text-lg'} href= '/'>About</Link>
                        <Link className={'text-white text-lg'} href= '/'>Program</Link>
                        <Link className={'text-white text-lg'} href= '/'>Youth Policy</Link>
                        <Link className={'text-white text-lg'} href= '/'>Privacy Policy</Link>
                    </div>
                </div>
                <div>
                    <Link href="/login" className={' bg-white text-black hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2.5 text-center md:mr-2 mb-2 md:mb-0'}>Login</Link>
                    <Link href={'/register'} className={' bg-[#277B12] text-white hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2.5 text-center mb-2 md:mb-0 border-white border-2'}>Register</Link>
                </div>
            </div>
            <div className={'flex flex-col items-center w-full'}>
                <h1 className={'font-bold text-2xl'}>Federal Ministry of Youth Development</h1>
                <h3 className={'text-xl font-medium'}>UNIFIED REGISTRATION PORTAL</h3>
            </div>
            <span className={'text-center font-bold text-lg text-black flex flex-row items-center m-4'}>PROGRAM SPECIFIC QUESTIONS -<h4 className={'text-black text-center font-medium'}> National Youth Validation Workshop</h4></span>

            <div className={'flex flex-row mb-4 px-3'}>
                <div className={'w-full h-4 bg-[#CECDCD]'}></div>
                <div className={' w-full h-4 bg-[#277B12]'}></div>
            </div>
            <div className={'flex flex-row items-center justify-between px-3'}>
                <h2 className={'font-semibold text-xl'}>2. National Youth Validation Workshop</h2>
                <h2 className={'font-medium text-lg text-gray-500'}>3. African/National Youth Day 2025</h2>
            </div>
            <div className={'flex flex-row items-center justify-evenly px-3 mt-10'}>
                <form onSubmit={handleSubmit} className={'w-[700px] gap-y-3.5'}>
                    {/* Youth Professional field */}
                    <TextField
                        type="text"
                        label="Are you a you a youth development stakeholder"
                        placeholder="Yes, Area of expertise"
                        value={stakeholder}
                        onChange={setStakeholder}
                        required
                        id="stakeholder"
                    />

                    {/* Embassy field */}
                    <TextField
                        type="dropdown"
                        label="Which organisation or institution do you represent"
                        placeholder="NGO/ISO"
                        value={organization}
                        onChange={setOrganization}
                        required
                        options={embassyOptions}
                        id="embassy"
                    />

                    {/* Baking Business field */}
                    <TextField
                        type="dropdown"
                        label="What are your expectations for the training?"
                        placeholder="Yes/No"
                        value={expectation}
                        onChange={setExpectation}
                        required
                        options={bakingBusinessOptions}
                        id="baking_business"
                    />

                    {/* Baking Business field */}
                    <TextField
                        type="dropdown"
                        label="How do you intend to apply the outcome of the revised National Youth Policy?"
                        placeholder="Advocacy"
                        value={application}
                        onChange={setApplication}
                        required
                        options={bakingBusinessOptions}
                        id="baking_business"
                    />

                    {/* Back and Next button */}
                    <div className={'flex justify-between items-center mt-7'}>
                        <button
                            onClick={backToPreviousPage}
                            type="button"
                            className={'w-36 justify-start bg-[#277B12] text-white py-4 px-4 mb-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors'}
                        >
                            Back
                        </button>
                        <button
                            onClick={routeToNextPage}
                            type="submit"
                            className={'w-36 justify-end bg-[#277B12] text-white py-4 px-4 mb-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors'}
                        >
                            Next
                        </button>
                    </div>
                </form>
                {/*<div className={'flex flex-col'}>*/}
                {/*    <div className={'px-20 py-10 bg-[#277B12] items-center justify-center rounded-lg mb-8'}>*/}
                {/*        <h2 className={'text-white text-2xl font-bold text-center mb-4'}> Why Register? </h2>*/}
                {/*        <ul className={'list-disc text-white leading-8 text-xl'}>*/}
                {/*            <li>Access to Youth Empowerment Programs</li>*/}
                {/*            <li>Real-time Monitoring of Youth Policies</li>*/}
                {/*            <li>Networking Opportunities with Peers and Mentors</li>*/}
                {/*            <li>Personalized Support and Guidance</li>*/}
                {/*            <li>Stay Updated on Latest Youth Initiatives</li>*/}
                {/*        </ul>*/}
                {/*        <h2 className={'text-[#F9E79F] text-xl font-bold text-center my-4 justify-self-start'}> Need Help? </h2>*/}
                {/*        <Link href={'/'} className={'text-white text-lg font-medium text-center underline'}>Get Assistance</Link>*/}
                {/*    </div>*/}
                {/*    /!* Back and Next button *!/*/}
                {/*    <div className={'flex justify-between items-center mt-4'}>*/}
                {/*        <button*/}
                {/*            onClick={backToPreviousPage}*/}
                {/*            type="button"*/}
                {/*            className={'w-24 justify-start bg-[#277B12] text-white py-4 px-4 mb-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors'}*/}
                {/*        >*/}
                {/*            Back*/}
                {/*        </button>*/}
                {/*        <button*/}
                {/*            onClick={routeToNextPage}*/}
                {/*            type="submit"*/}
                {/*            className={'w-24 justify-end bg-[#277B12] text-white py-4 px-4 mb-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors'}*/}
                {/*        >*/}
                {/*            Next*/}
                {/*        </button>*/}
                {/*    </div>*/}

                {/*</div>*/}
            </div>
        </div>
    );
}