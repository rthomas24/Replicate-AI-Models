import Replicate from "replicate";
import { config } from 'dotenv';
config();


const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});


const output = await replicate.run(
    "yan-ops/face_swap:d5900f9ebed33e7ae08a07f17e0d98b4ebc68ab9528a70462afc3899cfe23bab",
    {
      input: {
        weight: 0.5,
        cache_days: 10,
        det_thresh: 0.1,
        request_id: "aa6a2aad-90ec-4c00-b90b-89f4d62e6b84",
        source_image: "https://example.com/MV5BMTQyMTUyNjI4OF5BMl5BanBnXkFtZTcwMTk4NjkzNw@@._V1_FMjpg_UX1000_.jpg",
        target_image: "https://uploads.metropoles.com/wp-content/uploads/2023/08/21164924/Beyonce-denunciada-filha-6-anos.jpg"
      }
    }
  );
  console.log(output);