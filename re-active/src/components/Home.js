
const homeStyle={
  h1Style:{
    display:"flex",
    justifyContent:"center",
    padding:"10px"
  },
  main:{
    display:"flex",
    height:"100%"
  },
    excerciseStyle:{
    display: "flex",
    width:"50%",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"var(--react--darkGrey)",
  },
    filterStyle:{
    display: "flex",
    width:"50%",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"var(--react--lightGrey)",
  },
  titleStyle:{
    justifyContent:"center",
    color:"var(--react--yellow)"
  }
}

function Home(){
  return(
    <>
      <h1 style={homeStyle.h1Style}>Let's Go!</h1>
      <main style={homeStyle.main}>
        <section style={homeStyle.excerciseStyle}>
          <h2 style={homeStyle.titleStyle}>Excercise Search</h2>
        </section>
        <section style={homeStyle.filterStyle}>
          <h2 style={homeStyle.titleStyle}>Filter by category</h2>
        </section>
      </main>
    </>
  )
}

export default Home;