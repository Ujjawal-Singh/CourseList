import { useState } from 'react';
import { Link } from 'react-router-dom';
import courses from './courseModel';
import './courselist.css';
const CourseList = () => {
  const [search, setSearch] = useState("");
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase()) ||
    course.instructor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="course-list">
      <Link to="/">
        <button className="dashboard-btn">Dashboard</button>
      </Link>
      <input 
        type="text" 
        placeholder="Search by course name or instructor" 
        onChange={(e) => setSearch(e.target.value)} 
        className="search-input"
      />
      <h2>Course List 1</h2>
      <div className="course-container">
        {filteredCourses.map(course => (
          <div key={`course-1-${course.id}`} className="course-card">
            <img src={course.thumbnail} alt={`${course.name} thumbnail`} className="course-thumbnail" />
            <div className="course-info">
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <Link to={`/course/${course.id}`} className="details-link">View Details</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Course List 2 */}
      <h2>Course List 2</h2>
      <div className="course-container">
        {filteredCourses.map(course => (
          <div key={`course-2-${course.id}`} className="course-card">
            <img src={course.thumbnail} alt={`${course.name} thumbnail`} className="course-thumbnail" />
            <div className="course-info">
              <h2>{course.name}</h2>
              <p>Instructor: {course.instructor}</p>
              <Link to={`/course/${course.id}`} className="details-link">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
