import React, { Component } from 'react';

import { Aside } from './blocks/Aside';
import { Main } from './blocks/Main';
import { Layout } from './components/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Aside />
        <Main />
      </Layout>
    );
  }
}

export default App;
