import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import QuizPage from '@/pages/QuizPage';
import ResultPage from '@/pages/ResultPage';
import { Home } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 px-4 py-3">
      <div className="max-w-5xl mx-auto neu-convex px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="text-lg font-bold tracking-tight neu-text-gradient hover:opacity-80 transition-opacity"
        >
          SBTI
        </button>
        {!isHome && (
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl neu-flat neu-flat-hover neu-flat-active text-sm font-medium text-[var(--neu-text)]"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">返回首页</span>
          </button>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#E0E5EC]">
      <Navbar />
      <main className="pb-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
