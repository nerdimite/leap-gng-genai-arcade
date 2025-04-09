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
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") // Remove punctuation
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
  matchType: "exact" | "contains" | "flexible" = "flexible"
): boolean {
  const normalizedUserAnswer = normalizeText(userAnswer);

  // Don't process empty answers
  if (!normalizedUserAnswer) return false;

  return acceptableAnswers.some((answer) => {
    const normalizedAnswer = normalizeText(answer);

    switch (matchType) {
      case "exact":
        // Exact match (after normalization)
        return normalizedUserAnswer === normalizedAnswer;

      case "contains":
        // Answer must contain the correct term
        return (
          normalizedUserAnswer.includes(normalizedAnswer) ||
          normalizedAnswer.includes(normalizedUserAnswer)
        );

      case "flexible":
        // Most flexible matching
        // 1. Check exact match
        if (normalizedUserAnswer === normalizedAnswer) return true;

        // 2. Check contains
        if (
          normalizedUserAnswer.includes(normalizedAnswer) ||
          normalizedAnswer.includes(normalizedUserAnswer)
        )
          return true;

        // 3. Check word by word (partial match)
        const userWords = normalizedUserAnswer.split(" ");
        const answerWords = normalizedAnswer.split(" ");

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
