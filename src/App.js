import React, { Component } from 'react';
import Brand from './pages/brand/index';

class App extends Component {
  constructor() {
    super();

    addEventListener('hashchange', e => this.setState({page: location.hash}) );

    this.state = {
      page: location.hash,
    };
  }

  page() {
    if (this.state.page === '#brand') return <Brand></Brand>;

    return <h1><span className="name-1">Thought</span><span className="name-2">Front</span></h1>;
  }

  render() {
    return (
      <div>
        {this.page()}
      </div>
    );
  }
}

export default App;
