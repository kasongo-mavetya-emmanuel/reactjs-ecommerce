import hero2 from "../../assets/hero/hero2.jpg";

export default function NewsLetter() {
  return (
    <section className="lg:h-[65vh]">
      <div className="max-w-7xl mx-auto h-full px-10 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 h-full">
          <div className="flex-1 flex flex-col lg:justify-center gap-7">
            <h2 className="text-4xl font-semibold">NewsLetter</h2>
            <p className="text-xl">Subscribe for latest updates</p>
            <form className="flex md:flex-row flex-col gap-3 md:gap-0 justify-between">
              <input
                placeholder="Email"
                required
                className="border border-1 border-black flex-1 px-3 py-5"
              />
              <button className="py-5 px-6 bg-black text-white text-lg">
                Subscribe
              </button>
            </form>
          </div>
          <div className="lg:flex-1 h-[50vh] bg-black ">
            <img
              src={hero2}
              alt="woman with bracelt"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
