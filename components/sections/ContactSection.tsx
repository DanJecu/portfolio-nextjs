import Image from 'next/image';

export const ContactSection: React.FC = () => {
    return (
        <section className='flex flex-col items-center justify-center text-white '>
            <div className='flex w-[100%] items-center justify-center p-7 pb-12  lg:col-start-1 lg:col-end-3 lg:mt-auto lg:w-[50%]  lg:pt-24'>
                <div className='h-[1.5px] flex-1 bg-white'></div>
                <h2 className='px-4 text-2xl font-bold '>Contact</h2>
                <div className='h-[1.5px] flex-1 bg-white'></div>
            </div>
            <div className='flex flex-col items-center leading-relaxed'>
                <h4 className='pb-1 text-secondary'>Write me an email at</h4>
                <h4 className='pb-4 text-xl font-bold tracking-wider'>
                    danjecu@outlook.com
                </h4>
                <h4 className='text-secondary'>or</h4>
                <h4 className='pb-4 text-secondary'>Reach me through</h4>
                <span className='flex gap-7'>
                    <a href='https://github.com/danJecu' target='_blank'>
                        <Image
                            height='50'
                            width='50'
                            src='./icons/misc/Github.svg'
                            alt='github'
                        />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/dan-alexandru-jecu/'
                        target='_blank'
                    >
                        <Image
                            height='50'
                            width='50'
                            src='./icons/misc/Linkedin.svg'
                            alt='github'
                        />
                    </a>
                </span>
            </div>
        </section>
    );
};
