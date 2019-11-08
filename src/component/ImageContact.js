import React, { Component } from 'react';
import { Image, View, TextInput } from 'react-native';

export default class ImageContact extends Component {

  constructor(props) {
      super(props);
      this.state = {text: 'Hello, World!!!'};
    }

  render() {
    return (
    <View>
      <TextInput value={this.state.text}/>
    </View>
    );
  }
}