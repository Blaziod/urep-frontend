'use client'
import Image from "next/image";
import {FaCopy} from "react-icons/fa";
import {useRouter} from "next/navigation";

export default function SuccessPage() {
    const router = useRouter();
    const navigateToDashboard = () => {
        router.push('/admin');
    }
    return (
        <div className={'w-screen h-screen py-3 pt-1 bg-white'}>
            <div className={'flex items-center justify-center px-1 py-2 mb-4'}>
                <Image src={'/images/success.png'} alt={'success'} width={600} height={400} className={'mx-auto my-8'} />
            </div>
            <div className={'w-screen bg-white px-44 items-center justify-center flex flex-col'}>
                <h1 className={'text-black font-bold text-2xl my-10'}>You have successfully registered with UREP</h1>
                <h2 className={'text-black font-medium text-xl'}>THANK YOU FOR REGISTERING. YOUR UNIQUE ID IS:</h2>
                <h2 className={'text-black font-medium text-xl'}>BENEFICIARY ID IS SHOWN BELOW</h2>

                <div className={'bg-gray-100 px-8 py-6 my-8 flex flex-row items-center'}>
                    <p className={'font-bold text-xl mr-5'}>UB-2025-14567</p>
                    <FaCopy size={20} color={'green'} className={''}/>
                </div>
                <div className={'flex flex-row items-center justify-between w-[800px] mt-5'}>
                    <button className={' bg-[#277B12] text-white font-bold hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md px-6 py-4 text-center mb-2 md:mb-0 border-white border-2'} onClick={navigateToDashboard}>Go to Dashboard</button>
                    <button className={' border-[#277B12] text-black font-bold hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md px-4 py-4 text-center mb-2 md:mb-0 border-2'}>Download Confirmation slip </button>
                </div>
            </div>
        </div>
    );
}