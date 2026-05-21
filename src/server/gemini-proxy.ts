import express from 'express';
import { GoogleGenAI } from '@google/genai';

const router = express.Router();

router.post('/api/gemini', async (req, res) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
    const { prompt, model = 'gemini-2.0-flash' } = req.body;
    const response = await ai.models.generateContent({ model, contents: prompt });
    res.json({ text: response.text });
  } catch (err) {
    console.error('Gemini proxy error:', err);
    res.status(500).json({ error: 'AI request failed' });
  }
});

export default router;
