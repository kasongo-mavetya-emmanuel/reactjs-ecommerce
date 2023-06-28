import { loadStripe } from "@stripe/stripe-js";
import { Stripe } from "@stripe/stripe-js/types/stripe-js";

let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!);
  }

  return stripePromise;
};

export default getStripe;
