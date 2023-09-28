import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './components/home';
import DataForm from './components/dataForm';
import Programs from './components/programs';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/data-form">
              <DataForm />
            </Route>
            <Route path='/program'>
              <Programs />
            </Route>
          </Switch>
        </div>
        <Route>
        <Footer path='/about'/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
