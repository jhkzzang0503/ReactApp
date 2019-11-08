import React from 'react';
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
} from 'react-native';
import PropTypes from 'prop-types';

class ContactDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        contact : {
          name: "",
          phone: ""
        },
        isEdit: false
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(key, e){
    if(!this.props.isSelected){
      return;
    }
    this.props.onDelete(key);
  }

  handleUpdate(e) {
    console.log(this.state.contact);
    this.props.onUpdate(this.state.contact, this.props.idx);
  }

  handleChange(e) {
    var nextValue = this.state.contact;
    nextValue[e.target.name] = e.target.value;
    this.setState(nextValue);
  }

  handleClick(e) {
    if(!this.props.isSelected){
      return;
    }
    if(this.state.isEdit){
       this.handleUpdate();
     }else{
       this.setState({
         contact : {
           name: this.props.contact.name,
           phone: this.props.contact.phone
         }
       });
     }
     this.setState({
       isEdit: !this.state.isEdit
     });
    console.log(this.state.isEdit);
  }

  render() {
    const details = (
        <View>
          <Text>{this.props.contact.name} {this.props.contact.phone}</Text>
        </View>
    );
    const update = (
      <View>
        <View>
          <TextInput type="text" name="name" value={this.state.contact.name} onChange={this.handleChange}/>
          <TextInput type="text" name="phone" value={this.state.contact.phone} onChange={this.handleChange}/>
        </View>
      </View>
    );
    const button = (
        <>
          <View style={Style.margin}>
            <Button onPress={this.handleClick} title={this.state.isEdit ? "OK" : "EDIT"}/>
          </View>
          <View style={Style.margin}>
            <Button title="DELETE" onPress={(e) => this.handleDelete(this.props.idx, e)}/>
          </View>
        </>
    );
    const view = this.state.isEdit ? update : details;
    const blank = (<View><Text>Not Selected</Text></View>);
    return (
      <View>
        <Text>Details</Text>
        {this.props.isSelected ? view : blank}
        {this.props.isSelected ? button : <View></View>}
      </View>
    );
  }
}

ContactDetail.defaultProps = {
  contact: {
    name: '',
    phone: ''
  },
  onDelete: () => { console.error('onRemove not defined');}
};

ContactDetail.propTypes = {
    onUpdate : PropTypes.func,
    onDelete : PropTypes.func
};

const Style = StyleSheet.create({
    margin : {
        marginTop: 32
    }
});

export default ContactDetail;
