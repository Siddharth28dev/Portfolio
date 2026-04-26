import React from "react";
import {HStack, VStack} from "@chakra-ui/react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import 'animate.css';
import {
  SiVisualstudiocode,
  SiNpm,
  SiGit,
  SiIntellijidea,
   // You need to add this line to import the Jupyter icon
  
} from "react-icons/si";

function Toolstack() {
  return (
    <HStack style={{ justifyContent: "center", paddingBottom: "10%", width:"90%", display:"flex", flexWrap:"wrap"}}>

      <AnimationOnScroll animateIn="animate__fadeInUp" duration="2.5" delay="2" animateOnce={true}>
        <VStack className={"tech-stack-flex"}>
          <SiGit className="tech-icons"/>
          <p>Github</p>
        </VStack>
      </AnimationOnScroll> 	

      {/* <AnimationOnScroll animateIn="animate__fadeInUp" duration="2.5" delay="2" animateOnce={true}>
        <VStack className={"tech-stack-flex"}>
          <SiJira className="tech-icons"/>
          <p>Jira</p>
        </VStack>
      </AnimationOnScroll> 	*/}

      {/* <AnimationOnScroll animateIn="animate__fadeInUp" duration="2.5" delay="2" animateOnce={true}>
        <VStack className={"tech-stack-flex"}>
          <SiExpo className="tech-icons"/>
          <p>Expo</p>
        </VStack>
      </AnimationOnScroll> 	*/}

      {/* <AnimationOnScroll animateIn="animate__fadeInUp" duration="1.5" delay="2" animateOnce={true}>
      <VStack className={"tech-stack-flex"}>
        <SiLinux className="tech-icons"/>
        <p>Linux</p>
      </VStack>
      </AnimationOnScroll> */}
      
      {/* <AnimationOnScroll animateIn="animate__fadeInUp" duration="2" delay="1" animateOnce={true}>
      <VStack className={"tech-stack-flex"}>
        <SiMacos className="tech-icons"/>
        <p>MacOS</p>
      </VStack>
      </AnimationOnScroll> */}

      <AnimationOnScroll animateIn="animate__fadeInUp" duration="2.5" animateOnce={true}>
      <VStack className={"tech-stack-flex"}>
        <SiVisualstudiocode className="tech-icons"/>
        <p>VS Code</p>
      </VStack>
      </AnimationOnScroll>

      {/* <AnimationOnScroll animateIn="animate__fadeInUp" duration="1.5" animateOnce={true}>
      <VStack className={"tech-stack-flex"}>
        <SiAnaconda className="tech-icons"/>
        <p>Anaconda</p>
      </VStack>
      </AnimationOnScroll> */}

      <AnimationOnScroll animateIn="animate__fadeInUp" duration="2" delay="1" animateOnce={true}>
      <VStack className={"tech-stack-flex"}>
        <SiIntellijidea className="tech-icons" />
        <p>Intellijidea</p>
      </VStack>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp" duration="2.5" delay="2" animateOnce={true}>
      <VStack className={"tech-stack-flex"}>
        <SiNpm className="tech-icons"/>
        <p>NPM</p>
      </VStack>
      </AnimationOnScroll>
      
    </HStack>
  );
}

export default Toolstack;
