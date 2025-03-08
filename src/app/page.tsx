import Image from "next/image"
import Header from "./mycomponents/header"
import MyEduExperienc from "./mycomponents/myEduExperienc"
// import TechStack from "./mycomponents/techstack"
import ProjectsSection from "./mycomponents/projectSection"

export default function Home() {
  console.log("Rendering Home component");

  return (
    <div>
      <Header />
      <MyEduExperienc/>
      <ProjectsSection/>
    </div>
  );
}
