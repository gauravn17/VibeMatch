import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import MatchPage from './MatchPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<MatchPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
