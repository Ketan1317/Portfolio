import { Github } from "lucide-react";
import img1 from "../../assets/leet.png";
import img2 from "../../assets/instagram.jpg";
import img3 from "../../assets/linkedin.jpg";
import img4 from "../../assets/twitter.jpg";
import img5 from "../../assets/github.jpg";
import img6 from "../../assets/anime.jpg";

const Contact = () => {
  // open links in new tabs safely
  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="max-w-5xl mx-auto my-8 px-4">
      <div className="grid grid-cols-12 gap-4">
        {/* GitHub */}
        <div
          className="col-span-6 bg-gray-900 rounded-lg p-4 border border-gray-700 h-48 hover:scale-95 hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-300 cursor-pointer"
          style={{
            backgroundImage: `url(${img5})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => handleLinkClick("https://github.com/Ketan1317")}
        >
          <div className="flex items-center gap-2 mt-24 bg-black/50 p-2 rounded">
            <Github className="w-7 h-7 text-white" />
            <div>
              <h2 className="text-white font-bold">GitHub Profile</h2>
              <p className="text-gray-300 text-sm">@Ketan1317</p>
            </div>
          </div>
        </div>

        {/* Leetcode */}
        <div
          className="col-span-6 rounded-lg border border-gray-700 h-48 hover:scale-95 hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-300 cursor-pointer"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() =>
            handleLinkClick("https://leetcode.com/u/ketangoyal1212/")
          }
        />

        {/* Instagram */}
        <div
          className="col-span-4 rounded-lg border border-gray-700 h-40 hover:scale-95 hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-300 cursor-pointer"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => handleLinkClick("https://instagram.com/_goyal_1317_")}
        />

        {/* Linkedin */}
        <div
          className="col-span-4 rounded-lg border border-gray-700 h-40 hover:scale-95 hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-300 cursor-pointer"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() =>
            handleLinkClick("https://www.linkedin.com/in/ketan-goyal-117368324/")
          }
        >
          
        </div>

        {/* Twitter */}
        <div
          className="col-span-4 rounded-lg border border-gray-700 h-40 hover:scale-95 hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-300 cursor-pointer"
          style={{
            backgroundImage: `url(${img4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() =>
            handleLinkClick("https://x.com/KetanGo11864224")
          }
        />

        {/* Anime / Meme */}
        <div
          className="col-span-12 rounded-lg border border-gray-700 h-56 hover:scale-95 hover:brightness-110 hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-300 cursor-pointer relative"
          style={{
            backgroundImage: `url(${img6})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
