"use client";

import { motion } from "motion/react";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TypeScript", years: "6+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "SQL", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "C", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "PHP", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ],
  },
  {
    category: "AI / Machine Learning / LLM",
    skills: [
      { name: "LangChain", years: "4+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Pinecone", years: "3+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "FAISS", years: "3+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Prompt Engineering", years: "3+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", years: "7+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", years: "6+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Material UI", years: "6+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
      { name: "Tailwind CSS", years: "5+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", years: "7+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Context API", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue.js", years: "5+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Django", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Django REST Framework", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "FastAPI", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Flask", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Node.js", years: "6+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", years: "6+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "NestJS", years: "6+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Redis", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "MongoDB", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", years: "5+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "Docker", years: "5+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", years: "4+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Terraform", years: "4+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "Jenkins", years: "4+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "CI/CD", years: "4+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
    ],
  },
  {
    category: "APIs & Integration",
    skills: [
      { name: "RESTful APIs", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "GraphQL", years: "6+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      { name: "WebSocket", years: "6+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    ],
  },
  {
    category: "Security & Compliance",
    skills: [
      { name: "OAuth 2.0", years: "5+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg" },
      { name: "JWT", years: "5+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "OpenID Connect", years: "4+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg" },
      { name: "Azure AD", years: "5+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "RBAC", years: "5+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg" },
      { name: "Cognito", years: "5+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "HIPAA", years: "4+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg" },
      { name: "PCI-DSS", years: "4+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg" },
      { name: "GDPR", years: "4+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg" },
    ],
  },
  {
    category: "Monitoring & Tools",
    skills: [
      { name: "Prometheus", years: "5+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
      { name: "Grafana", years: "4+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      { name: "ELK Stack", years: "4+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
      { name: "Git", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Agile/Scrum", years: "8+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "JUnit", years: "5+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Pytest", years: "7+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 bg-transparent max-md:py-12 max-md:px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-14 max-md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-teal-600 dark:text-gray-500 uppercase tracking-wider">
            Tech Stack
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-4 max-md:text-2xl max-md:mb-3">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="space-y-10 max-md:space-y-8">
          {skillCategories.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIndex * 0.05 }}
            >
              <h3 className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4 max-md:mb-3">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-md:gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.04 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-transparent border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-md hover:border-slate-300/80 dark:hover:bg-white/[0.02] transition-all duration-300 hover:-translate-y-0.5 max-md:p-2.5"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 flex-shrink-0 object-contain max-md:w-6 max-md:h-6"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight max-md:text-xs">
                        {skill.name}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-gray-500 mt-0.5">
                        {skill.years} yrs exp
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
