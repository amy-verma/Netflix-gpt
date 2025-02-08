import OpenAI from 'openai';

const openai = new OpenAI({
  // eslint-disable-next-line no-undef
  apiKey: process.env.OPENAI_KEY,dangerouslyAllowBrowser: true ,
});

export default openai 