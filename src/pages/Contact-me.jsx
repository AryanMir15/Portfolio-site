import React from "react";
import { Mail, Github, Linkedin, X } from "lucide-react";
import NavbarCom from "./HomePage/Sections/Navbar";
import Footer from "./HomePage/Sections/Footer";

function ContactMe() {
  return (
    <>
      <NavbarCom />
      <main className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0e0e0e] text-black dark:text-white transition-colors duration-500">
        <div className="max-w-3xl mx-auto text-center space-y-10 fade-diagonal">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Me</h1>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out if you have any questions, collaboration
            ideas, or just wanna talk dev.
          </p>

          {/* Email Section */}
          <div className="flex flex-col items-center gap-2">
            <Mail className="text-3xl text-black dark:text-white" />
            <a
              href="mailto:tanzeelmir112@gmail.com"
              className="text-lg font-medium hover:underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              tanzeelmir112@gmail.com
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <a
              href="https://github.com/tanzeelmir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-black dark:hover:text-white transition"
            >
              <Github size={20} />
              <span className="text-sm font-medium">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/tanzeelmir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <Linkedin size={20} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <a
              href="https://x.com/tanzeelmir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-black dark:hover:text-white transition"
            >
              <X size={20} />
              <span className="text-sm font-medium">X (Twitter)</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ContactMe;
