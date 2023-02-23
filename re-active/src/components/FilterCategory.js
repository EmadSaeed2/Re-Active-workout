import { useState } from "react";
import categories from "../data/exerciseCat.json";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const styles = {
    main: {
        display: "flex",
        height: "100%",
        backgroundColor: "var(--react--lightGrey)",
        marginBottom: "24px",
        justifyContent: "center",
    },
    form: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        paddingBottom: "100px",
        width: "40%",
        fontSize: "1.5rem",
        alignItems: "center"
    },
    ddStyle: {
        width: "100%"
    }
};

const FilterCategory = () => {

    const [exerciseType, setExerciseType] = useState('');
    const [muscleType, setMuscleType] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [exercisesData, setExercisesData] = useState([]);

    const [typeMenu, setTypeMenu] = useState(false);
    const [muscleMenu, setMuscleMenu] = useState(false);
    const [difficultyMenu, setDifficultyMenu] = useState(false);

    const apiNinjasUrl = `https://api.api-ninjas.com/v1/exercises?type=${exerciseType}&muscle=${muscleType}&difficulty=${difficulty}`

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(apiNinjasUrl, {
            method: "GET",
            headers: { "X-Api-Key": "BL6BYitqkUgnFRbJJAz94g==R7cuLcmvlOJQ0OaT" }
        })
            .then(response => response.json())
            .then(data => {
                setExercisesData({ ...data })
                console.log(exercisesData)
            })
            .catch(err => console.log(err));

        console.log(apiNinjasUrl)

        setExerciseType('')
        setMuscleType('')
        setDifficulty('')
    }

    return (
        <>
            <main style={styles.main}>
                <form className="filter-form" style={styles.form}>
                    <p>Please select an option</p>
                    <Dropdown disabled={typeMenu}
                        onChange={e => {
                            setExerciseType(e.value.toLocaleLowerCase())
                            setMuscleMenu(true)
                            setDifficultyMenu(true)
                        }}
                        style={{ backgroundColor: "red" }}
                        options={categories[0]}
                        value={exerciseType}
                        placeholder="Select Exercise Type"
                    />
                    <Dropdown disabled={muscleMenu}
                        onChange={e => setMuscleType(e.value.toLocaleLowerCase())}
                        style={styles.ddStyle}
                        options={categories[1]} value={muscleType}
                        placeholder="Select Targeted Muscle"
                    />
                    <Dropdown disabled={difficultyMenu}
                        onChange={(e) => setDifficulty(e.value.toLocaleLowerCase())}
                        style={styles.ddStyle}
                        options={categories[2]}
                        value={difficulty}
                        placeholder="Select Difficulty"
                    />
                    <button className="buttonReact" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </main>
        </>
    )
}

export default FilterCategory