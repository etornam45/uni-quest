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
        <div className="formContainer">
            {showReview ? (
                <FormReview formData={formData} onEdit={() => setShowReview(false)} />
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Fill this form</h2>

                    <div className="formInput">
                        <label htmlFor="course">1. Course</label>
                        <input
                            type="text"
                            name="course"
                            id="course"
                            placeholder="eg. General Arts"
                            required
                            value={formData.course}
                            onChange={(e) =>
                                setFormData({ ...formData, course: e.target.value })
                            }
                        />
                    </div>

                    <div className="formInput">
                        <label htmlFor="subjects">2. Subjects and Grades</label>

                        <div className="subjects">
                            {formData.subjects.map((subject, index) => (
                                <div key={index} className="subject">

                                    {/* <h3>{index < 3 ? "Core" : "Elective"}</h3> */}
                                    <input
                                        type="text"
                                        placeholder={`Subject ${index + 1}`}
                                        value={subject.subject}
                                        onChange={(e) =>
                                            handleSubjectChange(index, "subject", e.target.value)
                                        }
                                        className="subInput"
                                        required
                                    />
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
                        <label htmlFor="uniChoice">3. University</label>

                        <select
                            name="university"
                            id="university"
                            value={formData.university}
                            onChange={(e) =>
                                setFormData({ ...formData, university: e.target.value })
                            }
                            className="uniChoice"
                            required
                        >
                            <option value="" disabled>
                                eg. select university
                            </option>
                            <option value="KNUST">
                                Kwame Nkrumah University of Science and Technology (KNUST)
                            </option>
                            <option value="LEGON">University of Ghana (LEGON)</option>
                            <option value="UCC">University of Cape Coast (UCC)</option>
                            <option value="SDD-UBIDS">
                                Simon Diedong Dombo University of Business and Integrated
                                Development Studies (SDD-UBIDS)
                            </option>
                            <option value="UPSA">
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
    );
};

export default DataForm;
