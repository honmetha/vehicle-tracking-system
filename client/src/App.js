import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Vehicles from "./pages/Vehicles";
import VehicleTimeline from "./pages/VehicleTimeline";
import Connecting from "./pages/Connecting";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/vehicles" component={Vehicles} />
        <Route exact path="/vehicletimeline" component={VehicleTimeline} />
        <Route exact path="/connecting" component={Connecting} />
        <Route path="/" component={Signin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
