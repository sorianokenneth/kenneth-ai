"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, TrendingUp, Zap, Target, ExternalLink, MessageSquare, Database, Search, Shield, ListOrdered, FileText } from "lucide-react";

type Project = {
  name: string;
  category: string;
  description: string;
  metrics: { value: string; label: string; icon: React.ComponentType<{ className?: string }> }[];
  tech: string[];
  url: string;
  video?: string;
  images?: string[];
  impact?: string;
};

const ImageModal = ({
  images,
  projectName,
  startIndex,
  onClose,
}: {
  images: string[];
  projectName: string;
  startIndex: number;
  onClose: () => void;
}) => {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrent((p) => (p - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "unset";
    };
  }, []);

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10">
        <span className="text-white/60 text-sm font-medium">{projectName} &mdash; {current + 1} / {images.length}</span>
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Image */}
      <motion.div
        className="relative w-full flex items-center justify-center px-16 max-md:px-10"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current]}
          alt={`${projectName} screenshot ${current + 1}`}
          className="max-h-[80vh] max-w-full rounded-xl shadow-2xl object-contain"
        />

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrent((p) => (p - 1 + images.length) % images.length)}
              className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors text-2xl"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrent((p) => (p + 1) % images.length)}
              className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors text-2xl"
              aria-label="Next"
            >
              ›
            </button>
          </>
        )}
      </motion.div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 flex gap-2" onClick={(e) => e.stopPropagation()}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/30"}`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </motion.div>,
    document.body
  );
};

const ImageSlideshow = ({ images, projectName }: { images: string[]; projectName: string }) => {
  const [current, setCurrent] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % images.length), 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <div className="relative flex-shrink-0 w-60 sm:w-72 md:w-80 aspect-video rounded-xl overflow-hidden border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-[#111827]/50 cursor-zoom-in" onClick={() => setLightboxIndex(current)}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${projectName} screenshot ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1" onClick={(e) => e.stopPropagation()}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {lightboxIndex !== null && (
          <ImageModal
            images={images}
            projectName={projectName}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const projects: Project[] = [
  {
    name: "Jellyfish",
    category: "Engineering Intelligence · AI Analytics Platform",
    description: "Full-stack engineering analytics platform ingesting data from GitHub, Jira, and CI/CD systems to compute delivery metrics, detect workflow bottlenecks, and provide actionable insights via role-based dashboards. Powered by LLM analytics and AI copilots for natural-language querying of engineering performance.",
    metrics: [
      { value: "50M+", label: "Events/day processed", icon: Zap },
      { value: "65%", label: "Query latency reduction", icon: TrendingUp },
      { value: "2,000+", label: "API requests/min", icon: Target },
      { value: "70%", label: "Manual reporting saved", icon: Shield },
    ],
    tech: ["Django", "DRF", "Python", "PostgreSQL", "React", "TypeScript", "LangChain", "FastAPI", "Pinecone", "FAISS", "Redis", "AWS", "Docker"],
    url: "https://jellyfish.co/",
    images: [
      "/jellyfish/1.png",
      "/jellyfish/2.png",
      "/jellyfish/3.png",
      "/jellyfish/4.png",
      "/jellyfish/5.png",
    ],
    impact: "Engineering analytics platform serving 150+ teams with AI-powered insights",
  },
  // {
  //   name: "Sentinel",
  //   category: "Pipeline Intelligence",
  //   description: `Detects deals that are starting to stall before it's visible in a CRM. It models time decay, stage velocity, and engagement signals from live pipeline data. Fast, explainable, and designed for real integration load.`,
  //   before: "Deals die silently. CRM shows green until the opp is gone. You find out when it's too late.",
  //   after: "Explainable risk scoring. Most AI is a black box. This shows why. See which deals are rotting before they slip. Sub-250ms.",
  //   metrics: [
  //     { value: "<250ms", label: "Query latency", icon: Zap },
  //     { value: "Live sync", label: "CRM & calendar sync", icon: TrendingUp },
  //     { value: "Predictive", label: "Explainable risk scoring", icon: Target },
  //     { value: "99.9%", label: "Continuous uptime", icon: Shield },
  //   ],
  //   tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "OpenRouter", "Webhooks"],
  //   url: "https://www.sentinels.in/",
  //   video: "https://lcbcrithcxdbqynfmtxk.supabase.co/storage/v1/object/public/Videos/Sentinel-tutorial.mp4",
  //   impact: "Know which deals are already slipping away",
  // },
  {
    name: "VectorMail",
    category: "Semantic Search · Email",
    description: "Email client with vector search and LLM composition. Connects Gmail via Aurinko, syncs threads, searches by meaning (pgvector), and composes replies with context. Single database for inbox and embeddings - no separate vector store.",
    // before: "Gmail: keywords only. 'Find that email about the pricing conversation.' Good luck.",
    // after: "One DB for inbox and vectors. Semantic search across 10k+ threads. 'Emails about pricing.' Instant. Inbox and AI in one place.",
    metrics: [
      { value: "Sub-second", label: "10k+ emails", icon: Zap },
      { value: "One DB", label: "inbox + vectors", icon: Database },
      { value: "By meaning", label: "not keywords", icon: Search },
      { value: "AI compose", label: "thread context", icon: MessageSquare },
    ],
    tech: ["Next.js 15", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "pgvector", "Clerk", "Aurinko", "OpenRouter", "Gemini"],
    url: "https://vectormail.space/",
    video: "https://lcbcrithcxdbqynfmtxk.supabase.co/storage/v1/object/public/Videos/Vector-Mail-Demo.mp4",
    impact: "Search by meaning, compose with AI",
  },
  {
    name: "Visura",
    category: "RAG Pipeline · PDF Infrastructure",
    description: "PDF processing infrastructure with cost guardrails. Hash-based chunk reuse cuts reprocessing costs 50-80%. Self-healing pipelines, full observability, sub-2.5s P50.",
    // before: "Upload a PDF, wait, pay full price every time. Update it? Pay again. No visibility into costs, no recovery if something fails mid-process.",
    // after: "50-80% cost savings on re-processed docs. Automatic crash recovery. P50 under 2.5s. Full observability: Sentry, OpenTelemetry, business metrics. Vector search with 85%+ cache hit rate.",
    metrics: [
      { value: "50-80%", label: "AI cost savings", icon: TrendingUp },
      { value: "<2.5s", label: "P50 processing", icon: Zap },
      { value: "85%+", label: "Embedding cache hit", icon: Target },
      { value: "Self-heal", label: "Auto recovery", icon: Shield },
    ],
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "pgvector", "OpenRouter", "Gemini", "Redis", "Sentry", "Clerk"],
    url: "https://visura.parbhat.dev/",
    video: "https://lcbcrithcxdbqynfmtxk.supabase.co/storage/v1/object/public/Videos/Visura-AI-Demo.mp4",
    impact: "50-80% AI cost reduction with hash-based chunk reuse",
  },
];

