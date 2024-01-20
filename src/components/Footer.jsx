import FooterItems from "./FooterItems";

const Footer = () => {
  const items = [
    "Product tour",
    "Pricing",
    "Templates",
    "Apps & Integrations",
    "Task management",
    "Gantt charts",
    "Wrike Status",
    "Security",
    "CA Notice at Collection",
    "API",
  ];
  return (
    <section className="w-full bg-[#0C3245] p-36">
      <main className="mx-auto grid w-[1240px] grid-cols-6 gap-8  px-4 py-16">
        <div className="">
          <FooterItems h1="Product" list={[items]} />
        </div>
        <div>
          <FooterItems h1="Solutions" list={[items]} />
        </div>
        <div>
          {" "}
          <FooterItems h1="Resources" list={[items]} />
        </div>
        <div>
          <FooterItems h1="Company" list={[items]} />
        </div>
        <div className=" col-span-2 flex gap-10">
          <div className="flex-1">
            <FooterItems h1="Guides" list={[items]} />
          </div>
          <div className="mt-10 flex-1 ">
            <FooterItems list={[items]} />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Footer;
