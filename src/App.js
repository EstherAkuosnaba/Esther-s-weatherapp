import './App.css';
import Home from './Components/Home'
import Login from './Container/Login'
import Climate from './Container/Climate'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/signin' component={Login} />
          <Route path='/weather' component={Climate} />
        </Switch>
      </Router>
  );
}

export default App;
