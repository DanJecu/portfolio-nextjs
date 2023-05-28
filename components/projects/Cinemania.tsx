/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const Cinemania: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const style = {
        transform: isInView ? 'none' : 'translateX(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
    };

    return (
        <div className='flex flex-col-reverse pt-20 lg:h-screen lg:w-[100vw] lg:flex-row lg:justify-between lg:px-4'>
            <div
                className='flex items-center justify-around gap-10 px-1 lg:w-[50vw]'
                style={style}
            >
                <div className='xl-max-w-[48%] relative mx-auto my-auto hidden h-[80%] max-w-[80vw] rounded-lg md:max-w-[50%] lg:h-[75.3%] lg:max-w-[70%] xl:block xl:min-w-[43%]'>
                    <img
                        key='1'
                        className='h-full w-full rounded-lg object-fill lg:h-[100%] '
                        src='./projects/cinemania2.png'
                        alt='profile picture'
                        width=''
                        height=''
                    />
                </div>
                <div
                    ref={ref}
                    className='xl-max-w-[48%] relative mx-auto my-auto h-[80%] max-w-[80vw] rounded-lg md:max-w-[50%] lg:h-[75.3%] lg:max-w-[70%] xl:min-w-[43%]'
                >
                    <img
                        key='1'
                        className='h-full w-full rounded-lg object-fill lg:h-[100%]'
                        src='./projects/cinemania1.png'
                        alt='profile picture'
                        width=''
                        height=''
                    />
                </div>
            </div>
            <div className='my-auto lg:w-[48%]'>
                <h2 className='pb-2 pt-4 text-center text-xl  font-bold text-zinc-200 lg:pb-4 lg:text-2xl'>
                    Cinemania
                </h2>
                <div className='flex flex-wrap justify-center gap-3 lg:mx-auto lg:w-9/12'>
                    <span className='flex items-center gap-1 rounded-xl bg-card p-[.35rem] text-black'>
                        <Image
                            src='/icons/frontend/React-Dark.svg'
                            width='18'
                            height='18'
                            alt='react'
                        />
                        <h5 className='text-xs text-secondary'>React</h5>
                    </span>
                    <span className='flex items-center gap-1 rounded-xl bg-card p-[.30rem] text-black'>
                        <Image
                            src='/icons/frontend/MUI.svg'
                            width='18'
                            height='18'
                            alt='mui icon'
                        />
                        <h5 className='text-xs text-secondary'>MUI</h5>
                    </span>
                    <span className='flex items-center gap-1 rounded-xl bg-card p-[.35rem] text-black'>
                        <Image
                            src='/icons/frontend/Emotion-Dark.svg'
                            width='18'
                            height='18'
                            alt='emotion'
                        />
                        <h5 className='text-xs text-secondary'>Emotion</h5>
                    </span>
                    <span className='flex items-center gap-1 rounded-xl bg-card p-[.35rem] text-black'>
                        <Image
                            src='/icons/backend/ExpressJS.svg'
                            width='18'
                            height='18'
                            alt='expressjs icon'
                        />
                        <h5 className='text-xs text-secondary'>ExpressJS</h5>
                    </span>
                    <span className='flex items-center gap-1 rounded-xl bg-card p-[.35rem] text-black'>
                        <Image
                            src='/icons/backend/KnexJS.png'
                            width='18'
                            height='18'
                            alt='knexjs'
                        />
                        <h5 className='text-xs text-secondary'>KnexJS</h5>
                    </span>
                    <span className='flex items-center gap-1 rounded-xl bg-card p-[.35rem] text-black'>
                        <Image
                            src='/icons/backend/MySQL.svg'
                            width='18'
                            height='18'
                            alt='mysql'
                        />
                        <h5 className='text-xs text-secondary'>MySQL</h5>
                    </span>
                </div>

                <p className='m-auto w-11/12 pt-6 text-center text-sm font-light leading-5 tracking-wide text-secondary lg:text-[1.08rem] lg:leading-7'>
                    Cinemania is a movie app that was created through a
                    collaborative team project. The app was developed using
                    React, Material-UI (MUI), Emotion, Express.js, and Firebase.
                </p>
                <div className='[&>*:font-bold] flex justify-evenly py-6 text-[1rem] text-white'>
                    <button className='button'>
                        <a
                            target='_blank'
                            href='https://github.com/HackYourFuture-CPH/CINEMANIA'
                        >
                            SOURCE
                        </a>
                    </button>
                    {/* <button className="disabled" disabled>
                        <a target="_blank" href="">
                            IN PROGRESS
                        </a>
                    </button>*/}
                </div>
            </div>
        </div>
    );
};
