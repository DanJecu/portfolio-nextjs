import Image from 'next/image';

export const HeroSection: React.FC = () => {
    return (
        <section className='flex flex-col justify-center items-center w-[90%] m-auto'>
            <h1 className='text-white font-bold text-5xl my-auto'>DAN JECU</h1>
            <Image
                alt='down-arrow'
                src='/down-arrow.png'
                width='50'
                height='50'
                className='self-end mx-auto filter invert animate-bounce opacity-60 pb-5'
            />
        </section>
    );
};
