/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const CatsWiki: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const style = {
        transform: isInView ? 'none' : 'translateX(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
    };

    return (
        <div className='flex flex-col-reverse pt-20 lg:col-start-1 lg:col-end-3 lg:h-screen lg:w-[100vw] lg:flex-row lg:justify-between lg:px-4'>
            <div className='my-auto lg:w-[48%]'>
                <h2 className='pb-2 pt-4 text-center text-xl  font-bold text-zinc-200 lg:pb-4 lg:text-2xl'>
                    CatWiki
                </h2>
                <div className='flex flex-wrap justify-center gap-3 lg:mx-auto lg:w-9/12'>
                    <span className='flex items-center gap-1 rounded-xl bg-card p-[.35rem] text-black'>
                        <Image
                            src='/icons/frontend/TypeScript.svg'
                            width='18'
                            height='18'
                            alt='typescript'
                        />
                        <h5 className='text-xs text-secondary'>Typescript</h5>
                    </span>
                    <span className='flex items-center gap-1 rounded-xl bg-card p-[.35rem] text-black'>
                        <Image
                            src='/icons/frontend/NextJS.svg'
                            width='18'
                            height='18'
                            alt='nextjs'
                        />
                        <h5 className='text-xs text-secondary'>NextJS</h5>
                    </span>
                    <span className='flex items-center gap-1 rounded-xl bg-card p-[.30rem] text-black'>
                        <Image
                            src='/icons/frontend/StyledComponents.svg'
                            width='18'
                            height='18'
                            alt='styled components'
                        />
                        <h5 className='text-xs text-secondary'>
                            Styled Components
                        </h5>
                    </span>
                    <span className='flex items-center gap-1 rounded-xl bg-card p-[.35rem] text-black'>
                        <Image
                            src='/icons/frontend/FramerMotion.svg'
                            width='18'
                            height='18'
                            alt='framer motion'
                        />
                        <h5 className='text-xs text-secondary'>
                            Framer Motion
                        </h5>
                    </span>
                </div>

                <p className='m-auto w-11/12 pt-6 text-center text-sm font-light leading-5 tracking-wide text-secondary lg:text-[1.08rem] lg:leading-7'>
                    Web application showcasing the diverse range of cat breeds
                    worldwide. Lightning-fast and efficiently designed, this app
                    utilizes statically generated pages derived from pre-fetched
                    and optimized API data, all powered by the cutting-edge
                    NextJS framework.
                </p>
                <div className='[&>*:font-bold] flex justify-evenly py-6 text-[1rem] text-white'>
                    <button className='button'>
                        <a
                            target='_blank'
                            href='https://github.com/danJecu/cats-wiki'
                        >
                            SOURCE
                        </a>
                    </button>
                    <button className='button'>
                        <a
                            target='_blank'
                            href='https://cats-wiki-orpin.vercel.app/'
                        >
                            LIVE
                        </a>
                    </button>
                </div>
            </div>
            <div
                className='flex items-center justify-around gap-10 px-1 lg:w-[50vw]'
                style={style}
            >
                <div className='xl-max-w-[48%] relative mx-auto my-auto hidden h-[80%] max-w-[80vw] rounded-lg md:max-w-[50%] lg:h-[75.3%] lg:max-w-[70%] xl:block xl:min-w-[43%]'>
                    <img
                        key='1'
                        className='h-full w-full rounded-lg object-fill lg:h-[100%] '
                        src='./projects/cats2.png'
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
                        src='./projects/cats1.png'
                        alt='profile picture'
                        width=''
                        height=''
                    />
                </div>
            </div>
        </div>
    );
};
