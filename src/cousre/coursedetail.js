import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import courseModel from './courseModel';
import './coursedetail.css'; 
const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courseModel.find(c => c.id === parseInt(courseId));
  const [isSyllabusExpanded, setSyllabusExpanded] = useState(false);
  const toggleSyllabus = () => {
    setSyllabusExpanded(!isSyllabusExpanded);
  };

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div className="course-details-container">
      <Link to="/courselist">
        <button className="back-button">Back to Course List</button>
      </Link>
      <h1>{course.name}</h1>
      <img src={course.thumbnail} alt={`${course.name} thumbnail`} className="course-thumbnail" />
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <h3>Prerequisites:</h3>
      <ul>
        {course.prerequisites.map((prerequisite, index) => (
          <li key={index}>{prerequisite}</li>
        ))}
      </ul>
      <div>
        <h3 onClick={toggleSyllabus} style={{ cursor: 'pointer' }}>
          Syllabus {isSyllabusExpanded ? '[-]' : '[+]'}
        </h3>
        {isSyllabusExpanded && (
          <ul>
            {course.syllabus.map(week => (
              <li key={week.week}>
                <strong>Week {week.week}:</strong> {week.topic} - {week.content}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
