import Certificate from "./Certificate";
import AboutMe from "./AboutMe";
import Description from "./Description";
import TextStack from "./TechStack";
import Footer from "../../components/Footer";


export default function About() {
  return (
    <div className=" min-h-screen pt-10 scroll-smooth">
      <AboutMe/>
      <Description/>
      <TextStack/>
      <Certificate/>
      <Footer width="5xl"/>
    </div>
  );
}