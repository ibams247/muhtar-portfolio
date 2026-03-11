import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Smartphone,
  Globe,
  Server,
  Database,
  Wrench,
  Layers,
  Code2,
  Award,
  Send,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
const Card = ({ className = "", children }) => (
  <div className={className}>{children}</div>
);

const CardContent = ({ className = "", children }) => (
  <div className={className}>{children}</div>
);

const Badge = ({ className = "", children }) => (
  <span className={className}>{children}</span>
);

const Input = ({ className = "", ...props }) => (
  <input className={className} {...props} />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea className={className} {...props} />
);

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const profileLinks = {
  email: "mailto:imuhtar747@gmail.com",
  linkedin: "https://www.linkedin.com/in/ibrahim-muhtar-4a9a07106",
  github: "https://github.com/ibams247",
  resume: "/resume.pdf",
};

const skills = [
  {
    title: "Frontend",
    icon: Globe,
    items: ["React", "React Native", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["Firebase", "MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
  {
    title: "Other",
    icon: Layers,
    items: ["REST APIs", "Responsive Design", "Authentication", "State Management"],
  },
];

const projects = [
  {
    title: "Amma's Recipe",
    type: "Full-Stack Web App",
    description:
      "A restaurant ordering web application built for a single restaurant brand, focused on menu browsing, cart flow, and a simple ordering experience with a clear visual identity.",
    stack: ["React", "JavaScript", "Firebase", "Responsive UI", "Vercel"],
    features: [
      "Menu browsing and food discovery",
      "Cart and order flow",
      "Order history screen",
      "Responsive restaurant-style interface",
    ],
    demo: "https://amma-s-recipe-l41xwfttc-ibrahims-projects-dbd82dea.vercel.app/",
    github: "#",
    image: "Live restaurant ordering app",
  },
  {
    title: "BookLibrary Mobile App",
    type: "React Native App",
    description:
      "A mobile library application that allows users to browse, borrow, and manage books with a clean user interface and structured data flow.",
    stack: ["React Native", "Firebase", "React Navigation", "JavaScript"],
    features: [
      "Book browsing and borrowing flow",
      "Borrowing limit logic",
      "Multi-screen navigation",
      "Real-time cloud data integration",
    ],
    demo: "#",
    github: "#",
    image: "Mobile library experience",
  },
  {
    title: "Event Organizer Platform",
    type: "React Native App",
    description:
      "A modern event management application with authentication, CRUD functionality, favorites, and cloud-backed event data.",
    stack: ["React Native", "Firebase Auth", "Firestore", "Responsive UI"],
    features: [
      "User sign up and sign in",
      "Create, edit, and delete events",
      "Favorite event workflow",
      "Structured Firestore integration",
    ],
    demo: "#",
    github: "#",
    image: "Event management workflow",
  },
  {
    title: "Psychologist Booking App",
    type: "Mobile Product",
    description:
      "A polished appointment booking experience for a private psychologist, focused on clarity, trust, and an easy scheduling journey.",
    stack: ["React Native", "Firebase", "UI Design", "Navigation"],
    features: [
      "Profile and appointment booking screens",
      "Push notification-ready structure",
      "Responsive mobile layouts",
      "Clear patient-focused UX",
    ],
    demo: "#",
    github: "#",
    image: "Appointment booking experience",
  },
];

const journey = [
  {
    title: "Junior Front-End Developer",
    company: "Peugeot Automobile Nigeria Limited",
    period: "2015",
    text:
      "Developed and maintained front-end components for web applications, worked with modern UI patterns, and contributed to accessible, user-friendly digital experiences.",
    tech: ["JavaScript", "jQuery", "Bootstrap", "Frontend Development"],
  },
  {
    title: "Programmer",
    company: "JAMB",
    period: "2016 - 2024",
    text:
      "Built and maintained software solutions, including web-based systems, while solving real operational problems with structured development practices.",
    tech: ["Web Apps", "System Development", "Maintenance"],
  },
  {
    title: "Independent Builder",
    company: "Personal Projects",
    period: "Ongoing",
    text:
      "Continuously building portfolio-grade mobile apps and full-stack products that focus on clean UI, scalable architecture, and useful real-world workflows.",
    tech: ["React Native", "Node.js", "Firebase", "Full-Stack"],
  },
];

const services = [
  "React Native mobile app development",
  "Full-stack web development",
  "API integration",
  "UI implementation",
  "Firebase integration",
];

const highlights = [
  "Bachelor's degree in Software Engineering",
  "Mobile Application Development certificate",
  "Cyber Security Awareness certificate",
  "JavaScript certificate",
  "Hands-on experience building web and mobile products",
];

export default function DeveloperPortfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-lg font-semibold tracking-wide text-white">Ibrahim Muhtar</p>
            <p className="text-sm text-slate-400">React Native & Full-Stack Developer</p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#experience" className="transition hover:text-white">Journey</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <motion.div {...fadeUp}>
            <Badge className="mb-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-cyan-200">
              Available for developer roles and select freelance projects
            </Badge>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              React Native & Full-Stack Developer building polished mobile apps and scalable web solutions.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I design and build high-quality digital products with clean user interfaces, maintainable code, and practical problem-solving. My focus is creating experiences that feel modern, reliable, and ready for real-world use.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center rounded-2xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href={profileLinks.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> London, Ontario</div>
              <a href={profileLinks.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white"><Github className="h-4 w-4 text-cyan-300" /> GitHub Portfolio</a>
              <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white"><Linkedin className="h-4 w-4 text-cyan-300" /> LinkedIn Profile</a>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="absolute -left-8 top-10 hidden h-24 w-24 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 blur md:block" />
            <Card className="overflow-hidden rounded-[28px] border-white/10 bg-white/5 shadow-2xl shadow-cyan-950/30">
              <CardContent className="p-0">
                <div className="border-b border-white/10 bg-slate-900/80 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="grid gap-6 p-6 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Mobile-first thinking</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Smooth React Native experiences with structured navigation, reusable components, and user-focused interfaces.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-400/10 text-indigo-300">
                      <Code2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Full-stack delivery</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Web applications backed by APIs, authentication, cloud databases, and scalable architecture.
                    </p>
                  </div>
                  <div className="md:col-span-2 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-400/10 p-6">
                    <p className="text-sm uppercase tracking-[0.22em] text-cyan-200">Portfolio Focus</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Clean UI. Scalable architecture. Real-world problem solving.</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                      This portfolio is designed to reflect a serious developer brand with strong mobile and web engineering capability, polished presentation, and clear technical credibility.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-12">
          <motion.div {...fadeUp} className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">About Me</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Building thoughtful products for mobile and web.</h2>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-slate-300 shadow-xl shadow-slate-950/20">
              <p className="text-base leading-8">
                I am a developer focused on React Native and full-stack development, with a passion for transforming ideas into polished applications that are practical, scalable, and user-friendly. I enjoy building products that combine clean code, strong user experience, and reliable architecture.
              </p>
              <p className="mt-5 text-base leading-8">
                My work emphasizes maintainable systems, responsive layouts, clear interaction design, and efficient development workflows. Whether it is a mobile app or a web platform, I aim to build software that solves real problems and creates trust through quality.
              </p>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Skills</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Technical stack and capabilities</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((group) => {
              const Icon = group.icon;
              return (
                <motion.div key={group.title} {...fadeUp}>
                  <Card className="h-full rounded-[28px] border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/10">
                    <CardContent className="p-7">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-cyan-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <Badge key={item} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-slate-200">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <motion.div {...fadeUp} className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Projects</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Selected work across mobile and full-stack development</h2>
            </div>
            <p className="max-w-xl text-slate-400">
              Each project is presented to show product thinking, clean implementation, and the ability to solve real application challenges.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <motion.div key={project.title} {...fadeUp}>
                <Card className="h-full overflow-hidden rounded-[30px] border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
                  <div className="h-56 border-b border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
                    <div className="flex h-full items-end rounded-[24px] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-400/10 p-6">
                      <div>
                        <Badge className="mb-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">{project.type}</Badge>
                        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{project.image}</p>
                        <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-7">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Tech Stack</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <Badge key={tech} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-slate-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Key Features</p>
                      <div className="mt-4 grid gap-3">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-2xl bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400"
                      >
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-white/10"
                      >
                        GitHub <Github className="ml-2 h-4 w-4" />
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-white/10"
                      >
                        Case Study <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Experience / Journey</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">A development path shaped by practical delivery</h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {journey.map((item) => (
              <motion.div key={`${item.title}-${item.company}`} {...fadeUp}>
                <Card className="rounded-[28px] border-white/10 bg-white/5 transition duration-300 hover:border-cyan-400/20">
                  <CardContent className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-slate-300">{item.company}</p>
                      </div>
                      <Badge className="rounded-full border border-white/10 bg-slate-900/70 text-slate-200">{item.period}</Badge>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-400">{item.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <Badge key={tech} className="rounded-full border border-white/10 bg-slate-900/70 text-slate-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div {...fadeUp}>
              <Card className="h-full rounded-[30px] border-white/10 bg-white/5">
                <CardContent className="p-8">
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Services</p>
                  <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Ways I can contribute</h2>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {services.map((service) => (
                      <div key={service} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-200">
                        {service}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeUp}>
              <Card className="h-full rounded-[30px] border-white/10 bg-gradient-to-br from-white/5 to-cyan-400/10">
                <CardContent className="p-8">
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Achievements</p>
                  <h2 className="mt-3 text-3xl font-bold text-white">Certifications, education, and credibility</h2>
                  <div className="mt-8 grid gap-3">
                    {highlights.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-200">
                        <Award className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...fadeUp}>
              <Card className="h-full rounded-[30px] border-white/10 bg-white/5">
                <CardContent className="p-8">
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Contact</p>
                  <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Let’s build something valuable</h2>
                  <p className="mt-5 text-base leading-8 text-slate-300">
                    I am open to mobile app projects, full-stack opportunities, and collaborations where clean engineering and strong product thinking matter.
                  </p>

                  <div className="mt-8 grid gap-4 text-sm text-slate-300">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                      <Mail className="h-4 w-4 text-cyan-300" />
                      <a href={profileLinks.email} className="hover:text-white">imuhtar747@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                      <Linkedin className="h-4 w-4 text-cyan-300" />
                      <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn Profile</a>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                      <Github className="h-4 w-4 text-cyan-300" />
                      <a href={profileLinks.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub Portfolio</a>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                      <MapPin className="h-4 w-4 text-cyan-300" />
                      <span>London, Ontario, Canada</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeUp}>
              <Card className="rounded-[30px] border-white/10 bg-white/5">
                <CardContent className="p-8">
                  <div className="grid gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm text-slate-300">Name</label>
                        <Input className="h-12 rounded-2xl border-white/10 bg-slate-900/70 text-white placeholder:text-slate-500" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm text-slate-300">Email</label>
                        <Input className="h-12 rounded-2xl border-white/10 bg-slate-900/70 text-white placeholder:text-slate-500" placeholder="you@example.com" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-slate-300">Subject</label>
                      <Input className="h-12 rounded-2xl border-white/10 bg-slate-900/70 text-white placeholder:text-slate-500" placeholder="Project inquiry" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-slate-300">Message</label>
                      <Textarea className="min-h-[180px] rounded-2xl border-white/10 bg-slate-900/70 text-white placeholder:text-slate-500" placeholder="Tell me about your project or opportunity" />
                    </div>
                    <a
                      href={profileLinks.email}
                      className="inline-flex h-12 items-center justify-center rounded-2xl bg-cyan-500 px-6 font-medium text-slate-950 transition hover:bg-cyan-400"
                    >
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Ibrahim Muhtar. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href={profileLinks.github} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
            <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
            <a href={profileLinks.resume} target="_blank" rel="noreferrer" className="transition hover:text-white">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
