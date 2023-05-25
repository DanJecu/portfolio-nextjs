import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Footer } from '../Footer';

export const ContactSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const style = {
        transform: isInView ? 'none' : 'translateX(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
    };

    return (
        <section
            className='flex flex-col  pt-20 text-white md:pt-2 lg:pt-0'
            style={style}
        >
            <div className='flex w-[100%] items-center justify-center p-7 pb-12 '>
                <div className='h-[1.5px] flex-1 bg-white'></div>
                <h2 className='px-4 text-2xl font-bold '>Contact</h2>
                <div className='h-[1.5px] flex-1 bg-white'></div>
            </div>
            <div
                className='my-auto flex flex-col items-center leading-relaxed'
                ref={ref}
            >
                <h4 className='pb-1 text-secondary'>WRITE ME AN EMAIL</h4>
                <h4 className='pb-6 text-xl font-bold tracking-wider'>
                    <Link href='mailto:danjecu@outlook.com' target='_blank'>
                        danjecu@outlook.com
                    </Link>
                </h4>
                <h4 className='pb-6 tracking-[.2em] text-secondary'>OR</h4>
                <h4 className='pb-4 text-secondary'>REACH ME THROUGH</h4>
                <span className='flex gap-7'>
                    <a href='https://github.com/danJecu' target='_blank'>
                        <Image
                            height='50'
                            width='50'
                            src='./icons/misc/githubMono.svg'
                            alt='github'
                            className='invert transition duration-300 ease-out hover:scale-125'
                        />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/dan-alexandru-jecu/'
                        target='_blank'
                    >
                        <Image
                            height='50'
                            width='50'
                            src='./icons/misc/linkedinMono.svg'
                            alt='github'
                            className='invert transition duration-300 ease-out hover:scale-125'
                        />
                    </a>
                </span>
            </div>
            <Footer />
        </section>
    );
};
