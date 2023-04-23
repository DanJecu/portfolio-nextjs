import Head from 'next/head';

// Sections
import { HeroSection } from '@/components/sections/HeroSection';

export default function Home() {
    return (
        <>
            <Head>
                <title>Dan Jecu</title>
            </Head>
            <main>
                <HeroSection />
            </main>
        </>
    );
}
