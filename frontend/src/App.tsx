import teamData from "/Users/bentleyredden/Desktop/IS 413/Mission09_Redden/frontend/src/teams.json"
import MMLogo from "/Users/bentleyredden/Desktop/IS 413/Mission09_Redden/frontend/src/assets/mmlogo.png"
import "./App.css";

function Welcome() {
  return (
    <>
      <img src={MMLogo} alt="March Madness Logo" style={{ width: "100%", height: "auto", marginTop: "10px" }} />
      <h2>Follow your favorite teams through this year's bracket!</h2>
      <br/>
    </>
  );
}

function Team({school, name, city, state,}: {school: string; name: string; city: string; state: string;}) {
  return (
    <>
      <h2>
        {school}
        <br/>
        {name}
      </h2>
      <h3>Location: {city}, {state}</h3>
    </>
  );
}

function TeamList() {
  return (
    <>
      {teamData.teams.map((singleTeam) => (
        <>
          <Team {...singleTeam} />
          <br/>
        </>
      ))}
    </>
  );
}

function App() {
  return (
    <>
      < Welcome />
      <TeamList />
    </>
  );
}

export default App;
