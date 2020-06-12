import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import UnitsList from './components/units-list.component';
import EditUnit from './components/edit-unit.component';
import CreateUnit from './components/create-unit.component';
import ArmyList from './components/army-list.component';
import CreateArmy from './components/create-army.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <Router>
      <Navigation />
      {/* <Route path="/" exact component={UnitsList} />
      <Route path="/edit/:id" component={EditUnit} />
      <Route path="/create" component={CreateUnit} />
      <Route path="/army" component={ArmyList} />
      <Route path="/army/create" component={CreateArmy} />
      <Route path="/user" component={CreateUser} /> */}
    </Router>
  );
}

export default App;
