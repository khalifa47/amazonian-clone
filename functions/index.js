const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51KTMyJAtsmAi8uByobKvI2rHBQtRMxOWyF88n2QhYcIXB57I0Hbj3noehomexrWwqqNPbIgUUT1Gi6CcJl09H3Cd004VoHIWPJ");

// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    //OK - Created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

// Listen commands
exports.api = functions.https.onRequest(app);

// http://localhost:5001/ian-clone-673b6/us-central1/api
