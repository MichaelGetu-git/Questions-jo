
export const questions = [
    {
      id: 1,
      category: "People Development",
      text: "Focus on the professional development of others.",
      explanation: "This question explores how much you prioritize helping others grow and develop their skills.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 0, authoritative: 0, innovative: 0, pacesetting: 0, democratic: 0, affiliative: 0, coaching: 0, altruistic: 0 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 0, authoritative: 0, innovative: 0, pacesetting: 0, democratic: 0, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 0, authoritative: 1, innovative: 1, pacesetting: 0, democratic: 1, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 1, innovative: 1, pacesetting: 0, democratic: 1, affiliative: 3, coaching: 3, altruistic: 3 } }
      ]
    },
    {
      id: 2,
      category: "Decision Making",
      text: "I have more experience and information than the people I am leading.",
      explanation: "This explores your comfort level with making decisions based on your expertise versus seeking input.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 0, authoritative: 0, innovative: 0, pacesetting: 0, democratic: 3, affiliative: 0, coaching: 0, altruistic: 0 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 0, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 2, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 2, altruistic: 1 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 2, authoritative: 3, innovative: 1, pacesetting: 3, democratic: 0, affiliative: 1, coaching: 2, altruistic: 1 } }
      ]
    },
    {
      id: 3,
      category: "Collaboration",
      text: "I allow every stakeholder to have a say in decision-making.",
      explanation: "This measures your preference for inclusive, collaborative decision-making processes.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 3, innovative: 0, pacesetting: 2, democratic: 0, affiliative: 0, coaching: 1, altruistic: 0 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 0, innovative: 3, pacesetting: 0, democratic: 3, affiliative: 2, coaching: 2, altruistic: 3 } }
      ]
    },
    {
      id: 4,
      category: "Efficiency",
      text: "I must take charge and make fast decisions to get done.",
      explanation: "This explores your preference for quick, decisive action versus thoughtful deliberation.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 1, authoritative: 0, innovative: 2, pacesetting: 0, democratic: 2, affiliative: 2, coaching: 2, altruistic: 1 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 2, authoritative: 3, innovative: 0, pacesetting: 3, democratic: 0, affiliative: 0, coaching: 1, altruistic: 1 } }
      ]
    },
    {
      id: 5,
      category: "Innovation",
      text: "I promote innovative problem-solving.",
      explanation: "This measures your comfort with creative, unconventional approaches to challenges.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 2, innovative: 0, pacesetting: 1, democratic: 0, affiliative: 0, coaching: 0, altruistic: 0 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 2, democratic: 2, affiliative: 1, coaching: 2, altruistic: 1 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 1, innovative: 3, pacesetting: 2, democratic: 3, affiliative: 1, coaching: 3, altruistic: 2 } }
      ]
    },
    {
      id: 6,
      category: "Quality vs Speed",
      text: "Getting things done quickly and efficiently is more important than getting them done perfectly.",
      explanation: "This explores your preference for speed and efficiency versus quality and perfection.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 1, innovative: 1, pacesetting: 0, democratic: 1, affiliative: 2, coaching: 2, altruistic: 1 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 2, coaching: 2, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 2, innovative: 2, pacesetting: 2, democratic: 2, affiliative: 1, coaching: 1, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 3, innovative: 2, pacesetting: 3, democratic: 2, affiliative: 1, coaching: 1, altruistic: 2 } }
      ]
    },
    {
      id: 7,
      category: "Recognition",
      text: "I consistently provide others with positive feedback.",
      explanation: "This measures your tendency to recognize and appreciate others' contributions.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 2, innovative: 0, pacesetting: 2, democratic: 0, affiliative: 0, coaching: 0, altruistic: 0 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 3, coaching: 3, altruistic: 3 } }
      ]
    },
    {
      id: 8,
      category: "Organization",
      text: "When leading, I closely organize and monitor tasks.",
      explanation: "This explores your preference for structured, systematic approaches to work.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 0, authoritative: 0, innovative: 2, pacesetting: 0, democratic: 2, affiliative: 2, coaching: 1, altruistic: 1 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 2, altruistic: 1 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 3, authoritative: 3, innovative: 0, pacesetting: 3, democratic: 0, affiliative: 1, coaching: 2, altruistic: 1 } }
      ]
    },
    {
      id: 9,
      category: "Team Building",
      text: "I fill my team with highly skilled and self-directed people.",
      explanation: "This measures your preference for building autonomous, high-performing teams.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 1, innovative: 0, pacesetting: 0, democratic: 0, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 2, innovative: 2, pacesetting: 2, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 2, innovative: 3, pacesetting: 3, democratic: 3, affiliative: 2, coaching: 3, altruistic: 2 } }
      ]
    },
    {
      id: 10,
      category: "Collaboration",
      text: "I ask others for their opinions before I make an important decision.",
      explanation: "This explores your tendency to seek input and build consensus before acting.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 3, innovative: 0, pacesetting: 2, democratic: 0, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 0, innovative: 3, pacesetting: 1, democratic: 3, affiliative: 2, coaching: 3, altruistic: 3 } }
      ]
    },
    {
      id: 11,
      category: "Legacy",
      text: "I would like to be remembered more for what I contributed than what I achieved.",
      explanation: "This explores your focus on impact and contribution versus personal achievement.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 3, democratic: 1, affiliative: 0, coaching: 1, altruistic: 0 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 0, democratic: 2, affiliative: 3, coaching: 3, altruistic: 3 } }
      ]
    },
    {
      id: 12,
      category: "Quality vs Speed",
      text: "It is acceptable to miss a deadline if the extra time creates a better quality result.",
      explanation: "This measures your preference for quality and thoroughness versus meeting deadlines.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 1, authoritative: 2, innovative: 1, pacesetting: 3, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 1, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 2, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 3, authoritative: 1, innovative: 2, pacesetting: 0, democratic: 2, affiliative: 2, coaching: 3, altruistic: 2 } }
      ]
    },
    {
      id: 13,
      category: "Team Harmony",
      text: "Maintaining team harmony is as equal importance to achieving results.",
      explanation: "This explores your balance between getting results and maintaining positive team dynamics.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 3, innovative: 1, pacesetting: 3, democratic: 1, affiliative: 0, coaching: 1, altruistic: 1 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 0, innovative: 2, pacesetting: 0, democratic: 3, affiliative: 3, coaching: 3, altruistic: 3 } }
      ]
    },
    {
      id: 14,
      category: "Service",
      text: "I achieve results by giving priority attention to the needs of the team and to those I serve.",
      explanation: "This measures your servant leadership approach and focus on others' needs.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 0, affiliative: 0, coaching: 0, altruistic: 0 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 3, affiliative: 3, coaching: 3, altruistic: 3 } }
      ]
    },
    {
      id: 15,
      category: "People Development",
      text: "It is important to invest time to allow people to fully develop their skills.",
      explanation: "This explores your commitment to long-term development and growth of team members.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 2, innovative: 0, pacesetting: 2, democratic: 0, affiliative: 0, coaching: 0, altruistic: 1 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 3, coaching: 3, altruistic: 3 } }
      ]
    },
    {
      id: 16,
      category: "Structure",
      text: "Rules, policies, and procedures are essential for organizational goals.",
      explanation: "This measures your preference for structured, systematic approaches to work.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 0, authoritative: 1, innovative: 3, pacesetting: 1, democratic: 2, affiliative: 1, coaching: 1, altruistic: 2 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 1, coaching: 1, altruistic: 2 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 2, coaching: 2, altruistic: 1 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 3, authoritative: 3, innovative: 0, pacesetting: 2, democratic: 1, affiliative: 2, coaching: 2, altruistic: 1 } }
      ]
    },
    {
      id: 17,
      category: "Communication",
      text: "I clearly communicate my expectations to my team.",
      explanation: "This explores your approach to setting clear direction and expectations.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 0, authoritative: 0, innovative: 1, pacesetting: 0, democratic: 1, affiliative: 2, coaching: 0, altruistic: 1 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 1, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 2, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 2, authoritative: 2, innovative: 2, pacesetting: 2, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 3, authoritative: 3, innovative: 2, pacesetting: 3, democratic: 2, affiliative: 2, coaching: 3, altruistic: 2 } }
      ]
    },
    {
      id: 18,
      category: "Innovation",
      text: "I create an environment that allows others to think unconventionally.",
      explanation: "This measures your ability to foster creativity and unconventional thinking in your team.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 2, innovative: 0, pacesetting: 1, democratic: 0, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 2, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 1, innovative: 3, pacesetting: 2, democratic: 3, affiliative: 2, coaching: 3, altruistic: 2 } }
      ]
    },
    {
      id: 19,
      category: "Tradition",
      text: "I am most comfortable with convention and tradition.",
      explanation: "This explores your comfort level with established ways of doing things versus change.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 0, authoritative: 1, innovative: 3, pacesetting: 2, democratic: 2, affiliative: 1, coaching: 2, altruistic: 2 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 2, democratic: 2, affiliative: 1, coaching: 2, altruistic: 2 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 2, coaching: 1, altruistic: 1 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 3, authoritative: 2, innovative: 0, pacesetting: 1, democratic: 1, affiliative: 2, coaching: 1, altruistic: 1 } }
      ]
    },
    {
      id: 20,
      category: "Vision",
      text: "I articulate the vision.",
      explanation: "This measures your ability to communicate and inspire others with a compelling vision.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 0, innovative: 1, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 1, altruistic: 2 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 1, altruistic: 2 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 2, innovative: 2, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 2, altruistic: 1 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 3, innovative: 3, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 3, altruistic: 1 } }
      ]
    },
    {
      id: 21,
      category: "Role Modeling",
      text: "I model the actions I expect from my team.",
      explanation: "This explores your commitment to leading by example and setting behavioral standards.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 1, authoritative: 0, innovative: 0, pacesetting: 0, democratic: 1, affiliative: 0, coaching: 0, altruistic: 0 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 2, authoritative: 2, innovative: 2, pacesetting: 2, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 2, authoritative: 3, innovative: 2, pacesetting: 3, democratic: 2, affiliative: 3, coaching: 3, altruistic: 3 } }
      ]
    },
    {
      id: 22,
      category: "Consensus Building",
      text: "I am effective at building consensus within groups.",
      explanation: "This measures your ability to bring people together and find common ground.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 0, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 3, affiliative: 3, coaching: 3, altruistic: 3 } }
      ]
    },
    {
      id: 23,
      category: "Conflict Resolution",
      text: "It is my responsibility to assist in resolving conflict between team members.",
      explanation: "This explores your approach to handling interpersonal conflicts and team dynamics.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 1, innovative: 2, pacesetting: 2, democratic: 0, affiliative: 0, coaching: 0, altruistic: 0 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 1, innovative: 2, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 2, innovative: 1, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 2, innovative: 1, pacesetting: 1, democratic: 3, affiliative: 3, coaching: 3, altruistic: 3 } }
      ]
    },
    {
      id: 24,
      category: "Emotional Support",
      text: "I create a collaborative environment where emotional needs are met.",
      explanation: "This measures your focus on emotional well-being and creating supportive work environments.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 0, affiliative: 0, coaching: 0, altruistic: 1 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 3, affiliative: 3, coaching: 3, altruistic: 3 } }
      ]
    },
    {
      id: 25,
      category: "Team Commitment",
      text: "I uphold group decisions even when I think what we are about to do is challenging.",
      explanation: "This explores your commitment to team decisions and collective ownership.",
      options: [
        { text: "Not at all", value: "not_at_all", points: { bureaucratic: 1, authoritative: 2, innovative: 2, pacesetting: 2, democratic: 0, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Slightly", value: "slightly", points: { bureaucratic: 1, authoritative: 2, innovative: 2, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
        { text: "Moderately", value: "moderately", points: { bureaucratic: 2, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
        { text: "Completely", value: "completely", points: { bureaucratic: 3, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 3, affiliative: 2, coaching: 2, altruistic: 3 } }
      ]
    },
    {
        id: 26,
        category: "Innovative",
        text: "I am comfortable taking risks.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 1, innovative: 0, pacesetting: 1, democratic: 1, affiliative: 2, coaching: 1, altruistic: 2 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 2, coaching: 1, altruistic: 2 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 2, innovative: 2, pacesetting: 2, democratic: 2, affiliative: 1, coaching: 2, altruistic: 1 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 3, innovative: 3, pacesetting: 3, democratic: 1, affiliative: 0, coaching: 1, altruistic: 0 } }
        ]
    } 
    ,{
        id: 27,
        category: "Bureaucratic",
        text: "Teams perform best when individuals repeat tasks and perfect them.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 0, authoritative: 1, innovative: 3, pacesetting: 1, democratic: 2, affiliative: 1, coaching: 2, altruistic: 2 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 1, coaching: 2, altruistic: 2 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 2, coaching: 1, altruistic: 1 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 3, authoritative: 3, innovative: 0, pacesetting: 3, democratic: 1, affiliative: 2, coaching: 1, altruistic: 1 } }
        ]
      },
      {
        id: 28,
        category: "Coaching",
        text: "The best way to motivate others is to invest time in them.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 0, affiliative: 0, coaching: 0, altruistic: 0 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 3, affiliative: 3, coaching: 3, altruistic: 3 } }
        ]
      },
      {
        id: 29,
        category: "Affiliative",
        text: "I recognize the unique emotional needs of those I lead.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 0, affiliative: 0, coaching: 0, altruistic: 1 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 3, affiliative: 3, coaching: 3, altruistic: 3 } }
        ]
      },
      {
        id: 30,
        category: "Altruistic",
        text: "I am committed to building community.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 0, affiliative: 0, coaching: 1, altruistic: 0 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 3, affiliative: 3, coaching: 3, altruistic: 3 } }
        ]
      },
      {
        id: 31,
        category: "Authoritative",
        text: "I clearly articulate a vision.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 0, innovative: 1, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 1, altruistic: 2 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 1, altruistic: 2 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 2, innovative: 2, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 2, altruistic: 1 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 3, innovative: 3, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 3, altruistic: 1 } }
        ]
      },
      {
        id: 32,
        category: "Democratic",
        text: "The combined knowledge and expertise of the team leads to the best results.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 3, innovative: 0, pacesetting: 2, democratic: 0, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 0, innovative: 3, pacesetting: 1, democratic: 3, affiliative: 2, coaching: 3, altruistic: 3 } }
        ]
      },
      {
        id: 33,
        category: "Pacesetting",
        text: "I expect nothing less than the best results from people.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 1, authoritative: 0, innovative: 2, pacesetting: 0, democratic: 2, affiliative: 3, coaching: 2, altruistic: 2 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 2, authoritative: 3, innovative: 1, pacesetting: 3, democratic: 1, affiliative: 0, coaching: 1, altruistic: 1 } }
        ]
      },
      {
        id: 34,
        category: "Affiliative",
        text: "I accept and recognize people for their uniqueness.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 2, innovative: 0, pacesetting: 2, democratic: 0, affiliative: 0, coaching: 0, altruistic: 1 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 1, innovative: 3, pacesetting: 1, democratic: 3, affiliative: 3, coaching: 3, altruistic: 3 } }
        ]
      },
      {
        id: 35,
        category: "Innovative",
        text: "I enjoy thinking about the future.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 1, innovative: 0, pacesetting: 1, democratic: 1, affiliative: 2, coaching: 1, altruistic: 2 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 2, coaching: 1, altruistic: 2 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 2, innovative: 2, pacesetting: 2, democratic: 2, affiliative: 1, coaching: 2, altruistic: 1 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 3, innovative: 3, pacesetting: 3, democratic: 2, affiliative: 1, coaching: 3, altruistic: 1 } }
        ]
      },
      {
        id: 36,
        category: "Bureaucratic",
        text: "Everyone should follow policy and procedures very closely.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 0, authoritative: 1, innovative: 3, pacesetting: 1, democratic: 2, affiliative: 1, coaching: 1, altruistic: 2 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 1, coaching: 1, altruistic: 2 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 2, coaching: 2, altruistic: 1 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 3, authoritative: 3, innovative: 0, pacesetting: 2, democratic: 1, affiliative: 2, coaching: 2, altruistic: 1 } }
        ]
      },
      {
        id: 37,
        category: "Coaching",
        text: "I give motivational feedback.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 0, coaching: 0, altruistic: 1 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 2, innovative: 2, pacesetting: 2, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 2, innovative: 2, pacesetting: 2, democratic: 2, affiliative: 3, coaching: 3, altruistic: 3 } }
        ]
      },
      {
        id: 38,
        category: "Authoritative",
        text: "I take full responsibility when my team actions.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 0, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 1, coaching: 1, altruistic: 0 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 2, innovative: 2, pacesetting: 2, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 3, innovative: 2, pacesetting: 2, democratic: 2, affiliative: 2, coaching: 2, altruistic: 3 } }
        ]
      },
      {
        id: 39,
        category: "Pacesetting",
        text: "I motivate others by setting a high standard of performance.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 1, authoritative: 0, innovative: 2, pacesetting: 0, democratic: 2, affiliative: 3, coaching: 2, altruistic: 2 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 2, authoritative: 3, innovative: 1, pacesetting: 3, democratic: 1, affiliative: 0, coaching: 1, altruistic: 1 } }
        ]
      },
      {
        id: 40,
        category: "Pacesetting",
        text: "I have a passion for pursuing excellence.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 0, innovative: 1, pacesetting: 0, democratic: 1, affiliative: 2, coaching: 1, altruistic: 2 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 2, coaching: 1, altruistic: 2 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 2, innovative: 2, pacesetting: 2, democratic: 2, affiliative: 1, coaching: 2, altruistic: 1 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 3, innovative: 2, pacesetting: 3, democratic: 2, affiliative: 1, coaching: 3, altruistic: 1 } }
        ]
      },
      {
        id: 41,
        category: "Coaching",
        text: "I take time to learn what others need from me.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 0, affiliative: 0, coaching: 0, altruistic: 0 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 3, affiliative: 3, coaching: 3, altruistic: 3 } }
        ]
      },
      {
        id: 42,
        category: "Democratic",
        text: "I am comfortable allowing others to occasionally take the lead.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 3, innovative: 1, pacesetting: 2, democratic: 0, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 0, innovative: 3, pacesetting: 1, democratic: 3, affiliative: 2, coaching: 3, altruistic: 3 } }
        ]
      },
      {
        id: 43,
        category: "Democratic",
        text: "I empower others by providing them the opportunity to contribute to the decision-making process.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 3, innovative: 0, pacesetting: 2, democratic: 0, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 0, innovative: 3, pacesetting: 1, democratic: 3, affiliative: 2, coaching: 3, altruistic: 3 } }
        ]
      },
      {
        id: 44,
        category: "Affiliative",
        text: "I take pride in my ability to keep employees happy.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 0, coaching: 1, altruistic: 0 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 3, coaching: 2, altruistic: 3 } }
        ]
      },
      {
        id: 45,
        category: "Altruistic",
        text: "I promote and support the success of others.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 3, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 0, affiliative: 0, coaching: 0, altruistic: 0 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 0, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 3, affiliative: 3, coaching: 3, altruistic: 3 } }
        ]
      },
      {
        id: 46,
        category: "Democratic",
        text: "Every team member needs to be heard and respected.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 0, affiliative: 0, coaching: 1, altruistic: 0 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 3, affiliative: 3, coaching: 3, altruistic: 3 } }
        ]
      },
      {
        id: 47,
        category: "Altruistic",
        text: "I would not expect others to do a task I am not prepared to do myself.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 2, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 1, coaching: 1, altruistic: 0 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 2, authoritative: 1, innovative: 1, pacesetting: 1, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 1, authoritative: 2, innovative: 2, pacesetting: 2, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 1, authoritative: 3, innovative: 2, pacesetting: 3, democratic: 2, affiliative: 2, coaching: 2, altruistic: 3 } }
        ]
      },
      {
        id: 48,
        category: "Pacesetting",
        text: "I expect people to perform at 100 percent regardless of circumstances.",
        options: [
          { text: "Not at all", value: "not_at_all", points: { bureaucratic: 1, authoritative: 0, innovative: 2, pacesetting: 0, democratic: 2, affiliative: 3, coaching: 2, altruistic: 2 } },
          { text: "Slightly", value: "slightly", points: { bureaucratic: 1, authoritative: 1, innovative: 2, pacesetting: 1, democratic: 2, affiliative: 2, coaching: 2, altruistic: 2 } },
          { text: "Moderately", value: "moderately", points: { bureaucratic: 2, authoritative: 2, innovative: 1, pacesetting: 2, democratic: 1, affiliative: 1, coaching: 1, altruistic: 1 } },
          { text: "Completely", value: "completely", points: { bureaucratic: 3, authoritative: 3, innovative: 1, pacesetting: 3, democratic: 1, affiliative: 0, coaching: 1, altruistic: 1 } }
        ]
      }
    ];
