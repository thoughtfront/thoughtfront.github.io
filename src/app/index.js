import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../pages/home';
import Brand from '../pages/brand';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Switch>
          <Route exact path='/brand' component={Brand} />
          <Route path='*' component={Home} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);