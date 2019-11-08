import React, { Component } from 'react';
import {
    Image,
    View,
    TextInput,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
    StatusBar,
} from 'react-native';

class ContactInfo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View onClick={this.props.onClick}><Text>{this.props.contact.name}</Text></View>
    );
  }
}


export default ContactInfo;
