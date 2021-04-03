import React, { Component } from 'react';

import Login from './components/Login';
// import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        {/* <Blog /> */}
      </div>
    );
  }
}

export default App;
