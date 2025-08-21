import React from 'react';

export interface LeadershipStyle {
  title: string;
  icon: React.ReactElement;
  color: string;
  description: string;
  characteristics: string[];
}

export interface Question {
  id: number;
  category: string | any;
  text: string;
  explanation: string;
  options: {
    text: string;
    value: string;
    points: Record<string, number>;
  }[];
}

export interface DevelopmentStep {
  title: string;
  description: string;
  steps: string[];
}

export interface AssessmentResult {
  style: string;
  score: number;
} 