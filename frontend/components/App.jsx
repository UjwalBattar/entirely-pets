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
     <Link to="/" className="header-link">
       <h1>Entirely Pets</h1>
     </Link>
   </header>
   <Switch>
     <Route exact path="/" component={SearchContainer} />
   </Switch>
 </div>
);

export default App;
