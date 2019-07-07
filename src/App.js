import React from 'react';
import Navbar from './components/layout/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from './context';
import Index from './components/layout/Index'
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}/>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
          
  );
}

export default App;
