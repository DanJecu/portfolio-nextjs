/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const MealApp: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const style = {
        transform: isInView ? 'none' : 'translateX(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
    };

    return (
        <section className='mx-auto flex w-[95%] flex-col justify-evenly pb-14 lg:col-start-1 lg:col-end-3 lg:flex-row'>
            <div
                className='flex items-center justify-center gap-10 px-1 lg:px-10'
                style={style}
                ref={ref}
            >
                <div className='relative hidden h-[80vh] w-[80%] rounded-lg md:w-[38%] lg:h-[70%] xl:block xl:min-w-[44%] xl:max-w-[48%]'>
                    <Image
                        key='1'
                        className='h-full w-full rounded-lg object-fill lg:h-[100%] '
                        src='/projects/mealShare2.png'
                        alt='cat-wiki project screenshot'
                        width='0'
                        height='0'
                        sizes='100vw'
                    />
                </div>
                <div className='relative m-auto h-[80vh] max-w-[90vw] rounded-lg md:max-w-[50%] lg:h-[70%] lg:max-w-[100%] xl:min-w-[43%] xl:max-w-[48%] '>
                    <Image
                        key='1'
                        className='h-full w-full rounded-lg object-fill lg:h-[100%]'
                        src='/projects/mealShare1.png'
                        alt='cat-wiki project screenshot'
                        width='0'
                        height='0'
                        sizes='100vw'
                    />
                </div>
            </div>
            <div className='lg:w-[50%] lg:place-self-center'>
                <h2 className='pb-2 pt-4 text-center text-xl  font-bold text-zinc-200 lg:pb-4 lg:text-2xl'>
                    Meal Sharing
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
                            src='/icons/frontend/TypeScript.svg'
                            width='18'
                            height='18'
                            alt='typescript icon'
                        />
                        <h5 className='text-xs text-secondary'>Typescript</h5>
                    </span>
                    <span className='flex items-center gap-1 rounded-xl bg-card p-[.35rem] text-black'>
                        <Image
                            src='/icons/frontend/CSS.svg'
                            width='18'
                            height='18'
                            alt='css'
                        />
                        <h5 className='text-xs text-secondary'>CSS Modules</h5>
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
                            src='/icons/backend/PostgreSQL.svg'
                            width='18'
                            height='18'
                            alt='postgresql'
                        />
                        <h5 className='text-xs text-secondary'>PostgreSQL</h5>
                    </span>
                </div>

                <p className='m-auto w-11/12 pt-6 text-center text-sm font-light leading-5 tracking-wide text-secondary lg:text-[1.08rem] lg:leading-7'>
                    Fully featured meal booking system. Developed with React
                    coupled with Node/Express and PostgreSQL on the backend.
                </p>
                <div className='[&>*:font-bold] flex justify-evenly py-6 text-[1rem] text-white'>
                    <button className='button'>
                        <a
                            target='_blank'
                            href='https://github.com/danJecu/meal-sharing-app'
                        >
                            SOURCE
                        </a>
                    </button>
                    <button className='button'>
                        <a
                            target='_blank'
                            href='https://meal-sharing-app.vercel.app/'
                        >
                            LIVE
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
};
