import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Contact from './Components/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
