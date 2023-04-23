import Image from 'next/image';

import { motion, useAnimate } from 'framer-motion';

export const HeroSection: React.FC = () => {
    const [scope, animate] = useAnimate();

    return (
        <section className='flex flex-col justify-center items-center w-[90%] m-auto text-4xl md:text-6xl lg:text-7xl xl:text-8xl'>
            <div className='flex my-auto gap-0 text-white font-bold '>
                <motion.div className='relative flex'>
                    <motion.div
                        className='flex'
                        initial={{ translateX: 60 }}
                        animate={{ x: -60 }}
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
                        initial={{ translateX: -5 }}
                        animate={{ x: 20 }}
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
                className='self-end mx-auto filter invert animate-bounce opacity-60 pb-5'
            />
        </section>
    );
};
