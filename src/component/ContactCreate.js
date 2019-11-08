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
    Button,
    Alert,
} from 'react-native';
import PropTypes from 'prop-types';

class ContactCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: ''
    };

    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleOnchange(e){
    var nextValue = {};
    nextValue[e.target.name] = e.target.value;
    this.setState(nextValue);
  }

  handleCreate(e){
    const contact = {
      name: this.state.name,
      phone: this.state.phone
    };
    this.props.onCreate(contact);
    this.setState({
      name: '',
      phone: ''
    });
  }

  render() {
    return (
      <View>
        <View style={{margin: 10}}><Text style={{fontWeight:'bold', fontSize:20}}>Created</Text></View>
        <View style={{borderWidth: 1, borderColor: '#e8e8e8', marginTop: 5}}><TextInput type="text" style={Style.textInput} value={this.state.name} onChange={this.handleOnchange} name="name"/></View>
        <View style={{borderWidth: 1, borderColor: '#e8e8e8', marginTop: 5}}><TextInput type="text" style={Style.textInput} value={this.state.phone} onChange={this.handleOnchange} name="phone"/></View>
        <View style={{marginTop: 20, marginBottom: 20}}><Button title="create" onPress={(e) => this.handleCreate(e)}/></View>
      </View>
    );
  }

}

ContactCreate.propTypes = {
    onCreate : PropTypes.func
};

ContactCreate.defaultProps = {
  onCreate: () => {
    console.error('onCreate not defined');
  }
};

const Style = StyleSheet.create({
    textInput: {
        backgroundColor: 'white'
    }
});

export default ContactCreate;
