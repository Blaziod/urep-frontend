'use client';
import FooterBar from "@/components/FooterBar";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {TextField} from "@/components";
import {useRouter} from "next/navigation";

export default function RegisterPage() {

    const router = useRouter();
    const navigateToTerms = () => {
        router.push('/terms');
    }

    const [nin, setNin] = useState('');
    const [programme, setProgramme] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [state, setState] = useState('');
    const [lga, setLga] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const genderOptions= [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
    ];

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

    const programmeOptions= [
        { value: 'african_youth', label: 'African/National Youth Day 2025' },
        { value: 'bakeprenuer', label: 'Bakeprenuer Nigeria' },
        { value: 'national_youth', label: 'National Youth Policy Validation Workshop' },
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
                        <Link href={'/program_register'} className={' bg-[#277B12] text-white hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2.5 text-center mb-2 md:mb-0 border-white border-2'}>Register</Link>
                    </div>
                </div>
                <div className={'flex flex-col items-center w-full'}>
                    <h1 className={'font-bold text-3xl my-2'}>Federal Ministry of Youth Development</h1>
                    <h2 className={'font-semibold text-2xl mb-4'}>UNIFIED REGISTRATION PORTAL (UREP)</h2>

                    <form onSubmit={handleSubmit} className={'my-5 w-[70%]'}>
                        {/* Programme field */}
                        <TextField
                            type="dropdown"
                            label="What programme are you registering for?"
                            placeholder="Select a programme"
                            value={programme}
                            onChange={setProgramme}
                            options={programmeOptions}
                            required
                            id="programme"
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
                            type="dropdown"
                            label="Gender"
                            placeholder="Select your gender"
                            value={gender}
                            onChange={setGender}
                            options={genderOptions}
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

                        <div className={'flex justify-between items-center mb-6 mt-4'}>
                            <div className={'flex items-center'}>
                                <input
                                    type="checkbox"
                                    id="remember-me"
                                    checked={agreeTerms}
                                    onChange={(e) => setAgreeTerms(e.target.checked)}
                                    className={'mr-2 h-4 w-4 text-[#277B12] focus:ring-[#277B12] border-gray-300 rounded'}
                                />
                                <label htmlFor="remember-me" className={'text-sm text-black font-medium'}>
                                    Read and accept the <a href={'/terms'} className={'text-[#277B12] hover:underline font-semibold'}>Terms and Conditions</a> of this programme to continue
                                </label>
                            </div>
                        </div>
                        {/* Continue button move to the right */}
                        <button
                            type="submit"
                            onClick={navigateToTerms}
                            className={' bg-[#277B12] text-white font-semibold py-3 px-9 mb-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors float-right disabled:opacity-50'}
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </div>
            <FooterBar/>
        </div>
    );
}