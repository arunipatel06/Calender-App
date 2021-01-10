import "./App.css";
import MenuList from "./components/MenuList";
import DateComponent from "./components/DateComponent";
import ScoreCards from "./components/ScoreCards";

function App() {
  return (
    <section>
      {/* <div>
        <DateComponent />
      </div> */}
      <MenuList />
      <div>
        <ScoreCards />
      </div>
    </section>
  );
}

export default App;
