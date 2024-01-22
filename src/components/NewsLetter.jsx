import Header from "./Header";

const NewsLetter = () => {
  return (
    <section className="w-full bg-[#181F38] pb-10 text-white">
      <main className="mx-auto w-[1240px]">
        <div className="mx-auto w-[900px] grid-rows-3 p-20">
          <div className=" row-span-2">
            <header className="mx-auto ">
              <h1 className="text-center text-4xl font-bold tracking-wide">{`Try our powerful work management software for free`}</h1>
              <p className="mx-auto mt-8  text-center text-base font-medium -tracking-[-0.1rem] ">
                {
                  "Sign up for a free two-week trial of Wrike today — no credit card required."
                }
              </p>
            </header>
          </div>
          <div className="mt-20 flex justify-center gap-6">
            <input
              className="rounded-xl px-20 py-3 text-lg text-black"
              placeholder="Enter Business Email"
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
