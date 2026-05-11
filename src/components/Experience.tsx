"use client";

import { motion } from "motion/react";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    period: "May 2022 - Present",
    title: "Senior Full-Stack/AI Engineer",
    company: "Jellyfish",
    project: "Engineering Intelligence Platform",
    description: [
      "Designed and developed a full-stack engineering analytics platform ingesting data from GitHub, Jira, and CI/CD systems to compute delivery metrics, detect workflow bottlenecks, and provide actionable insights via role-based dashboards."
    ],
    tech: [],
    role : [
      {"Backend & AI Engineering": [
        "•Built scalable Django backend services processing 50M+ engineering events daily via automated data pipelines.",
        "•Designed optimized PostgreSQL schemas, indexing, and partitioning, reducing query latency by 65%.",
        "•Developed a Python analytics engine computing cycle time, lead time, deployment frequency, PR review time, workload distribution, and bottleneck detection.",
        "•Implemented high-performance REST APIs (DRF) serving aggregated metrics across teams and repositories, supporting 2,000+ requests/minute.",
        "•Established RBAC security model for data access across 150+ engineering teams.",
        "•Developed LLM-powered analytics generating automated insights and summaries, reducing manual reporting by 70%.",
        "•Built AI copilots enabling natural-language querying of engineering performance and risks.",
        "Designed RAG architecture using Python, LangChain, FastAPI, and Pinecone/FAISS for sub-second contextual search.", 
        "•Engineered async inference pipelines with caching, supporting high-concurrency AI workloads with low latency.", 
        "•Applied prompt engineering and evaluation pipelines to improve accuracy and reduce hallucinations.",
      ]},
      {"Frontend (React + TypeScript Analytics Dashboard": [
        "•Built responsive dashboards visualizing engineering metrics for 500+ users.", 
        "•Developed reusable filters and integrated charting libraries for real-time data exploration.",
        "•Implemented drill-down workflows linking metrics to PRs, issues, and deployments.",
        "•Managed global state using Redux/Context API.",
        "•Optimized frontend performance, improving page load time by 50%.",
      ]},
      {"DevOps": [
        "•Containerized backend and AI services using Docker.",
        "•Deployed and managed infrastructure on AWS (EC2, ECS, S3, RDS).",
        "•Implemented CI/CD pipelines for automated testing and deployments.",
        "•Improved performance through query optimization, caching, and async processing."
      ]},
     
    ]
  },
{
    period: "Apr 2020 - Feb 2022",
    title: "Senior Python Engineer",
    company: "Eze Castle Integration (ECI)",
    project: "Secure Financial Analytics Platform",
    description: [
      "Worked on a secure analytics and workflow platform for financial institutions, supporting transaction processing, reporting, and compliance for hedge funds and trading clients."
    ],
    tech: [],
    role : [
      {"Backend Development & Security": [
          "•Developed Django REST Framework backend services to manage financial workflows, reporting, and sensitive data (trading, portfolio, and client info), ensuring PCI-DSS and GDPR compliance.",
          "•Designed PostgreSQL schemas for transaction history, audit logs, and reporting dashboards with rolebased access control for analysts, traders, and compliance officers.",
          "•Built REST APIs for transaction submission, data aggregation, and performance reporting, supporting multi-client integrations."
        ]
      },
      {"Performance & Integration": [
          "•Improved system performance by 40% through asynchronous task processing with Celery and Redis,handling high AI request loads",
          "•Integrated internal and third-party financial data sources (market feeds, payment gateways, portfolio APIs) with caching, reducing redundant API calls and improving efficiency.",
          "•Implemented comprehensive logging, monitoring, and request tracing for compliance auditing",
          "•Containerized application with Docker and contributed to CI/CD pipelines for automated deployment"
        ]
      },
    ]
  },
  {
    period: "Apr 2018 - Mar 2020",
    title: "Junior Full-stack/Python Developer",
    company: "beepo",
    project: "beepo",
    description: [
      "Developed backend features and automation tools for client web applications and internal systems using Python, Django and Flask."
    ],
    tech: [],
    role: [
      {"Backend Development": [
        "•Developed backend features using Python, Django, and Flask for client web applications and internal systems.",
        "•Built and maintained RESTful APIs to enable secure data integration between third-party services and internal platforms.",
        "•Implemented data validation, error handling, and logging to ensure stable production environments.",
        "•Assisted in debugging, testing, and maintaining applications deployed on Linux-based systems.",
      ]},
      {"Automation & Data Processing": [
        "•Automated business workflows using Python scripts, reducing manual processing time by up to 40%.",
        "•Designed and optimized MySQL and PostgreSQL queries to improve system performance and reliability.",
        "•Developed data processing utilities for reporting, synchronization, and operational support tasks.",
      ]},
      {"Collaboration & Tools": [
        "•Collaborated with cross-functional teams using Git, Jira, and Agile/Scrum methodologies.",
        "•Supported code reviews, bug fixing, and release cycles in fast-paced client environments.",
        "•Gained hands-on experience with Docker for basic containerized development workflows.",
      ]},
    ]
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 bg-transparent relative overflow-hidden max-md:py-12 max-md:px-4">
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.02] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="mb-14 max-md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-teal-600 dark:text-gray-500 uppercase tracking-wider">
            Professional Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 max-md:text-2xl">
            Full-Stack & AI Engineer Experience
          </h2>
        </motion.div>

        <div className="space-y-6 dark:space-y-px max-md:space-y-4">
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-white/5 shadow-sm hover:shadow-md dark:hover:bg-white/[0.02] transition-all duration-300 max-md:p-4 max-md:rounded-xl"
            >
              <div className="flex flex-col lg:flex-row lg:gap-12 gap-6 max-md:gap-4">
                <div className="flex items-start gap-3 lg:w-48 flex-shrink-0">
                  <Calendar className="w-5 h-5 text-teal-500 dark:text-gray-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold text-slate-600 dark:text-gray-500 uppercase tracking-wider">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-start gap-2">
                    <Briefcase 
                      style={{"marginTop": "10px"}}
                      className="w-4 h-4 text-teal-500 dark:text-gray-500 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white max-md:text-lg">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-medium text-teal-600 dark:text-teal-400 mt-0.5">
                        {exp.title}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-slate-600 dark:text-gray-300 leading-relaxed max-md:text-sm">
                    {exp.description.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 border border-slate-200/80 dark:bg-transparent dark:text-gray-400 dark:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-4 pt-2">
                    {exp.role.map((r, i) => {
                      const [sectionTitle, items] = Object.entries(r)[0];
                      return (
                        <div key={i}>
                          <h4 className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
                            {sectionTitle}
                          </h4>
                          <ul className="space-y-1">
                            {(items as string[]).map((item: string, j: number) => (
                              <li key={j} className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
