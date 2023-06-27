const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async function (event, context) {
  console.log(event);
  console.log(event.body.items);

  if (event.httpMethod === "POST") {
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1NNeZ4EhILCB56ngkKZu8CG1" },
          { shipping_rate: "shr_1NNeaJEhILCB56ngjG1UG6ga" },
        ],
        line_items: event.body.map((item) => {
          const img = item.image.asset._ref;
          console.log("IMAGE", img);
          const newImage = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/38vqwdp4/production/"
            )
            .replace("-webp", ".webp");

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${event.headers.origin}/success`,
        cancel_url: `${event.headers.origin}/canceled`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      return {
        statusCode: 200,
        body: JSON.stringify(session),
      };
    } catch (err) {
      return {
        statusCode: err.statusCode || 500,
        body: JSON.stringify({
          message: err.message,
        }),
      };
    }
  } else {
    // res.setHeader("Allow", "POST");
    // res.status(405).end("Method Not Allowed");
    return {
      statusCode: 405,
      body: JSON.stringify({
        message: "Method Not Allowed",
      }),
    };
  }
};
