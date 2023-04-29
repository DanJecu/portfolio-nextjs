import Image from 'next/image';

export const AboutSection: React.FC = () => {
    return (
        <section className='flex flex-col items-center text-white lg:w-[70%]'>
            <div className='flex items-center w-[95%] self-start mr-auto p-7 lg:w-[70%] lg:p-14'>
                <h2 className=' font-bold text-2xl pr-4'>About</h2>
                <div className='h-[1.5px] bg-white flex-1'></div>
            </div>
            <div className='relative'>
                <Image
                    className='m-auto rounded-3xl saturate-150 drop-shadow-md  mask-image-gradient '
                    src='/profile.png'
                    width='250'
                    height='250'
                    alt='profile picture'
                />
            </div>
            <p className='w-[85%] pt-10 md:pt-16 leading-relaxed text-lg text-center text-[#A9AEC0] md:text-lg'>
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
