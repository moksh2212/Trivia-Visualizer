import { useState, useEffect } from "react";

export const useTriviaData = (amount = 50) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        setError(null);
      try { 
        const res = await fetch(`https://opentdb.com/api.php?amount=${amount}`);
        const data = await res.json();
        setQuestions(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [amount]);

  return { questions, loading, error };
};
