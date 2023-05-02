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
            <main className=' overflow-hidden'>
                <nav className='fixed top-0 h-7 w-full bg-indigo-500 text-center text-lg text-white opacity-50'>
                    ⚠️ This website is currently under construction
                </nav>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
            </main>
        </>
    );
}
