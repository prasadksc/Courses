import React from 'react';
import './CoursePage.css'


const CoursePage = (props) => {
    const { courses } = props
    const id = props.match.params.id


    function getCourseById(courses, id) {
        const course = courses.filter(course => course.id === id);
        if (course) return course[0];
        return null;
    }

    const course = getCourseById(courses, id)

    return (
        <div className="coursepage">
            <div className="coursepage_info">
                <div className="row_content">
                    <img src={course.image} alt="logo" />
                    <div className="coursepage_rating">
                        {Array(course.rating).fill().map((_, i) => (
                            <p key={i}>⭐</p>
                        )
                        )}
                    </div>
                </div>
                <div className="row_title">
                    <h1>{course.title}</h1>
                    <p>{course.description}</p>
                </div>
            </div>
            <div className="coursepage_about">
                <div className="row_about">
                    <h2>About</h2>
                    <p>{course.about}</p>
                </div>
                <div className="row_skills">
                    <h2>SKILLS YOU WILL GAIN</h2>
                    <p>{course.skills}</p>
                </div>
            </div>
        </div>
    );
}

export default CoursePage;


