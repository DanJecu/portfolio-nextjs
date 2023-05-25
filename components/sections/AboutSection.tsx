/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
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
            className='m-auto flex w-[100%] flex-col items-center justify-center text-white sm:w-[100%] lg:grid lg:w-[90%] lg:grid-cols-[1fr_1.2fr] lg:grid-rows-[1fr_6fr] lg:items-start lg:justify-items-end 2xl:h-[65%]'
            style={style}
        >
            <div className='flex w-[95%] items-center px-7 pb-0 pt-7  lg:col-start-2  lg:mt-auto lg:w-[100%] lg:p-2'>
                <h2 className='pr-4 text-2xl font-bold lg:text-xl'>About</h2>
                <div className='h-[1.5px] flex-1 bg-white'></div>
            </div>
            <div className='relative h-[40vh] lg:row-span-2 lg:row-start-1 lg:h-[55%] lg:place-self-center lg:justify-self-center '>
                <img
                    key='1'
                    className='mask-image-gradient max-h-full max-w-full rounded-3xl object-cover lg:h-[100%]'
                    src='./2.PNG'
                    alt='profile picture'
                    width=''
                    height=''
                />
            </div>
            <div className='my-auto w-[85%] pb-7  md:pt-16 lg:flex lg:flex-col lg:items-stretch lg:justify-center lg:pt-0'>
                <p
                    className='text-center text-[0.94rem] leading-relaxed text-secondary md:text-lg lg:text-justify lg:text-lg lg:leading-loose'
                    ref={ref}
                >
                    I am a passionate self-taught full stack developer with a
                    life-long learning mentality, dedicated to optimizing
                    business operations through user-first design and custom
                    software solutions. <br /> With a strong background in data
                    analysis, I specialize in creating responsive layouts using
                    the JavaScript stack of React and NodeJS, as well as
                    Typescript, Python and SQL.
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
                        text='Stoic Millenial &middot; '
                        direction='left'
                    />
                </div>
            </div>
        </section>
    );
};
