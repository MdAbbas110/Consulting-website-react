import Card from "../components/Card";
import Header from "./Header";
import svg from "../assets/icon-evo-security-key.svg";
import svg3 from "../assets/icon-evo-worldwide-support (1).svg";
import ButtonArrow from "./ButtonArrow";

const PowerfulEnter = () => {
  return (
    <section className="mt-24 w-full ">
      <Header
        h1="Powerful enterprise-ready solutions"
        p="Wrike is the all-in-one platform that allows teams to scale smoothly with global, industry security, and a wealth of resources to help teams tackle complex work."
      />
      <main className="mx-auto mb-16 mt-24 grid w-[1240px] grid-cols-3 gap-10 ">
        <Card
          backG={"white"}
          head="Enterprise-Grade Security"
          p={`Wrike to manage their team's most important projects and collaborate in the cloud trust Wrike`}
          para={`Enterprises across the globe trust Wrike to manage their team's projects and collaborate in the cloud globe trust Wrike to manage their team's most important projects.`}
          img={svg}
        />
        <Card
          backG={"white"}
          head="Enterprise-Grade Security"
          p={`Wrike to manage their team's most important projects and collaborate in the cloud trust Wrike`}
          para={`Enterprises across the globe trust Wrike to manage their team's most important projects and collaborate in the cloud the globe trust Wrike to manage their team's most important.`}
          img={svg3}
        />
        <Card
          backG={"white"}
          head="Enterprise-Grade Security"
          p={`Wrike to manage their team's most important projects and collaborate in the cloud trust Wrike`}
          para={`Enterprises across the globe trust Wrike to manage their team's most important projects and collaborate in the cloud trust Wrike to manage their team's most important.`}
          img={svg}
        />
      </main>
      <ButtonArrow />
    </section>
  );
};

export default PowerfulEnter;
