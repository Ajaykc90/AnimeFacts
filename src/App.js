import './App.css';
import HomePage from './components/HomePage';
import AnimeFacts from './components/AnimeFacts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <h1> Anime Facts </h1>
          <p>Find out the interesting facts about your loved anime</p>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/facts/:name" component={AnimeFacts} />
        </Switch>
      </div >
    </Router>
  );
}

export default App;
