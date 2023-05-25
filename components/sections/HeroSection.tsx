import Image from 'next/image';
import { Logo } from '../Logo';

export const HeroSection: React.FC = () => {
    return (
        <section className='custom-bg m-auto flex w-[100%] flex-col items-center justify-center '>
            <div className='my-auto flex font-bold text-white '>
                <Logo />
            </div>
            <Image
                alt='down-arrow'
                src='/down-arrow.png'
                width='50'
                height='50'
                className='mx-auto animate-bounce self-end pb-12 opacity-60 invert filter'
            />
        </section>
    );
};
