import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Text: React.FC = () => {
    const [showText, setShowText] = useState(false);
    useEffect(() => {
        if (!showText) setShowText(true);
    }, [showText]);
    return (
        <h1>
            <motion.span
                layout
                key='d'
                style={{ display: 'inline-block' }}
                transition={{ ease: 'linear' }}
            >
                D
            </motion.span>
            {showText && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ display: 'inline-block' }}
                    transition={{ delay: 0.8, ease: 'easeIn', duration: 2 }}
                >
                    AN
                </motion.span>
            )}
            {showText && <span> </span>}
            <motion.span layout key='j' style={{ display: 'inline-block' }}>
                J
            </motion.span>
            {showText && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ display: 'inline-block' }}
                    transition={{ delay: 0.8, ease: 'easeIn', duration: 2 }}
                >
                    ECU
                </motion.span>
            )}
        </h1>
    );
};
