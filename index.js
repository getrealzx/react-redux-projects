import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BaseLayout from './components/layout/BaseLayout';
import ProjectManagement from './components/projectManagement/ProjectManagement';
// import AddProject from './components/projectManagement/AddProject';
import reducer from './reducer/reducer'

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';





let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/proman" component={ProjectManagement} />
          {/* <Route exact path="/addProject" component={AddProject} /> */}
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>

  ,
  document.getElementById('root')
);
