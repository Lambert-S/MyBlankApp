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
  TouchableHighlight,
  ScrollView,
  Dimensions
} from 'react-native';
import Menu from './Menu';

var BtIcon = [
  require('./img/hotel.png'),
  require('./img/plane.png'),
  require('./img/travel.png')
];

var titles = [
  '酒店',
  '机票',
  '旅游度假'
];

var subTitles = [
  ['特价酒店','民宿·公寓','国际酒店','会场'
  ],['特价机票','火车票','汽车票·船票','用车·自驾'
  ],['景点·门票','自由行','旅游团购','周边·短途'
  ]
];

export default class Index extends Component{
  render(){
    return (
      <View style={styles.container}>

        <Menu img={BtIcon[0]} title={titles[0]} subTitle={subTitles[0]} color='#FA6778'/>
        <Menu top={10} img={BtIcon[1]} title={titles[1]}  subTitle={subTitles[1]} color='#3D98FF'/>
        <Menu top={10} img={BtIcon[2]} title={titles[2]}  subTitle={subTitles[2]} color='#5EBE00'/>



        <View style={[styles.sbu_view, styles.sbu_yellow]}>
          <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
            <View style={[styles.sub_con_flex, styles.sub_text]}>
              <Text style={[styles.font12]}>金融·理财</Text>
            </View>
          </View>
          <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
            <View style={[styles.sub_con_flex, styles.sub_text]}>
              <Text style={[styles.font12]}>保险</Text>
            </View>
          </View>
          <View style={[styles.sbu_flex]}>
            <View style={[styles.sub_con_flex, styles.sub_text]}>
              <Text style={[styles.font12]}>全球购</Text>
            </View>
          </View>
        </View>

      </View>
    );
  }
}

var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;
var sub_h = h*0.15;

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

    sbu_yellow:{
      backgroundColor: '#FC9720',
      marginTop:10,
      height:sub_h*0.5,
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
    sub_text:{
      justifyContent:'center',
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