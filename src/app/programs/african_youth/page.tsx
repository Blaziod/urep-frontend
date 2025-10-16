'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {TextField} from "@/components";
import {useRouter} from "next/navigation";

export default function AfricanYouthPage() {

    const router = useRouter();
    const backToPreviousPage = () => {
        router.back();
    }
    const routeToNextPage = () => {
        router.push('/consent?program=african_youth');
    }

    const [professional, setProfessional] = useState('');
    const [embassy, setEmbassy] = useState('');
    const [advocacy, setAdvocacy] = useState('');
    const [reason, setReason] = useState('');
    const [expectation, setExpectation] = useState('');
    const [previousParticipation, setPreviousParticipation] = useState('');
    const [sponsorship, setSponsorship] = useState('');
    const [youthFocusedOrganization, setYouthFocusedOrganization] = useState('');

    const embassyOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const advocacyOptions = [
        { value: 'single', label: 'Single' },
        { value: 'married', label: 'Married' },
        { value: 'divorced', label: 'Divorced' },
        { value: 'widowed', label: 'Widowed' },
    ];

    const previousParticipationOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
    const sponsorshipOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
    const youthFocusedOrganizationOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt with:', { professional, embassy, advocacy });
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
                </div>
            </div>
            <div className={'flex flex-col items-center w-full'}>
                <h1 className={'font-bold text-2xl'}>Federal Ministry of Youth Development</h1>
                <h3 className={'text-xl font-medium'}>UNIFIED REGISTRATION PORTAL</h3>
            </div>
            <span className={'text-center font-bold text-lg text-black flex flex-row items-center m-4'}>PROGRAM SPECIFIC QUESTIONS -<h4 className={'text-black text-center font-medium'}> African/National Youth Day 2025</h4></span>

            <div className={'flex flex-row mb-4 px-3'}>
                <div className={'w-full h-4 bg-[#CECDCD]'}></div>
                <div className={' w-full h-4 bg-[#277B12]'}></div>
            </div>
            <div className={'flex flex-row items-center justify-evenly px-3 mt-10'}>
                <form onSubmit={handleSubmit} className={'w-[700px] gap-y-3.5'}>
                    {/* Youth Professional field */}
                    <TextField
                        type="text"
                        label="Are you a youth development professional"
                        placeholder="Youth Professional"
                        value={professional}
                        onChange={setProfessional}
                        required
                        id="professional"
                    />

                    {/* Embassy field */}
                    <TextField
                        type="dropdown"
                        label="What organisation is nominating you"
                        placeholder="Embassy"
                        value={embassy}
                        onChange={setEmbassy}
                        required
                        options={embassyOptions}
                        id="embassy"
                    />

                    {/* Advocay field */}
                    <TextField
                        type="dropdown"
                        label="What do you intend to do with the outcome of this training"
                        placeholder="Advocacy"
                        value={advocacy}
                        onChange={setAdvocacy}
                        required
                        options={advocacyOptions}
                        id="advocacy"
                    />
                    {/* Reason field */}
                    <TextField
                        type="text"
                        label="What is the reason for your participation?"
                        placeholder="Reason"
                        value={reason}
                        onChange={setReason}
                        required
                        id="reason"
                    />

                    {/* Expectation field */}
                    <TextField
                        type="text"
                        label="What is your expectation for the training?"
                        placeholder="Expectation"
                        value={expectation}
                        onChange={setExpectation}
                        required
                        id="expectation"
                    />

                    {/* Previous Participation field */}
                    <TextField
                        type="dropdown"
                        label="Have you participated in any similar program in the past?"
                        placeholder="Previous Participation"
                        value={previousParticipation}
                        onChange={setPreviousParticipation}
                        required
                        options={previousParticipationOptions}
                        id="previous_participation"
                    />

                    {/* Sponsorship field */}
                    <TextField
                        type="dropdown"
                        label="Your sponsoring organization?"
                        placeholder="Sponsorship"
                        value={sponsorship}
                        onChange={setSponsorship}
                        required
                        options={sponsorshipOptions}
                        id="sponsorship"
                    />

                    {/* Youth Focused Organization field */}
                    <TextField
                        type="dropdown"
                        label="Are you a youth focused organization?"
                        placeholder="Youth Focused Organization"
                        value={youthFocusedOrganization}
                        onChange={setYouthFocusedOrganization}
                        required
                        options={youthFocusedOrganizationOptions}
                        id="youth_focused_organization"
                    />
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