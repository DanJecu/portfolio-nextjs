import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Logo: React.FC = () => {
    const [showText, setShowText] = useState(false);
    useEffect(() => {
        if (!showText) setShowText(true);
    }, [showText]);
    return (
        <div>
            <h1 className='text-center pb-1 text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
                <motion.span
                    layout
                    key='d'
                    style={{ display: 'inline-block' }}
                    transition={{ ease: 'linear', duration: 0.7, delay: 0.5 }}
                >
                    D
                </motion.span>
                {showText && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ display: 'inline-block' }}
                        transition={{ delay: 1.5, ease: 'easeIn', duration: 2 }}
                    >
                        AN
                    </motion.span>
                )}
                {showText && <span> </span>}
                <motion.span
                    layout
                    key='j'
                    style={{ display: 'inline-block' }}
                    transition={{ ease: 'linear', duration: 0.7, delay: 0.5 }}
                >
                    J
                </motion.span>
                {showText && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ display: 'inline-block' }}
                        transition={{ delay: 1.5, ease: 'easeIn', duration: 2 }}
                    >
                        ECU
                    </motion.span>
                )}
            </h1>
            <motion.h2
                className='pt-1 text-2xl text-center text-[#a9aec0] font-light md:text-3xl lg:text-4xl xl:text-5xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8, ease: 'easeOut', duration: 0.7 }}
            >
                Full Stack Developer
            </motion.h2>
        </div>
    );
};
