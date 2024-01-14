import Replicate from "replicate";
import { models } from '../models.js';
import { config } from 'dotenv';
config();


const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const model = models.stabilityAi;
const input = { prompt: "a Quarterback throwing a touchdown playing football on mars" };
const output = await replicate.run(model, { input });

console.log(output);