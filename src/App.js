import "./App.css";
import File from "./components/File";
import Home from "./components/Home";
import Landingpage from "./components/Landinpage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import User from "./components/User";
import Personaldetails from "./components/Personaldetails";
import Aadhar from "./components/Aadhar";
import Faq from "./components/Faq";
import Complaints from "./components/Complaints";
import Payment from "./components/Payment";
import License from "./components/License";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/"><Landingpage /></Route>
          <Route exact path="/id"><File /></Route>
          <Route exact path="/home"><Home/></Route>
          <Route exact path="/personaldetails"><Personaldetails/></Route>
          <Route exact path="/aadhar"><Aadhar/></Route>
          <Route exact path="/faq"><Faq/></Route>
          <Route exact path="/complaints"><Complaints/></Route>
          <Route exact path="/payment"><Payment/></Route>
          <Route exact path="/license"><License/></Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
