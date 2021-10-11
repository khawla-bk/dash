import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { current } from "./redux/actions/userActions";
import mainDash from "./pages/Dashboard/maindash";
import SignUp from "./pages/Signup/Signup";
import User from "./pages/User/User";
import SettingsPage from "./pages/settings/Settings";
import AddService from "./pages/Dashboard/AddService";
import ReportIssues from "./pages/ReportIssues/ReportIssues";
import Editservice from "./pages/EditService/EditService";
// import axios from "axios";

function App() {
  const [setup, setSetup] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
    setSetup(true);
  }, [dispatch]);

  if (!setup) return null;

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/main-dashboard" component={mainDash} />
        <Route path="/add-service" component={AddService} />
        <Route path="/edit-service/:serviceId" component={Editservice} />
        <Route path="/signup" component={SignUp} />
        <Route path="/user-page" component={User} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/report-issues" component={ReportIssues} />
      </Switch>
    </div>
  );
}

export default App;
