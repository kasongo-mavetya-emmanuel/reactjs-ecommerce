import hero2 from "../../assets/hero/hero2.jpg";

export default function NewsLetter() {
  return (
    <section className="h-[65vh]">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex gap-24 h-full">
          <div className="flex-1 flex flex-col justify-center gap-7">
            <h2 className="text-4xl font-semibold">NewsLetter</h2>
            <p className="text-xl">Subscribe for latest updates</p>
            <form className="flex justify-between">
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
          <div className="flex-1 h-[100%] object-cover ">
            <img
              src={hero2}
              alt="woman with bracelt"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
