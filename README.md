# Course Listing Web Application
This is a React-based web application designed to showcase a list of courses with detailed views, alongside a student dashboard to track course progress and completion. The project features a course listing page, course details page, and a student dashboard with advanced state management implemented using Redux.

## Features
1. Course Listing Page: Displays a list of courses, searchable by course name or instructor.
2. Course Details Page: Provides detailed information for each course, including an expandable syllabus section.
3. Student Dashboard: Allows students to view their enrolled courses and track progress. Courses can be marked as completed.
4. Responsive Design: Optimized for a variety of screen sizes and devices.
5. State Management: Implemented using Redux (or MobX) to handle global state efficiently.

# Installation and Setup
## Prerequisites
Node.js: Ensure you have Node.js installed. You can download it from here.
## Install Dependencies
![image](https://github.com/user-attachments/assets/ca7d92a0-bede-4ff3-84bc-ee54fd62f3cc)

## Run the Application
![image](https://github.com/user-attachments/assets/1d8fa0b8-1935-45ad-b0bb-0d49730a3935)

This will start the development server. Open http://localhost:3000 to view it in the browser.

# Project Structure
1. /src/components/: Contains all the React components like CourseList, CourseDetails, and StudentDashboard.
2. /src/redux/: (If Redux is used) Contains Redux store, reducers, and actions for state management.
3. /src/assets/: Static files such as course thumbnails.
4. /src/courseModel.js: Mock data for course listing.

## Functionality
## 1. Course Listing Page
  Fetches a list of sample courses.
  Displays the courses with details like name, instructor, and an image.
  Provides search functionality to filter courses by name or instructor.
  Links to the course details page.
## 2. Course Details Page
  Displays comprehensive details about the course.
  Includes an expandable/collapsible syllabus section.
  Shows information such as the instructor's name, description, enrollment status, duration, schedule, and prerequisites.
## 3. Student Dashboard
  Lists all the enrolled courses with progress tracking.
  Allows marking courses as completed.
  Displays a progress bar for each course.

# State Management
This project uses Redux (or MobX) for advanced state management, ensuring smooth communication between different components of the application. The global state includes:
  Course data
  Search filters
  Student enrollment and progress tracking

# Responsive Design
  The application is fully responsive, adapting to different screen sizes from mobile to desktop.
  Custom CSS styles and media queries ensure a consistent user experience across devices.

# Technologies Used
  React.js: JavaScript library for building user interfaces.
  Redux (or MobX): For managing the application's global state.
  React Router: For routing between pages (Course List, Course Details, Dashboard).
  CSS: For styling the components and making the layout responsive.

# How to Use
1. View Course List: Navigate to the course listing page to see all available courses.
2. View Course Details: Click on a course to view its details, including the syllabus.
3. Track Progress: Visit the student dashboard to view your enrolled courses and track progress.
4. Complete Courses: Mark courses as completed in the dashboard.
