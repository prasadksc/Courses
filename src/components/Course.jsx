import React from 'react'
import './Course.css'
import { Link } from 'react-router-dom';

const Course = ({ id, title, image, description, duration, rating }) => {
    return (
        <Link to={`/courses/${id}`} style={{ textDecoration: "none" }}>
            <div className="course">
                <img src={image} alt="course-logo" />
                <div className="course_info">
                    <div className="course_rating">
                        {Array(rating).fill().map((_, i) => (
                            <p key={i}>⭐</p>
                        )
                        )}
                    </div>
                    <p className="course_title">{title}</p>
                    <p className="course_description">{description}</p>
                </div>
                <p >
                    Duration: {duration} weeks
                </p>
            </div>
        </Link>

    );
}

export default Course;

