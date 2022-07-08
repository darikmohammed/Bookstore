import './App.css';
import { Route, Routes } from 'react-router-dom';
import Books from './Routes/Books';
import Catagory from './Routes/Catagory';

function App() {
  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="catagory" element={<Catagory />} />
      </Routes>
    </div>
  );
}

export default App;
