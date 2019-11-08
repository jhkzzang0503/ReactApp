import React, { Component } from 'react';
import {
    Image,
    View,
    TextInput,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Text,
    Button,
    StatusBar,
    TouchableHighlight,
} from 'react-native';
import ContactInfo from './ContactInfo'
import ContactCreate from './ContactCreate';
import ContactDetail from './ContactDetail';
import update from 'react-addons-update';

export default class ImageContact extends Component {

  constructor(props) {
      super(props);
      this.state = {
        contactData: [{
          name: 'Abet',
          phone: '010-0000-0001'
        },{
          name: 'Betty',
          phone: '010-0000-0002'
        },{
          name: 'Charlie',
          phone: '010-0000-0003'
        },{
          name: 'Delta',
          phone: '010-0000-0004'
        }],
        name: '',
        phone: '',
        keyword: '',
        selectedKey: -1
      };

      this.handleCreate = this.handleCreate.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleCreate(contact) {
      this.setState({
        contactData: update(this.state.contactData, {$push: [contact]}),
      });
    }

    handleDelete(key) {
      this.setState({
        contactData: update(this.state.contactData, {$splice: [[key, 1]]}),
        selectedKey: -1
      });
    }

    handleUpdate(contact, key) {
      console.log(contact);
      this.setState({
        contactData: update(this.state.contactData, {
          [key]: {
            name: { $set: contact.name },
            phone: { $set: contact.phone }
          }
        })
      });
    }

    handleChange(e){
      this.setState({
        keyword: e.target.value
      });
    }

    handleClick(key){
      this.setState({
        selectedKey: key
      });

      console.log(key, 'is selected');
    }

    render() {
      const mapToComponents = (data) => {
        data.sort();
        data = data.filter(
          (contact) => {
            return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;
          }
        );
        return data.map((contact, i) => {
          return (
          <View style={{flex : 1, flexDirection: 'row', borderWidth: 1, borderColor: '#d6d7da', height:50, textAlign:'auto'}}>
            <View style={{flex:0.5}}><Text>{i}</Text></View>
            <TouchableHighlight style={{flex:3}} underlayColor='#ddd' onPress={(e) => this.handleClick(i)}><ContactInfo contact={contact} key={i} idx={i}/></TouchableHighlight>
          </View>
          );
        });
      };

      return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text style={{fontWeight:'bold', fontSize:20}}>Contacts</Text>
          <View style={{borderWidth:1, borderColor:'#e8e8e8', marginTop:10, marginBottom:10}}><TextInput name="keyword" style={{backgroundColor:'white'}} placeholder="search" value={this.state.keyword} onChange={this.handleChange}/></View>
          <View>{mapToComponents(this.state.contactData)}</View>
          <ContactCreate onCreate={this.handleCreate}/>
          <ContactDetail
            isSelected={this.state.selectedKey != -1}
            contact={this.state.contactData[this.state.selectedKey]}
            onUpdate={this.handleUpdate}
            onDelete={this.handleDelete}
            idx={this.state.selectedKey}/>
        </ScrollView>
      );
    }
}

const Style = StyleSheet.create({
    createBtn : {
        width : 100
    }
});