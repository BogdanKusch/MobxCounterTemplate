import React from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import {inject, observer} from 'mobx-react';

@inject('counter')
@observer
export class Counter extends React.Component {
  public render() {
    console.log({props: this.props});
    return (
      <>
        <SafeAreaView style={{flex: 1}}>
          <Text>{this.props.counter.counter}</Text>
          <Button title="+" onPress={() => this.props.counter.inc()} />
          <Button title="-" onPress={() => this.props.counter.dec()} />
        </SafeAreaView>
      </>
    );
  }
}
