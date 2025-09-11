import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { FlipWords } from "../components/ui/flip-words";
import Masonry from "../components/Masonry";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import { FloatingDock } from "../components/ui/floating-deck";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

import techabhi from "../assets/techabhi.jpeg";
import leetcode from "../assets/leetcode.jpg";
import nit from "../assets/nit.jpg";
import cgpa from "../assets/cgpa.jpg";
import deca from "../assets/deca.jpg"
import dnt from "../assets/dnt.jpg"

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Aceternity UI",
    icon: (
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        width={20}
        height={20}
        alt="Aceternity Logo"
      />
    ),
    href: "#",
  },
  {
    title: "Changelog",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

const Home = () => {
  const words = [
    { text: "Hi 👋" },
    { text: "I’m" },
    {
      text: "Ketan Goyal",
      className:
        "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent font-extrabold",
    },
  ];

  const words1 = [
    { text: "Some" },
    { text: "of my" },
    {
      text: "Achievements 🏆",
      className:
        "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent font-extrabold",
    },
  ];
  const words2 = [
    { text: "Current" },
    {
      text: "Focusing On ",
      className:
        "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent font-extrabold",
    },
  ];

  const word = ["better", "cooler", "cuter", "funnier"];
  const word3 = ["Web3", "DSA in Java", "Hackathons", "Innovation"];

  const items = [
    { id: "1", img: img1, url: "#", height: 500 },
    { id: "2", img: img2, url: "#", height: 250 },
    { id: "3", img: img3, url: "#", height: 600 },
    { id: "4", img: img4, url: "#", height: 500 },
    { id: "5", img: img5, url: "#", height: 450 },
    { id: "6", img: img6, url: "#", height: 400 },
    { id: "7", img: img7, url: "#", height: 650 },
    { id: "8", img: img8, url: "#", height: 600 },
    { id: "9", img: img9, url: "#", height: 600 },
    { id: "10", img: img10, url: "#", height: 500 },
    { id: "11", img: img11, url: "#", height: 450 },
  ];

  
  const items1 = [
  {
    title: "LeetCode & DSA",
    description:
      "Solved 100+ problems in C++ and 150+ problems in Java on LeetCode, sharpening problem-solving and algorithmic thinking.",
    header: (
      <img
        src={leetcode}
        alt="LeetCode"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "National Level Hackathon (NIT)",
    description:
      "Participated in a National Level Hackathon at NIT, collaborating on real-world challenges and innovative solutions.",
    header: (
      <img
        src={nit}
        alt="National Hackathon"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "University CGPA",
    description:
      "Maintained a consistent academic performance while balancing projects, hackathons, and internships.",
    header: (
      <img
        src={cgpa}
        alt="CGPA"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "University Hackathon (Tech Abhivyakti)",
    description:
      "Competed in Tech Abhivyakti, a university-level hackathon encouraging creativity, innovation, and teamwork.",
    header: (
      <img
        src={techabhi}
        alt="University Hackathon"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Open Source Contributions",
    description:
      "Contributed to open-source projects, collaborating with global developers and learning best practices.",
    header: (
      <img
        src={dnt}
        alt="Open Source"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Workshops & Certifications",
    description:
      "Completed workshops and certifications in Web Development, DevOps, and AI/ML to expand technical expertise.",
    header: (
      <img
        src={deca}
        alt="Certifications"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Community & Mentorship",
    description:
      "Actively engage in coding communities, mentoring juniors, and organizing peer-to-peer learning sessions.",
    header: (
      <img
        src={nit}
        alt="Community"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];


  return (
    <div className="absolute top-40 w-full flex flex-col items-center justify-center space-y-20 px-6 md:px-12">
      {/* Intro Section */}
      <TypewriterEffectSmooth words={words} />

      {/* About Section */}
      <div className="max-w-5xl text-center space-y-12">
        <div className="text-2xl md:text-4xl font-light text-neutral-700 dark:text-neutral-300 leading-relaxed tracking-wide">
          Professional daydreamer ✨ with a habit of making things <br />
          look{" "}
          <span className="font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            <FlipWords words={word} />
          </span>{" "}
          than they really are
        </div>

        <div className="w-full md:w-[50vw] mx-auto text-left space-y-6">
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I spend my time building little corners of the internet—sometimes
            they shine, sometimes they glitch, and sometimes they just stare
            back at me like{" "}
            <span className="italic font-semibold">
              “bruh, did you even test this?”
            </span>{" "}
            💀. But hey, that’s part of the fun.
          </p>

          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Outside the screen, I’m the kind of person who laughs at my own
            jokes, gets unreasonably excited about midnight snacks, and
            confidently declares{" "}
            <span className="font-semibold">“I’ll sleep early tonight”</span>
            —only to watch the sunrise with my laptop glowing like a campfire.
          </p>

          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
            I enjoy turning random ideas into things you can click, scroll, or
            sometimes accidentally break. Some turn into projects I’m proud of,
            others stay as fun experiments that probably shouldn’t see daylight—
            but every one of them teaches me something (and usually comes with a
            laugh).
          </p>

          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
            My goal? To create experiences that make people smile, think, or at
            least pause for a moment and go,{" "}
            <span className="font-bold">“huh, that’s different.”</span> And if
            things crash along the way—well, that’s just another story worth
            telling.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      {/* <div className="w-full max-w-6xl">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div> */}

      <div className="relative mt-[5vh]">
        <div className="my-20">
          <TypewriterEffectSmooth
            className="flex items-center justify-center"
            words={words1}
          />
          <div className="mx-auto mt-8">
            <BentoGrid className="max-w-4xl mx-auto">
              {items1.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid>
          </div>
        </div>

        <div className="w-full">
          {/* Heading with typewriter effect */}
          <TypewriterEffectSmooth
            className="flex items-center justify-center"
            words={words2}
          />

          <div className="mt-8 space-y-10 max-w-4xl mx-auto">
            {/* Tagline */}
            <div className="text-2xl md:text-4xl font-light text-neutral-700 dark:text-neutral-300 leading-relaxed tracking-wide text-center">
              Professional daydreamer ✨ exploring{" "}
              <span className="font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                <FlipWords words={word3} />
              </span>{" "}
              while turning ideas into reality 🚀
            </div>

            {/* Paragraph */}
            <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed text-left border-l-4 border-cyan-400 pl-4">
              I am currently focusing on{" "}
              <span className="font-medium">exploring Web3 development</span>
              while strengthening my problem-solving skills through
              <span className="font-medium">
                {" "}
                Data Structures and Algorithms in Java
              </span>
              . Alongside this, I actively participate in{" "}
              <span className="font-medium">hackathons</span>, which not only
              challenge my technical abilities but also fuel my creativity and
              teamwork. These areas together form the core of my learning
              journey, helping me grow as a
              <span className="font-semibold">
                {" "}
                versatile and innovative developer
              </span>
              .
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center my-12 w-full">
          <FloatingDock items={links} />
        </div>
      </div>
    </div>
  );
};

export default Home;
