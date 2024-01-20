import Card2 from "./Card2";
import Header from "./Header";
import img1 from "../assets/evo-icp-hp-it-light.png";
import img2 from "../assets/evo-icp-hp-marketing-light.png";
import img3 from "../assets/evo-icp-hp-pm-light.png";
import img4 from "../assets/evo-icp-hp-ps-light.png";
import ButtonArrow from "./ButtonArrow";

const Team = () => {
  return (
    <section className="h-screen w-full">
      <Header
        h1="Transform the way you work"
        p="Empower teams and departments to do the best work of their lives with 360° visibility, true cross-functional collaboration, and powerful automation."
      />

      <div className="mx-auto mt-16 grid w-[1240px] grid-cols-4 gap-8">
        <Card2
          head="Marketing and creative"
          para="Create high-performing campaigns with custom workflows, DAM tools, and dynamic reports."
          img={img2}
        />

        <Card2
          head="Professional
          Services"
          para="Manage resources, track
          billable hours, and delight
          clients with Wrike's
          powerful platform."
          img={img3}
        />

        <Card2
          head="Project
          Management"
          para="Improve collaboration with
          Wrike's planning, risk
          management, and
          automation software."
          img={img4}
        />

        <Card2
          head="IT and Engineering"
          para="Optimize agile IT workflows
          - manage strategic
           service
          
          requests in one place."
          img={img1}
        />
      </div>
      <ButtonArrow />
    </section>
  );
};

export default Team;
