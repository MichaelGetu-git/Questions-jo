import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  progress: number;
  onAnswer: (option: any) => void;
  onPrevious: () => void;
  onNext: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentQuestion,
  totalQuestions,
  progress,
  onAnswer,
  onPrevious,
  onNext
}) => {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    // Don't call onAnswer here - only store the selection
  };

  const handleNext = () => {
    if (selectedOption) {
      onAnswer(selectedOption); // Call onAnswer only when Next is clicked
      onNext();
      setSelectedOption(null); // Reset selection for next question
    }
  };

  return (
    <div className="lg:col-span-2">
      <div className="mb-4 lg:mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-gray-700">Progress</span>
          <span className="text-xs font-semibold text-gray-700">{currentQuestion + 1} of {totalQuestions}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
          <div 
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-2 rounded-full transition-all duration-700 ease-out shadow-lg"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 mb-6 border border-gray-100">
        <div className="mb-4 lg:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <span className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              Question {currentQuestion + 1}
            </span>
            <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              {question.category}
            </span>
          </div>
          
          <h2 className="text-lg lg:text-xl font-bold text-gray-800 leading-relaxed mb-3">
            {question.text}
          </h2>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-3 border border-indigo-100">
            <div className="flex items-start">
              <div className="w-1 h-1 bg-indigo-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 text-sm leading-relaxed">
                <span className="font-semibold text-indigo-700">Why this matters: </span>
                {question.explanation}
              </p>
            </div>
          </div>
        </div>

        {/* Options in row format */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`text-center p-3 lg:p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.05] focus:outline-none focus:ring-4 focus:ring-indigo-200 shadow-md hover:shadow-lg ${
                selectedOption === option
                  ? 'border-indigo-500 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800'
                  : 'border-gray-200 hover:border-indigo-400 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 bg-white text-gray-800'
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full shadow-md ${
                  selectedOption === option
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                    : 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                }`}>
                  <span className="text-sm font-bold">{String.fromCharCode(65 + index)}</span>
                </div>
                <span className="font-semibold text-sm lg:text-base leading-tight">
                  {option.text}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <button
          onClick={onPrevious}
          disabled={currentQuestion === 0}
          className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
            currentQuestion === 0 
              ? 'text-gray-400 cursor-not-allowed bg-gray-100' 
              : 'text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 bg-white shadow-md hover:shadow-lg'
          }`}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className={`flex items-center px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
            selectedOption
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105'
              : 'text-gray-400 cursor-not-allowed bg-gray-100'
          }`}
        >
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;