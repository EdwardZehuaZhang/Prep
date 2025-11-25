import { Question } from '../types/Question';

export const normalizeAnswer = (answer: string): string => {
  return answer.toLowerCase().trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
};

const splitUserAnswer = (answer: string): string[] => {
  // Split by common separators: comma, "and", or multiple spaces
  // Then normalize each part
  return answer
    .split(/(?:\s*,\s*|\s+and\s+|\s{2,})/)
    .map(part => normalizeAnswer(part))
    .filter(part => part.length > 0);
};

export const checkAnswer = (userAnswer: string, question: Question): boolean => {
  const normalizedUserAnswer = normalizeAnswer(userAnswer);

  if (question.type === 'fill') {
    const expectedAnswers = Array.isArray(question.answer) ? question.answer : [question.answer];
    const normalizedExpectedAnswers = expectedAnswers.map(ans => normalizeAnswer(ans));
    
    // If the expected answer is an array (multiple blanks), check if user provided all parts
    if (Array.isArray(question.answer) && question.answer.length > 1) {
      const userParts = splitUserAnswer(userAnswer);
      
      // Check if all expected answers are present in user's answer (order-independent)
      const allPartsMatch = normalizedExpectedAnswers.every(expected => 
        userParts.includes(expected)
      ) && userParts.length === normalizedExpectedAnswers.length;
      
      if (allPartsMatch) return true;
      
      // Also check exact match for cases like "iron carbon" vs "iron, carbon"
      const joinedUserAnswer = userParts.join(' ');
      const joinedExpected = normalizedExpectedAnswers.join(' ');
      if (joinedUserAnswer === joinedExpected) return true;
    }
    
    // For single-blank questions, check exact match
    return normalizedExpectedAnswers.some(normalizedExpected => 
      normalizedUserAnswer === normalizedExpected
    );
  } else {
    const acceptableAnswers = question.acceptableAnswers || [question.answer as string];
    return acceptableAnswers.some(ans => 
      normalizedUserAnswer.includes(normalizeAnswer(ans))
    );
  }
};
