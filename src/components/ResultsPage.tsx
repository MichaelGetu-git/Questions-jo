import React from 'react';
import { Target } from 'lucide-react';
import type { AssessmentResult, LeadershipStyle } from '../types';
import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Tooltip
} from 'recharts';

interface ResultsPageProps {
    results: AssessmentResult[];
    leadershipStyles: Record<string, LeadershipStyle>;
    onReset: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({
    results,
    leadershipStyles,
    onReset
}) => {
    const primaryStyle = results[0];
    const secondaryStyle = results[1];
    const styleData = leadershipStyles[primaryStyle?.style || 'bureaucratic'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <a href="/" className="text-center mb-6 lg:mb-8">
                    <div className="flex items-center justify-center gap-2 md:gap-4 mb-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-indigo-500 to-orange-600 rounded-2xl text-white shadow-lg">
                            <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-orange-700 to-purple-600 bg-clip-text text-transparent">
                            Leadership Style Assessment
                        </h1>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto leading-relaxed mb-3">
                        Discover your unique leadership approach and unlock your potential
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </a>
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Results Card */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 mb-6 border border-gray-100">
                            <div className="text-center mb-6">
                                <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 ${styleData.color} rounded-2xl text-white mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                                    {styleData.icon}
                                </div>
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3">{styleData.title}</h2>
                                <p className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                    {styleData.description}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                                    <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-4 flex items-center">
                                        <div className="w-2 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-2"></div>
                                        Key Characteristics
                                    </h3>
                                    <ul className="space-y-2">
                                        {styleData.characteristics.map((char: string, index: number) => (
                                            <li key={index} className="flex items-center text-gray-700 text-sm">
                                                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-3"></div>
                                                {char}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                                    <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-4 flex items-center">
                                        <div className="w-2 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-2"></div>
                                        Style Breakdown
                                    </h3>
                                    <div className="space-y-3">
                                        {results.map(({ style, score }) => {
                                            const styleData = leadershipStyles[style];
                                            return (
                                                <div key={style} className="bg-white rounded-lg p-3 shadow-sm">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="font-semibold text-gray-700 capitalize text-sm">{style}</span>
                                                        <span className="text-sm font-bold text-indigo-600">{score}</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
                                                        <div
                                                            className={`h-2 ${styleData.color} rounded-full transition-all duration-700 shadow-sm`}
                                                            style={{ width: `${(score / Math.max(...results.map(r => r.score))) * 100}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Radar Chart Visualization */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 mt-8 border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">Leadership Style Radar</h3>
                                <ResponsiveContainer width="100%" height={350}>
                                    <RadarChart outerRadius={120} data={results}>
                                        <PolarGrid />
                                        <PolarAngleAxis dataKey="style" />
                                        <PolarRadiusAxis />
                                        <Radar
                                            name="Score"
                                            dataKey="score"
                                            stroke="#4F46E5"
                                            fill="#6366F1"
                                            fillOpacity={0.6}
                                        />
                                        <Tooltip />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {secondaryStyle && secondaryStyle.score > 0 && (
                            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
                                <div className="flex items-center mb-3">
                                    <div className="w-1 h-5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-3"></div>
                                    <h3 className="text-lg font-bold text-gray-800">Secondary Style: {leadershipStyles[secondaryStyle.style]?.title}</h3>
                                </div>
                                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                                    You also show strong tendencies toward {leadershipStyles[secondaryStyle.style]?.title.toLowerCase()} leadership,
                                    which gives you versatility in different situations.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar with Insights */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-4">
                            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                                <div className="text-center mb-5">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white mb-3 shadow-lg">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">Your Leadership Profile</h3>
                                    <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                                            <div className="w-1 h-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-2"></div>
                                            Primary Style
                                        </h4>
                                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-3 border border-indigo-100">
                                            <div className="flex items-center mb-1">
                                                <div className={`w-3 h-3 ${styleData.color} rounded-full mr-2`}></div>
                                                <span className="font-semibold text-gray-800 text-sm">{styleData.title}</span>
                                            </div>
                                            <div className="text-xs text-gray-600">
                                                Score: <span className="font-bold text-indigo-600">{primaryStyle.score}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {secondaryStyle && secondaryStyle.score > 0 && (
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                                                <div className="w-1 h-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-2"></div>
                                                Secondary Style
                                            </h4>
                                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 border border-green-100">
                                                <div className="flex items-center mb-1">
                                                    <div className={`w-3 h-3 ${leadershipStyles[secondaryStyle.style].color} rounded-full mr-2`}></div>
                                                    <span className="font-semibold text-gray-800 text-sm">{leadershipStyles[secondaryStyle.style].title}</span>
                                                </div>
                                                <div className="text-xs text-gray-600">
                                                    Score: <span className="font-bold text-green-600">{secondaryStyle.score}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                                            <div className="w-1 h-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-2"></div>
                                            Leadership Versatility
                                        </h4>
                                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 border border-blue-100">
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                Your leadership profile shows a {secondaryStyle && secondaryStyle.score > 0 ? 'balanced' : 'focused'} approach.
                                                {secondaryStyle && secondaryStyle.score > 0
                                                    ? ' This versatility allows you to adapt your style to different situations and team needs.'
                                                    : ' Consider developing complementary skills to become a more well-rounded leader.'
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reset Button */}
                <div className="text-center pt-3">
                    <button
                        onClick={onReset}
                        className="bg-indigo-600 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
                    >
                        Take Assessment Again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultsPage;
