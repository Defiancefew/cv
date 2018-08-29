import React, { Component } from 'react';

import { Aside } from './blocks/Aside';
import { Main } from './blocks/Main';
// import { Bottom } from './blocks/Bottom';

import { Layout, Columns } from './components/Wrappers';

class App extends Component {
  render() {
    return (
      <Layout>
        <Columns>
          <Aside />
          <Main />
        </Columns>
        {/* <Bottom /> */}
      </Layout>
    );
  }
}

export default App;
