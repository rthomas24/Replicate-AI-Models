## Replicate-AI-Models

**Welcome to the Replicate-AI-Models repository!** This repository is dedicated to working with various AI models through API calls from Replicate AI. Each file in this repository corresponds to a different model, making it easy for you to explore and experiment with a variety of AI capabilities.

**Example Usage**

Here is an example of how we use the `stability-ai/sdxl` model in `stability-ai.js`:

```javascript
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
```

The result of the prompt is shown in the image below:

![Output Image](./assets/result1.png)

**Getting Started**

Getting started with this project is simple and straightforward. Here are the steps you need to follow:

**1. Create Your Replicate AI Account:** The first step is to create an account on Replicate AI. You can do this by visiting the [Replicate AI website](https://replicate.com/) and following the instructions to sign up.


**2. Get an Access Token:** Once you have created your account, you will need to obtain an access token. This token will be used to authenticate your API calls. You can find instructions on how to get your access token in the Replicate AI documentation.

**3. Rename the .sample-env File:** Once you have obtained your access token, rename the `.sample-env` file to `.env`.

**4. Import Your Access Token:** Open the `.env` file and import your access token as follows:

```javascript
REPLICATE_API_TOKEN=YOUR_ACCESS_TOKEN_HERE
```

**5. Download This Project:** With your account set up and your access token in hand, you're ready to start using this project. Simply clone this repository to your local machine.

**6. Set Up Your Environment:** Before you can start making API calls, you'll need to set up your environment. This includes installing any necessary dependencies and setting up environment variables. Check out the individual README files in each model's directory for specific setup instructions.

**7. Start Using the Models:** Now you're ready to start using the models! Each model's directory contains a file that you can use to make API calls to that model. Simply open the file in your favorite text editor, replace the placeholder access token with your own, and start making API calls!

**Easy and Accessible**

One of the key goals of this project is to make AI accessible and easy to use. Whether you're a seasoned AI practitioner or a beginner just starting out, you'll find that this project makes it easy to start working with AI models. The API calls are simple and straightforward, and the documentation is clear and easy to understand.

**Running a File**

To run a file, just run `node src/your_file_name`
