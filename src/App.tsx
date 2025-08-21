import React, { useState, useEffect } from 'react';
import { questions } from './data/questions';
import { leadershipStyles } from './data/leadershipStyles.tsx';
import type { AssessmentResult } from './types';

import Header from './components/Header';
import QuestionCard from './components/QuestionCard';
import ResultsPage from './components/ResultsPage';

const LeadershipQuestionnaire: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);
  const [_, setCurrentTopStyle] = useState<string | null>(null);

  useEffect(() => {
    const savedProgress = localStorage.getItem('leadershipAssessmentProgress');
    if (savedProgress) {
      try {
        const { answers: savedAnswers, currentQuestion: savedQuestion } = JSON.parse(savedProgress);
        setAnswers(savedAnswers || {});
        setCurrentQuestion(savedQuestion || 0);
        setProgress(((savedQuestion || 0) / questions.length) * 100);
      } catch (error) {
        console.log('No saved progress found');
      }
    }
  }, []);

  useEffect(() => {
    if (Object.keys(answers).length > 0 || currentQuestion > 0) {
      localStorage.setItem('leadershipAssessmentProgress', JSON.stringify({
        answers,
        currentQuestion
      }));
    }
  }, [answers, currentQuestion]);

  const getCurrentTopStyle = () => {
    if (Object.keys(answers).length === 0) return null;
    
    const scores: Record<string, number> = {
      bureaucratic: 0,
      authoritative: 0,
      innovative: 0,
      pacesetting: 0,
      democratic: 0,
      affiliative: 0,
      coaching: 0,
      altruistic: 0
    };
    
    Object.values(answers).forEach((answer: any) => {
      if (answer && answer.points) {
        Object.entries(answer.points).forEach(([style, points]) => {
          if (scores.hasOwnProperty(style)) {
            scores[style] += points as number;
          }
        });
      }
    });

    const topStyle = Object.entries(scores)
      .sort(([,a], [,b]) => b - a)[0];
    
    return topStyle && topStyle[1] > 0 ? topStyle[0] : null;
  };

  useEffect(() => {
    const topStyle = getCurrentTopStyle();
    setCurrentTopStyle(topStyle);
  }, [answers]);

  // This now only stores the answer, doesn't advance
  const handleAnswer = (option: any) => {
    const newAnswers = { ...answers, [currentQuestion]: option };
    setAnswers(newAnswers);
  };

  // New function to handle advancing to next question
  const handleNext = () => {
    const newProgress = ((currentQuestion + 1) / questions.length) * 100;
    setProgress(newProgress);
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const calculateResults = (): AssessmentResult[] => {
    const scores: Record<string, number> = {
      bureaucratic: 0,
      authoritative: 0,
      innovative: 0,
      pacesetting: 0,
      democratic: 0,
      affiliative: 0,
      coaching: 0,
      altruistic: 0
    };
    
    Object.values(answers).forEach((answer: any) => {
      if (answer && answer.points) {
      Object.entries(answer.points).forEach(([style, points]) => {
          if (scores.hasOwnProperty(style)) {
            scores[style] += points as number;
          }
      });
      }
    });

    return Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .map(([style, score]) => ({ style, score }));
  };

  const resetQuestionnaire = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setProgress(0);
    setCurrentTopStyle(null);
    localStorage.removeItem('leadershipAssessmentProgress');
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const newProgress = (currentQuestion / questions.length) * 100;
      setProgress(newProgress);
    }
  };

  if (showResults) {
    const results = calculateResults();
    return (
      <ResultsPage
        results={results}
        leadershipStyles={leadershipStyles}
        onReset={resetQuestionnaire}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-3">
      <div className="max-w-6xl mx-auto">
        <Header />

        <div className="flex items-center justify-center">
          <QuestionCard
            question={questions[currentQuestion]}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            progress={progress}
            onAnswer={handleAnswer}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
         
        </div>
        
      </div>
    </div>
  );
};

export default LeadershipQuestionnaire;