import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

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
