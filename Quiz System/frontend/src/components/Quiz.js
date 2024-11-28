import React, { useState, useEffect } from "react";
import axios from "axios";

const Quiz = ({ category }) => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    useEffect(() => {
        if (category) {
            axios
                .get(`http://localhost:3003/api/quizzes/${category}`)
                .then((response) => {
                    const allQuestions = response.data;
                    const randomQuestions = getRandomQuestions(allQuestions, 5);
                    setQuestions(randomQuestions);
                    setAnswers({});
                    setScore(null);
                })
                .catch((error) => console.error("Error fetching questions:", error));
        }
    }, [category]);

    const getRandomQuestions = (questions, num) => {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    const handleAnswerChange = (questionIndex, selectedOption) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: selectedOption,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newScore = 0;
        questions.forEach((question, index) => {
            if (answers[index] === question.answer) {
                newScore += 1;
            }
        });
        setScore(newScore);
    };

    if (!category) return <p style={styles.message}>Please select a category</p>;

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Quiz: {category}</h2>
            {score !== null && (
                <h3 style={styles.score}>
                    Your Score: {score} / {questions.length}
                </h3>
            )}
            <form onSubmit={handleSubmit} style={styles.form}>
                {questions.map((q, idx) => (
                    <div key={idx} style={styles.questionContainer}>
                        <p style={styles.questionText}>
                            {idx + 1}. {q.question}
                        </p>
                        <ul style={styles.optionList}>
                            {q.options.map((opt, i) => (
                                <li key={i} style={styles.optionItem}>
                                    <label style={styles.optionLabel}>
                                        <input
                                            type="radio"
                                            name={`question-${idx}`}
                                            value={opt}
                                            checked={answers[idx] === opt}
                                            onChange={() => handleAnswerChange(idx, opt)}
                                            style={styles.radioButton}
                                        />
                                        {opt}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <button type="submit" style={styles.submitButton}>Submit Quiz</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "'Arial', sans-serif",
        padding: "20px",
        backgroundColor: "#f9f9fc",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
        maxWidth: "800px",
        margin: "20px auto",
        color: "#333",
    },
    header: {
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "15px",
        color: "#2c3e50",
        textAlign: "center",
        borderBottom: "3px solid #47a7b9",
        paddingBottom: "10px",
    },
    score: {
        fontSize: "20px",
        fontWeight: "600",
        marginBottom: "20px",
        color: "#27ae60",
        textAlign: "center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "25px",
    },
    questionContainer: {
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
    },
    questionText: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#34495e",
        marginBottom: "10px",
    },
    optionList: {
        listStyleType: "none",
        padding: "0",
        margin: "10px 0",
    },
    optionItem: {
        padding: "10px 0",
        margin: "5px 0",
        backgroundColor: "#ecf0f1",
        borderRadius: "8px",
        transition: "background-color 0.3s",
    },
    optionLabel: {
        fontSize: "18px",
        cursor: "pointer",
        color: "#2d3436",
    },
    radioButton: {
        marginRight: "15px",
    },
    submitButton: {
        padding: "12px 25px",
        backgroundColor: "#47a7b9",
        color: "#ffffff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "bold",
        textAlign: "center",
        transition: "background-color 0.3s, transform 0.2s",
        alignSelf: "center",
    },
    message: {
        fontSize: "20px",
        fontWeight: "600",
        color: "#e74c3c",
        textAlign: "center",
        margin: "20px 0",
    },
};

export default Quiz;