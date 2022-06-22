export const defaultQuestions: {
  title: string;
  id: string; // first 8 chars of a uuid v4
  questionLong: string;
  type: "points" | "fulltext";
  active: boolean;
}[] = [
  {
    title: "Goals",
    id: "a5e36d31",
    questionLong: "Did I do my best to set clear goals today?",
    type: "points",
    active: true,
  },
  {
    title: "Progress",
    id: "063c6ce1",
    questionLong: "Did I do my best to make progress towards my goals today?",
    type: "points",
    active: true,
  },
  {
    title: "Meaning",
    id: "aa73eb84",
    questionLong: "Did I do my best to find meaning in what I am doing today?",
    type: "points",
    active: true,
  },
  {
    title: "Happiness",
    id: "e881e50e",
    questionLong: "Did I do my best to be happy today?",
    type: "points",
    active: true,
  },
  {
    title: "Social",
    id: "ec57f75e",
    questionLong: "Did I do my best to build positive relationships today?",
    type: "points",
    active: true,
  },
  {
    title: "Responsibility",
    id: "b1667166",
    questionLong:
      "Did I do my best to take responsibility for my actions today?",
    type: "points",
    active: true,
  },
  {
    title: "Improvement",
    id: "c5c844e6",
    questionLong: "Did I do my best to improve my skills and life today?",
    type: "points",
    active: true,
  },
  {
    title: "Highlight",
    id: "b875a18e",
    questionLong: "What was my personal highlight today and why?",
    type: "fulltext",
    active: true,
  },
  {
    title: "Better",
    id: "c706f049",
    questionLong: "One specific thing I want to do better tomorrow.",
    type: "fulltext",
    active: true,
  },
];
