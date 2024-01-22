import { useState } from "react";

const FooterAccordion = ({ title, list }) => {
  const [accordionOpen, setAccordion] = useState(false);
  return (
    <section className="w-full bg-[#0C3245] p-8">
      <main className="py-2 ">
        <button
          onClick={() => setAccordion(!accordionOpen)}
          className="flex w-full justify-between"
        >
          <span className="text-xl font-semibold text-white">{title}</span>

          <svg
            className="ml-8 shrink-0 fill-indigo-500"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`origin-center transform transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden text-sm text-slate-400 transition-all duration-300 ease-in-out ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0] opacity-0"}`}
        >
          <div className="overflow-hidden">
            <ul className=" cursor-pointer py-4 text-base ">
              <li className="py-3">Pricing</li>
              <li className="py-3">Security</li>
              <li className="py-3">Grand</li>
              <li className="py-3">Product tour</li>
              <li className="py-3">Task management</li>
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
};

export default FooterAccordion;
