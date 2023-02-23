import { useState } from "react";
import { useNavigate } from "react-router-dom";

const resultsCSS = {
  main: {
    display: "flex",
    height: "100%",
    backgroundColor: "var(--react--lightGrey)",
    margin: "24px 0px",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",
    padding: "10px 20px",
  },
  h1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "var(--react--yellow)",
  },
  logoStyle: {
    maxWidth: "100px",
    marginRight: "10px",
    padding: "5px",
  },
};


function Results(props) {
  const navigate = useNavigate();
  const [userSelectionObj, setUserSelectionObj] = useState(
    {
      name: "",
      target: "",
      equipment: "",
      bodyPart: "",
      image: ""
    });

  const [selectedName, setSelectedName] = useState('');
  console.log(selectedName)
  const [selectedTarget, setSelectedTarget] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState('');
  const [selectedBodyPart, setSelectedBodyPart] = useState('');
  const [selectedImage, setSelectedImage] = useState('');


  const handleSelect = (e) => {
    e.preventDefault()
    console.log(userSelectionObj)
    // props.setExercisesData()

    navigate("/exercise-form")
  }

  return (
    <main style={resultsCSS.main}>

      {props.exercisesData && props.exercisesData.map((data, index) => {
        return (
          <div className="resultCard" key={index}>
            <h3 className="resultData"> {data.name}</h3>
            <p> Target Muscle: <span className="resultData"> {data.target}</span></p>
            <p> Equipment used: <span className="resultData"> {data.equipment}</span></p>
            <p> Body Part: <span className="resultData"> {data.bodyPart} </span> </p>

            <img src={data.gifUrl} alt="Re-Active Logo" style={resultsCSS.logoStyle} />
            <form>
              <div style={{ display: "none" }}>
                <input value={data.name}
                  onChange={e => { setSelectedName(e.target.value) }}>
                </input>
                <input value={data.target}
                  onChange={e => { setUserSelectionObj({ ...userSelectionObj, target: e.target.value }) }}>
                </input>
                <input value={data.equipment}
                  onChange={e => { setUserSelectionObj({ ...userSelectionObj, equipment: e.target.value }) }}>
                </input>
                <input value={data.bodyPart}
                  onChange={e => { setUserSelectionObj({ ...userSelectionObj, bodyPart: e.target.value }) }}>
                </input>
                <input value={data.gifUrl}
                  onChange={e => { setUserSelectionObj({ ...userSelectionObj, image: e.target.value }) }}>
                </input>
              </div>
              <button className="buttonReact" name={data.name} target={data.target} equipment={data.equipment} bodyPart={data.bodyPart} image={data.gifUrl} onClick={handleSelect}>Select</button>
            </form>
          </div>
        );
      })}
    </main>
  );
}

export default Results;
