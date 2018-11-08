import React, {Component} from 'react';
import { Provider } from "react-redux";
import {Platform, StyleSheet, Text, View} from 'react-native';
import store from "./src/store";
import { RootNavigator } from "./src/app/RootNavigator";

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
