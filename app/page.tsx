import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import GlobalNetwork from "@/components/GlobalNetwork";
import FeaturedIn from "@/components/FeaturedIn";
import Testimonials from "@/components/Testimonials";
import SubscribeCta from "@/components/SubscribeCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[9rem] md:pt-[10rem] lg:pt-[11.62rem]" id="top">
        <Hero />
        <Stats />
        <Features />
        <Pricing />
        <GlobalNetwork />
        <FeaturedIn />
        <Testimonials />
        <SubscribeCta />
      </main>
      <Footer />
    </>
  );
}
