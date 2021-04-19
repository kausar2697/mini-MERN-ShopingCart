import "./App.css";
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        {/* SideDrawer */}
        {/* Backdrop */}
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
