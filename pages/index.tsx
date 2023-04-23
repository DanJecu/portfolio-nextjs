import Head from 'next/head';

// Sections
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';

export default function Home() {
    return (
        <>
            <Head>
                <title>Dan Jecu</title>
            </Head>
            <main>
                <HeroSection />
                <AboutSection />
            </main>
        </>
    );
}
