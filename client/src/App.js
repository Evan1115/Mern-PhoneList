import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/navbar";
import PhoneList from "./Components/phonelist";
import CreatePhoneList from "./Components/createlist";
import EditPhoneList from "./Components/edit-phonelist";

function App() {
  return (
    <Router>
      <div className>
        <Navbar />
        <br />
        <Route path="/" exact component={PhoneList} />
        <Route path="/edit/:id" component={EditPhoneList} />
        <Route path="/create" component={CreatePhoneList} />

      </div>
    </Router>

  );
}


export default App;
