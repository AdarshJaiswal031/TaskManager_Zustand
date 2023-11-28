import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTask from './components/AddTask';
import Navbar from './components/Navbar';
import PageTaskList from './components/PageTaskList';
function App() {

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PageTaskList />} />
          <Route path="/addtask" element={<AddTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
