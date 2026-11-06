import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    starbucks,
    IFSS,
    soulmagician,
    threejs,
    vidyasetuCover,
    planktonCover,
    indicCover,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend & Full-Stack Developer",
      icon: web,
    },
    {
      title: "ML & NLP",
      icon: backend,
    },
    {
      title: "Game Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    // for more technologies , add a map here , import above from assets , and in assets add the icon
  ];
  
  const experiences = [
    {
      title: "Game Developer",
      company_name: "Computer Graphics Society",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Nov 2023 - present",
      points: [
        "Junior Developer, Senior Developer, Head of Game Development",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "VidyaSetu | RAG Platform",
      description:
        "Production RAG platform serving 300+ users and 10,000+ queries, built on FastAPI, Pinecone, Gemini embeddings and GPT-4.1. Modular backend on MongoDB Atlas with scheduled Scrapy/Playwright/OCR data pipelines, JWT auth, prompt-injection protection and Sentry monitoring. Containerized with Docker and Nginx, deployed through GCP Cloud Build CI/CD.",
      tags: [
        { name: "FastAPI", color: "blue-text-gradient" },
        { name: "Pinecone", color: "green-text-gradient" },
        { name: "MongoDB", color: "pink-text-gradient" },
        { name: "Docker", color: "blue-text-gradient" },
      ],
      image: vidyasetuCover,
    },
    {
      name: "Marine Plankton Microscopy | SIH 2025",
      description:
        "Smart India Hackathon 2025 (Team Gradient, SIH25043): an embedded microscopy system to identify and count microscopic marine organisms. Trained a classifier reaching 99.37% ROC-AUC on the provided dataset and validated it on a Raspberry Pi running Linux.",
      tags: [
        { name: "Machine Learning", color: "blue-text-gradient" },
        { name: "Raspberry Pi", color: "green-text-gradient" },
        { name: "Embedded", color: "pink-text-gradient" },
      ],
      image: planktonCover,
    },
    {
      name: "Indic Educational Resources | BTech Project",
      description:
        "Ongoing research on a multimodal generative framework for culturally grounded educational resources in low-resource Indic languages, built on transformer-based machine translation models.",
      tags: [
        { name: "NLP", color: "blue-text-gradient" },
        { name: "Machine Translation", color: "green-text-gradient" },
        { name: "Transformers", color: "pink-text-gradient" },
      ],
      image: indicCover,
    },
    {
      name: "IFSS | SWE Course Project",
      description:
      "Developed tax optimization software with auto-filled ITR forms and CA integration. Implemented AI-based document summarization and secure data management with MongoDB. Built a scalable C++ backend on a Python server using the nlohmann JSON library for efficient data exchange.",      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: IFSS, // Replace with the appropriate image if available
      source_code_link: "https://github.com/Chimankarparag/IFSS", // Replace with the actual link if available
    },
    {
      name: "2D RPG Game (Soul Magician)",
      description:"Developed a 2D RPG in Unity with optimized gameplay and intuitive UI for inventory, health, and item interactions. Enhanced visuals using particle effects, dynamic lighting, and smooth camera controls. Implemented complex character animations and responsive mechanics for accessible yet engaging play.",      
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Game Development",
          color: "pink-text-gradient",
        },
      ],
      image: soulmagician, // Replace with the appropriate image if available
      source_code_link: "https://github.com/Chimankarparag/Necromancer", // Replace with the actual link if available
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };