import { NextRequest, NextResponse } from "next/server";
import { validateAnswer } from "@/utils/answerValidation";

// Define the quiz question configuration interface
interface QuizConfig {
  question: string;
  correctAnswer: string;
  acceptableAnswers: string[];
  explanation: string;
  hint?: string;
  order: number;
  isFinal?: boolean;
}

// Quiz configuration data - stored server-side
const QUIZZES: Record<string, QuizConfig> = {
  "ai-assistant": {
    question:
      "Which AI-powered voice assistant was the first to be introduced to smartphones?",
    correctAnswer: "Siri",
    acceptableAnswers: ["Siri", "Apple Siri"],
    explanation:
      "Siri was introduced in 2011 with the iPhone 4S, becoming the first major voice assistant on smartphones.",
    hint: "It was released by Apple in 2011",
    order: 1,
  },
  "ai-art": {
    question:
      "What was the first-ever AI-generated painting sold at an auction?",
    correctAnswer: "Portrait of Edmond de Belamy",
    acceptableAnswers: [
      "Portrait of Edmond de Belamy",
      "Edmond de Belamy",
      "Belamy portrait",
    ],
    explanation:
      "The 'Portrait of Edmond de Belamy' was sold for $432,500 at Christie's auction in 2018, becoming the first AI-generated artwork sold at a major auction house.",
    hint: "It was sold for $432,500 at Christie's auction house",
    order: 2,
  },
  "openai-gpt": {
    question:
      "What was the name of the AI model that OpenAI initially decided not to release fully because they thought it was too powerful?",
    correctAnswer: "GPT-2",
    acceptableAnswers: ["GPT-2", "GPT2", "GPT 2"],
    explanation:
      "OpenAI held back the full version of GPT-2 in 2019 due to concerns about potential misuse of the technology.",
    hint: "It was a predecessor to GPT-3",
    order: 3,
  },
  "microsoft-chatbot": {
    question:
      "What AI-powered software was once trained using Reddit conversations, making it unexpectedly sarcastic and funny?",
    correctAnswer: "Tay AI",
    acceptableAnswers: ["Tay AI", "Tay", "Microsoft Tay", "Tay chatbot"],
    explanation:
      "Tay AI was an experiment by Microsoft, but it had to be shut down within a day because it started generating offensive content after learning from some users' inputs.",
    hint: "It was a Microsoft chatbot",
    order: 4,
  },
  "ai-music": {
    question:
      "Which AI-generated song featuring which two artists went viral—despite neither of them actually recording it?",
    correctAnswer: "Heart on My Sleeve",
    acceptableAnswers: [
      "Heart on My Sleeve",
      "Heart on my sleeve",
      "Heart On My Sleeve",
    ],
    explanation:
      "'Heart on My Sleeve' was created by an anonymous AI artist and featured AI-generated vocals mimicking Drake and The Weeknd. It got millions of plays before being removed from streaming platforms!",
    hint: "It featured AI-generated vocals of Drake and The Weeknd",
    order: 5,
    isFinal: true,
  },
  // Add more quiz configurations as needed
};

// Default quiz ID
const DEFAULT_QUIZ = "ai-assistant";

// API to list available quizzes without exposing answers
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const quizId = url.searchParams.get("quizId");
    const getNextQuiz = url.searchParams.get("getNextQuiz");

    // If requesting the next quiz after a specific quiz ID
    if (getNextQuiz && QUIZZES[getNextQuiz]) {
      const currentQuiz = QUIZZES[getNextQuiz];
      const currentOrder = currentQuiz.order;

      // Find the quiz with the next order number
      const nextQuiz = Object.entries(QUIZZES).find(
        ([, config]) => config.order === currentOrder + 1
      );

      if (nextQuiz) {
        const [nextQuizId, nextQuizConfig] = nextQuiz;
        return NextResponse.json({
          quizId: nextQuizId,
          question: nextQuizConfig.question,
          hint: nextQuizConfig.hint,
          isFinal: nextQuizConfig.isFinal || false,
          order: nextQuizConfig.order,
        });
      } else {
        // No more quizzes
        return NextResponse.json({
          noMoreQuizzes: true,
        });
      }
    }

    // If a specific quiz is requested, return that quiz's config without the correct answer
    if (quizId) {
      const quizConfig = QUIZZES[quizId];

      if (!quizConfig) {
        return NextResponse.json({ error: "Invalid quiz ID" }, { status: 400 });
      }

      return NextResponse.json({
        quizId,
        question: quizConfig.question,
        hint: quizConfig.hint,
        isFinal: quizConfig.isFinal || false,
        order: quizConfig.order,
      });
    }

    // If no specific quiz is requested, return the first quiz by order
    const firstQuiz = Object.entries(QUIZZES).sort(
      (a, b) => a[1].order - b[1].order
    )[0];
    const [firstQuizId, firstQuizConfig] = firstQuiz;

    return NextResponse.json({
      quizId: firstQuizId,
      question: firstQuizConfig.question,
      hint: firstQuizConfig.hint,
      isFinal: firstQuizConfig.isFinal || false,
      order: firstQuizConfig.order,
    });
  } catch (error) {
    console.error("Error in quiz config API:", error);
    return NextResponse.json(
      { error: "Failed to get quiz configuration" },
      { status: 500 }
    );
  }
}

// API to validate if an answer is correct
export async function POST(req: NextRequest) {
  try {
    const { answer, quizId = DEFAULT_QUIZ } = await req.json();

    if (answer === undefined) {
      return NextResponse.json(
        { error: "No answer provided" },
        { status: 400 }
      );
    }

    // Get the quiz configuration
    const quizConfig = QUIZZES[quizId];

    if (!quizConfig) {
      return NextResponse.json({ error: "Invalid quiz ID" }, { status: 400 });
    }

    // Use the flexible validation function instead of direct comparison
    const isCorrect = validateAnswer(
      answer,
      quizConfig.acceptableAnswers,
      "contains"
    );

    return NextResponse.json({
      isCorrect,
      quizId,
      isFinal: quizConfig.isFinal || false,
      // Only include explanation if an answer was provided
      explanation: quizConfig.explanation,
      // Only include correct answer if the answer was incorrect
      ...(isCorrect ? {} : { correctAnswer: quizConfig.correctAnswer }),
    });
  } catch (error) {
    console.error("Error in validate API:", error);
    return NextResponse.json(
      { error: "Failed to validate answer" },
      { status: 500 }
    );
  }
}
