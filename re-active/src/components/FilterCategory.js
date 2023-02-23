import { useState } from "react";
import { useNavigate } from "react-router-dom";
import categories from "../data/exerciseCat.json";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const styles = {
    main: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "var(--react--lightGrey)",
        // marginBottom: "24px",
        justifyContent: "center",
        alignItems: "center"
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

const FilterCategory = (props) => {
    const navigate = useNavigate();
    const [exerciseType, setExerciseType] = useState('');
    const [muscleType, setMuscleType] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const [typeMenu, setTypeMenu] = useState(false);
    const [muscleMenu, setMuscleMenu] = useState(false);
    const [difficultyMenu, setDifficultyMenu] = useState(false);

    const [apiUrl, setApiUrl] = useState('https://exercisedb.p.rapidapi.com/exercises/');


    // fetch api-ninja
    const handleSubmit = (e) => {
        e.preventDefault()
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd620a14592msh467d7fce2a6bb8cp1b6de7jsn6f8296620e92',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        fetch(apiUrl, options)
            .then(response => response.json())
            .then(data => {
                props.setExercisesData(data)
                // navigate to result page
                console.log(props.exercisesData)
                Object.keys(props.exercisesData).length > 0 && navigate("/results");
            })
            .catch(err => console.error(err));
        // reset menus
        setExerciseType('')
        setMuscleType('')
        setDifficulty('')
        setTypeMenu(false)
        setMuscleMenu(false)
        setDifficultyMenu(false)
    }

    return (

        <main style={styles.main}>
            <p style={{ marginTop: "100px" }}>Please select an option</p>
            <form className="filter-form" style={styles.form}>
                <Dropdown disabled={typeMenu}
                    onChange={e => {
                        setApiUrl(apiUrl + 'equipment/' + e.value.toLocaleLowerCase())
                        setMuscleMenu(true)
                        setDifficultyMenu(true)
                    }}
                    options={categories[0]}
                    value={exerciseType}
                    placeholder="Select Equipment"
                />
                <Dropdown disabled={muscleMenu}
                    onChange={e => {
                        setApiUrl(apiUrl + 'target/' + e.value.toLocaleLowerCase())
                        setTypeMenu(true)
                        setDifficultyMenu(true)
                    }}
                    style={styles.ddStyle}
                    options={categories[1]} value={muscleType}
                    placeholder="Select Targeted Muscle"
                />
                <Dropdown disabled={difficultyMenu}
                    onChange={(e) => {
                        setApiUrl(apiUrl + 'bodyPart/' + e.value.toLocaleLowerCase())
                        setTypeMenu(true)
                        setMuscleMenu(true)
                    }}
                    style={styles.ddStyle}
                    options={categories[2]}
                    value={difficulty}
                    placeholder="Select Body Part"
                />
                <button className="buttonReact" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </main>
    )
}

export default FilterCategory