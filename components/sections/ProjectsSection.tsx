import Image from 'next/image';

export const ProjectsSection: React.FC = () => {
    return (
        <section className='m-auto flex w-[95vw] flex-col'>
            <span className='flex w-[95%] items-center p-7 text-white lg:w-[50%] lg:px-12 lg:pb-12 lg:pt-24'>
                <h2 className='pb-4 text-2xl font-bold'>Projects</h2>
                <div className='h-[1.5px] flex-1 bg-white'></div>
            </span>
            <div className='relative m-auto h-[80vh] w-[80%] rounded-lg'>
                <img
                    key='1'
                    className='h-full w-full rounded-lg object-fill lg:h-[100%]'
                    src='./projects/mealShare1.png'
                    alt='profile picture'
                    width=''
                    height=''
                />
            </div>
            <div>
                <h2 className='pb-2 pt-4 text-center text-xl font-bold text-secondary '>
                    Meal Sharing
                </h2>
                <div className='flex flex-wrap justify-center gap-3'>
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
            </div>
        </section>
    );
};
