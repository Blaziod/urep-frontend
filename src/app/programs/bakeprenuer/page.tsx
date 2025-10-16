'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {TextField} from "@/components";
import {useRouter} from "next/navigation";

export default function BakeprenuerPage() {

    const router = useRouter();
    const backToPreviousPage = () => {
        router.back();
    }
    const routeToNextPage = () => {
        router.push('/consent?program=bakeprenuer');
    }

    const [knowledge, setKnowledge] = useState('');
    const [bakingInterest, setBakingInterest] = useState('');
    const [bakingBusiness, setBakingBusiness] = useState('');
    const [bakingSupport, setBakingSupport] = useState('');
    const [timeDuration, setTimeDuration] = useState('');
    const [youthBracket, setYouthBracket] = useState('');
    const [status, setStatus] = useState('');
    const [reason, setReason] = useState('');
    const [expectation, setExpectation] = useState('');
    const [previousParticipation, setPreviousParticipation] = useState('');


    const embassyOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    const bakingBusinessOptions = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
    ];
    const bakingSupportOptions = [
        { value: 'family', label: 'Family Support' },
        { value: 'coordinator', label: 'Coordinator Support' },
        { value: 'other', label: 'Other' },
        { value: 'sponsorship', label: 'Sponsorship' },
    ];
    const timeDurationOptions = [
        { value: '3_months', label: '3 Months' },
        { value: '6_months', label: '6 Months' },
        { value: '1_year', label: '1 Year' },
    ];
    const youthBracketOptions = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
    ];
    const statusOptions = [
        { value: 'Student', label: 'Student' },
        {value: 'Employed', label: 'Employed' },
        { value: 'Unemployed', label: 'Unemployed' },
        { value: 'Graduate', label: 'Graduate' },
        { value: 'Artisan', label: 'Artisan' },
        { value: 'Other', label: 'Other' },
    ];
    const reasonOptions = [
        { value: 'Education', label: 'Education' },
        { value: 'Employment', label: 'Employment' },
        { value: 'Other', label: 'Other' },
    ];
    const expectationOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
    const previousParticipationOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt with:', { knowledge, bakingInterest, bakingBusiness, bakingSupport, timeDuration });
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
            <span className={'text-center font-bold text-lg text-black flex flex-row items-center m-4'}>PROGRAM SPECIFIC QUESTIONS -<h4 className={'text-black text-center font-medium'}> BAKEPRENEUR NIGERIA</h4></span>

            <div className={'flex flex-row mb-4 px-3'}>
                <div className={'w-full h-4 bg-[#CECDCD]'}></div>
                <div className={' w-full h-4 bg-[#277B12]'}></div>
            </div>
            <div className={'flex flex-row items-center justify-evenly px-3 mt-10'}>
                <form onSubmit={handleSubmit} className={'w-[700px] gap-y-3.5'}>
                    {/* Youth Bracket field */}
                    <TextField
                        type="dropdown"
                        label="Are you within the youth age bracket(18-35)?"
                        placeholder="Youth Bracket"
                        value={youthBracket}
                        onChange={setYouthBracket}
                        required
                        options={youthBracketOptions}
                        id="youth_bracket"
                    />

                    {/* Status field */}
                    <TextField
                        type="dropdown"
                        label="What is your current status?"
                        placeholder="Status"
                        value={status}
                        onChange={setStatus}
                        required
                        options={statusOptions}
                        id="status"
                    />

                    {/* Reason field */}
                    <TextField
                        type="dropdown"
                        label="What is the reason for your participation?"
                        placeholder="Reason"
                        value={reason}
                        onChange={setReason}
                        required
                        options={reasonOptions}
                        id="reason"
                    />

                    {/* Expectation field */}
                    <TextField
                        type="dropdown"
                        label="What is your expectation for the training?"
                        placeholder="Expectation"
                        value={expectation}
                        onChange={setExpectation}
                        required
                        options={expectationOptions}
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
                    {/* Youth Professional field */}
                    <TextField
                        type="text"
                        label="Do you hahve prior knowledge or experience in baking or confectionery"
                        placeholder="Previous Knowledge"
                        value={knowledge}
                        onChange={setKnowledge}
                        id="previous_knowledge"
                    />

                    {/* Embassy field */}
                    <TextField
                        type="dropdown"
                        label="What are of baking interests you the most"
                        placeholder="Area of Interest"
                        value={bakingInterest}
                        onChange={setBakingInterest}
                        required
                        options={embassyOptions}
                        id="embassy"
                    />

                    {/* Baking Business field */}
                    <TextField
                        type="dropdown"
                        label="Do you intend to start or expand a baking business after this training"
                        placeholder="Yes/No"
                        value={bakingBusiness}
                        onChange={setBakingBusiness}
                        required
                        options={bakingBusinessOptions}
                        id="baking_business"
                    />

                    {/* Baking Support field */}
                    <TextField
                        type="dropdown"
                        label="What support do you currently have to grow a baking business"
                        placeholder="Yes/No"
                        value={bakingSupport}
                        onChange={setBakingSupport}
                        required
                        options={bakingSupportOptions}
                        id="baking_support"
                    />

                    {/* Time duration field */}
                    <TextField
                        type="dropdown"
                        label="How long do you intend to apply the skills learned from this training"
                        placeholder="3 months"
                        value={timeDuration}
                        onChange={setTimeDuration}
                        required
                        options={timeDurationOptions}
                        id="time_duration"
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
