import Image from 'next/image';
import { TextScroll } from '../TextScroll/TextScroll';

export const AboutSection: React.FC = () => {
    return (
        <section className='flex flex-col items-center text-white lg:w-[70%]'>
            <div className='flex items-center w-[95%] self-start mr-auto p-7 lg:w-[70%] lg:p-14'>
                <h2 className=' font-bold text-2xl pr-4'>About</h2>
                <div className='h-[1.5px] bg-white flex-1'></div>
            </div>
            <div className='pt-5 w-3/4 h-44'>
                <Image
                    className='m-auto blur-  contrast-125 brightness-50 drop-shadow-md  rounded transform transition duration-500 hover:scale-x-[-1]'
                    src='/profile.png'
                    width='150'
                    height='150'
                    alt='profile-picture'
                    style={{
                        border: '2px solid transparent',
                        borderImage:
                            'linear-gradient(to right, transparent, #f2f2f2) 1',
                    }}
                />
            </div>
            <p className='w-[85%] pt-12 md:pt-16 leading-relaxed text-justify text-[#A9AEC0] md:text-lg'>
                Deeply invested in the life-long learning mentality, I&#39;m a
                full-stack developer who carries a keen eye for design in an
                user-first approach. My focus is in creating responsive layouts
                on the JavaScript stack of React and NodeJS, and from my
                background as a data analyst, I&#39;m well acquainted to
                bringing out solutions to complex problems.
            </p>
            <div className='my-[30px] md:pt-10'>
                <h1 className='text-center font-bold opacity-90 text-shadow-lg'>
                    I am a
                </h1>

                <TextScroll
                    text='Full Stack Developer &middot; '
                    direction='left'
                />
                <TextScroll text='Life Student &middot; ' direction='right' />
                <TextScroll text='Cool Millenial &middot; ' direction='left' />
            </div>
        </section>
    );
};
