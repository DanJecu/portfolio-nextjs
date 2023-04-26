import Image from 'next/image';

export const AboutSection: React.FC = () => {
    return (
        <section className='flex flex-col items-center text-white'>
            <div className='flex items-center w-[95%] self-start mr-auto p-7'>
                <h2 className='font-general font-bold text-2xl pr-4'>About</h2>
                <div className='h-[1.5px] bg-white flex-1'></div>
            </div>
            <div className='pt-5 w-3/4 h-44'>
                <Image
                    className='m-auto blur-[1px]  contrast-125 brightness-50 drop-shadow-md  rounded transform transition duration-500 hover:scale-x-[-1]'
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
            <p className='w-[85%] pt-12 leading-relaxed text-justify text-[#A9AEC0]'>
                Deeply invested in the life-long learning mentality, I'm a
                full-stack developer who carries a keen eye for design in an
                user-first approach. My focus is in creating responsive layouts
                on the JavaScript stack of React and NodeJS, and from my
                background as a data analyst, I'm well acquainted to bringing
                out solutions to complex problems.
            </p>
        </section>
    );
};
