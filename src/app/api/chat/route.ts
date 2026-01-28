import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { portfolioData } from "@/data/portfolio";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const lastMessage = messages[messages.length - 1].content;

        const prompt = `
      You are an AI assistant for a portfolio website.
      Here is the resume/portfolio data:
      ${JSON.stringify(portfolioData)}

      Instructions:
      1. Answer the user's question based ONLY on the data above.
      2. Keep answers concise, professional, and friendly.
      3. Speak in the first person (as if you are the AI assistant of the owner).

      User Question: ${lastMessage}
    `;

        // UPDATED: Using a model from your available list
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ content: text });

    } catch (error) {
        console.error("Gemini API Error:", error);
        return NextResponse.json({
            content: "I'm having trouble connecting. Please try again later."
        });
    }
}