import React, { Component } from 'react';

import { Aside } from './views/Aside';
import { Main } from './views/Main';
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
