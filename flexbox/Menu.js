/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

export default class Menu extends Component{
  render(){
    return (
      <View style={[styles.sbu_red, styles.sbu_view,{backgroundColor:this.props.color,marginTop:this.props.top}]}>

        <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
          <View style={[styles.sub_con_flex]}>
            <Image style={[styles.sbu_icon_img]} source={this.props.img}></Image>
          </View>
          <View style={[styles.sub_con_flex]}>
            <Text style={[styles.font16]}>{this.props.title}</Text>
          </View>
        </View>

        <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
          <View style={[styles.sub_con_flex,styles.sbu_borderBottom]}>
            <Text style={[styles.font12]}>{this.props.subTitle[0]}</Text>
          </View>
          <View style={[styles.sub_con_flex]}>
            <Text style={[styles.font12]}>{this.props.subTitle[1]}</Text>
          </View>
        </View>
        
        <View style={[styles.sbu_flex]}>
          <View style={[styles.sub_con_flex,styles.sbu_borderBottom]}>
            <Text style={[styles.font12]}>{this.props.subTitle[2]}</Text>
          </View>
          <View style={[styles.sub_con_flex]}>
            <Text style={[styles.font12]}>{this.props.subTitle[3]}</Text>
          </View>
        </View>

      </View>
    );
  }
}

var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;
var sub_h = h*0.15;

var styles = StyleSheet.create({
   sbu_view:{
      marginLeft: 5,
      marginRight:5,
      borderRadius:1,
      flexDirection:'row',
    },
    sbu_red:{
      backgroundColor: '#FA6778',
      height:sub_h,
    },
    sbu_flex:{
      flex:1,
    },
    sbu_borderRight:{
      borderColor:'#fff',
      borderRightWidth: 0.5,
    },
    sbu_icon_img:{
      marginTop: 20,
      height:40,
      width:40,
      // resizeMode:Image.resizeMode.contain,
    },
    sub_con_flex:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    font12:{
      fontSize:12,
      color:'#FFF',
      fontWeight:'600',
    },
    font16:{
      fontSize:14,
      color:'#FFF',
      fontWeight:'800',
    },
    sbu_borderBottom:{
      borderBottomWidth:0.5,
      borderBottomColor:'#fff',
    }
});
