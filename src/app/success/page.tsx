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
        <div className={'w-screen min-h-screen py-3 pt-1 bg-white'}>
            <div className={'flex items-center justify-center px-1 py-2 mb-4'}>
                <Image src={'/images/success.png'} alt={'success'} width={600} height={400} className={'w-full max-w-[600px] h-auto mx-auto my-4 sm:my-8'} />
            </div>
            <div className={'w-full bg-white px-4 sm:px-8 md:px-16 lg:px-44 items-center justify-center flex flex-col'}>
                <h1 className={'text-black font-bold text-xl sm:text-2xl text-center my-6 sm:my-10'}>You have successfully registered with UREP</h1>
                <h2 className={'text-black font-medium text-lg sm:text-xl text-center'}>THANK YOU FOR REGISTERING. YOUR UNIQUE ID IS:</h2>
                <h2 className={'text-black font-medium text-lg sm:text-xl text-center'}>BENEFICIARY ID IS SHOWN BELOW</h2>

                <div className={'bg-gray-100 px-4 sm:px-8 py-4 sm:py-6 my-6 sm:my-8 flex flex-row items-center justify-center'}>
                    <p className={'font-bold text-lg sm:text-xl mr-3 sm:mr-5'}>UB-2025-14567</p>
                    <FaCopy size={20} color={'green'} className={'cursor-pointer'}/>
                </div>
                <div className={'flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full max-w-[800px] gap-4 mt-4 sm:mt-5 px-4'}>
                    <button className={'w-full sm:w-auto bg-[#277B12] text-white font-bold hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm sm:text-md px-4 sm:px-6 py-3 sm:py-4 text-center border-white border-2'} onClick={navigateToDashboard}>Go to Dashboard</button>
                    <button className={'w-full sm:w-auto border-[#277B12] text-black font-bold hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm sm:text-md px-4 py-3 sm:py-4 text-center border-2'}>Download Confirmation slip </button>
                </div>
            </div>
        </div>
    );
}
