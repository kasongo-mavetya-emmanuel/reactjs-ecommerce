import {
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-10 xl:px-0 pt-20 lg:pt-40 pb-12">
        <div className="flex justify-between items-center border-t-2 border-black pt-9">
          <h1 className="text-4xl font-bold">Kb</h1>
          <div className="flex gap-12">
            <nav>
              <ul className="flex flex-col gap-5">
                <li>Home</li>
                <li>Cart</li>
                <li>Products</li>
                <li>NewsLetter</li>
              </ul>
            </nav>
            <ul className="flex flex-col gap-5">
              <li>
                <FaYoutube size={"1.2rem"} />
              </li>
              <li>
                <FaTwitter size={"1.2rem"} />
              </li>
              <li>
                <FaFacebookF size={"1.2rem"} />
              </li>
              <li>
                <FaLinkedinIn size={"1.2rem"} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
