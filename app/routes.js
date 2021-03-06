import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Inbox from './components/Inbox';
import Trash from './components/Trash';
import Tasks from './components/Tasks';
import Plans from './components/Plans';
import Detail from './components/Detail';


export default (
  <Route component={App}>
    <Route path='/' component={Plans}/>
    <Route path='/inbox' component={Inbox}/>
    <Route path='/home' component={Home}/>
    <Route path='/tasks' component={Tasks}/>
    <Route path='/plans' component={Plans}/>
    <Route path='/trash' component={Trash}/>
    <Route path='/detail/:id' component={Detail}/>
  </Route>
);