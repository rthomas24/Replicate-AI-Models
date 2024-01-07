import Replicate from "replicate";
import { config } from 'dotenv';
config();


const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const model = "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b";
const input = { prompt: "a Quarterback throwing a touchdown playing football on mars" };
const output = await replicate.run(model, { input });

console.log(output);