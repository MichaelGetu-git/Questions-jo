import React from 'react';
import { Target } from 'lucide-react';
import type { LeadershipStyle } from '../types';

interface DesktopSidebarProps {
  currentTopStyle: string | null;
  leadershipStyles: Record<string, LeadershipStyle>;
  answers: Record<number, any>;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ 
  currentTopStyle, 
  leadershipStyles, 
  answers 
}) => {
  if (!currentTopStyle) {
    return (
      <div className="hidden lg:block lg:col-span-1 pt-40">
        <div className="sticky top-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl text-white mb-3 shadow-lg">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">
                Ready to Discover?
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Start answering questions to see which leadership style resonates with you most. Your insights will appear here as you progress!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden lg:block lg:col-span-1 pt-8">
      <div className="sticky top-3">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="text-center mb-4">
            <div className={`inline-flex items-center justify-center w-12 h-12 ${leadershipStyles[currentTopStyle].color} rounded-xl text-white mb-3 shadow-lg`}>
              {leadershipStyles[currentTopStyle].icon}
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {leadershipStyles[currentTopStyle].title}
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
              <div className="w-1 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-2"></div>
              Current Strengths
            </h4>
            <p className="text-gray-600 text-xs leading-relaxed">
              {leadershipStyles[currentTopStyle].description}
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
              <div className="w-1 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-2"></div>
              Key Traits
            </h4>
            <ul className="space-y-1">
              {leadershipStyles[currentTopStyle].characteristics.slice(0, 3).map((char, index) => (
                <li key={index} className="flex items-center text-gray-600 text-xs">
                  <div className="w-1 h-1 bg-indigo-400 rounded-full mr-2"></div>
                  {char}
                </li>
              ))}
            </ul>
          </div>
        {/* Radar Chart Visualization */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 mb-3">
              <div className="text-center mb-2">
                <div className="text-xs font-semibold text-gray-700">Leadership Style Radar</div>
              </div>
              <div className="grid grid-cols-4 gap-1">
                {(() => {
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

                  const maxScore = Math.max(...Object.values(scores));
                  const normalizedScores = Object.entries(scores).map(([style, score]) => ({
                    style,
                    score,
                    percentage: maxScore > 0 ? (score / maxScore) * 100 : 0
                  }));

                  return normalizedScores.map(({ style, score, percentage }) => (
                    <div key={style} className="text-center">
                      <div className="relative w-10 h-10 mx-auto mb-1">
                        <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
                        <div 
                          className={`absolute inset-0 ${leadershipStyles[style].color} rounded-full transition-all duration-500`}
                          style={{ 
                            clipPath: `polygon(50% 50%, 50% ${50 - percentage/2}%, ${50 + percentage/2}% 50%, 50% 50%)`,
                            transform: 'rotate(-90deg)'
                          }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-bold text-gray-700">{score}</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 capitalize truncate">{style}</div>
                    </div>
                  ));
                })()}
              </div>
            </div>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-3 border border-indigo-100">
            <div className="text-center">
              <div className="text-xs font-semibold text-indigo-700 mb-1">Keep Going!</div>
              <div className="text-xs text-indigo-600">
                You're showing strong {currentTopStyle} tendencies. Complete the assessment to see your full profile!
              </div>
            </div>
          </div>

          {/* Real-time Scoring Preview */}
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
              <div className="w-1 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-2"></div>
              Current Scores
            </h4>
            
            
            {/* Detailed Score List */}
            <div className="space-y-2">
              {(() => {
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
                  .slice(0, 5)
                  .map(([style, score]) => (
                    <div key={style} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 ${leadershipStyles[style].color} rounded-full mr-2`}></div>
                        <span className="text-xs font-medium text-gray-700 capitalize">{style}</span>
                      </div>
                      <span className="text-xs font-bold text-indigo-600">{score}</span>
                    </div>
                  ));
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar; 