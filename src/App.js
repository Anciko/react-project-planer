import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProjectsCompo from './components/ProjectsCompo';
import ProjectEdit from './components/ProjectEdit';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ProjectsCompo />} ></Route>
          <Route path='/posts/edit/:id' element={<ProjectEdit />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
