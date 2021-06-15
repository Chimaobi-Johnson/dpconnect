import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home';
import { primary } from './theme/colors';

function App() {

  let routes
  routes = (
    <Switch>
        <Route path="/feed" component={Dashboard} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
    </Switch>
  )
  return (
    <div className="main" style={{ backgroundColor: primary.backgroundMain, color: primary.textWhite1 }}>
      {routes}
    </div>
  );
}

export default App;
