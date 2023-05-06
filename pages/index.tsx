import Head from 'next/head';

// Sections
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';

export default function Home() {
    return (
        <>
            <Head>
                <title>Dan Jecu</title>
            </Head>
            <main className='overflow-hidden'>
                <nav className='fixed top-0 flex h-5 w-full items-center justify-center bg-[#D08FC7] text-xs text-black opacity-70 lg:h-7 lg:text-lg'>
                    <h6 className='my-auto'>
                        ⚠️ This website is currently under construction
                    </h6>
                </nav>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
            </main>
        </>
    );
}
