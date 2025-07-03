import React from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll scroll-smooth">
      {/* Slide 1 - Hero */}
      <section
        id="slide1"
        className="relative h-screen snap-start overflow-hidden bg-[#F1F2F4] px-6"
      >
        <img
          src={image1}
          alt="Background Slide 1"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/15"></div>
        <div className="relative z-10 max-w-2xl pt-[40vh] text-center mx-auto">
          <h1 className="text-[4rem] font-extrabold text-[#111111] mb-2">
            Jashanpreet Singh
          </h1>
          <p className="text-[1.125rem] text-[#333333] mb-6">
            A student, developer, and creative builder with a passion for clean,
            meaningful design.
          </p>
          <a
            href="/resume"
            className="text-[#7D3C98] underline hover:no-underline hover:text-[#5E2A6A] transition"
          >
            View&nbsp;Resume →
          </a>
        </div>
      </section>

      {/* Slide 2 - Projects Gallery */}
      <section
        id="slide2"
        className="relative h-screen snap-start overflow-hidden bg-white px-6"
      >
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0 p-8">
          <img
            src={image2}
            alt="Project 1"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
          />
          <img
            src={image3}
            alt="Project 2"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="relative z-10 mt-[60vh] text-center mx-auto max-w-3xl">
          <h2 className="text-[3.5rem] font-bold text-[#111111] mb-4">
            Projects
          </h2>
          <p className="text-lg text-[#555555] mb-6">
            I've built interactive calendars, AI tools, and more. Each project
            refined my skills.
          </p>
          <a
            href="/projects"
            className="inline-block px-6 py-3 border border-[#111111] text-[#111111] rounded-full hover:bg-[#111111] hover:text-white transition"
          >
            Explore Projects →
          </a>
        </div>
      </section>

      {/* Slide 3 - Contact */}
      <section
        id="slide3"
        className="relative h-screen snap-start overflow-hidden bg-[#FAFAFA] px-6"
      >
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0 p-8">
          <img src={image4} alt="Contact Icon 1" className="w-32 h-32 object-contain" />
          <img src={image5} alt="Contact Icon 2" className="w-32 h-32 object-contain" />
        </div>
        <div className="relative z-10 mt-[50vh] text-center mx-auto max-w-md">
          <h2 className="text-[3.5rem] font-bold text-[#111111] mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-[#555555] mb-6">
            Whether you're interested in collaborating or just want to chat,
            feel free to reach out.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-[#7D3C98] text-white rounded-full hover:bg-[#5E2A6A] transition"
          >
            Contact Me →
          </a>
        </div>
      </section>
    </main>
  )
}