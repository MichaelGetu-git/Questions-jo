import { 
  Users, 
  Lightbulb, 
  Shield,
  Rocket,
  Zap,
  Heart,
  GraduationCap,
  HandHeart
} from 'lucide-react';
import type { LeadershipStyle } from '../types';

export const leadershipStyles: Record<string, LeadershipStyle> = {
  bureaucratic: {
    title: "Bureaucratic Leader",
    icon: <Zap className="w-8 h-8" />,
    color: "bg-gray-500",
    description: "You value structure, procedures, and systematic approaches. Your strength lies in creating order and ensuring compliance with established standards.",
    characteristics: [
      "Follows established rules and procedures",
      "Maintains clear organizational hierarchy",
      "Ensures consistency and standardization",
      "Effective in regulated environments"
    ]
  },
  authoritative: {
    title: "Authoritative Leader",
    icon: <Shield className="w-8 h-8" />,
    color: "bg-red-500",
    description: "You rely on your power and authority to make decisions and direct others. Your strength lies in maintaining discipline and enforcing rules.",
    characteristics: [
      "Makes decisions quickly and confidently",
      "Expects unquestioning obedience",
      "Maintains strict control over subordinates",
      "Effective in crisis situations"
    ]
  },
  innovative: {
    title: "Innovative Leader",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "bg-purple-500",
    description: "You are constantly seeking new ideas and pushing boundaries. Your strength lies in creativity and adaptability.",
    characteristics: [
      "Generates new ideas and solutions",
      "Embraces change and uncertainty",
      "Challenges the status quo",
      "Demonstrates high energy and enthusiasm"
    ]
  },
  pacesetting: {
    title: "Pacesetting Leader",
    icon: <Rocket className="w-8 h-8" />,
    color: "bg-blue-500",
    description: "You set high standards and push yourself and others to achieve rapid progress. Your strength lies in motivation and drive.",
    characteristics: [
      "Sets ambitious goals and deadlines",
      "Demands excellence from team members",
      "Drives rapid progress and innovation",
      "High energy and enthusiasm"
    ]
  },
  democratic: {
    title: "Democratic Leader",
    icon: <Users className="w-8 h-8" />,
    color: "bg-green-500",
    description: "You involve others in decision-making and encourage participation. Your strength lies in collaboration and inclusivity.",
    characteristics: [
      "Encourages participation and collaboration",
      "Values input from all team members",
      "Makes decisions collectively",
      "Promotes a sense of ownership"
    ]
  },
  affiliative: {
    title: "Affiliative Leader",
    icon: <HandHeart className="w-8 h-8" />,
    color: "bg-pink-500",
    description: "You focus on building strong relationships and fostering a sense of belonging. Your strength lies in empathy and emotional support.",
    characteristics: [
      "Builds strong relationships and trust",
      "Emotional intelligence and empathy",
      "Fosters a supportive and inclusive environment",
      "Highly collaborative"
    ]
  },
  coaching: {
    title: "Coaching Leader",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "bg-indigo-500",
    description: "You focus on developing others and empowering them to grow. Your strength lies in mentorship and development.",
    characteristics: [
      "Focuses on developing others",
      "Provides guidance and support",
      "Encourages self-development",
      "Highly supportive"
    ]
  },
  altruistic: {
    title: "Altruistic Leader",
    icon: <Heart className="w-8 h-8" />,
    color: "bg-orange-500",
    description: "You prioritize the well-being of others and strive for the greater good. Your strength lies in selflessness and purpose.",
    characteristics: [
      "Prioritizes the needs of others",
      "Strives for the greater good",
      "Selfless and purpose-driven",
      "Highly empathetic"
    ]
  }
}; 