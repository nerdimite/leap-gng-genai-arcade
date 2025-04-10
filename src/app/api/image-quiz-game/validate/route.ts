import { NextRequest, NextResponse } from "next/server";
import { validateAnswer } from "@/utils/answerValidation";

// Define the image quiz configuration interface
interface ImageQuizConfig {
  imageUrl: string;
  question: string;
  correctAnswer: string;
  acceptableAnswers: string[];
  explanation: string;
  hint?: string;
  order: number;
  isFinal?: boolean;
}

// Image Quiz configuration data - stored server-side
const IMAGE_QUIZZES: Record<string, ImageQuizConfig> = {
  nlp: {
    imageUrl: "/image-quiz/nlp.png",
    question: "Decode the image to find the correct answer.",
    correctAnswer: "Natural Language Processing",
    acceptableAnswers: ["Natural Language Processing", "NLP", "NLPs"],
    explanation: "",
    hint: "",
    order: 1,
  },
  "computer-vision": {
    imageUrl: "/image-quiz/computer-vision.png",
    question: "Decode the image to find the correct answer.",
    correctAnswer: "Computer Vision",
    acceptableAnswers: [
      "Computer Vision",
      "CV",
      "CVs",
      "Computer Vision Models",
      "CV Models",
      "Machine vision",
    ],
    explanation: "",
    hint: "",
    order: 2,
  },
  vector: {
    imageUrl: "/image-quiz/stable-diffusion.png",
    question: "Decode the image to find the correct answer.",
    correctAnswer: "Stable Diffusion",
    acceptableAnswers: [
      "Stable Diffusion",
      "Stable Diffusion Models",
      "stable-diffusion",
    ],
    explanation: "",
    hint: "",
    order: 3,
  },
  huggingface: {
    imageUrl: "/image-quiz/huggingface.png",
    question: "Decode the image to find the correct answer.",
    correctAnswer: "Hugging Face",
    acceptableAnswers: ["Hugging Face", "Huggingface", "hugging-face"],
    explanation: "",
    hint: "",
    order: 4,
  },
  llm: {
    imageUrl: "/image-quiz/llm.png",
    question: "Decode the image to find the correct answer.",
    correctAnswer: "LLM",
    acceptableAnswers: [
      "LLM",
      "Large Language Model",
      "LLMs",
      "Large Language Models",
      "llm",
    ],
    explanation: "",
    hint: "",
    order: 5,
    isFinal: true,
  },
};

// Default image quiz ID
const DEFAULT_IMAGE_QUIZ = "nlp";

// API to list available image quizzes without exposing answers
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const imageId = url.searchParams.get("imageId");
    const getNextImage = url.searchParams.get("getNextImage");

    // If requesting the next image quiz after a specific image ID
    if (getNextImage && IMAGE_QUIZZES[getNextImage]) {
      const currentQuiz = IMAGE_QUIZZES[getNextImage];
      const currentOrder = currentQuiz.order;

      // Find the quiz with the next order number
      const nextQuiz = Object.entries(IMAGE_QUIZZES).find(
        ([, config]) => config.order === currentOrder + 1
      );

      if (nextQuiz) {
        const [nextImageId, nextImageConfig] = nextQuiz;
        return NextResponse.json({
          imageId: nextImageId,
          imageUrl: nextImageConfig.imageUrl,
          question: nextImageConfig.question,
          hint: nextImageConfig.hint,
          isFinal: nextImageConfig.isFinal || false,
          order: nextImageConfig.order,
        });
      } else {
        // No more image quizzes
        return NextResponse.json({
          noMoreQuizzes: true,
        });
      }
    }

    // If a specific image quiz is requested, return that quiz's config without the correct answer
    if (imageId) {
      const imageConfig = IMAGE_QUIZZES[imageId];

      if (!imageConfig) {
        return NextResponse.json(
          { error: "Invalid image ID" },
          { status: 400 }
        );
      }

      return NextResponse.json({
        imageId,
        imageUrl: imageConfig.imageUrl,
        question: imageConfig.question,
        hint: imageConfig.hint,
        isFinal: imageConfig.isFinal || false,
        order: imageConfig.order,
      });
    }

    // If no specific image quiz is requested, return the first quiz by order
    const firstQuiz = Object.entries(IMAGE_QUIZZES).sort(
      (a, b) => a[1].order - b[1].order
    )[0];
    const [firstImageId, firstImageConfig] = firstQuiz;

    return NextResponse.json({
      imageId: firstImageId,
      imageUrl: firstImageConfig.imageUrl,
      question: firstImageConfig.question,
      hint: firstImageConfig.hint,
      isFinal: firstImageConfig.isFinal || false,
      order: firstImageConfig.order,
    });
  } catch (error) {
    console.error("Error in image quiz config API:", error);
    return NextResponse.json(
      { error: "Failed to get image quiz configuration" },
      { status: 500 }
    );
  }
}

// API to validate if an answer is correct
export async function POST(req: NextRequest) {
  try {
    const { answer, imageId = DEFAULT_IMAGE_QUIZ } = await req.json();

    if (answer === undefined) {
      return NextResponse.json(
        { error: "No answer provided" },
        { status: 400 }
      );
    }

    // Get the image quiz configuration
    const imageConfig = IMAGE_QUIZZES[imageId];

    if (!imageConfig) {
      return NextResponse.json({ error: "Invalid image ID" }, { status: 400 });
    }

    // Use the flexible validation function instead of direct comparison
    const isCorrect = validateAnswer(
      answer,
      imageConfig.acceptableAnswers,
      "contains"
    );

    return NextResponse.json({
      isCorrect,
      imageId,
      isFinal: imageConfig.isFinal || false,
      // Only include explanation if an answer was provided
      explanation: imageConfig.explanation,
      // Only include correct answer if the answer was incorrect
      ...(isCorrect ? {} : { correctAnswer: imageConfig.correctAnswer }),
    });
  } catch (error) {
    console.error("Error in image quiz validate API:", error);
    return NextResponse.json(
      { error: "Failed to validate answer" },
      { status: 500 }
    );
  }
}
