import React from 'react';
import {
  SafeAreaView,
  Button,
  StatusBar,
  Text,
} from 'react-native';

declare const global: {HermesInternal: null | {}};

export class App extends React.Component {
  public state = {counter: 0}

  public render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <Text>{this.state.counter}</Text>
          <Button title="+" onPress={() => this.setState(({counter}) => ({counter: counter + 1}))}/>
          <Button title="-" onPress={() => this.setState(({counter}) => ({counter: counter - 1}))}/>
        </SafeAreaView>
      </>
    );
  }
};
