import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"

//components
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'

function App() {
  return (
    <Router>
        <Navbar/>
        {/* SideDrawer */}
        <Backdrop/>
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
          </Switch>
        </main>
    </Router>
  );
}

export default App;
