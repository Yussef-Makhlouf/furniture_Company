// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import ServiceCards from './components/ServiceCards'
// import About from './components/About'
// import Article from './components/Article'
// import Gallery from './components/Gallery'
// import FAQ from './components/FAQ'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import DetailedServices from './components/DetailedServices'
import About from "@/components/About";
import Article from "@/components/Article";
import DetailedServices from "@/components/DetailedServices";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Contact } from "lucide-react";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <DetailedServices />
      <About />
      <Article />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

