import Image from 'next/image';
/* eslint-disable @next/next/no-img-element */
export const ProjectsSection: React.FC = () => {
    return (
        <section className='m-auto flex w-[95vw] flex-col lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_3fr] '>
            <span className='flex w-[95%] items-center justify-center p-7 text-white lg:col-start-1 lg:col-end-3 lg:mt-auto lg:w-[50%]  lg:pt-24'>
                <h2 className='pr-4 text-2xl font-bold '>Projects</h2>
                <div className='h-[1.5px] flex-1 bg-white'></div>
            </span>
            <div className='flex'>
                <div className='relative m-auto hidden h-[80vh] w-[80%] rounded-lg md:block md:w-[38%] lg:h-[90%]'>
                    <img
                        key='1'
                        className='h-full w-full rounded-lg object-fill lg:h-[100%]'
                        src='./projects/mealShare2.png'
                        alt='profile picture'
                        width=''
                        height=''
                    />
                </div>
                <div className='relative m-auto  h-[80vh] w-[80%] rounded-lg md:w-[38%] lg:h-[90%]'>
                    <img
                        key='1'
                        className='h-full w-full rounded-lg object-fill lg:h-[100%]'
                        src='./projects/mealShare1.png'
                        alt='profile picture'
                        width=''
                        height=''
                    />
                </div>
            </div>
            <div className='lg:place-self-center'>
                <h2 className='pb-2 pt-4 text-center text-xl  text-zinc-200 lg:pb-4 lg:text-2xl'>
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
