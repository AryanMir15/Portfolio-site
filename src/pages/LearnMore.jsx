import React from "react";
import Contact from "./HomePage/Sections/Contact";
import Footer from "./HomePage/Sections/Footer";
import NavbarCom from "./HomePage/Sections/Navbar";

function LearnMore() {
  return (
    <>
      <NavbarCom />

      {/* 🧠 About Me Section */}
      <section className="px-6 sm:px-10 lg:px-32 py-24 text-foreground bg-background overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 fade-diagonal">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Turning ideas into digital reality, one commit at a time.
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            I'm a fullstack developer focused on building clean, functional web
            applications with solid architecture and polished interfaces. From
            pixel-perfect UIs to backend logic that actually scales, I handle
            the full pipeline.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            I don’t rush projects or copy-paste my way through tutorials. Every
            feature I ship is something I’ve thought through, tested, and
            refined. When I work, I care about detail, structure, and how it all
            feels to use.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            Whether it's a portfolio site, a custom dashboard, or a SaaS tool, I
            aim to make it not just work, but work well. And if something
            doesn't feel right, I don’t settle — I iterate until it does.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
            I’m not here to overcomplicate things or chase trends. I like
            shipping clean code, solving real problems, and building products
            that feel like they were made with intention.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold pt-6">
            Let's build something solid.
          </h2>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}

export default LearnMore;
