import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
// import { Navbar } from "./components/Navbar/Navbar";

// const MockComponent = () => <div>sdf</div>;

export default function App() {
  return (
    <div className="App">
      <h1>My theater</h1>
      <MainPage />

      {/* <Router>
        <Navbar />
        <Switch>
          <Route exact path="/cinema-hall" component={CinemaHall} />
          <Route exact path="/mock-component" component={MockComponent} />
        </Switch>
      </Router> */}
    </div>
  );
}
