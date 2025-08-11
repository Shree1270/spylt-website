import NavBar from "@/components/NavBar"
import HeroSection from "@/sections/HeroSection"
import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import MessageSection from "@/sections/MessageSection"
import FlavourSection from "@/sections/FlavourSection"
import { useGSAP } from "@gsap/react"
import NeutrationSection from "@/sections/NeutrationSection"
import BenifitSection from "@/sections/BenifitSection"
import TestimonialSection from "@/sections/TestimonialSection"
import FooterSection from "@/sections/FooterSection"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
function App() {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true
    })
  })

  return (
    <>
      <main>
        <NavBar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <HeroSection />
            <MessageSection />
            <FlavourSection />
            <NeutrationSection/>

            {/* <div> */}
            <BenifitSection/>
            <TestimonialSection/>
            {/* </div> */}

            <FooterSection/>
          </div>
        </div>

      </main>
    </>
  )
}

export default App
