import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Pokemon from './Component/Pokemon';
import PokemonDetail from './Component/PokemonDetail';
import './App.css';

function App() {

  return (
    <div className="container">
        <h1>Pokemon's</h1>
        <Router>
          <Switch>       
            <Route path="/" exact component={Pokemon} />
            <Route path="/pokemon/:id" component={(PokemonDetail)} />
          </Switch>
        </Router>
    </div>
    
  );
}

export default App;
