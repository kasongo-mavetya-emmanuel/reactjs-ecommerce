import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div>
      <div>
        <h2>Thank You For Your Purchase</h2>
        <p>Check your email for the receipt</p>
        <Link to={"/"}>
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}
