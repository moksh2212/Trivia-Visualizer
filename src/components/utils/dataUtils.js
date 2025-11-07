export const decodeHtml = (text) => {
  const parser = new DOMParser();
  const decoded = parser.parseFromString(text, "text/html").documentElement.textContent;
  return decoded;
};


export const getCategoryDistribution = questions => {
    const counts = {};
  
    questions.forEach((q) => {
      const category = decodeHtml(q.category);
      counts[category] = (counts[category] || 0) + 1;
    });
  
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  };
  export const cleanCategory = (name) => {
    const decoded = decodeHtml(name);
    const parts = decoded.split(":");
    return parts[1] ? parts[1].trim() : parts[0];
  }; 
  export const getDifficultyDistribution = (questions) => {
    const difficulties = ["easy", "medium", "hard"];
  
    return difficulties.map((level) => ({
      difficulty: level,
      count: questions.filter((q) => q.difficulty === level).length,
    }));
  };
  