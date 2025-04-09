/**
 * Utility functions for validating quiz answers with different levels of matching
 */

/**
 * Clean and normalize text for comparison
 * @param text The text to normalize
 */
export function normalizeText(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[-_]/g, "") // Remove hyphens and underscores specifically
    .replace(/[.,\/#!$%\^&\*;:{}=`~()]/g, "") // Remove other punctuation but preserve hyphen
    .replace(/\s+/g, " "); // Normalize whitespace
}

/**
 * Check if the user's answer matches any of the acceptable answers
 *
 * @param userAnswer The user's answer
 * @param acceptableAnswers Array of acceptable answers
 * @param matchType The type of matching to use
 * @returns boolean indicating if the answer is correct
 */
export function validateAnswer(
  userAnswer: string,
  acceptableAnswers: string[],
  matchType: "exact" | "contains" | "flexible" = "contains"
): boolean {
  const normalizedUserAnswer = normalizeText(userAnswer);

  // Don't process empty answers
  if (!normalizedUserAnswer) return false;

  // Special case for very short answers (likely not valid for most questions)
  if (normalizedUserAnswer.length < 2 && matchType === "flexible") {
    // For very short answers, only accept exact matches
    return acceptableAnswers.some(
      (answer) => normalizeText(answer) === normalizedUserAnswer
    );
  }

  return acceptableAnswers.some((answer) => {
    const normalizedAnswer = normalizeText(answer);

    switch (matchType) {
      case "exact":
        // Exact match (after normalization)
        return normalizedUserAnswer === normalizedAnswer;

      case "contains":
        // If user answer is very short (1-2 characters), don't use contains logic
        if (normalizedUserAnswer.length <= 3) {
          return normalizedUserAnswer === normalizedAnswer;
        }

        // For normal answers, check if one contains the other
        return (
          normalizedUserAnswer.includes(normalizedAnswer)
        );

      case "flexible":
        // 1. Check exact match
        if (normalizedUserAnswer === normalizedAnswer) return true;

        // 2. Check contains with length protection
        // Only consider "contains" logic if:
        // - User answer is 3+ characters
        // - User answer is at least 70% of the length of the correct answer
        if (
          normalizedUserAnswer.length >= 3 &&
          normalizedUserAnswer.length >= normalizedAnswer.length * 0.7
        ) {
          if (
            normalizedUserAnswer.includes(normalizedAnswer)
          )
            return true;
        }

        // 3. Check word by word (partial match)
        const userWords = normalizedUserAnswer.split(" ");
        const answerWords = normalizedAnswer.split(" ");

        // For short single-word answers, be stricter
        if (userWords.length === 1 && userWords[0].length < 4) {
          return answerWords.includes(userWords[0]);
        }

        // Check if significant words are present (excluding common words)
        const significantWords = answerWords.filter(
          (word) =>
            word.length > 3 &&
            !["and", "the", "this", "that", "with"].includes(word)
        );

        const matchedWords = significantWords.filter((word) =>
          userWords.includes(word)
        );

        // If most significant words match, count it as correct
        return (
          matchedWords.length > 0 &&
          matchedWords.length >= Math.ceil(significantWords.length * 0.7)
        );

      default:
        return false;
    }
  });
}
