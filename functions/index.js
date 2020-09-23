const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HUVFlD7p7NeMuxcSb2pZ2H6Vra5stf4AzVo99cRiQZWyEA6cexn3eU0XTT2yjR8vv518WifzFQNtFzgaSOjjOIC00Diu3xQVL"
);

// API

// App Configuration
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hell world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received :::", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
    description: "blah blah la",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
//http://localhost:5001/oreva-3b742/us-central1/api
