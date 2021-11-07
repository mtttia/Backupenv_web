import { Component } from 'react'
import AppBar from './components/AppBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './view/Home'
import Tecnology from './view/Tecnology'
import HowWork from './view/HowWork'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App h-max">
          <nav>
            <AppBar />
          </nav>
          <div className='h-max'>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home"></Redirect>
              </Route>  
              <Route path="/home" component={Home} />
              <Route path="/howWork" component={HowWork} />
              <Route path="/tecnology" component={Tecnology} />
            </Switch>
          </div>    
        </div>
      </Router>
  );
  }
}

export default App;
