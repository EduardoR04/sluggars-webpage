const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")("sk_test_Sdmh8lUFXFqNmReVXWPyAu510071OldFfu");

// API

// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total, // Subunits of the currency
    currency: "usd",
  });

  // Ok - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-5faaa/us-central1/api
