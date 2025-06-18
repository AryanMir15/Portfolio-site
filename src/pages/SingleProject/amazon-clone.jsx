import React from "react";
import Navbar from "../HomePage/Sections/Navbar";
import Footer from "../HomePage/Sections/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import amazonCloneData from "@/data/Single Projects/amazon-clone";
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

function AmazonClone() {
  const { title, image, githubLink, liveLink } = amazonCloneData;

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-gray-950 text-white px-4 py-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-semibold text-white text-center drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)]">
            {title}
          </h1>

          {/* Image */}
          <img
            src={image || "/default.png"}
            alt={title}
            className="w-full max-w-[700px] rounded-lg object-cover shadow-[0_0px_10px_rgba(59,130,246,0.15)] hover:shadow-[0_15px_45px_rgba(59,130,246,0.7)] transition-shadow duration-700"
          />

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 text-white border border-gray-600 rounded hover:bg-gray-800 transition hover:shadow-[0_5px_25px_rgba(0,0,0,0.4)]"
            >
              <ArrowLeft size={18} /> Back Home
            </Link>

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-white border border-green-600 rounded hover:bg-green-700 transition hover:shadow-[0_5px_25px_rgba(0,255,0,0.3)]"
              >
                Live Site <ExternalLink size={18} />
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-white border border-gray-600 rounded hover:bg-gray-800 transition hover:shadow-[0_5px_25px_rgba(255,255,255,0.2)]"
              >
                GitHub <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="bg-gray-950 text-white px-4 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-10">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* HTML Card */}
            <div className="bg-gray-900 rounded-2xl p-6 w-36 h-36 flex flex-col items-center justify-center shadow-[0_0_8px_rgba(255,102,0,0.12)] hover:shadow-[0_8px_30px_rgba(255,102,0,0.7)] transition duration-300">
              <SiHtml5 className="text-orange-500 text-4xl mb-2" />
              <p className="text-gray-200 font-medium">HTML5</p>
            </div>

            {/* CSS Card */}
            <div className="bg-gray-900 rounded-2xl p-6 w-36 h-36 flex flex-col items-center justify-center shadow-[0_0_8px_rgba(0,153,255,0.12)] hover:shadow-[0_8px_30px_rgba(0,153,255,0.7)] transition duration-300">
              <SiCss3 className="text-blue-500 text-4xl mb-2" />
              <p className="text-gray-200 font-medium">CSS3</p>
            </div>

            {/* JavaScript Card */}
            <div className="bg-gray-900 rounded-2xl p-6 w-36 h-36 flex flex-col items-center justify-center shadow-[0_0_8px_rgba(255,221,0,0.12)] hover:shadow-[0_8px_30px_rgba(255,221,0,0.65)] transition duration-300">
              <SiJavascript className="text-yellow-300 text-4xl mb-2" />
              <p className="text-gray-200 font-medium">JavaScript</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED DESCRIPTION SECTION */}
      <section className="bg-slate-950 text-white px-16 py-14">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-3">
            📋 Detailed Overview
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                1. Pages Included:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>🛒 Products Page (grid layout, responsive)</li>
                <li>🔍 Search bar with live filtering</li>
                <li>🧾 Cart page with order & payment summary</li>
                <li>🚚 Order tracking with progress bar simulation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                2. Functionality:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Real-time cart updates</li>
                <li>Order simulation using animated UI</li>
                <li>Dynamic DOM updates with vanilla JavaScript</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                3. Tech Highlights:
              </h3>
              <p>
                🔥 All state management and persistence handled with{" "}
                <strong>localStorage</strong>. Fully functional without a
                backend.
              </p>
            </div>
          </div>
          <p className="text-gray-100 leading-loose text-lg">
            This project wasn’t just about putting buttons and products on a
            screen. It was my first deep dive into building a{" "}
            <strong>fully functional frontend clone</strong> with
            <strong> real-world UI logic</strong>. Figuring out how to simulate
            things like cart state, order progress bars, and search filtering
            without a backend — that was wild.
            <br />
            <br />
            I hit a wall with JavaScript’s DOM manipulation more than once,
            especially when syncing cart state with UI updates. Debugging that
            without any framework support (like React) taught me how to read the
            DOM like a damn map. I also learned how crucial modular code
            structure is, because one messy file can turn into spaghetti code
            real fast.
            <br />
            <br />
            Most importantly? I learned the value of{" "}
            <strong>user flow thinking</strong>. Like… not just coding things to
            “work,” but asking: <em>"Does this make sense to the user?"</em>{" "}
            That mindset shift hit hard, and now I build everything with that
            lens.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AmazonClone;
