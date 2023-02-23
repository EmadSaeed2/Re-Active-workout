import { NavLink } from "react-router-dom";
const homeStyle = {
    h1Style: {
        display: "flex",
        justifyContent: "center",
        padding: "0px 10px 0px 10px",
        marginBottom: "24px"

    },
    main: {
        borderTop: "2px solid var(--react--black)",
        display: "flex",
        height: "100%",
        marginBottom: "24px"
    },
    excerciseStyle: {
        display: "flex",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--react--darkGrey)",
        cursor: "pointer",
    },
    filterStyle: {
        display: "flex",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--react--lightGrey)",
        cursor: "pointer",
    },
    titleStyle: {
        justifyContent: "center",
        color: "var(--react--yellow)",
    },
};

function Home() {
    return (
        <>
            <h1 style={homeStyle.h1Style}>Let's Go!</h1>
            <main style={homeStyle.main}>
                <section style={homeStyle.excerciseStyle} >
                    <NavLink to="/filter-category">
                        <h2 style={homeStyle.titleStyle}>Find Exercise</h2>
                    </NavLink>
                </section>
                <section style={homeStyle.filterStyle} >
                    <NavLink to="/exercise-form">
                        <h2 style={homeStyle.titleStyle}>Plan Workout</h2>
                    </NavLink>
                </section>
            </main>
        </>
    )
}

export default Home