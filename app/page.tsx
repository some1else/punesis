import Header from "@/components/Header"
import Hero from "@/components/Hero"
import CredibilityStrip from "@/components/CredibilityStrip"
import Services from "@/components/Services"
import Benefits from "@/components/Benefits"
import CaseStudies from "@/components/CaseStudies"
import Articles from "@/components/Articles"
import Testimonials from "@/components/Testimonials"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CredibilityStrip />
        <Services />
        <Benefits />
        <CaseStudies />
        <Articles />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
