import Replicate from "replicate";
import { config } from 'dotenv';
config();


const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});


const output = await replicate.run(
    "batouresearch/high-resolution-controlnet-tile:4af11083a13ebb9bf97a88d7906ef21cf79d1f2e5fa9d87b70739ce6b8113d29",
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