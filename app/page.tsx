"use client";
import Link from "next/link";
import Hero from "../components/Hero";
import projects from "../data/projects.json";
import dynamic from "next/dynamic";

const ProjectCard = dynamic(() => import("../components/ProjectCard.client"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 bg-gray-800 animate-pulse rounded"></div>
  ),
});

export default function Home() {
  return (
    <>
      <Hero />

      <button onClick={() => (window.location.href = "/api/spotify/login")}>
        Connect Spotify
      </button>

      <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center font-pixel text-white">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto p-8">
          <h2 className="text-3xl font-bold mb-6 font-pixel text-white">
            About Me
          </h2>
          <div className="space-y-4">
            <p>
              I&apos;m currently pursuing my Bachelor of Computer Applications
              (BCA) at Acharya Institute of Graduate Studies, Bangalore
              University with an expected graduation in May 2025.
            </p>
            <p>
              My technical skills include JavaScript, Python, C, Java, SQL,
              HTML5, and CSS3. I&apos;m proficient with frameworks like
              React.js, Node.js, Express, Next.js, and libraries such as
              Tailwind CSS and Bootstrap.
            </p>
            <p>
              I&apos;m passionate about clean design and always pushing for
              perfection in my projects. My approach combines technical depth
              with creative UX solutions to build applications that are both
              functional and delightful to use.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center font-pixel text-white">
          Get In Touch
        </h2>
        <div className="p-8 bg-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2 text-pink-500">
                Contact Info
              </h3>
              <p className="text-white">+91-9470687548</p>
              <p className="text-white">harshjhavats@gmail.com</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Vat6h6rsh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
