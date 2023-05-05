import Image from 'next/image';
import { frontend } from '@/utils/icons';

export const SkillsSection: React.FC = () => {
    return (
        <section className='flex h-auto flex-col justify-between gap-4 p-8 text-white'>
            <span className='flex w-[95%] items-center pb-4  lg:col-start-2  lg:mt-auto lg:w-[100%] lg:p-2'>
                <h2 className='pr-4 text-2xl font-bold lg:text-xl'>Skills</h2>
                <div className='h-[1.5px] flex-1 bg-white'></div>
            </span>
            <div className='pb-6 text-center drop-shadow-sm'>
                <h4 className='pb-1 text-xl'>Frontend</h4>
                <div className='grid grid-cols-3 grid-rows-4 rounded-lg  bg-card px-6 py-5 shadow drop-shadow-sm'>
                    {Object.entries(frontend).map((value: [string, string]) => (
                        <span
                            className='flex flex-col flex-wrap items-center p-2 text-center'
                            key={value[0]}
                        >
                            <Image
                                src={value[1]}
                                alt={value[0]}
                                height='40'
                                width='40'
                            />
                            {value[0]
                                .split(' ')
                                .map((string: string, index: number) => {
                                    return (
                                        <h6
                                            className='pt-1 text-xs'
                                            key={`
                                        ${string}-${index}
                                    `}
                                        >
                                            {string}
                                        </h6>
                                    );
                                })}
                        </span>
                    ))}
                </div>
            </div>
            <div className='pb-6 text-center'>
                <h4 className='pb-1 text-xl'>Backend</h4>
                <div className='flex h-96 items-center justify-center rounded-lg bg-card p-2 shadow drop-shadow-sm'>
                    <span className='flex flex-col items-center text-center'>
                        <Image
                            src='/icons/backend/Django.svg'
                            alt='html'
                            height='35'
                            width='35'
                        />
                        <h5>Django</h5>
                    </span>
                </div>
            </div>
            <div className='pb-6 text-center'>
                <h4 className='pb-1 text-xl'>Miscellaneous</h4>
                <div className='flex h-96 items-center justify-center rounded-lg bg-card p-2 shadow drop-shadow-sm'>
                    <span className='flex flex-col items-center text-center'>
                        <Image
                            src='/icons/misc/Github.svg'
                            alt='html'
                            height='35'
                            width='35'
                        />
                        <h5>Github</h5>
                    </span>
                </div>
            </div>
        </section>
    );
};
