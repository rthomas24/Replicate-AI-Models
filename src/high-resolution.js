import Replicate from "replicate";
import { models } from '../models.js';
import '../config.js';


const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});


const output = await replicate.run(
    models.highResolution,
    {
      input: {
        hdr: 0.7,
        image: "https://i.pinimg.com/originals/11/e9/bf/11e9bfc1cebecd53b8021c2791c0dfca.jpg",
        steps: 20,
        prompt: "UHD 4k vogue, a greek goddess",
        scheduler: "DDIM",
        creativity: 0.75,
        guess_mode: false,
        resolution: 2048,
        resemblance: 1,
        guidance_scale: 5,
        negative_prompt: "Teeth, tooth, open mouth, longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, mutant"
      }
    }
);

console.log(output);