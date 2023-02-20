import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-Cu99h7UATb3HCdZMBOHUteUL",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
export const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
});

console.log(response);