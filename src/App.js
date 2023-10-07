import Tictactoe from "./components/tictactoe/Tictactoe";
import NoPuzzle from "./components/8NoPuzzle/NoPuzzle";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Puzzle from "./components/tictactoe/Puzzle";

function App() {
  return (
    <div>
        <Router>
            <Home />
            <Switch>
                <Route path='/tictactoe' exact component={Tictactoe} />
                <Route path='/nopuzzle' exact component={NoPuzzle} />
                <Route path='/puzzle' exact component={Puzzle} />
            </Switch>
        </Router>
      
    </div>
  );
}

export default App;