const otherProjects = [
  { name: "Gibson Dunn", image: "/full-stack/gibsondunn.png", url: "https://www.gibsondunn.com/" },
  { name: "Liquid Web", image: "/full-stack/liquidweb.png", url: "https://www.liquidweb.com/" },
  { name: "NexGen VetRx", image: "/full-stack/nexgenvetrx.png", url: "https://www.nexgenvetrx.com/" },
  { name: "Original Foods", image: "/full-stack/originalfoods.png", url: "https://www.originalfoods.co.nz/" },
  { name: "Outliant", image: "/full-stack/outliant.png", url: "https://www.outliant.com/" },
  { name: "Pallet Rack Now", image: "/full-stack/palletracknow.png", url: "https://www.palletracknow.com/" },
  { name: "StorageRack.com", image: "/full-stack/storageRack.png", url: "https://www.storagerack.com/" },
  // { name: "YLAW", image: "/full-stack/ylaw.png", url: "https://ylaw.ca/" },
  { name: "69 Dollar Glasses", image: "/full-stack/69dollarglasses.png", url: "https://www.69dollarglasses.com/" },
];

const VideoModal = ({
  isOpen,
  onClose,
  videoSrc,
  projectName,
}: {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  projectName: string;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 max-md:p-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-4xl w-full bg-white dark:bg-[#111827] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-slate-200/50 dark:ring-white/10"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800 text-white hover:bg-slate-700 dark:bg-white/10 dark:hover:bg-white/20 flex items-center justify-center transition-colors hover:scale-105 active:scale-95 max-md:top-3 max-md:right-3 max-md:w-11 max-md:h-11 max-md:min-h-[44px] max-md:min-w-[44px]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative pt-[56.25%] bg-black">
            <video src={videoSrc} controls autoPlay className="absolute inset-0 w-full h-full">
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="p-4 border-t border-slate-200 dark:border-white/10">
            <p className="text-sm font-medium text-slate-700 dark:text-gray-300 text-center">{projectName} Demo</p>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Projects = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [currentProjectName, setCurrentProjectName] = useState("");

  const handleVideoOpen = (videoSrc: string, projectName: string) => {
    setCurrentVideo(videoSrc);
    setCurrentProjectName(projectName);
    setVideoOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleVideoClose = () => {
    setVideoOpen(false);
    setCurrentVideo("");
    setCurrentProjectName("");
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    if (!videoOpen) return;
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && handleVideoClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [videoOpen]);

  return (
    <>
      <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 bg-transparent relative overflow-hidden max-md:py-12 max-md:px-4">
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.02] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="space-y-8 dark:space-y-px">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white dark:bg-[#111827] rounded-2xl dark:rounded-none border border-slate-200/80 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-slate-300/80 dark:hover:bg-white/[0.02] dark:border-t dark:first:border-t-0 transition-all duration-300 overflow-hidden hover:-translate-y-0.5 max-md:rounded-xl"
              >
                <div className="p-6 sm:p-8 md:p-10 dark:p-6 sm:dark:p-8 md:dark:p-12 lg:dark:p-16 max-md:p-4 max-md:dark:p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-md:gap-4">
                    <div className="flex-1 min-w-0 space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold text-teal-600 dark:text-gray-500 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white max-md:text-xl">
                        {project.name}
                      </h3>
                      <p className="text-justify text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl max-md:text-sm">
                        {project.description}
                      </p>

                      <div className="flex flex-nowrap gap-2 pt-3 max-md:overflow-x-auto max-md:pb-2 max-md:-mx-1 max-md:px-1">
                        {project.metrics.map((m, i) => {
                          const Icon = m.icon;
                          return (
                            <div
                              key={i}
                              className="flex items-center gap-2 shrink-0 whitespace-nowrap rounded-lg bg-slate-100/80 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 px-3 py-2 transition-colors hover:bg-slate-200/60 dark:hover:bg-white/[0.08] hover:border-slate-300/60 dark:hover:border-white/15 max-md:px-2.5 max-md:py-1.5"
                            >
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-teal-500/10 dark:bg-teal-400/10">
                                <Icon className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">{m.value}</div>
                                <div className="text-[11px] text-slate-500 dark:text-gray-400 leading-tight mt-0.5">{m.label}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 border border-slate-200/80 dark:bg-transparent dark:text-gray-400 dark:border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 pt-2 max-md:flex-wrap max-md:gap-3 max-md:pt-3">
                        {project.video && (
                          <button
                            onClick={() => handleVideoOpen(project.video!, project.name)}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-gray-500 dark:hover:text-white transition-colors"
                            aria-label={`Watch ${project.name} demo`}
                          >
                            <Play className="w-4 h-4" /> Demo
                          </button>
                        )}
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-teal-600 dark:text-gray-500 dark:hover:text-white transition-colors"
                          aria-label={`Open ${project.name}`}
                        >
                          <ExternalLink className="w-4 h-4" /> Visit
                        </a>
                      </div>
                    </div>
                    {project.images ? (
                      <ImageSlideshow images={project.images} projectName={project.name} />
                    ) : project.video && (
                      <button
                        type="button"
                        onClick={() => handleVideoOpen(project.video!, project.name)}
                        className="flex-shrink-0 w-60 sm:w-72 md:w-80 aspect-video rounded-xl overflow-hidden border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-[#111827]/50 ring-1 ring-slate-200/50 dark:ring-white/5 cursor-pointer hover:ring-2 hover:ring-teal-500/50 dark:hover:ring-teal-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black transition-shadow max-md:w-full max-md:min-h-[140px]"
                        aria-label={`Play ${project.name} demo video`}
                      >
                        <video
                          src={project.video}
                          className="w-full h-full object-cover pointer-events-none"
                          muted
                          loop
                          autoPlay
                          playsInline
                          aria-hidden
                        />
                      </button>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Other projects */}
          <div className="mt-16 max-md:mt-10">
            <span className="text-sm font-semibold text-teal-600 dark:text-gray-500 uppercase tracking-wider">
              Other Work
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-4 max-md:gap-2">
              {otherProjects.map((p, i) => (
                <motion.a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group relative aspect-video rounded-xl overflow-hidden border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-[#111827]/50 hover:border-teal-500/50 dark:hover:border-teal-400/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                    <div className="w-full px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-xs font-semibold truncate">{p.name}</p>
                      <span className="text-white/70 text-[10px] flex items-center gap-1 mt-0.5">
                        <ExternalLink className="w-3 h-3" /> Visit site
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={videoOpen}
        onClose={handleVideoClose}
        videoSrc={currentVideo}
        projectName={currentProjectName}
      />
    </>
  );
};

export default Projects;
