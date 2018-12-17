import * as React from 'react';
import { storeShape } from 'react-redux/lib/utils/PropTypes';
import { Provider } from 'react-redux';

export const createConnectedPortal = (SuperPortal) =>
  class ReduxPortal extends SuperPortal {
    static contextTypes = {
      store: storeShape
    };

    renderer (...args) {
      return (
        <Provider
          store={this.context.store}>
          {super.renderer(...args)}
        </Provider>
      );
    }
  };
