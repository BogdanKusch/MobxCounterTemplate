import React from 'react';
import {Provider} from 'mobx-react';

import { Counter } from './src/features/counter/Counter';
import { createRootStore } from './src/stores/stores';

export class App extends React.Component {
  private rootStore = createRootStore();

  public render() {
    return (
      <Provider {...this.rootStore}>
        <Counter />
      </Provider>
    );
  }
};
