import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const Logo: React.FC = () => {
    const [showText, setShowText] = useState(false);
    useEffect(() => {
        if (!showText) setShowText(true);
    }, [showText]);
    return (
        <div>
            <h1 className='pb-1 text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
                <motion.span
                    layout
                    key='d'
                    style={{ display: 'inline-block' }}
                    transition={{ ease: 'linear', duration: 0.7, delay: 1 }}
                >
                    D
                </motion.span>
                {showText && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ display: 'inline-block' }}
                        transition={{ delay: 2, ease: 'easeIn', duration: 2 }}
                    >
                        AN
                    </motion.span>
                )}
                {showText && <span> </span>}
                <motion.span
                    layout
                    key='j'
                    style={{ display: 'inline-block' }}
                    transition={{ ease: 'linear', duration: 0.7, delay: 1 }}
                >
                    J
                </motion.span>
                {showText && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ display: 'inline-block' }}
                        transition={{ delay: 2, ease: 'easeIn', duration: 2 }}
                    >
                        ECU
                    </motion.span>
                )}
            </h1>
            <motion.h2
                className='pt-1 text-center text-2xl font-light text-[#a9aec0] md:text-3xl lg:text-4xl xl:text-5xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, ease: 'easeOut', duration: 0.7 }}
            >
                Full Stack Developer
            </motion.h2>
            <motion.div
                className='flex  justify-center gap-7 pt-10 lg:gap-16'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, ease: 'easeOut', duration: 0.7 }}
            >
                <a href='https://github.com/danJecu' target='_blank'>
                    <Image
                        height='40'
                        width='40'
                        src='./icons/misc/githubMono.svg'
                        alt='github'
                        className='invert transition duration-300 ease-out hover:scale-125'
                    />
                </a>
                {/*    <a href='https://github.com/danJecu' target='_blank'>
                    <Image
                        height='40'
                        width='40'
                        src='/icons/misc/cv.svg'
                        alt='cv'
                        className='invert transition duration-300 ease-out hover:scale-125'
                    />
                </a> */}
                <a
                    href='https://www.linkedin.com/in/dan-alexandru-jecu/'
                    target='_blank'
                >
                    <Image
                        height='40'
                        width='40'
                        src='/icons/misc/linkedinMono.svg'
                        alt='linkedin'
                        className='invert transition duration-300 ease-out hover:scale-125'
                    />
                </a>
            </motion.div>
        </div>
    );
};
