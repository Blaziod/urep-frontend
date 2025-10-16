'use client';
import FooterBar from "@/components/FooterBar";
import Image from "next/image";
import Link from "next/link";
import React, {useMemo, useState} from "react";
import {TextField} from "@/components";
import {useRouter} from "next/navigation";

export default function RegisterPage() {

    const router = useRouter();
    // Function to handle opening the terms modal
    const navigateToProgramInfo = () => {
        router.push(`/program_info?program=${programme}`);
    }

    // const openTermsModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
    //     e.preventDefault();
    //     setShowTermsModal(true);
    // }
    //
    // // Function to handle accepting terms
    // const acceptTerms = () => {
    //     setAgreeProgramTerms(true);
    //     setShowTermsModal(false);
    // }
    //
    // // Function to handle declining terms
    // const declineTerms = () => {
    //     setAgreeProgramTerms(false);
    //     setShowTermsModal(false);
    // }

    const [nin, setNin] = useState('');
    const [programme, setProgramme] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [state, setState] = useState('');
    const [lga, setLga] = useState('');
    // const [agreeProgramTerms, setAgreeProgramTerms] = useState(false);
    // const [showTermsModal, setShowTermsModal] = useState(false);
    const [organisation, setOrganisation] = useState('');
    const [receiveOTP, setReceiveOTP] = useState('');
    const [otp, setOtp] = useState('');

    // Set the program from URL parameter when component mounts
    React.useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const programParam = searchParams.get('program');
        if (programParam) {
            setProgramme(programParam);
        }
    }, []);

    const programmeOptions= [
        { value: 'african_youth', label: 'African/National Youth Day 2025' },
        { value: 'bakeprenuer', label: 'Bakeprenuer Nigeria' },
        { value: 'national_youth', label: 'National Youth Policy Validation Workshop' },
        { value: 'youth_migration', label: 'Youth Migration Awareness and Management Programme (YMAMP)' },
    ];

    // Get the selected program name
    const selectedProgramName = useMemo(() => {
        if (!programme) return '';
        const selectedProgram = programmeOptions.find(option => option.value === programme);
        return selectedProgram ? selectedProgram.label : '';
    }, [programme]);

    const stateOptions= [
        { value: 'Abia', label: 'Abia' },
        { value: 'Adamawa', label: 'Adamawa' },
        { value: 'Akwa Ibom', label: 'Akwa Ibom' },
        { value: 'Anambra', label: 'Anambra' },
        { value: 'Bauchi', label: 'Bauchi' },
        { value: 'Bayelsa', label: 'Bayelsa' },
        { value: 'Benue', label: 'Benue' },
        { value: 'Borno', label: 'Borno' },
        { value: 'Cross River', label: 'Cross River' },
        { value: 'Delta', label: 'Delta' },
        { value: 'Ebonyi', label: 'Ebonyi' },
        { value: 'Edo', label: 'Edo' },
        { value: 'Ekiti', label: 'Ekiti' },
        { value: 'Enugu', label: 'Enugu' },
        { value: 'Federal Capital Territory', label: 'Federal Capital Territory' },
        { value: 'Gombe', label: 'Gombe' },
        { value: 'Imo', label: 'Imo' },
        { value: 'Jigawa', label: 'Jigawa' },
        { value: 'Kaduna', label: 'Kaduna' },
        { value: 'Kano', label: 'Kano' },
        { value: 'Katsina', label: 'Katsina' },
        { value: 'Kebbi', label: 'Kebbi' },
        { value: 'Kogi', label: 'Kogi' },
        { value: 'Kwara', label: 'Kwara' },
        { value: 'Lagos', label: 'Lagos' },
        { value: 'Nasarawa', label: 'Nasarawa' },
        { value: 'Niger', label: 'Niger' },
        { value: 'Ogun', label: 'Ogun' },
        { value: 'Ondo', label: 'Ondo' },
        { value: 'Osun', label: 'Osun' },
        { value: 'Oyo', label: 'Oyo' },
        { value: 'Plateau', label: 'Plateau' },
        { value: 'Rivers', label: 'Rivers' },
        { value: 'Sokoto', label: 'Sokoto' },
        { value: 'Taraba', label: 'Taraba' },
        { value: 'Yobe', label: 'Yobe' },
        { value: 'Zamfara', label: 'Zamfara' },
    ];

    const otpOptions= [
        { value: 'email', label: 'Email' },
        { value: 'sms', label: 'SMS' },
    ]

    const lgaOptions= [
        { value: 'Aba', label: 'Aba' },
        { value: 'Abeokuta', label: 'Abeokuta' },
        { value: 'Abuja', label: 'Abuja' },
        { value: 'Ado-Ekiti', label: 'Ado-Ekiti' },
        { value: 'Ado-Odo', label: 'Ado-Odo' },
        { value: 'Afijio', label: 'Afijio' },
        { value: 'Aguata', label: 'Aguata' },
        { value: 'Ahoada', label: 'Ahoada' },
        { value: 'Aiyedire', label: 'Aiyedire' },
        { value: 'Akoko', label: 'Akoko' },
    ]

    const organisationOptions= [
        { value: 'NGO', label: 'NGO' },
        { value: 'Government Agency', label: 'Government Agency' },
        { value: 'Private Sector', label: 'Private Sector' },
        { value: 'Educational Institution', label: 'Educational Institution' },
        { value: 'Other', label: 'Other' },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt with:', { nin, programme, name, email, password, dob, gender, state, lga });
    };

    return (
        <div className={'w-screen h-screen pt-1'}>
            <div className={'pt-1 px-3'}>
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
                    <h1 className={'font-bold text-3xl my-2'}>Federal Ministry of Youth Development</h1>
                    <h2 className={'font-semibold text-2xl mb-4'}>UNIFIED REGISTRATION PORTAL (UREP)</h2>
                    <h2 className={'font-semibold text-xl mb-4'}>PERSONAL INFORMATION</h2>
                    <form onSubmit={handleSubmit} className={'my-5 w-[70%]'}>
                        {/* Programme field - static display */}
                        <div className="mb-4">
                            <label htmlFor="programme" className="block mb-2 text-sm mt-3 font-medium text-black">
                                Selected Programme
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <div className="w-full px-4 py-4 border border-gray-300 rounded-lg bg-gray-100">
                                {selectedProgramName || "Program will be selected from the URL parameter"}
                            </div>
                        </div>
                        {/*{programme && (*/}
                        {/*    <div className={'flex items-center mt-2 mb-4'}>*/}
                        {/*        <input*/}
                        {/*            type="checkbox"*/}
                        {/*            id="program-terms"*/}
                        {/*            checked={agreeProgramTerms}*/}
                        {/*            onChange={(e) => setAgreeProgramTerms(e.target.checked)}*/}
                        {/*            className={'mr-2 h-4 w-4 text-[#277B12] focus:ring-[#277B12] border-gray-300 rounded'}*/}
                        {/*            required*/}
                        {/*        />*/}
                        {/*        <label htmlFor="program-terms" className={'text-sm text-black font-medium'}>*/}
                        {/*            By selecting this program, you agree to the <a href="#" onClick={openTermsModal} className={'text-[#277B12] hover:underline font-semibold'}>Terms and Conditions</a> of the {selectedProgramName}.*/}
                        {/*        </label>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                        {/* Organisation field */}
                        <TextField
                            type="dropdown"
                            label="Organisation"
                            placeholder="Which organisation are you from?"
                            value={organisation}
                            onChange={setOrganisation}
                            options={organisationOptions}
                            required
                            id="organisation"
                        />
                        {/* NIN field */}
                        <TextField
                            type="text"
                            label="National Identity Number"
                            placeholder="Enter your NIN"
                            value={nin}
                            onChange={setNin}
                            required
                            id="nin"
                        />
                        {/* OTP Receive Option field */}
                        <TextField
                            type="dropdown"
                            label="How do you want to receive the OTP?"
                            placeholder="Select your preferred method"
                            value={receiveOTP}
                            onChange={setReceiveOTP}
                            options={otpOptions}
                            required
                            id="otp"
                        />

                        {/* OTP field */}
                        <TextField
                            type="text"
                            label="OTP"
                            placeholder="Enter your OTP"
                            value={otp}
                            onChange={setOtp}
                            required
                            id="otp"
                        />

                        {/* Name field */}
                        <TextField
                            type="text"
                            label="Name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={setName}
                            required
                            id="name"
                        />
                        {/* Date of Birth field */}
                        <TextField
                            type="text"
                            label="Date of Birth"
                            placeholder="Enter your date of birth"
                            value={dob}
                            onChange={setDob}
                            required
                            id="dob"
                        />
                        {/* Gender field */}
                        <TextField
                            type="text"
                            label="Gender"
                            placeholder="Select your gender"
                            value={gender}
                            onChange={setGender}
                            required
                            id="gender"
                        />
                        {/* Email field */}
                        <TextField
                            type="email"
                            label="Email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={setEmail}
                            required
                            id="email"
                        />
                        {/* Password field */}
                        <TextField
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={setPassword}
                            required
                            id="password"
                        />
                        {/* State field */}
                        <TextField
                            type="dropdown"
                            label="State"
                            placeholder="Select your state"
                            value={state}
                            onChange={setState}
                            options={stateOptions}
                            required
                            id="state"
                        />
                        {/* LGA field */}
                        <TextField
                            type="dropdown"
                            label="Local Government Area"
                            placeholder="Select your local government area"
                            value={lga}
                            onChange={setLga}
                            options={lgaOptions}
                            required
                            id="lga"
                        />
                        {/* Continue button move to the right */}
                        <button
                            type="submit"
                            onClick={navigateToProgramInfo}
                            className={' bg-[#277B12] text-white font-semibold py-3 px-9 mb-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors float-right disabled:opacity-50'}
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </div>
            <FooterBar/>

            {/*/!* Terms and Conditions Modal *!/*/}
            {/*{showTermsModal && (*/}
            {/*    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">*/}
            {/*        <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl">*/}
            {/*            <div className="flex justify-between items-center p-4 border-b">*/}
            {/*                <h2 className="text-xl font-bold text-gray-800">Terms and Conditions for {selectedProgramName}</h2>*/}
            {/*                <button*/}
            {/*                    onClick={() => setShowTermsModal(false)}*/}
            {/*                    className="text-gray-500 hover:text-gray-700"*/}
            {/*                >*/}
            {/*                    <FaTimes size={20} />*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*            <div className="p-6 max-h-96 overflow-y-auto">*/}
            {/*                <h3 className="font-semibold text-lg mb-4">Please read and accept the following terms:</h3>*/}
            {/*                <ul className="list-disc pl-5 space-y-2 mb-4">*/}
            {/*                    <li>Make sure all information provided are accurate. Multiple registration by the same person is not allowed.</li>*/}
            {/*                    <li>This Program will be taken place in Ondo State</li>*/}
            {/*                    <li>Free transportation will be provided by the ministry from Headquarter everyday during the program</li>*/}
            {/*                    <li>This is a three day program.</li>*/}
            {/*                </ul>*/}
            {/*                <p className="text-sm text-gray-600 mt-4">*/}
            {/*                    By accepting these terms, you agree to abide by all the conditions specified for participation in {selectedProgramName}.*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*            <div className="flex justify-end space-x-4 p-4 border-t">*/}
            {/*                <button*/}
            {/*                    onClick={declineTerms}*/}
            {/*                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"*/}
            {/*                >*/}
            {/*                    Decline*/}
            {/*                </button>*/}
            {/*                <button*/}
            {/*                    onClick={acceptTerms}*/}
            {/*                    className="px-4 py-2 bg-[#277B12] text-white rounded hover:bg-green-700 transition-colors"*/}
            {/*                >*/}
            {/*                    Accept*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
}
