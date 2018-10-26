import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SearchContainer from './search/search_container.jsx';

const App = () => (
  <div>
   <header>
     <h1>Welcome to Entirely Pets!</h1>
   </header>
   <Switch>
     <Route exact path="/" component={SearchContainer} />
   </Switch>
 </div>
);

export default App;
