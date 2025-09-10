import { BentoGrid, BentoGridItem } from "../components/bento";
import { IconBrandGithub } from "@tabler/icons-react";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

import Forever from "../assets/forvever.jpg";
import Muzer from "../assets/Muzer.png";
import PinDrop from "../assets/pindrop.png";
import Hackheaven from "../assets/Hackheaven.png";
import MatchNest from "../assets/matchnest.png";
import QuickChat from "../assets/quickchat.png";
import QuoteLoom from "../assets/Quote loom.png";
import HireSphere from "../assets/Hiresphere.png";
import StreamLink from "../assets/Stream Link.png";

const words = [
  { text: "My" },
  {
    text: "Projects 🧑🏻‍💻",
    className:
      "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-extrabold text-center text-4xl md:text-5xl",
  },
];

const words1 = `Welcome to my Projects Showcase! Explore web apps, hackathon projects, and experiments that define my journey as a developer. From Web3 experiments to full-stack applications, see the creativity and code behind each project.`;

const projectsData = [
  {
    title: "Forever",
    description:
      "An e-commerce shopping website built with the MERN stack, featuring product listings, cart management, and checkout functionality.",
    image: Forever,
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/Ketan1317/Forever",
    deployedUrl: "https://forever-frontend-liard.vercel.app/",
  },
  {
    title: "Muzer",
    description:
      "A streaming platform where viewers vote to decide which song plays next, built with Next.js, NextAuth, and PostgreSQL.",
    image: Muzer,
    techStack: ["Next.js", "NextAuth", "PostgreSQL"],
    githubUrl: "https://github.com/Ketan1317/Muzer",
  },
  {
    title: "PinDrop",
    description:
      "A link-saving platform leveraging AI and npm libraries, built with Next.js, NextAuth, and MongoDB.",
    image: PinDrop,
    techStack: ["Next.js", "NextAuth", "MongoDB", "AI Libraries"],
    githubUrl: "https://github.com/Ketan1317/PinDrop",
  },
  {
    title: "HackHeaven",
    description:
      "A live coding editor and 1v1 DSA battle platform using Flask, SQLite, React.js, and WebSockets.",
    image: Hackheaven,
    techStack: ["Flask", "SQLite", "React.js", "WebSockets"],
    githubUrl: "https://github.com/Ketan1317/HackHeaven",
  },
  {
    title: "MatchNest",
    description:
      "A matrimonial & dating platform with chat, video & voice calls using PeerJS, WebRTC, WebSockets, and swipe functionality.",
    image: MatchNest,
    techStack: ["React.js", "WebRTC", "WebSockets", "PeerJS"],
    githubUrl: "https://github.com/Ketan1317/MatchNest",
    deployedUrl: "https://match-nest-zeta.vercel.app/",
  },
  {
    title: "QuickChat",
    description:
      "A real-time chat application similar to WhatsApp using Socket.io.",
    image: QuickChat,
    techStack: ["React.js", "Socket.io", "Node.js"],
    githubUrl: "https://github.com/Ketan1317/QuickChat",
    deployedUrl: "https://quickchatbackend-theta.vercel.app/",
  },
  {
    title: "QuoteLoom",
    description:
      "A platform to generate random quotes, download wallpapers, and gamification features, built with the MERN stack.",
    image: QuoteLoom,
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/Ketan1317/Quote-Loom",
    deployedUrl: "https://quote-loom-5sop.vercel.app/",
  },
  {
    title: "StreamLink",
    description:
      "A one-to-one video calling platform using WebRTC and WebSockets for real-time streaming.",
    image: StreamLink,
    techStack: ["React.js", "WebRTC", "WebSockets"],
    githubUrl: "https://github.com/Ketan1317/Peer-Js",
  },
  {
    title: "HireSphere",
    description:
      "A job portal where employers can upload resumes, shortlist candidates, and chat with job seekers using WebSockets in MERN stack.",
    image: HireSphere,
    techStack: ["MongoDB", "Express", "React", "Node.js", "WebSockets"],
    githubUrl: "https://github.com/Ketan1317/hiresphere",
  },
];

const Projects = () => {
  return (
    <div className="w-full absolute top-11 min-h-screen px-6 md:px-12 pt-24 flex flex-col items-center space-y-12">
      {/* Heading */}
      <TypewriterEffectSmooth words={words} />

      {/* Description */}
      <div className="max-w-3xl text-center">
        <TextGenerateEffect words={words1} />
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-6xl">
        <BentoGrid className="md:auto-rows-[28rem] gap-6">
          {projectsData.map((proj, index) => (
            <BentoGridItem
              key={index}
              className="hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl rounded-xl overflow-hidden bg-white"
              header={
                <div className="relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-56 object-cover rounded-t-xl"
                  />
                  <div className="absolute top-3 right-3 flex space-x-2">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition-colors"
                      >
                        <IconBrandGithub size={20} />
                      </a>
                    )}
                    {proj.deployedUrl && (
                      <a
                        href={proj.deployedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white px-4 py-1.5 rounded-full shadow-md hover:bg-red-700 hover:shadow-lg hover:scale-105 transition-all duration-300 text-xs font-semibold uppercase tracking-wide"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              }
              title={
                <h3 className="text-xl md:text-2xl font-extrabold text-center text-gray-900 dark:text-white">
                  {proj.title}
                </h3>
              }
              description={
                <div className="space-y-3 text-center px-4 py-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {proj.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              }
            />
          ))}
        </BentoGrid>
      </div>
      <footer className="w-full mt-20 py-12 pb-16 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
          Let’s Build Something Amazing Together!
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm md:text-base">
          Whether you’re an HR professional, recruiter, or collaborator, I’d
          love to discuss opportunities and turn ideas into impactful projects.
          Let’s connect and create solutions that make a difference.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="mailto:goyalketan1317@gmail.com"
            className=" text-white px-5 py-2 rounded-full shadow-md hover:bg-red-700 hover:scale-105 transition-all duration-300 text-sm font-semibold"
          >
            📩 Contact Me
          </a>
          <a
            href="www.linkedin.com/in/ketan-goyal-117368324"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-5 py-2 rounded-full shadow-md hover:bg-gray-800 hover:scale-105 transition-all duration-300 text-sm font-semibold"
          >
            🔗 Connect on LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
