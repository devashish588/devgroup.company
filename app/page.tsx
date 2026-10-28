import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import CaseStudies from '@/components/CaseStudies';
import Engagement from '@/components/Engagement';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.main
      className="flex flex-col gap-20"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      <section id="hero" className="pt-24">
        <Hero />
      </section>
      <section id="work" className="px-4 md:px-8">
        <CaseStudies />
      </section>
      <section id="expertise" className="px-4 md:px-8">
        <Expertise />
      </section>
      <section id="engagement" className="px-4 md:px-8">
        <Engagement />
      </section>
      <section id="tech-stack" className="px-4 md:px-8">
        <TechStack />
      </section>
      <section id="contact" className="px-4 md:px-8">
        <Contact />
      </section>
      <Footer />
    </motion.main>
  );
}
