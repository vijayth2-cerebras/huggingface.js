import { assert, describe, expect, it } from "vitest";
import { HfInference } from "@huggingface/inference";

describe.concurrent("HfInference", () => {
	it("should be able to call the Hugging Face Inference API", async () => {
		const hf = new HfInference(process.env.CB_KEY);
		const resp = await hf.chatCompletion({
			provider: "cerebras",
      stream: false,
			model: "meta-llama/llama-3.1-8b-instruct",
			messages: [{ role: "user", content: "Hello, nice to meet you!" }],
		});
    expect(resp.choices[0].message.content?.length).toBeGreaterThan(0);
	});
});
