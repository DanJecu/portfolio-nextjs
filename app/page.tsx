import Head from "next/head";

// Sections
import { HeroSection } from "@/app/sections/HeroSection";
import { AboutSection } from "@/app/sections/AboutSection";
import { SkillsSection } from "@/app/sections/SkillsSection";
import { ProjectsSection } from "@/app/sections/ProjectsSection";
import { ContactSection } from "@/app/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dan Jecu</title>
        <meta name="" content="" />
      </Head>
      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
