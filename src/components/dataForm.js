import React, { useState } from "react";
import FormReview from "./formReview";

const DataForm = () => {
    const [formData, setFormData] = useState({
        course: "",
        university: "",
        subjects: [
            { subject: "", grade: "" },
            // { subject: "", grade: "" },
            // { subject: "", grade: "" },
            // { subject: "", grade: "" },
            // { subject: "", grade: "" },
            // { subject: "", grade: "" },
        ],
    });

    const handleSubjectChange = (index, field, value) => {
        const updatedSubjects = [...formData.subjects];
        updatedSubjects[index][field] = value;
        setFormData({
            ...formData,
            subjects: updatedSubjects,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setShowReview(true);
    };


    const [showReview, setShowReview] = useState(false);

    return (
        <div className="formPage">

            <div className="note">
                <h2>Enter your grades, and embark on your unique journey to higher education.</h2>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates. Recusandae repudiandae necessitatibus natus possimus ipsa! Cumque eius aperiam harum doloribus nobis. Fugit sint adipisci a iure, dolorum voluptas quod!</p>
            </div>

            <div className="formContainer">
                {showReview ? (
                    <FormReview formData={formData} onEdit={() => setShowReview(false)} />
                ) : (

                    <form onSubmit={handleSubmit}>
                        <h2>Fill this form</h2>

                        <div className="formInput">
                            <label htmlFor="course"><strong>1. Course</strong></label>

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
                                    select course
                                </option>
                                <option value="General Arts">General Arts</option>
                                <option value="General Science">General Science</option>
                                <option value="Home Economics">Home Economics</option>
                            </select>
                        </div>

                        <div className="formInput">
                            <label htmlFor="subjects"><strong>2. Subjects and Grades</strong></label>

                            <div className="subjects">
                                {formData.subjects.map((subject, index) => (
                                    <div key={index} className="subject">

                                        <select
                                            value={subject.subject}
                                            onChange={(e) =>
                                                handleSubjectChange(index, "subject", e.target.value)
                                            }
                                            className="subInput"
                                            required
                                        >
                                            <option value="" disabled>
                                                {`subject ${index + 1}`}
                                            </option>
                                            <option value="English">English</option>
                                            <option value="Core Maths">Core Maths</option>
                                            <option value="Integrated Science">Integrated Science</option>
                                            <option value="Social Studies">Social Studies</option>
                                            <option value="Elective Maths">Elective Maths</option>
                                            <option value="Geography">Geography</option>
                                            <option value="Economics">Economics</option>
                                            <option value="Government">Government</option>
                                        </select>

                                        <select
                                            value={subject.grade}
                                            onChange={(e) =>
                                                handleSubjectChange(index, "grade", e.target.value)
                                            }
                                            className="grade"
                                            required
                                        >
                                            <option value="" disabled>
                                                Grade
                                            </option>
                                            <option value="1">A1</option>
                                            <option value="2">B2</option>
                                            <option value="3">B3</option>
                                            <option value="4">C4</option>
                                            <option value="5">C5</option>
                                            <option value="6">C6</option>
                                            <option value="7">D7</option>
                                            <option value="7">E8</option>
                                            <option value="9">F9</option>
                                        </select>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="formInput">
                            <label htmlFor="uniChoice"><strong>3. University</strong></label>

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
                                <option value="Kwame Nkrumah University of Science and Technology (KNUST)">
                                    Kwame Nkrumah University of Science and Technology (KNUST)
                                </option>
                                <option value="University of Ghana (LEGON)">University of Ghana (LEGON)</option>
                                <option value="University of Cape Coast (UCC)">University of Cape Coast (UCC)</option>
                                <option value="University for Development Studies (UDS)">University for Development Studies (UDS)
                                </option>
                                <option value="University of Professional Studies, Accra (UPSA)">
                                    University of Professional Studies, Accra (UPSA)
                                </option>
                            </select>
                        </div>

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
