const formPageCardStyles = {
    cardWrapper: {
        backgroundColor: "#fff",
        width: "85%",
        height: "90%",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "30px"
    },
    imageWrapper: {
        height: "50%",
        borderRadius: "4px 4px 0 0",
        backgroundColor: "#ccc",
        backgroundImage: `url('https://images.pexels.com/photos/703014/pexels-photo-703014.jpeg?auto=compress&cs=tinysrgb&h=650')`
    },
    textWrapper: {
        padding: "0 20px"
    },
    headerWrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "10px auto"
    },
    listWrapper: {
        marginTop: "20px",
    },
    list: {
        listStyle: "none",
        color: "var(--react--black)"
    }
}
function FormPageCard() {
    return (
        <div className="cardWrapper" style={formPageCardStyles.cardWrapper}>

            <div className="imageWrapper" style={formPageCardStyles.imageWrapper}></div>
            <div style={formPageCardStyles.textWrapper}>
                <div style={formPageCardStyles.headerWrapper}>
                    <h2 style={{ color: "var(--react--black" }}>Wide-grip barbell curl</h2>
                </div>
                <p><strong>Instructions: </strong>Stand up with your torso upright while holding a barbell at the wide outer handle. The palm of your hands should be facing forward. The elbows should be close to the torso. This will be your starting position. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions.  Variations:  You can also perform this movement using an E-Z bar or E-Z attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement. You may also use the closer grip for variety purposes.</p>
                <ul style={formPageCardStyles.listWrapper}>
                    <li style={formPageCardStyles.list}><strong> Muscle:</strong> Biceps</li>
                    <li style={formPageCardStyles.list}><strong> Equipment:</strong> Barbell</li>
                    <li style={formPageCardStyles.list}><strong> Difficulty:</strong> Beginner</li>
                </ul>
            </div>
        </div>
    )
}

export default FormPageCard