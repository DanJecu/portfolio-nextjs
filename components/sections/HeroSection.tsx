import Image from 'next/image';
import { Logo } from '../Logo';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
    return (
        <section className='flex flex-col justify-center items-center w-[90%] m-auto'>
            <div className='flex my-auto text-white font-bold '>
                <Logo />
            </div>
            <Image
                alt='down-arrow'
                src='/down-arrow.png'
                width='50'
                height='50'
                className='self-end mx-auto filter invert animate-bounce opacity-60 pb-12'
            />
        </section>
    );
};
