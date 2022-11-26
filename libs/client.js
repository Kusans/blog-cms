import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "m9nlzyco7g",
    apiKey: process.env.API_KEY,
})