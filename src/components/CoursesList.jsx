import React from 'react';
import Course from './Course';
import './CoursesList.css'

const CoursesList = ({ courses }) => {
    return (
        <div className="courses">
            {
                courses.map((course) => (
                    <Course
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        description={course.description}
                        duration={course.duration}
                        image={course.image}
                        rating={course.rating}
                        about={course.about}
                        skills={course.skills} />
                ))
            }
        </div>
    );
}

export default CoursesList;