import { useState } from 'react'
import CategoryChart from './components/charts/CategoryChart'
import './App.css'
import Header from './components/Header'
import { useTriviaData } from './components/hooks/useTriviaData'
import CategoryFilter from './components/filters/CategoryFilter'
import Loader from './components/ui/Loader'
import DifficultyChart from './components/charts/DifficultyChart'
function App() {
  const { questions = [], loading, error } = useTriviaData(50);

  const [selectedCategory, setSelectedCategory] = useState('All');
  selectedCategory === 'All'
  ? questions
  : questions.filter(q => q.category === selectedCategory);

  const categoryList = questions.map(q => q.category);
  const uniqueCategorySet = new Set(categoryList);
  const categories = Array.from(uniqueCategorySet);
  const filteredQuestions =
  selectedCategory === "All"
    ? questions
    : questions.filter((q) => q.category === selectedCategory);
  if (loading) return <Loader />;
  if (error) return <p className="text-red-600 text-center mt-10">{error}</p>;
  return (
    <>
         <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center p-6">
         <Header title="Trivia Visualizer" />
         <div className="mt-6 flex flex-wrap justify-center gap-3 max-w-4xl">      
           <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>
         <div className="grid md:grid-cols-2 gap-6 mt-10 w-full max-w-5xl">
        <CategoryChart questions={filteredQuestions} />
        <DifficultyChart questions={filteredQuestions} />

      </div>
      
         </div>
    </>
  )
}

export default App
