import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Layout components
import Navbar from "./Components/Nav";
import Footer from "./Components/Footer";
// Pages
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/404";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route exact path="/about" component={About} />

        <Route exact path="/projects" component={Projects} />

        <Route exact path="/contact" component={Contact} />

        <Route
          component={({ location }) => {
            return <NotFound />;
          }}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
