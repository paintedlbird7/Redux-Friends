import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from '../src/components/Login';
import PrivateRoute from './src/components/PrivateRoute';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/friend-form">Add Friend</Link>
              <Link to="/protected">Friends</Link>
            </li>
          </ul>
        </nav>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <PrivateRoute exact path="/friend-form" component={FriendForm} />
      </div>
    </Router>
  );
}

export default App;
