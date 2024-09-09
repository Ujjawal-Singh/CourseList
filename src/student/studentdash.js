import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import courses from '../cousre/courseModel';
import './studentdash.css'; // Add your CSS file for styling

const StudentDashboard = () => {
  const studentId = 101; // Example student ID
  const enrolledCourses = courses; // Use your logic to get enrolled courses
  const [courseProgress, setCourseProgress] = useState(
    enrolledCourses.map(course => ({ id: course.id, progress: 0, isCompleted: false }))
  );

  const markAsCompleted = (courseId) => {
    setCourseProgress(prevProgress =>
      prevProgress.map(course =>
        course.id === courseId ? { ...course, progress: 100, isCompleted: true } : course
      )
    );
  };

  return (
    <div className="student-dashboard">
      {/* Content on the left */}
      <div className="dashboard-content">
        <h1>Student Dashboard</h1>
        <h3>Enrolled Courses:</h3>
        {enrolledCourses.length === 0 ? (
          <p>No enrolled courses found.</p>
        ) : (
          enrolledCourses.map(course => {
            const progress = courseProgress.find(c => c.id === course.id);
            return (
              <div key={course.id} className="course-card">
                <img src={course.thumbnail} alt={`${course.name} thumbnail`} className="course-thumbnail" />
                <div className="course-info">
                  <h4>{course.name}</h4>
                  <p><strong>Instructor:</strong> {course.instructor}</p>
                  <p><strong>Due Date:</strong> {course.dueDate}</p>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${progress.progress}%` }}>
                      {progress.progress}%
                    </div>
                  </div>
                  {!progress.isCompleted ? (
                    <button onClick={() => markAsCompleted(course.id)} className="complete-button">
                      Mark as Completed
                    </button>
                  ) : (
                    <span>Completed</span>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Button on the right */}
      <Link to="/courselist">
        <button className="course-list-btn">Course List</button>
      </Link>
    </div>
  );
};

export default StudentDashboard;
