import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const output = await replicate.run(
    "prompthero/openjourney:ad59ca21177f9e217b9075e7300cf6e14f7e5b4505b87b9689dbd866e9768969",
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