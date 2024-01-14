import Replicate from "replicate";
import { models } from '../models.js';
import { config } from 'dotenv';

config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const output = await replicate.run(
    models.openJourney,
    {
      input: {
        seed: null,
        // image: '',
        width: 512,
        height: 512,
        prompt: "mdjrny-v4 style portrait of female elf, intricate, elegant, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration, art by artgerm and greg rutkowski and alphonse mucha, 8k",
        scheduler: "DPMSolverMultistep",
        num_outputs: 1,
        guidance_scale: 7,
        prompt_strength: 0.8,
        num_inference_steps: 50
      }
    }
  );
  console.log(output);