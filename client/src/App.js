import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
