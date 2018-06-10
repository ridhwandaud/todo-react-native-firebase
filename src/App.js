import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import Router from './containers/Router';
import configureStore from './store';

const WHITELISTED_REDUCER = ['LoginReducer'];

class App extends Component {

  state = {
    store: configureStore(),
    isHydrated: false, /* redux-persist */
  }

  componentWillMount() {
    const { store } = this.state;
    console.log('WHITELISTED_REDUCER', WHITELISTED_REDUCER);
    persistStore(store, { storage: AsyncStorage, whitelist: WHITELISTED_REDUCER }, () => {
      this.setState({ isHydrated: true });
    });

  }
  render() {
    const { store, isHydrated } = this.state;

    if (!isHydrated) return null;

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

