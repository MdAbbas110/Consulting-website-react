import { company, guides, products, resource, solutions } from "../comfig";
import FooterAccordion from "./FooterAccordion";
import FooterItems from "./FooterItems";

const Footer = () => {
  const items = products;
  const sol = solutions;
  const res = resource;
  const comp = company;
  const guid = guides;
  return (
    <>
      <section className="hidden  bg-[#0C3245] p-36 md:block">
        <main className="mx-auto grid w-[1240px] grid-cols-6 gap-8  px-4 py-16">
          <div className="">
            <FooterItems h1="Product" list={[items]} />
          </div>
          <div>
            <FooterItems h1="Solutions" list={[items]} />
          </div>
          <div>
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
              <FooterItems list={[res]} />
            </div>
          </div>
        </main>
      </section>
      <section className="bg-[#0C3245] p-4 md:hidden">
        <FooterAccordion title={"Product"} list={[items]} />
        <FooterAccordion title={"Solution"} list={[items]} />
        <FooterAccordion title={"Resources"} list={[items]} />
        <FooterAccordion title={"Company"} list={[items]} />
        <FooterAccordion title={"Guides"} list={[items]} />
        <p className="mt-8 text-center text-sm tracking-wide text-white">
          {" "}
          ©2006-2024 Wrike, Inc. All rights reserved. Patented.{" "}
          <span className="border-b border-b-white">
            Privacy Policy. Terms of Service. Cookie Preferences
          </span>
        </p>
      </section>
    </>
  );
};

export default Footer;
