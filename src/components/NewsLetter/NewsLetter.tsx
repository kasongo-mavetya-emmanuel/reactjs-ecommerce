import { useCallback, useState } from "react";
import hero2 from "../../assets/hero/hero2.jpg";
import { toast } from "react-hot-toast";
import { Oval } from "react-loader-spinner";
import { client } from "../../client";

export default function NewsLetter() {
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSubmit = useCallback(async (event: any) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);

    try {
      setIsSubmit(true);
      const response = await client.create({
        _type: "subscriber",
        email: data.get("email"),
        status: "active",
      });
      console.log(response);

      setIsSubmit(false);
      event.target.reset();
      toast.success("Thanks for subscribing!");
    } catch (err) {
      setIsSubmit(false);
      toast.error("something went wrong please try again!");
    }
  }, []);

  return (
    <section className="lg:h-[65vh]">
      <div className="max-w-7xl mx-auto h-full px-10 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 h-full">
          <div className="flex-1 flex flex-col lg:justify-center gap-7">
            <h2 className="text-4xl font-semibold">NewsLetter</h2>
            <p className="text-xl">Subscribe for latest updates</p>
            <form
              onSubmit={handleSubmit}
              className="flex md:flex-row flex-col gap-3 md:gap-0 justify-between"
            >
              <input
                name="email"
                aria-label="Email Address"
                placeholder="Email Address"
                type="email"
                required
                className="border border-1 border-black flex-1 px-3 py-5 focus:outline-none"
              />
              <button
                type="submit"
                className="py-5 px-6 bg-black text-white text-lg"
              >
                {isSubmit ? (
                  <Oval
                    height={20}
                    width={20}
                    color="#fff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#444"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                ) : (
                  " Subscribe"
                )}
              </button>
            </form>
          </div>
          <div className="lg:flex-1 h-[50vh] lg:h-full bg-black ">
            <img
              data-src={hero2}
              data-placeholder-background="#b7b7b7"
              alt="woman with bracelt"
              className="h-full w-full object-cover lozad"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
