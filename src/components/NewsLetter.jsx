import Header from "./Header";

const NewsLetter = () => {
  return (
    <section className="w-full bg-[#181F38] pb-10 text-white">
      <main className="mx-auto w-[1240px]">
        <div className="mx-auto w-[850px] grid-rows-3 p-20">
          <div className=" row-span-2">
            <h1 className=" text-4xl font-semibold tracking-wide">
              {" "}
              Try our powerful work management software for free
            </h1>

            <p className="mt-8 text-lg font-medium  tracking-wide">
              Sign up for a free two-week trial of Wrike today — no credit card
              required.
            </p>
          </div>
          <div className="mt-20 flex gap-6">
            <input
              className="rounded-xl px-20 py-3 text-lg text-black"
              placeholder="Enter your business email"
              type="text"
            />
            <button className="rounded-xl bg-[#04BA71] px-8 py-4 text-base font-semibold text-white hover:bg-[#007860]">
              Start a free trail
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default NewsLetter;
