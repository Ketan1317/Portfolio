import React from "react";
import Contact from "../components/ui/wobble-card";
import MarqueeRow from "../components/Marquee";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import SplitText from "../components/SplitText";

const words = [
  {
    text: "Who",
    className: "text-white font-extrabold text-4xl md:text-5xl",
  },
  {
    text: "the heck",
    className: "text-white font-extrabold text-4xl md:text-5xl",
  },
  {
    text: "is this guy? 🤔",
    className: "text-white font-extrabold text-4xl md:text-5xl",
  },
];

const head1 = 'Things I Break (and sometimes fix)'
const head2 = 'Wanna Build Something Crazy Together?'
const head3 = "Let's Build Something Together 🚀"

const aboutText = `Hey, I’m Ketan 👋 — a developer who spends way too much time turning caffeine into code. 
Sometimes my projects work perfectly, sometimes they just… explode✨
I love experimenting with wild ideas from real-time chat apps, to Web3 Wallets, to full-stack chaos.  
If it sounds crazy, I’ve probably tried building it 💫`;

const About = () => {
  function handleAnimationComplete(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-full absolute top-12 min-h-screen px-6 md:px-12 pt-24 flex flex-col items-center space-y-20 text-white">
      {/* Heading */}

      <TypewriterEffectSmooth words={words} />

      {/* Funny Intro */}
      <div className="max-w-3xl text-center">
        <SplitText
          text={aboutText}
          className="text-2xl font-semibold text-center"
          delay={20}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>

      {/* Tech Stack Marquee */}
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-10 text-center">
          <TextGenerateEffect words={head1}/>
        </h2>
        <MarqueeRow />
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-5xl">
        <h2 className="text-xl font-semibold mb-6 text-center">
          <TextGenerateEffect words={head2}/>
        </h2>
        <Contact />
      </div>

      {/* Minimal Clean Footer */}
      <footer className="w-full text-center py-12 mt-10 text-white space-y-6">
  <h3 className="text-xl font-semibold">
    <TextGenerateEffect words={head3}/>
  </h3>
  
  <p className="text-md">
    Crafting unique digital experiences, one line of code at a time.
  </p>

  
</footer>


    </div>
  );
};

export default About;
