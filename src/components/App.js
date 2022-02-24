import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header />
        <div className="flex ">
          <Sidebar />
          <Main />
        </div>
      </>
    );
  }
}

export default App;
