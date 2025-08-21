import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  progress: number;
  onAnswer: (option: any) => void;
  onPrevious: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentQuestion,
  totalQuestions,
  progress,
  onAnswer,
  onPrevious
}) => {
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

        <div className="space-y-2 lg:space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option)}
              className="w-full text-left p-3 lg:p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-400 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 bg-white hover:shadow-lg shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-800 font-semibold text-sm lg:text-base">{option.text}</span>
                <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full text-white shadow-md">
                  <ChevronRight className="w-3 h-3" />
                </div>
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
      </div>
    </div>
  );
};

export default QuestionCard; 