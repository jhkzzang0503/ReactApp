import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
//import CustomButton from '../components/CustomButton';

type Props = {};
export default class StartScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.title}>
          <Text style={{fontSize:35,color:'white'}}>어서와,{'\n'}개발은 처음이지?</Text>
        </View>
        <View style={styles.content}>
        </View>
        <View style={styles.footer}>
          <Button
            buttonColor={'#444'}
            title={'회원가입'}
            onPress={() => alert('회원가입 버튼')}/>
          <Button
          buttonColor={'#023e73'}
          title={'로그인'}
          onPress={() => alert('로그인 버튼')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  header: {
    width:'100%',
    height:'5%',
    //backgroundColor: '#ff9a9a',
  },
  title: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
    //backgroundColor: '#9aa9ff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:30,
    //backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:'20%',
    //backgroundColor: '#1ad657',
  },
});