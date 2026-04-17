import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import ScrollProgress from "../../../components/ScrollProgress";
import PageTransitionWrapper from "../../../components/PageTransitionWrapper";
import BackButton from "../../../components/BackButton";
import CustomCursor from "../../../components/CustomCursor";
import ScrollToTop from "../../../components/ScrollToTop";
import Footer from "../../../components/Footer";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageTransitionWrapper>
        <div className="min-h-screen lg:cursor-none">
          {/* Sticky Header Wrapper */}
          <div className="sticky top-0 z-50 bg-[#f5f5f5] px-6 pt-6 pb-4 md:px-12 md:pt-16 md:pb-12">
            <header className="w-full max-w-5xl mx-auto flex flex-row justify-between items-center font-satoshi">
              <div className="flex items-center gap-3">
                <BackButton />
              </div>

              <div className="flex gap-1 items-baseline text-[8px] md:text-xs text-gray-500 tracking-wider">
                <span className="font-mono font-bold text-black">
                  {project.no}
                </span>
              </div>
            </header>
          </div>

          {/* Main Content */}
          <div className="px-6 md:px-12 pb-12 md:pb-40">
            <main className="w-full max-w-5xl mx-auto space-y-12 md:space-y-32 pt-4 md:pt-8">
              <div className="flex flex-col items-center text-center space-y-4 md:space-y-10">
                <h1 className="font-satoshi font-bold text-xl md:text-6xl tracking-tight">
                  {project.name}
                </h1>
                <p className="font-satoshi text-[10px] md:text-base text-black opacity-50 max-w-4xl leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="w-full aspect-[16/9] bg-[#e5e5e5] relative overflow-hidden">
                {/* @ts-ignore */}
                {project.thumbnail && (
                  <Image
                    src={project.thumbnail}
                    alt={project.name}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>

              {/* Project Details */}
              {/* @ts-ignore */}
              {project.details && (
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-32">
                  <div className="space-y-2 md:space-y-4">
                    <h3 className="font-satoshi font-bold text-[10px] md:text-sm uppercase tracking-wider">
                      Timeline
                    </h3>
                    <p className="font-satoshi text-[10px] md:text-sm text-gray-600 leading-relaxed">
                      {project.details.timeline}
                    </p>
                  </div>

                  <div className="space-y-2 md:space-y-4">
                    <h3 className="font-satoshi font-bold text-[10px] md:text-sm uppercase tracking-wider">
                      Responsibility
                    </h3>
                    <ul className="font-satoshi text-[10px] md:text-sm text-gray-600 space-y-1 leading-relaxed">
                      {project.details.responsibility.map(
                        (item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div className="space-y-2 md:space-y-4">
                    <h3 className="font-satoshi font-bold text-[10px] md:text-sm uppercase tracking-wider">
                      Tools
                    </h3>
                    <ul className="font-satoshi text-[10px] md:text-sm text-gray-600 space-y-1 leading-relaxed">
                      {project.details.tools.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 md:space-y-4">
                    <h3 className="font-satoshi font-bold text-[10px] md:text-sm uppercase tracking-wider">
                      Context
                    </h3>
                    <p className="font-satoshi text-[10px] md:text-sm text-gray-600 leading-relaxed">
                      {project.details.context}
                    </p>
                  </div>
                </div>
              )}

              {/* Problem Overview */}
              {/* @ts-ignore */}
              {project.problemOverview && (
                <div className="w-full space-y-6 md:space-y-12">
                  <div className="space-y-4">
                    <h3 className="font-satoshi font-bold text-[10px] md:text-sm uppercase tracking-wider">
                      {/* @ts-ignore */}
                      {project.problemOverviewTitle || "Problem Overview"}
                    </h3>
                    {Array.isArray(project.problemOverview) ? (
                      <div className="space-y-4 md:space-y-6">
                        {project.problemOverview.map((item: any, i: number) => {
                          if (item.type === "image") {
                            return (
                              <div
                                key={i}
                                className="w-full aspect-[16/9] bg-[#f5f5f5] relative overflow-hidden my-4 md:my-6"
                              >
                                <Image
                                  src={item.src}
                                  alt={item.alt || "Context Illustration"}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            );
                          }
                          if (item.type === "text" || item.content) {
                            return (
                              <p
                                key={i}
                                className="font-satoshi text-[10px] md:text-sm text-gray-600 leading-relaxed whitespace-pre-line"
                              >
                                {item.content}
                              </p>
                            );
                          }
                          // Default Q&A format
                          return (
                            <div
                              key={i}
                              className="space-y-2"
                            >
                              <h4 className="font-satoshi font-bold text-[10px] md:text-sm text-gray-900">
                                {item.question}
                              </h4>
                              <p className="font-satoshi text-[10px] md:text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                                {item.answer}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="font-satoshi text-[10px] md:text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                        {project.problemOverview}
                      </p>
                    )}
                  </div>

                  {/* Problem Image */}
                  {/* @ts-ignore */}
                  {project.problemImage && (
                    <div className="w-full aspect-[16/9] bg-[#f5f5f5] relative overflow-hidden">
                      <Image
                        // @ts-ignore
                        src={project.problemImage}
                        alt="Problem Overview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Solution & Wireframe */}
              {/* @ts-ignore */}
              {project.solution && (
                <div className="w-full space-y-6 md:space-y-12">
                  <div className="space-y-4">
                    <h3 className="font-satoshi font-bold text-[10px] md:text-sm uppercase tracking-wider">
                      {/* @ts-ignore */}
                      {project.solutionTitle || "The Solution"}
                    </h3>
                    {Array.isArray(project.solution) ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
                        {project.solution.map((item: any, i: number) => (
                          <div
                            key={i}
                            className="space-y-2"
                          >
                            <h4 className="font-satoshi font-bold text-[10px] md:text-sm text-gray-900">
                              {item.title}
                            </h4>
                            <p className="font-satoshi text-[10px] md:text-sm text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="font-satoshi text-[10px] md:text-sm text-gray-600 leading-relaxed">
                        {project.solution}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* User Flow Section */}
              {/* @ts-ignore */}
              {project.userFlow && (
                <div className="w-full space-y-6 md:space-y-12">
                  <div className="space-y-4">
                    <h3 className="font-satoshi font-bold text-[10px] md:text-sm uppercase tracking-wider">
                      {/* @ts-ignore */}
                      {project.userFlowTitle || "The User Flow"}
                    </h3>
                    <div className="space-y-4 md:space-y-6">
                      {/* @ts-ignore */}
                      {project.userFlow.map((item: any, i: number) => {
                        if (item.type === "image") {
                          return (
                            <div
                              key={i}
                              className="w-full aspect-[16/9] bg-[#f5f5f5] relative overflow-hidden my-4 md:my-6"
                            >
                              <Image
                                src={item.src}
                                alt={item.alt || "User Flow Diagram"}
                                fill
                                className="object-cover"
                              />
                            </div>
                          );
                        }
                        return (
                          <p
                            key={i}
                            className="font-satoshi text-[10px] md:text-sm text-gray-600 leading-relaxed whitespace-pre-line"
                          >
                            {item.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Wireframe Image */}
              {/* @ts-ignore */}
              {project.wireframe && (
                <div className="w-full space-y-6 md:space-y-12">
                  <div className="space-y-4">
                    <h3 className="font-satoshi font-bold text-[10px] md:text-sm uppercase tracking-wider">
                      {/* @ts-ignore */}
                      {project.wireframeTitle || "Wireframe"}
                    </h3>
                    <div className="w-full aspect-[16/9] bg-[#f5f5f5] relative overflow-hidden">
                      <Image
                        // @ts-ignore
                        src={project.wireframe}
                        alt="Wireframe"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* The Design */}
              {/* @ts-ignore */}
              {project.design && (
                <div className="w-full space-y-6 md:space-y-12">
                  <div className="space-y-4">
                    <h3 className="font-satoshi font-bold text-[10px] md:text-sm uppercase tracking-wider">
                      {/* @ts-ignore */}
                      {project.designTitle || "The Design"}
                    </h3>
                  </div>

                  {/* Design Images */}
                  {/* @ts-ignore */}
                  {Array.isArray(project.design) &&
                    project.design.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="space-y-2 md:space-y-4"
                      >
                        <p className="font-satoshi text-[8px] md:text-xs text-gray-400 tracking-wider">
                          {item.title}
                        </p>
                        <div className="w-full aspect-[16/9] bg-[#f5f5f5] relative overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ))}
                </div>
              )}

              {/* Conclusion */}
              {/* @ts-ignore */}
              {project.conclusion && (
                <div className="w-full space-y-6 md:space-y-12">
                  {project.slug === "pipp-sso" ? (
                    <div className="space-y-4 md:space-y-6 flex flex-col items-center text-center max-w-4xl mx-auto">
                      <h3 className="font-satoshi font-bold text-[10px] md:text-sm uppercase tracking-wider">
                        Conclusion
                      </h3>
                      <p className="font-satoshi text-xs md:text-3xl text-gray-900 leading-relaxed">
                        {/* @ts-ignore */}
                        {project.conclusion.split("*").map((part, index) =>
                          index % 2 === 1 ? (
                            <span
                              key={index}
                              className="font-tiempos italic font-light"
                            >
                              {part}
                            </span>
                          ) : (
                            part
                          ),
                        )}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h3 className="font-satoshi font-bold text-[10px] md:text-sm uppercase tracking-wider">
                        Conclusion
                      </h3>
                      <p className="font-satoshi text-[10px] md:text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                        {/* @ts-ignore */}
                        {project.conclusion}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Documentation Image */}
              {/* @ts-ignore */}
              {project.documentationImage && (
                <div className="w-full space-y-4">
                  <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-[#f5f5f5] relative overflow-hidden">
                    <Image
                      // @ts-ignore
                      src={project.documentationImage}
                      alt="Documentation"
                      fill
                      className="object-cover object-[center_90%]"
                    />
                  </div>
                  {/* @ts-ignore */}
                  {project.documentationImageCaption && (
                    <p className="font-satoshi text-[8px] md:text-xs text-gray-400">
                      {project.documentationImageCaption}
                    </p>
                  )}
                </div>
              )}

              {/* The Result / Full Design */}
              {/* @ts-ignore */}
              {(project.resultEmbed || project.fullDesign) && (
                <div className="w-full space-y-6 md:space-y-12">
                  <div className="space-y-4">
                    <h3 className="font-satoshi font-bold text-[10px] md:text-sm uppercase tracking-wider">
                      The Result
                    </h3>
                  </div>

                  {/* @ts-ignore */}
                  {project.resultEmbed ? (
                    <div className="w-full aspect-[16/9] bg-[#f5f5f5] relative overflow-hidden">
                      <iframe
                        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                        width="100%"
                        height="100%"
                        // @ts-ignore
                        src={project.resultEmbed}
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-full bg-[#f5f5f5] relative overflow-hidden">
                      <Image
                        // @ts-ignore
                        src={project.fullDesign}
                        alt="Full Design"
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                </div>
              )}
            </main>
          </div>
        </div>
      </PageTransitionWrapper>
      <ScrollProgress />
      <ScrollToTop />
      <CustomCursor />
    </>
  );
}
