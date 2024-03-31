import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Razas from './views/Breeds';
import Esp from './views/Esp';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Razas />} />
        <Route path="/razas/:id" element={<Esp />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
