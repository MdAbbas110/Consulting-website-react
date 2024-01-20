import { company, guides, products, resource, solutions } from "../comfig";
import FooterItems from "./FooterItems";

const Footer = () => {
  const items = products;
  const sol = solutions;
  const res = resource;
  const comp = company;
  const guid = guides;
  return (
    <section className="w-full bg-[#0C3245] p-36">
      <main className="mx-auto grid w-[1240px] grid-cols-6 gap-8  px-4 py-16">
        <div className="">
          <FooterItems h1="Product" list={[items]} />
        </div>
        <div>
          <FooterItems h1="Solutions" list={[sol]} />
        </div>
        <div>
          {" "}
          <FooterItems h1="Resources" list={[res]} />
        </div>
        <div>
          <FooterItems h1="Company" list={[comp]} />
        </div>
        <div className=" col-span-2 flex gap-10">
          <div className="flex-1">
            <FooterItems h1="Guides" list={[guid]} />
          </div>
          <div className="mt-10 flex-1 ">
            <FooterItems list={[sol]} />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Footer;
