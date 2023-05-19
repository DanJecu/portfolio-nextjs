import Image from 'next/image';
import { Footer } from '../Footer';

export const ContactSection: React.FC = () => {
    return (
        <section className='flex flex-col  text-white '>
            <div className='flex w-[100%] items-center justify-center p-7 pb-12  lg:col-start-1 lg:col-end-3 lg:mt-auto lg:w-[50%]  lg:pt-24'>
                <div className='h-[1.5px] flex-1 bg-white'></div>
                <h2 className='px-4 text-2xl font-bold '>Contact</h2>
                <div className='h-[1.5px] flex-1 bg-white'></div>
            </div>
            <div className='my-auto flex flex-col items-center leading-relaxed'>
                <h4 className='pb-1 text-secondary'>WRITE ME AN EMAIL</h4>
                <h4 className='pb-6 text-xl font-bold tracking-wider'>
                    danjecu@outlook.com
                </h4>
                <h4 className='pb-6 text-secondary'>OR</h4>
                <h4 className='pb-4 text-secondary'>REACH ME THROUGH</h4>
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
                            src='./icons/misc/LinkedIn.svg'
                            alt='github'
                        />
                    </a>
                </span>
            </div>
            <Footer />
        </section>
    );
};
