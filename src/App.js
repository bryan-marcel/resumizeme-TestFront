import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePages from './pages/HomePages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePages />} />
      </Routes>
    </Router>
  );
}

export default App;
