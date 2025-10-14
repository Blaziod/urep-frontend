'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {TextField} from '../../components';
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const navigateToRegisterPage = () => {
        router.push('/program_register');
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        navigateToRegisterPage();
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt with:', { email, password, rememberMe });
    };

    return (
        <div className={'flex flex-col w-full min-h-screen bg-[#F3EFE5] p-8'}>
            {/* Logo at top left */}
            <div className={'p-4'}>
                <Image src={'/images/fmyd_logo.png'} alt={'FMYD Logo'} width={100} height={100} />
            </div>

            {/* Main content */}
            <div className={'flex flex-col items-center justify-center flex-grow'}>
                <div className={'max-w-3xl w-full px-8 py-16 bg-white rounded-xl shadow-2xl'}>
                    <h1 className={'text-3xl font-bold mb-2 text-black justify-start'}>Login to FMYD</h1>
                    <p className={'text-sm text-gray-500 justify-start mb-6'}> Hey, welcome back!</p>

                    <form onSubmit={handleSubmit}>
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

                        {/* Remember me checkbox and Forgot password link */}
                        <div className={'flex justify-between items-center mb-6'}>
                            <div className={'flex items-center'}>
                                <input
                                    type="checkbox"
                                    id="remember-me"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className={'mr-2 h-4 w-4 text-[#277B12] focus:ring-[#277B12] border-gray-300 rounded'}
                                />
                                <label htmlFor="remember-me" className={'text-sm text-gray-700'}>
                                    Remember me
                                </label>
                            </div>
                            <Link href="/forgot-password" className={'text-sm text-[#277B12] hover:underline'}>
                                Forgot password?
                            </Link>
                        </div>

                        {/* Login button */}
                        <button
                            type="submit"
                            className={'w-full bg-[#277B12] text-white py-4 px-4 mb-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors'}
                        >
                            Login
                        </button>
                    </form>
                    <span className={'text-center justify-center text-sm text-gray-500'}>Don't have an account? <Link href="/register" className={'text-[#277B12] hover:underline'}>Register</Link></span>
                </div>
            </div>
        </div>
    );
}
