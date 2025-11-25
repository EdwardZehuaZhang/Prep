import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, ArrowRight, RotateCcw, BookOpen, ChevronDown, Check, SkipForward } from 'lucide-react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { questions } from '../data/questions';
import { Question } from '../types/Question';
import { checkAnswer } from '../utils/answerChecker';

const STORAGE_KEY = 'examPrepProgress';

interface SavedProgress {
  currentQuestion: number;
  score: number;
  attempted: number;
  selectedTopic: string;
  answeredQuestions: Record<string, boolean | 'skipped'>;
  lastUpdated: string;
}

const ExamPrepApp = () => {
  // Initialize state from localStorage
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).currentQuestion : 0;
  });
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).score : 0;
  });
  const [attempted, setAttempted] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).attempted : 0;
  });
  const [selectedTopic, setSelectedTopic] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).selectedTopic : 'all';
  });
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<string, boolean | 'skipped'>>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).answeredQuestions : {};
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);

  // Save progress to localStorage whenever key state changes
  useEffect(() => {
    const progress: SavedProgress = {
      currentQuestion,
      score,
      attempted,
      selectedTopic,
      answeredQuestions,
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [currentQuestion, score, attempted, selectedTopic, answeredQuestions]);

  const topics = ['all', ...new Set(questions.map(q => q.topic))];

  // Shuffle function for randomizing questions
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Store shuffled questions in state to maintain order across renders
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>(() => {
    return shuffleArray(questions);
  });

  const filteredQuestions = selectedTopic === 'all' 
    ? shuffledQuestions 
    : questions.filter(q => q.topic === selectedTopic);

  const currentQ = filteredQuestions[currentQuestion];

  const handleCheckAnswer = () => {
    const answerToCheck = currentQ.type === 'multiple-choice' ? selectedOption : userAnswer;
    
    // Check if the answer is empty (skipped)
    const isEmpty = currentQ.type === 'multiple-choice' ? !selectedOption : !userAnswer.trim();
    
    if (isEmpty) {
      // Mark as skipped
      setIsCorrect(false);
      setShowFeedback(true);
      setAttempted(attempted + 1);
      const questionId = `${selectedTopic}-${currentQuestion}`;
      setAnsweredQuestions(prev => ({ ...prev, [questionId]: 'skipped' }));
    } else {
      // Normal answer checking
      const correct = checkAnswer(answerToCheck, currentQ);
      setIsCorrect(correct);
      setShowFeedback(true);
      setAttempted(attempted + 1);
      if (correct) setScore(score + 1);
      
      // Mark question as answered
      const questionId = `${selectedTopic}-${currentQuestion}`;
      setAnsweredQuestions(prev => ({ ...prev, [questionId]: correct }));
    }
  };

  const handleSkip = () => {
    // Mark question as skipped
    const questionId = `${selectedTopic}-${currentQuestion}`;
    setAnsweredQuestions(prev => ({ ...prev, [questionId]: 'skipped' }));
    setAttempted(attempted + 1);
    
    // Move to next question
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer('');
      setSelectedOption('');
      setShowFeedback(false);
      setShowHint(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer('');
    setSelectedOption('');
    setShowFeedback(false);
    setScore(0);
    setAttempted(0);
    setAnsweredQuestions({});
    // Re-shuffle questions when resetting on "all topics"
    if (selectedTopic === 'all') {
      setShuffledQuestions(shuffleArray(questions));
    }
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !showFeedback) {
      if (currentQ.type === 'multiple-choice' && selectedOption) {
        handleCheckAnswer();
      } else if (currentQ.type !== 'multiple-choice' && userAnswer.trim()) {
        handleCheckAnswer();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-[2rem] border-4 border-gray-100 p-6 sm:p-8 mb-6 sm:sticky sm:top-6 sm:z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl">
                <BookOpen className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ID2322 Exam Prep</h1>
                <p className="text-sm text-gray-500">Materials & Production</p>
              </div>
            </div>
          </div>
          
          {/* Score Display */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Score</div>
                <div className="text-2xl font-bold text-gray-900">
                  {attempted > 0 ? Math.round((score/attempted)*100) : 0}%
                </div>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Progress</div>
                <div className="text-2xl font-bold text-gray-900">{score} / {attempted}</div>
              </div>
            </div>
            <button
              onClick={resetQuiz}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              title="Reset Quiz"
            >
              <RotateCcw size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Topic Filter */}
        <div className="bg-white rounded-[2rem] border-4 border-gray-100 p-6 sm:p-8 mb-6">
          <div className="mb-3">
            <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide block mb-3">
              Filter by Topic
            </label>
          </div>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full p-5 pr-12 border-2 border-gray-200 bg-white rounded-2xl focus:ring-2 focus:ring-black focus:border-black focus:outline-none text-gray-900 font-semibold text-base transition-all cursor-pointer hover:border-gray-300 text-left"
            >
              {selectedTopic === 'all' ? 'All Topics' : selectedTopic}
            </button>
            <ChevronDown 
              size={20} 
              className={`absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
            
            {isDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden z-20 max-h-80 overflow-y-auto scrollbar-hide" style={{ width: 'calc(100% + 4px)', marginLeft: '-2px' }}>
                  {topics.map(topic => (
                    <button
                      key={topic}
                      onClick={() => {
                        setSelectedTopic(topic);
                        setIsDropdownOpen(false);
                        resetQuiz();
                      }}
                      className={`w-full px-5 py-4 text-left font-semibold transition-colors flex items-center justify-between ${
                        selectedTopic === topic 
                          ? 'bg-gray-900 text-white' 
                          : 'bg-white text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <span>{topic === 'all' ? 'All Topics' : topic}</span>
                      {selectedTopic === topic && (
                        <Check size={18} className="text-white" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-[2rem] border-4 border-gray-100 p-6 sm:p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide">
              {currentQ.topic}
            </span>
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-sm font-semibold text-amber-600 hover:text-amber-700 px-4 py-2 rounded-full hover:bg-amber-50 transition-all"
            >
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 leading-relaxed">
            {currentQ.question}
          </h2>

          {/* Input for fill-in-the-blank and short answer */}
          {currentQ.type !== 'multiple-choice' && (
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your answer here..."
              disabled={showFeedback}
              autoFocus={!showFeedback}
              className="w-full p-5 border-2 border-gray-200 bg-white rounded-2xl focus:ring-2 focus:ring-black focus:border-black focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-900 font-medium text-lg transition-all placeholder:text-gray-400"
            />
          )}

          {/* Multiple choice options */}
          {currentQ.type === 'multiple-choice' && currentQ.options && (
            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedOption === option;
                const isCorrectAnswer = showFeedback && option === currentQ.answer;
                const isWrongSelection = showFeedback && isSelected && !isCorrect;
                
                return (
                  <button
                    key={index}
                    onClick={() => !showFeedback && setSelectedOption(option)}
                    disabled={showFeedback}
                    className={`w-full p-5 border-2 rounded-2xl text-left font-medium text-base transition-all ${
                      showFeedback
                        ? isCorrectAnswer
                          ? 'border-green-500 bg-green-50 text-green-900'
                          : isWrongSelection
                          ? 'border-red-500 bg-red-50 text-red-900'
                          : 'border-gray-200 bg-gray-50 text-gray-600'
                        : isSelected
                        ? 'border-black bg-gray-50 text-gray-900'
                        : 'border-gray-200 bg-white text-gray-900 hover:border-gray-300 hover:bg-gray-50 cursor-pointer'
                    } ${showFeedback ? 'cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        showFeedback
                          ? isCorrectAnswer
                            ? 'border-green-500 bg-green-500'
                            : isWrongSelection
                            ? 'border-red-500 bg-red-500'
                            : 'border-gray-300'
                          : isSelected
                          ? 'border-black bg-black'
                          : 'border-gray-300'
                      }`}>
                        {((showFeedback && isCorrectAnswer) || (showFeedback && isWrongSelection) || (!showFeedback && isSelected)) && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="flex-1">{option}</span>
                      {showFeedback && isCorrectAnswer && (
                        <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                      )}
                      {showFeedback && isWrongSelection && (
                        <XCircle className="text-red-600 flex-shrink-0" size={20} />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {!showFeedback && showHint && (
            <div className="mt-5 p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <div className="flex gap-2">
                <span className="text-amber-600 text-base font-medium">💡</span>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  <strong className="text-amber-900 font-semibold">Hint:</strong> {currentQ.hint}
                </p>
              </div>
            </div>
          )}

          {/* Feedback */}
          {showFeedback && (() => {
            const questionId = `${selectedTopic}-${currentQuestion}`;
            const wasSkipped = answeredQuestions[questionId] === 'skipped';
            
            return (
              <div className={`mt-5 p-5 rounded-2xl border-2 ${
                wasSkipped ? 'bg-gray-50 border-gray-300' : 
                isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-center gap-3">
                  {wasSkipped ? (
                    <SkipForward className="text-gray-500 flex-shrink-0" size={24} />
                  ) : isCorrect ? (
                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                  ) : (
                    <XCircle className="text-red-600 flex-shrink-0" size={24} />
                  )}
                  <div className="flex-1">
                    <span className={`font-bold text-base block ${!isCorrect && !wasSkipped ? 'mb-2' : ''} ${
                      wasSkipped ? 'text-gray-700' : 
                      isCorrect ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {wasSkipped ? 'Question Skipped' : isCorrect ? 'Correct! 🎉' : 'Not quite right'}
                    </span>
                    {!isCorrect && (
                      <div className="text-gray-800">
                        <p className="font-semibold text-sm mb-2">Correct answer:</p>
                        <p className="text-sm font-semibold bg-white px-3 py-2 rounded-lg inline-block">
                          {currentQ.type === 'fill' 
                            ? Array.isArray(currentQ.answer) ? currentQ.answer.join(', ') : currentQ.answer
                            : typeof currentQ.answer === 'string' && currentQ.answer.includes(',')
                              ? currentQ.answer
                              : currentQ.acceptableAnswers?.[currentQ.acceptableAnswers.length > 1 ? 1 : 0] || currentQ.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Action Buttons */}
          <div className="mt-8 flex gap-3">
            {!showFeedback ? (
              <>
                <button
                  onClick={handleCheckAnswer}
                  className={`flex-1 py-4 px-6 rounded-2xl font-semibold text-base active:scale-[0.98] transition-all ${
                    (currentQ.type === 'multiple-choice' ? selectedOption : userAnswer.trim())
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-gray-300 text-white cursor-pointer'
                  }`}
                >
                  Check Answer
                </button>
                <button
                  onClick={handleSkip}
                  disabled={currentQuestion >= filteredQuestions.length - 1}
                  className="border-2 border-gray-200 text-gray-700 bg-white py-4 px-5 rounded-2xl font-semibold text-base hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] transition-all disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:active:scale-100"
                  title="Skip this question"
                >
                  Skip
                </button>
              </>
            ) : (
              <>
                {currentQuestion < filteredQuestions.length - 1 ? (
                  <button
                    onClick={nextQuestion}
                    className="flex-1 bg-black text-white py-4 px-6 rounded-2xl font-semibold text-base hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    Next Question <ArrowRight size={20} />
                  </button>
                ) : (
                  <button
                    onClick={resetQuiz}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-2xl font-semibold text-base hover:from-green-700 hover:to-emerald-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <RotateCcw size={20} /> Complete - Start Over
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-[2rem] border-4 border-gray-100 p-6 mb-6">
          <div className="mb-3 flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Overall Progress</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-500">{currentQuestion} / {filteredQuestions.length}</span>
              <span className="text-sm font-semibold text-gray-300">|</span>
              <span className="text-sm font-bold text-gray-900">{Math.round((currentQuestion / filteredQuestions.length) * 100)}%</span>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-black to-gray-700 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentQuestion / filteredQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Answered Questions List */}
        {Object.keys(answeredQuestions).length > 0 && (
          <div className="bg-white rounded-[2rem] border-4 border-gray-100 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Answered Questions</h3>
              <div className="flex items-center gap-3 text-xs font-semibold">
                <span className="text-green-700">
                  {Object.values(answeredQuestions).filter(v => v === true).length} Right
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-red-700">
                  {Object.values(answeredQuestions).filter(v => v === false).length} Wrong
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-600">
                  {Object.values(answeredQuestions).filter(v => v === 'skipped').length} Skipped
                </span>
              </div>
            </div>
            
            {/* Grid of Question Numbers */}
            <div className="grid grid-cols-4 gap-2">
              {filteredQuestions.map((question, index) => {
                const questionId = `${selectedTopic}-${index}`;
                const isAnswered = answeredQuestions[questionId] !== undefined;
                const wasCorrect = answeredQuestions[questionId];
                const wasSkipped = answeredQuestions[questionId] === 'skipped';
                const isExpanded = expandedQuestionId === questionId;
                
                if (!isAnswered) return null;
                
                // Calculate which row this question is in (0-indexed)
                const answeredIndices = filteredQuestions
                  .map((_, i) => answeredQuestions[`${selectedTopic}-${i}`] !== undefined ? i : -1)
                  .filter(i => i !== -1);
                const positionInAnswered = answeredIndices.indexOf(index);
                const currentRow = Math.floor(positionInAnswered / 4);
                const expandedIndex = expandedQuestionId ? answeredIndices.indexOf(
                  filteredQuestions.findIndex((_, i) => `${selectedTopic}-${i}` === expandedQuestionId)
                ) : -1;
                const expandedRow = expandedIndex !== -1 ? Math.floor(expandedIndex / 4) : -1;
                const isLastInRow = (positionInAnswered + 1) % 4 === 0 || positionInAnswered === answeredIndices.length - 1;
                const shouldShowExpanded = isExpanded || (expandedRow === currentRow && isLastInRow);
                
                return (
                  <React.Fragment key={questionId}>
                    <button
                      onClick={() => {
                        if (isExpanded) {
                          // Second click - jump to question
                          setCurrentQuestion(index);
                          setUserAnswer('');
                          setSelectedOption('');
                          setShowFeedback(false);
                          setExpandedQuestionId(null);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          // First click - expand
                          setExpandedQuestionId(questionId);
                        }
                      }}
                      className="py-2 px-3 transition-all text-left hover:bg-gray-100 rounded-lg"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900">
                          Q{index + 1}
                        </span>
                        {wasSkipped ? (
                          <SkipForward className="text-gray-500 flex-shrink-0" size={20} />
                        ) : wasCorrect ? (
                          <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                        ) : (
                          <XCircle className="text-red-600 flex-shrink-0" size={20} />
                        )}
                      </div>
                    </button>
                    
                    {/* Expanded Question Card - appears after last item in row */}
                    {shouldShowExpanded && expandedQuestionId && expandedRow === currentRow && isLastInRow && (() => {
                      const expandedIdx = filteredQuestions.findIndex((_, i) => `${selectedTopic}-${i}` === expandedQuestionId);
                      if (expandedIdx === -1) return null;
                      const expandedQuestion = filteredQuestions[expandedIdx];
                      const expandedWasCorrect = answeredQuestions[expandedQuestionId];
                      const expandedWasSkipped = answeredQuestions[expandedQuestionId] === 'skipped';
                      
                      return (
                        <div className="col-span-4 mt-1">
                          <div className={`p-5 rounded-2xl border-2 ${
                            expandedWasSkipped
                              ? 'border-gray-300 bg-gray-50'
                              : expandedWasCorrect 
                              ? 'border-green-300 bg-green-50' 
                              : 'border-red-300 bg-red-50'
                          }`}>
                            <div className="flex items-start gap-3 mb-3">
                              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                                expandedWasSkipped ? 'bg-gray-500' :
                                expandedWasCorrect ? 'bg-green-500' : 'bg-red-500'
                              }`}>
                                {expandedWasSkipped ? (
                                  <SkipForward className="text-white" size={20} />
                                ) : expandedWasCorrect ? (
                                  <CheckCircle className="text-white" size={20} />
                                ) : (
                                  <XCircle className="text-white" size={20} />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                    expandedWasSkipped ? 'bg-gray-200 text-gray-800' :
                                    expandedWasCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                                  }`}>
                                    Question {expandedIdx + 1}
                                  </span>
                                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                    {expandedQuestion.topic}
                                  </span>
                                </div>
                                <p className={`text-sm font-semibold leading-relaxed ${
                                  expandedWasSkipped ? 'text-gray-900' :
                                  expandedWasCorrect ? 'text-green-900' : 'text-red-900'
                                }`}>
                                  {expandedQuestion.question}
                                </p>
                              </div>
                            </div>
                            <div className="text-xs text-gray-600 bg-white px-3 py-2 rounded-lg">
                              <span className="font-semibold">Click again to jump to this question</span>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        )}
        
        {/* Social Media Panel */}
        <div className="bg-white rounded-[2rem] border-4 border-gray-100 p-6 mt-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 text-center">Connect With Me</h3>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/EdwardZehuaZhang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              title="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/edwardzehuazhang/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://www.edwardzehuazhang.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              title="Website"
            >
              <FaGlobe size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPrepApp;
