import { Question } from '../types/Question';

export const normalizeAnswer = (answer: string): string => {
  return answer.toLowerCase().trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
};

export const checkAnswer = (userAnswer: string, question: Question): boolean => {
  const normalizedUserAnswer = normalizeAnswer(userAnswer);

  if (question.type === 'fill') {
    const expectedAnswers = Array.isArray(question.answer) ? question.answer : [question.answer];
    const normalizedExpectedAnswers = expectedAnswers.map(ans => normalizeAnswer(ans));
    
    // Check if the normalized user answer matches any of the normalized expected answers
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
