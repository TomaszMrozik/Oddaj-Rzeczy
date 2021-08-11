import './App.css';
import Main from "./Views/Main";
import LoginView from "./Views/LoginView";
import LogoutView from "./Views/LogoutView";
import RegisterView from "./Views/RegisterView";
import Nav from "./components/Nav/Nav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
            <Nav/>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/login' component={LoginView}/>
                <Route path='/logout' component={LogoutView}/>
                <Route path='/register' component={RegisterView}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
