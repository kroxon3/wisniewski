import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Process from '@/components/Process';
import Standards from '@/components/Standards';
import Results from '@/components/Results';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Industries />
        <Process />
        <Standards />
        <Results />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}