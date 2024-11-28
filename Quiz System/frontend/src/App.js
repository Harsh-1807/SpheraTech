import React, { useState } from "react";
import CategorySelect from "./components/CategorySelect";
import Quiz from "./components/Quiz";
import Navbar from "./components/Navbar";

const App = () => {
    const [category, setCategory] = useState("");

    return (
        <div>
            <Navbar />
            <CategorySelect onSelectCategory={setCategory} />
            <Quiz category={category} />
        </div>
    );
};

export default App;
