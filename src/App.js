import "./App.css";
import File from "./components/File";
import Home from "./components/Home2";
import Login from "./components/Login";
// import { BrowserRouter, } from "react-router-dom";
// import User from "./components/User";
// import Personaldetails from "./components/Personaldetails";
// import Aadhar from "./components/Aadhar";
// import Faq from "./components/Faq";
// import Complaints from "./components/Complaints";
// import Payment from "./components/Payment";
// import License from "./components/License";
import SignUp from "./components/SignUp";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/'><Login/></Route> 
        <Route exact path = '/signup'><SignUp/></Route> 
        <Route exact path = '/home'><Home/></Route> 
      </Switch>
    </BrowserRouter>
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route exact path="/"><Landingpage /></Route>
    //       <Route exact path="/id"><File /></Route>
    //       <Route exact path="/home"><Home/></Route>
    //       <Route exact path="/personaldetails"><Personaldetails/></Route>
    //       <Route exact path="/aadhar"><Aadhar/></Route>
    //       <Route exact path="/faq"><Faq/></Route>
    //       <Route exact path="/complaints"><Complaints/></Route>
    //       <Route exact path="/payment"><Payment/></Route>
    //       <Route exact path="/license"><License/></Route>
    //       <Route exact path="/signup"><SignUp/></Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
