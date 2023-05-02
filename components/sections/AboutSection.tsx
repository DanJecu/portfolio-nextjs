import { useRef } from 'react';
import Image from 'next/image';
import profilePic from '../../public/profileHero.png';
import { useInView } from 'framer-motion';
import { TextScroll } from '../TextScroll/TextScroll';

export const AboutSection: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const style = {
        transform: isInView ? 'none' : 'translateX(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
    };

    return (
        <section
            className='m-auto flex w-[95%] flex-col items-center justify-center text-white sm:w-[80%] lg:grid lg:w-[90%] lg:grid-cols-[1fr_1.2fr] lg:grid-rows-[1fr_6fr] lg:items-start lg:justify-items-end 2xl:h-[60%]'
            style={style}
        >
            <div className='flex w-[95%] items-center p-7  lg:col-start-2  lg:mt-auto lg:w-[100%] lg:p-2'>
                <h2 className='pr-4 text-2xl font-bold lg:text-xl'>About</h2>
                <div className='h-[1.5px] flex-1 bg-white'></div>
            </div>
            <div className='relative lg:row-span-2 lg:row-start-1 lg:h-[55%]  lg:place-self-center lg:justify-self-center '>
                <Image
                    key='1'
                    className='mask-image-gradient m-auto rounded-3xl drop-shadow-md saturate-150  md:h-[90%] md:w-[90%] lg:h-full  lg:w-full lg:object-cover'
                    src={profilePic}
                    width='250'
                    height='250'
                    alt='profile picture'
                />
            </div>
            <div className='w-[85%] pt-10 md:pt-16 lg:flex lg:flex-col lg:items-stretch lg:justify-center lg:pt-0'>
                <p
                    className=' text-center text-[0.94rem] leading-relaxed text-[#A9AEC0] md:text-lg lg:text-justify lg:text-lg lg:leading-loose'
                    ref={ref}
                >
                    Deeply invested in the life-long learning mentality, I&#39;m
                    a full-stack developer who carries a keen eye for design in
                    an user-first approach. My focus is in creating responsive
                    layouts on the JavaScript stack of React and NodeJS, and
                    from my background as a data analyst, I&#39;m well
                    acquainted to bringing out solutions to complex problems.
                </p>
                <div className='my-[30px] hidden  lg:m-auto lg:inline lg:pt-24 xl:pt-48 xl:text-xl'>
                    <h1 className='text-shadow-lg text-center font-bold opacity-90'>
                        I am a
                    </h1>

                    <TextScroll
                        text='Full Stack Developer &middot;'
                        direction='left'
                    />
                    <TextScroll
                        text='Data Analyst &middot; '
                        direction='right'
                    />
                    <TextScroll
                        text='Cool Millenial &middot; '
                        direction='left'
                    />
                </div>
            </div>
        </section>
    );
};
