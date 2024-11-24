import React from "react";

const CategorySelect = ({ onSelectCategory }) => {
    // Updated categories to include "Monument"
    const categories = ["Museum and Landmarks", "History - Scotland and England", "Taj Mahal", "Gyeongbokgung Palace"];

    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "30px",
                padding: "20px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
        >
            <h2>Select Quiz Category</h2>
            <select
                onChange={(e) => onSelectCategory(e.target.value)}
                style={{
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                }}
            >
                <option value="">--Select Category--</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelect;