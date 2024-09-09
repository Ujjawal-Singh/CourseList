import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './cousre/courselist';
import CourseDetails from './cousre/coursedetail';
import StudentDashboard from './student/studentdash';
import courseModel from './cousre/courseModel';
import './student/studentdash.css';
import './cousre/courselist.css';
import './student/studentdash.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/courselist" element={<CourseList/>} />
        <Route path="/course/:courseId" element={<CourseDetails/>} />
        <Route path="/" element={<StudentDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
