import About from "@/components/About";
import Elevate from "@/components/Elevate";
import Graphic from "@/components/Graphic";
import Intro from "@/components/intro";
import Professional from "@/components/Professional";
import Skill from "@/components/Skill";
export default function Home() {
  return (
   <div>
    <Intro/>
    <Graphic/>
    <Elevate/>
    <Skill/>
    <Professional/>
    <About/>
   </div>
   
  );
}
