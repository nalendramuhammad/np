"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLoading } from "../contexts/LoadingContext";
import ScrollProgress from "../components/ScrollProgress";
import CustomCursor from "../components/CustomCursor";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

export default function RootPage() {
  const { isLoading } = useLoading();
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 0,
    });
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isLoading]);

  const handleProjectClick = (slug: string) => {
    setIsExiting(true);
    setTimeout(() => {
      router.push(`/projects/${slug}`);
    }, 1000);
  };

  return (
    <>
      <div
        className={`min-h-screen cursor-none transition-all duration-1000 ease-in-out ${
          isLoading || isExiting
            ? "opacity-0 translate-y-8"
            : "opacity-100 translate-y-0"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-50 bg-[#f5f5f5] px-6 pt-8 pb-6 md:px-12 md:pt-16 md:pb-6">
          <header className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 space-y-1">
              <h1 className="font-satoshi font-bold text-lg leading-tight">
                nalendra
              </h1>
              <p className="text-sm text-gray-800 leading-tight">
                <span className="font-satoshi font-bold">something about</span>{" "}
                <span className="font-tiempos italic">software.</span>
              </p>
            </div>

            <div className="flex gap-1">
              <span
                onClick={() =>
                  window.open("https://instagram.com/nalendrrra", "_blank")
                }
                className="font-satoshi font-bold text-xs hover:text-gray-600 transition-colors cursor-none"
                data-clickable="true"
              >
                instagram,
              </span>
              <span
                onClick={() =>
                  window.open(
                    "https://www.behance.net/nalendramuhammad",
                    "_blank",
                  )
                }
                className="font-satoshi font-bold text-xs hover:text-gray-600 transition-colors cursor-none"
                data-clickable="true"
              >
                behance,
              </span>
              <span
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/muhammadwahyunalendra",
                    "_blank",
                  )
                }
                className="font-tiempos italic text-xs hover:text-gray-600 transition-colors cursor-none"
                data-clickable="true"
              >
                linkedin
              </span>
            </div>
          </header>
        </div>

        {/* Main Content / Projects */}
        <div className="px-6 md:px-12 pb-32 md:pb-40">
          <main className="w-full max-w-5xl mx-auto space-y-12 pt-12 md:pt-24">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.slug)}
                className="block w-full group cursor-none"
                data-clickable="true"
              >
                <article
                  className="relative"
                  data-aos="fade-up"
                >
                  <div className="flex justify-between items-baseline mb-6 font-satoshi px-1">
                    <h2 className="text-base font-medium tracking-wide">
                      {project.name}
                    </h2>
                    <span className="text-xs text-gray-500 font-mono tracking-wider">
                      [{project.year}]
                    </span>
                  </div>
                  <div className="w-full aspect-[16/9] bg-[#e5e5e5] transition-colors duration-300 group-hover:bg-[#d5d5d5] relative overflow-hidden cursor-none">
                    {/* @ts-ignore */}
                    {project.thumbnail && (
                      <Image
                        src={project.thumbnail}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    )}
                  </div>
                </article>
              </div>
            ))}
          </main>
        </div>
      </div>
      <ScrollProgress />
      <ScrollToTop />
      <Footer />
      <CustomCursor />
    </>
  );
}
