import "./App.css";
import MenuList from "./components/MenuList";
// import DateComponent from "./components/DateComponent";
import ScoreCards from "./components/ScoreCards";
import Chart from "./components/Chart";

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
      <div>
        <Chart />
      </div>
    </section>
  );
}

export default App;
