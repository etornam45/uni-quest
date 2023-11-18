import React, { useEffect, useState } from "react";
import FormReview from "./formReview";

const DataForm = () => {
    const [formData, setFormData] = useState({
        course: "",
        university: "",
        coreSubjects: Array(3).fill({ subject: "", grade: "" }),
        electiveSubjects: Array(3).fill({ subject: "", grade: "" }),
    });

    const [showReview, setShowReview] = useState(false);
    const [courses, setCourses] = useState([]);
    const [coreSubjects, setCoreSubjects] = useState([]);
    const [courseContent, setCourseContent] = useState([]);
    const [grades, setGrades] = useState([]);


    const handleSubjectChange = (index, field, value, isCoreSubject) => {
        setFormData((prevData) => {
            const coreSubjectsArray = prevData.coreSubjects || [];
            const electiveSubjectsArray = prevData.electiveSubjects || [];

            const updatedCoreSubjects = [...coreSubjectsArray];
            const updatedElectiveSubjects = [...electiveSubjectsArray];

            if (isCoreSubject) {
                if (!updatedCoreSubjects[index]) {
                    updatedCoreSubjects[index] = {
                        subject: value === prevData.course ? "" : (courseContent[value] || [])[0],
                        grade: "",
                    };
                }

                updatedCoreSubjects[index] = {
                    ...updatedCoreSubjects[index],
                    [field]: value,
                };

                // Reset core subjects when the course changes
                if (field === 'subject' && value !== prevData.course) {
                    updatedCoreSubjects.forEach((subject, i) => {
                        updatedCoreSubjects[i] = {
                            subject: (courseContent[value] || [])[0],
                            grade: "",
                        };
                    });
                }
            } else {
                // Handle elective subjects
                if (!updatedElectiveSubjects[index]) {
                    updatedElectiveSubjects[index] = {
                        subject: "",
                        grade: "",
                    };
                }

                updatedElectiveSubjects[index] = {
                    ...updatedElectiveSubjects[index],
                    [field]: value,
                };
            }

            return { ...prevData, coreSubjects: updatedCoreSubjects, electiveSubjects: updatedElectiveSubjects };
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        setShowReview(true);
    };

    useEffect(() => {
        // Fetching course data
        fetch("http://localhost:8000/formDb")
            .then((res) => res.json())
            .then((formDb) => {
                setCourses(formDb.courses);
                setCoreSubjects(formDb.coreSubjects);
                setCourseContent(formDb.courseContent);
                setGrades(formDb.grades);

                // Clear subjects when the course changes
                setFormData((prevData) => ({
                    ...prevData,
                    electiveSubjects: prevData.electiveSubjects.map(() => ({ subject: "", grade: "" })),
                }));
            })
            .catch((error) =>
                console.error("Error fetching course data:", error)
            );
    }, [formData.course]);


    return (
        <div className="formPage">
            <div className="note">
                <h2>
                    Enter your grades, and embark on your unique journey to higher
                    education.
                </h2>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                    voluptates. Recusandae repudiandae necessitatibus natus possimus ipsa!
                    Cumque eius aperiam harum doloribus nobis. Fugit sint adipisci a
                    iure, dolorum voluptas quod!
                </p>
            </div>

            <div className="formContainer">
                {showReview ? (
                    <FormReview formData={formData} onEdit={() => setShowReview(false)} />
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h2>Fill this form</h2>

                        <div className="formInput">
                            <label htmlFor="course">
                                <strong>1. Course</strong>
                            </label>

                            <select
                                className="choice"
                                name="course"
                                id="course"
                                value={formData.course}
                                onChange={(e) =>
                                    setFormData({ ...formData, course: e.target.value })
                                }
                                required
                            >
                                <option value="" disabled>

                                </option>
                                {courses &&
                                    courses.map((course, index) => (
                                        <option key={index} value={course}>
                                            {course}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        <div className="formInput">
                            <label htmlFor="subjects">
                                <strong>2. Subjects and Grades</strong>
                            </label>

                            {/* Core subjects */}
                            <strong>Core subjects</strong>
                            <div className="subjects">
                                {formData.coreSubjects && formData.coreSubjects.slice(0, 3).map((subject, index) => (
                                    <div className="subject" key={index}>
                                        <select
                                            value={subject.subject}
                                            onChange={(e) =>
                                                handleSubjectChange(index, 'subject', e.target.value, true)
                                            }
                                            className="subInput"
                                            required
                                        >
                                            <option value="" disabled>

                                            </option>
                                            {coreSubjects.map((coreSubject, coreSubjectIndex) => (
                                                <option key={coreSubjectIndex} value={coreSubject}>
                                                    {coreSubject}
                                                </option>
                                            ))}
                                        </select>

                                        <select
                                            value={subject.grade}
                                            onChange={(e) =>
                                                handleSubjectChange(index, 'grade', e.target.value, true)
                                            }
                                            className="grade"
                                            required
                                        >
                                            <option value="" disabled>

                                            </option>
                                            {grades.map((grade, gradeIndex) => (
                                                <option key={gradeIndex} value={grade}>
                                                    {grade}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                ))}
                            </div>

                            {/* Elective subjects */}
                            {formData.course && (
                                <>
                                    <strong>Elective subjects</strong>
                                    <div className="subjects">
                                        {formData.electiveSubjects && formData.electiveSubjects.slice(0, 3).map((subject, index) => (
                                            <div className="subject" key={index}>
                                                <select
                                                    value={subject.subject}
                                                    onChange={(e) =>
                                                        handleSubjectChange(index, 'subject', e.target.value, false)
                                                    }
                                                    className="subInput"
                                                    required
                                                >
                                                    <option value="" disabled>

                                                    </option>
                                                    {courseContent && courseContent[formData.course] ? (
                                                        courseContent[formData.course].map((content, contentIndex) => (
                                                            <option key={contentIndex} value={content}>
                                                                {content}
                                                            </option>
                                                        ))
                                                    ) : (
                                                        <option value="" disabled>

                                                        </option>
                                                    )}
                                                </select>

                                                <select
                                                    value={subject.grade}
                                                    onChange={(e) =>
                                                        handleSubjectChange(index, 'grade', e.target.value, false)
                                                    }
                                                    className="grade"
                                                    required
                                                >
                                                    <option value="" disabled>

                                                    </option>
                                                    {grades.map((grade, gradeIndex) => (
                                                        <option key={gradeIndex} value={grade}>
                                                            {grade}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* <div className="formInput">
                            <label htmlFor="uniChoice">
                                <strong>3. University</strong>
                            </label>

                            <select
                                name="university"
                                id="university"
                                value={formData.university}
                                onChange={(e) =>
                                    setFormData({ ...formData, university: e.target.value })
                                }
                                className="choice"
                                required
                            >
                                <option value="" disabled>
                                    select university
                                </option>
                                {courses &&
                                    courses.map((course, index) => (
                                        <option key={index} value={course}>
                                            {course}
                                        </option>
                                    ))}
                            </select>
                        </div> */}

                        <div className="toRev">
                            <button type="submit">Next</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default DataForm;
