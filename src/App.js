import './App.css';
import Main from "./Views/Main";
import Login from "./Views/Login";
import Logout from "./Views/Logout";
import Register from "./Views/Register";
import Nav from "./components/Nav/Nav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
            <Nav/>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/login' component={Login}/>
                <Route path='/logout' component={Logout}/>
                <Route path='/register' component={Register}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
