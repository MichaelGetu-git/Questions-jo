import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define Question type locally without explanation
interface QuestionOption {
  text: string;
  value?: any;
}

interface Question {
  text: string;
  category: string;
  options: QuestionOption[];
}

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
      <div className="mb-6 lg:mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold text-gray-700">Progress</span>
          <span className="text-sm font-semibold text-gray-700">{currentQuestion + 1} of {totalQuestions}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
          <div 
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-3 rounded-full transition-all duration-700 ease-out shadow-lg"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 mb-8 border border-gray-100">
        <div className="mb-8 lg:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
              {question.category}
            </span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 leading-relaxed">
            {question.text}
          </h2>
        </div>

        {/* Options in row format with improved sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`text-center p-4 lg:p-5 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-indigo-200 shadow-md hover:shadow-lg ${
                selectedOption === option
                  ? 'border-indigo-500 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800'
                  : 'border-gray-200 hover:border-indigo-400 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 bg-white text-gray-800'
              }`}
            >
              <div className="flex flex-col items-center">
                <span className="font-bold text-base lg:text-lg leading-tight">
                  {option.text}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Mobile-first: Next button appears first and more prominent */}
        <div className="order-2 sm:order-1">
          <button
            onClick={onPrevious}
            disabled={currentQuestion === 0}
            className={`w-full sm:w-auto flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-base ${
              currentQuestion === 0 
                ? 'text-gray-400 cursor-not-allowed bg-gray-100' 
                : 'text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 bg-white shadow-md hover:shadow-lg'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>
        </div>

        <div className="order-1 sm:order-2">
          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`w-full flex items-center justify-center px-8 py-4 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-lg sm:text-base ${
              selectedOption
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                : 'text-gray-400 cursor-not-allowed bg-gray-100'
            }`}
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;