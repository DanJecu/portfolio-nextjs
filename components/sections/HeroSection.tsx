import Image from 'next/image';

import { motion, useAnimate } from 'framer-motion';

export const HeroSection: React.FC = () => {
    const [scope, animate] = useAnimate();

    return (
        <section className='flex flex-col justify-center items-center w-[90%] m-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
            <div className='flex my-auto text-white font-bold '>
                <motion.div className='relative flex'>
                    <motion.div
                        className='flex'
                        initial={{ translateX: 70 }}
                        animate={{ x: -70 }}
                        transition={{ duration: 3 }}
                    >
                        <h1>D</h1>
                        <motion.h1
                            className='opacity-0'
                            initial={{ display: 'hidden' }}
                            animate={{ display: 'inline', opacity: 1 }}
                            transition={{
                                ease: 'linear',
                                duration: 3,
                                delay: 2,
                            }}
                        >
                            AN
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className='flex'
                        initial={{ translateX: 10 }}
                        animate={{ x: 10 }}
                        transition={{ duration: 3 }}
                    >
                        <h1>J</h1>
                        <motion.h1
                            className='opacity-0'
                            initial={{ display: 'hidden' }}
                            animate={{ display: 'inline', opacity: 1 }}
                            transition={{
                                ease: 'linear',
                                duration: 3,
                                delay: 2,
                            }}
                        >
                            ECU
                        </motion.h1>
                    </motion.div>
                </motion.div>
            </div>
            <Image
                alt='down-arrow'
                src='/down-arrow.png'
                width='50'
                height='50'
                className='self-end mx-auto filter invert animate-bounce opacity-60 pb-16'
            />
        </section>
    );
};
