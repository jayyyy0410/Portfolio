import { ExternalLink, Mail, Terminal, Cpu, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-24">
      
      {/* HEADER / NAVIGATION */}
      <header className="flex justify-between items-center bg-white border-[3px] border-pencil p-4 shadow-hard -rotate-1 wobbly-card">
        <div className="flex items-center gap-2">
          <span className="bg-accent text-white px-3 py-1 font-heading text-xl border-[2px] border-pencil rotate-2">
            JS
          </span>
          <span className="font-heading text-2xl tracking-wide">Jay Sharma</span>
        </div>
        <nav className="hidden md:flex gap-6 font-body text-xl">
          <a href="#about" className="hover:text-accent hover:underline decoration-wavy">About</a>
          <a href="#projects" className="hover:text-accent hover:underline decoration-wavy">Projects</a>
          <a href="#contact" className="hover:text-accent hover:underline decoration-wavy">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-12 items-center pt-8">
        <div className="flex flex-col gap-6">
          <div className="inline-block bg-postit border-[2px] border-pencil px-4 py-2 font-heading text-lg rotate-[-2deg] shadow-subtle w-fit">
            👋 Hello World, I'm
          </div>
          <h1 className="font-heading text-5xl md:text-7xl leading-tight">
            Jay Sharma <span className="text-accent inline-block animate-bounce">!</span>
          </h1>
          <p className="text-xl md:text-2xl text-pencil/90 leading-relaxed">
            Pursuing <strong className="font-heading text-bluepen">B.Tech Electronics and Computer Engineering</strong> at <span className="underline decoration-dashed decoration-accent">VIT Chennai</span>. Bridging the gap between hardware and software.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* GitHub Button */}
            <a 
              href="https://github.com/jayyyy0410" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border-[3px] border-pencil px-6 py-3 font-heading text-xl shadow-hard hover:bg-accent hover:text-white transition-all transform hover:rotate-1 active:translate-x-1 active:translate-y-1 active:shadow-none wobbly-border"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg> 
              GitHub
            </a>

            {/* LinkedIn Button */}
            <a 
              href="https://www.linkedin.com/in/jaysharma93/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-erased border-[3px] border-pencil px-6 py-3 font-heading text-xl shadow-hard hover:bg-bluepen hover:text-white transition-all transform hover:-rotate-1 active:translate-x-1 active:translate-y-1 active:shadow-none wobbly-border"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg> 
              LinkedIn
            </a>
          </div>
        </div>

        {/* Hero Sketch Avatar Box */}
        <div className="relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-300/60 rotate-2 z-20 pointer-events-none" style={{ clipPath: "polygon(0 0, 100% 5%, 95% 100%, 5% 95%)" }}></div>
          <div className="bg-white border-[4px] border-pencil p-8 shadow-hardLg rotate-2 wobbly-card flex flex-col items-center text-center gap-4">
            <div className="w-32 h-32 bg-postit border-[3px] border-pencil rounded-full flex items-center justify-center shadow-subtle">
              <Cpu className="w-16 h-16 text-pencil stroke-[2.5]" />
            </div>
            <h3 className="font-heading text-3xl">Embedded & Code</h3>
            <p className="text-lg text-pencil/80">
              Passionate about building robust firmware, intelligent systems, and clean web applications.
            </p>
            <div className="flex gap-2 text-sm font-heading bg-erased px-3 py-1 border-[2px] border-pencil">
              <Terminal className="w-4 h-4 my-auto" /> VIT Chennai • 2026
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / SKILLS SECTION */}
      <section id="about" className="bg-white border-[3px] border-pencil p-8 md:p-12 shadow-hard -rotate-1 wobbly-card relative">
        <div className="absolute -top-3 left-8 bg-accent text-white px-4 py-1 font-heading text-lg border-[2px] border-pencil rotate-1">
          📌 About Me
        </div>
        <h2 className="font-heading text-4xl mb-6 mt-2">Engineering with a Creative Touch</h2>
        <p className="text-xl leading-relaxed mb-6">
          As an Electronics and Computer Engineering student at VIT Chennai, I enjoy working at the intersection of hardware logic and software engineering. Whether it's microcontroller programming, circuit analysis, or crafting full-stack interfaces, I love solving complex engineering challenges.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          {["Embedded Systems", "Python & C++", "React / Next.js", "Linux & Git"].map((skill, i) => (
            <div key={i} className="bg-postit border-[2px] border-pencil p-3 text-center font-heading text-lg shadow-subtle rotate-1">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-4xl md:text-5xl border-b-[4px] border-pencil pb-2 inline-block">
            Featured Projects
          </h2>
          <span className="font-heading text-lg bg-accent text-white px-3 py-1 border-[2px] border-pencil rotate-2">
            3 Slots Open
          </span>
        </div>

        {/* Project Cards Grid (3 spaces reserved as requested) */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <div 
              key={num} 
              className="bg-white border-[3px] border-pencil p-6 shadow-hard hover:shadow-hardLg transition-all transform hover:-rotate-1 flex flex-col justify-between gap-6 wobbly-card relative"
            >
              {/* Tape decorative element */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-yellow-200/80 border border-pencil/30 rotate-1"></div>
              
              <div className="flex flex-col gap-3 pt-2">
                <div className="w-12 h-12 bg-erased border-[2px] border-pencil flex items-center justify-center font-heading text-2xl">
                  #{num}
                </div>
                <h3 className="font-heading text-2xl">Project Slot {num}</h3>
                <p className="text-pencil/70 text-lg">
                  Reserved for an upcoming high-impact hardware or software engineering project. Stay tuned!
                </p>
              </div>

              <div className="border-t-2 border-dashed border-pencil pt-4 flex justify-between items-center">
                <span className="font-heading text-sm text-bluepen">Coming Soon</span>
                <div className="w-8 h-8 rounded-full border-[2px] border-pencil flex items-center justify-center bg-postit">
                  <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-postit border-[3px] border-pencil p-8 md:p-12 shadow-hard rotate-1 wobbly-card flex flex-col items-center text-center gap-6">
        <h2 className="font-heading text-4xl md:text-5xl">Let's Build Something Together!</h2>
        <p className="text-xl max-w-xl text-pencil/90">
          Have an exciting project idea, internship opportunity, or just want to chat about tech? Drop me a message!
        </p>
        <a 
          href="mailto:jaysharma93@example.com"
          className="flex items-center gap-3 bg-white border-[3px] border-pencil px-8 py-4 font-heading text-2xl shadow-hard hover:bg-accent hover:text-white transition-all transform hover:-rotate-1 active:translate-x-1 active:translate-y-1 active:shadow-none wobbly-border"
        >
          <Mail className="w-7 h-7 stroke-[2.5]" /> Get In Touch <ArrowRight className="w-6 h-6 stroke-[2.5]" />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center font-heading text-lg text-pencil/70 pb-8 pt-4 border-t-2 border-dashed border-pencil">
        Designed with ☕ and handwritten chaos • Jay Sharma © 2026
      </footer>

    </div>
  );
}