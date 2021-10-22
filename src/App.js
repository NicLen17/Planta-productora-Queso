import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carro from './componentes/Carro';
import NavBar from './componentes/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./componentes/ScrollToTop";
import Cards from './componentes/Cards';
import Footer from './componentes/Footer'
import Info from './componentes/Info';

function App() {
  return (
    <div className="App">

      <Router>

        <Route>
          <ScrollToTop></ScrollToTop>
        </Route>

        <NavBar />

        <Switch>

        <Route path="/" exact>

        <Carro />

        <Cards />

        </Route>

        <Route path="/info" exact>
            <Info />
          </Route>

        </Switch>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
