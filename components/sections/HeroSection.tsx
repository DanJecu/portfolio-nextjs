import Image from 'next/image';
import { Text } from '../Text';

import { motion, useAnimate } from 'framer-motion';

export const HeroSection: React.FC = () => {
    const [scope, animate] = useAnimate();

    return (
        <section className='flex flex-col justify-center items-center w-[90%] m-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
            <div className='flex my-auto text-white font-bold '>
                <Text />
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
