import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink, Slack } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Twitter", link: "https://x.com/Bhavdeep0106", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/bhavdeepdhariwal/", icon: <Linkedin /> },
    { name: "External", link: "https://marked-flax-068.notion.site/About-Me-1a85b501b8458036b68cd2aeb50ff001?pvs=4", icon: <ExternalLink /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
