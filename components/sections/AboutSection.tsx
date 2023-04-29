import { useRef } from 'react';
import Image from 'next/image';
import profilePic from '../../public/profile.png';

import { useInView } from 'framer-motion';

export const AboutSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const style = {
        transform: isInView ? 'none' : 'translateX(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
    };

    return (
        <section
            className='m-auto flex flex-col items-center text-white sm:w-[90%] lg:grid lg:w-[80%] lg:grid-cols-2 lg:grid-rows-[20%_80%] lg:justify-items-center'
            style={style}
        >
            <div className='mr-auto flex w-[95%] items-center self-start p-7  lg:col-end-[-1] lg:w-[80%] lg:p-0 lg:pt-14'>
                <h2 className='pr-4 text-2xl font-bold'>About</h2>
                <div className='h-[1.5px] flex-1 bg-white'></div>
            </div>
            <div className='relative' ref={ref}>
                <Image
                    key='1'
                    className='mask-image-gradient m-auto rounded-3xl drop-shadow-md  saturate-150 md:h-[90%] md:w-[90%]'
                    src={profilePic}
                    width='250'
                    height='250'
                    alt='profile picture'
                />
            </div>
            <p className='w-[85%] pt-10 text-center text-[0.94rem] leading-relaxed text-[#A9AEC0] md:pt-16 md:text-lg lg:pt-0'>
                Deeply invested in the life-long learning mentality, I&#39;m a
                full-stack developer who carries a keen eye for design in an
                user-first approach. My focus is in creating responsive layouts
                on the JavaScript stack of React and NodeJS, and from my
                background as a data analyst, I&#39;m well acquainted to
                bringing out solutions to complex problems.
            </p>
        </section>
    );
};
