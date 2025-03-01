import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Mind-Matcher -Memory card game",
      description:
        `Mind Matcher is a fun and challenging memory card game where players race to find matching pairs and test their recall skills.`,
      tags: ["HTML", "CSS", "Javascript"],
      link: "https://mind-matcher.vercel.app/",
    },
    {
      title: "Audio Calculator -voice math calculator",
      description:
        `Audio Calculator is a voice-activated math tool that lets you solve equations hands-free by simply speaking your calculations aloud.`,
      tags: ["HTML", "CSS", "Javascript", "API"],
      link: "https://voice-math-calculatar.vercel.app/",
    },
    {
      title: "Gaishoku - Japanese Restaurant",
      description:
        `Gaishoku is a japanese establishment in india which is an eat out restaurant`,
      tags: ["HTML", "CSS", "Javascript"],
      link: "https://gaishoku.vercel.app/",
    },
    {
      title: "Netflix -Netflix Clone",
      description:
        `A Landing page Clone of Netflix. A pixel perfect clone of Netflix's landing page.`,
      tags: ["HTML", "CSS", "Javascript", "API"],
      link: "https://netflixclone01016.vercel.app/",
    },
    {
      title: "VS-Code -Visual Studio Code Clone",
      description:
        `A Landing page Clone of Visual Studio Code. A pixel perfect clone of Visual Studio Code's landing page.`,
      tags: ["HTML", "CSS", ],
      link: "https://vs-code-lp-five.vercel.app/",
    },
    {
      title: "Zerodha -Zerodha Clone",
      description:
        `A Landing page Clone of Zerodha. A pixel perfect clone of Zerodha's landing page.`,
      tags: ["HTML", "CSS", ],
      link: "https://zeroda-lp.vercel.app/",
    },   
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
