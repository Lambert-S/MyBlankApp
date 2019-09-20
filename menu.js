import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  Dimensions } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={[styles.sbu_view,styles.sbu_red]}>

          <View style={[styles.sbu_flex, styles.sbu_borderRight]}>

          </View>
          <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
       
          </View>
          <View style={[styles.sbu_flex]}>
         
          </View>

        </View>

      </View>
    );
  }
}

var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container:{
      backgroundColor:'#fff',
      flex:1,
      justifyContent:'center'
    },
    //sbu
    sbu_view:{
      marginLeft: 5,
      marginRight:5,
      borderRadius:1,
      flexDirection:'row',
    },
    sbu_red:{
      backgroundColor: '#FA6778',
      height:h*0.15,
    },
    sbu_flex:{
      flex:1,
    },
    sbu_borderRight:{
      borderColor:'#fff',
      borderRightWidth: 0.5,
    }
});