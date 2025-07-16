import zustand from "../assets/IMG/zustand.png";
import react from "../assets/IMG/react.png";
import router from "../assets/IMG/react-router.svg";
import vite from "../assets/IMG/vite.png";
import cypress from "../assets/IMG/cypress.webp";

import { Link } from "react-router";

function AboutPage() {
  return (
    <main className="min-h-screen text-[#fdfbf6]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-[#13232c] rounded-lg border border-[#1c3139] p-6 h-full">
              <h2 className="text-xl font-bold mb-6 text-center">Tech Stack</h2>

              <div className="flex flex-col gap-4">
                <div className="bg-[#172a32] rounded-lg border border-[#1c3139] p-4 flex flex-col items-center hover:border-[#2a454b] transition-all">
                  <div className="w-12 h-12 bg-[#21373f] rounded-full mb-3 flex items-center justify-center">
                    <img src={zustand} alt="zustand.js" className="w-8 h-8" />
                  </div>
                  <span className="text-center text-sm font-medium">
                    Zustand
                  </span>
                </div>
                <div className="bg-[#172a32] rounded-lg border border-[#1c3139] p-4 flex flex-col items-center hover:border-[#2a454b] transition-all">
                  <div className="w-12 h-12 bg-[#21373f] rounded-full mb-3 flex items-center justify-center">
                    <img
                      src={react}
                      alt="react"
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                  <span className="text-center text-sm font-medium">React</span>
                </div>
                <div className="bg-[#172a32] rounded-lg border border-[#1c3139] p-4 flex flex-col items-center hover:border-[#2a454b] transition-all">
                  <div className="w-12 h-12 bg-[#21373f] rounded-full mb-3 flex items-center justify-center">
                    <img src={router} alt="router" className="w-8 h-8" />
                  </div>
                  <span className="text-center text-sm font-medium">
                    React Router DOM
                  </span>
                </div>
                <div className="bg-[#172a32] rounded-lg border border-[#1c3139] p-4 flex flex-col items-center hover:border-[#2a454b] transition-all">
                  <div className="w-12 h-12 bg-[#21373f] rounded-full mb-3 flex items-center justify-center">
                    <img src={vite} alt="vite" className="w-8 h-8" />
                  </div>
                  <span className="text-center text-sm font-medium">VITE</span>
                </div>
                <div className="bg-[#172a32] rounded-lg border border-[#1c3139] p-4 flex flex-col items-center hover:border-[#2a454b] transition-all">
                  <div className="w-12 h-12 bg-[#21373f] rounded-full mb-3 flex items-center justify-center">
                    <img src={cypress} alt="cypress" className="w-8 h-8" />
                  </div>
                  <span className="text-center text-sm font-medium">
                    Cypress Testing
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              <div className="bg-[#13232c] rounded-lg border border-[#1c3139] p-8 h-full flex flex-col">
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-[#2a454b] to-[#253e45] flex items-center justify-center text-4xl font-bold text-[#fdfbf6]">
                    JC
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-center mb-4">
                  CS Student @ UNLV
                </h2>
                <p className="text-[#fdfbf6]/80 mb-6 text-center">
                  I'm a Computer Science student at the University of Nevada,
                  Las Vegas, passionate about web dev!
                </p>
                <div className="flex justify-center mb-6 pt-10">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <Link
                      to="/"
                      className="flex items-center justify-center gap-2 bg-[#172a32]  px-6 py-4 rounded-xl  font-semibold text-lg text-[#fdfbf6] ">
                      Go To Quiz
                    </Link>
                  </button>
                </div>
                <div className="mt-auto">
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    Connect With Me
                  </h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      to="https://github.com/cruz-jay"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#172a32] hover:bg-[#1c3139] px-4 py-3 rounded-lg transition-all border border-[#1c3139] hover:border-[#2a454b]">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </Link>

                    <Link
                      to="https://www.linkedin.com/in/jay-cruz-unlv/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#172a32] hover:bg-[#1c3139] px-4 py-3 rounded-lg transition-all border border-[#1c3139] hover:border-[#2a454b]">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-[#13232c] rounded-lg border border-[#1c3139] p-8 h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    About This Project
                  </h3>
                  <div className="text-[#fdfbf6]/80 min-h-[200px] flex flex-col items-center justify-center border-2 border-dashed border-[#1c3139] rounded-lg px-6 py-8 space-y-4">
                    <h3 className="text-lg font-bold text-center">Version 2</h3>
                    <p className="text-center text-[#fdfbf6]/60 italic">
                      This is a revamp of a project I originally built and
                      deployed during my first year of college. Back then, it
                      was mostly written in C—my favorite and most challenging
                      language at the time. After taking CS218, I updated the
                      project and made some changes to the UI. I originally had
                      a leaderboard and challenged classmates to try it out, but
                      I later simplified the design and shifted focus toward
                      testing. This version now includes Cypress tests! You can
                      check out the project and others like it on my GitHub.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
