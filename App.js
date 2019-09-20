// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Hello World</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     fontSize:30,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// props example
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   View,
//   Image,
//   Text
// } from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }

// class Fruit extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}} />
//     );
//   }
// }

// export default class App extends Component {
//   render() {
//     return (
//       <View style = {{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
//         <Greeting name='World'/>
//         <Greeting name='Lambert'/>
//         <Fruit/>
//       </View>
//     );
//   }
// }


// state example
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Text,
//   View,
//   StyleSheet
// } from 'react-native';

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { quantity: 0 };
//     // 每1000毫秒对quantity状态做一次add+1操作
    // setInterval(() => {
    //   this.setState((previousState,props) => {
    //     console.log(previousState);
    //     console.log(props);
    //     return { quantity: previousState.quantity+1 };
    //   });
    // }, 1000);
//   }

//   render() {
//     // 根据当前quantity的值决定是否显示text内容
//     let display = this.state.quantity;
//     return (
//       <View style={styles.container}>
//         <Text>{display}</Text>
//       </View>
//     );
//   }
// }

// export default class App extends Component {
//   render() {
//     return (
//       <Blink text='HelloWorld'/>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//hight&width fixed
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View>
//        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//      </View>
//     );
//   }
// }

//flex
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       // 试试去掉父View中的`flex: 1`。
//       // 则父View不再具有尺寸，因此子组件也无法再撑开。
//       // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
//       <View style={{height:300,flexDirection:'column'}}>
//         <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//         <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//         <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

//flexbox - flexDirection
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       // 尝试把`flexDirection`改为`column`看看
//       <View style={{flex: 1, flexDirection: 'column'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

//flexbox-justifyconent
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       // 尝试把`justifyContent`改为`center`看看
//       // 尝试把`flexDirection`改为`row`看看
//       //flex-start、center、flex-end、space-around以及space-between
//       <View style={{
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//       }}>
//         <View style={{width: 100, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 100, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 100, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }

//flexbox-alignitems
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       // 尝试把`alignItems`改为`flex-start`看看
//    // 尝试把`justifyContent`改为`flex-end`看看
//    // 尝试把`flexDirection`改为`row`看看
//    //flex-start、center、flex-end以及stretch
//    <View style={{
//      flex: 1,
//      flexDirection: 'row',
//      alignItems: 'center',
//      justifyContent: 'space-around'
//    }}>
//      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//      <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//      <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//    </View>
//     );
//   }
// }

 // 动手写flexbox
// import React, { Component } from 'react';
// import {} from 'react-native';
// import Index from './flexbox/Index';

// export default class App extends Component {
//   render() {
//     return (
//       <Index />
//     );
//   }
// }

// 第一步：整体单个布局
// import React, { Component } from 'react';
// import {  
//   StyleSheet, 
//   Text, 
//   View,
//   Image,
//   Dimensions } from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>

//         <View style={[styles.sbu_view,styles.sbu_red]}>

//           <View style={[styles.sbu_flex, styles.sbu_borderRight]}>

//           </View>
//           <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
       
//           </View>
//           <View style={[styles.sbu_flex]}>
         
//           </View>

//         </View>

//       </View>
//     );
//   }
// }

// var w = Dimensions.get('window').width;
// var h = Dimensions.get('window').height;

// const styles = StyleSheet.create({
//   container:{
//       backgroundColor:'#fff',
//       flex:1,
//       justifyContent:'center'
//     },
//     //sbu
//     sbu_view:{
//       marginLeft: 5,
//       marginRight:5,
//       borderRadius:1,
//       flexDirection:'row',
//     },
//     sbu_red:{
//       backgroundColor: '#FA6778',
//       height:h*0.15,
//     },
//     sbu_flex:{
//       flex:1,
//     },
//     sbu_borderRight:{
//       borderColor:'#fff',
//       borderRightWidth: 0.5,
//     }
// });

//整体多个布局
// import React, { Component } from 'react';
// import { 
//   StyleSheet, 
//   Text, 
//   View,
//   Image,
//   Dimensions } from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={[styles.sbu_view,styles.sbu_red]}>
//           <View style={[styles.sbu_flex, styles.sbu_borderRight]}>

//           </View>
//           <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
       
//           </View>
//           <View style={[styles.sbu_flex]}>
         
//           </View>
//         </View>

//         <View style={[styles.sbu_view, styles.sbu_blue]}>
//           <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
         
//           </View>
//           <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
           
//           </View>
//           <View style={[styles.sbu_flex]}>
            
//           </View>
//         </View>

//         <View style={[styles.sbu_view, styles.sbu_green]}>
//           <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
           
//           </View>
//           <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
            
//           </View>
//           <View style={[styles.sbu_flex]}>
           
//           </View>
//         </View>

//         <View style={[styles.sbu_view, styles.sbu_yellow]}>
//           <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
            
//           </View>
//           <View style={[styles.sbu_flex, styles.sbu_borderRight]}>
            
//           </View>
//           <View style={[styles.sbu_flex]}>
            
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// var w = Dimensions.get('window').width;
// var h = Dimensions.get('window').height;
// var sub_h = h*0.15;

// const styles = StyleSheet.create({
//   container:{
//       backgroundColor:'#fff',
//       flex:1,
//       justifyContent:'center'
//     },
//     //sbu
//     sbu_view:{
//       marginLeft: 5,
//       marginRight:5,
//       borderRadius:1,
//       flexDirection:'row',
//     },
//     sbu_red:{
//       backgroundColor: '#FA6778',
//       height:sub_h,
//     },

//     sbu_blue:{
//       backgroundColor: '#3D98FF',
//       marginTop:10,
//       height:sub_h,
//     },

//     sbu_green:{
//       backgroundColor: '#5EBE00',
//       marginTop:10,
//       height:sub_h,
//     },

//     sbu_yellow:{
//       backgroundColor: '#FC9720',
//       marginTop:10,
//       height:sub_h*0.5,
//     },
//     sbu_flex:{
//       flex:1,
//     },
//     sbu_borderRight:{
//       borderColor:'#fff',
//       borderRightWidth: 0.5,
//     }
// });

//装饰
// import React, { Component } from 'react';
// import Index from './flexbox/Index';

// export default class App extends Component {
//   render() {
//     return (
//         <Index/>
//     );
//   }
// }

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View } from 'react-native';

// class Block extends Component {
//   render() {
//     return (
//       <View
//               style={{
//                 flex: 1,
//                 borderColor: 'white',
//                 borderWidth: 1,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <Text style={{ color: 'white' }}>{this.props.name}</Text>
//           </View>
//     );
//   }
// }
// class BigBlock extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, borderColor: 'white'}}>
//               <Block name={this.props.name1}/>
//               <Block name={this.props.name2}/>             
//             </View>
//     );
//   }
// }
// class SplitLine extends Component {
//   render() {
//     return (
//       <View style={{ flex: 0.1, backgroundColor: 'white' }} />
//     );
//   }
// }

// export default class App extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center' }}>     
//         <View style={{ flex: 0.7, flexDirection: 'column' }}>
//           <View style={{flex: 2,backgroundColor: '#F9E4ED',flexDirection: 'row',}}>           
//             <Block name='酒店'/>           
//             <BigBlock name1='特价酒店' name2='民宿·公寓'/>
//             <BigBlock name1='国际酒店' name2='会场'/>           
//           </View>
//           <SplitLine/>
//           <View style={{ flex: 2, backgroundColor: '#F8B9E4' ,flexDirection: 'row',}} >
//             <Block name='机票'/>
//             <BigBlock name1='特价机票' name2='火车票'/>
//             <BigBlock name1='汽车票·船票' name2='用车·自驾'/>
//           </View>
//           <SplitLine/>
//           <View style={{ flex: 2, backgroundColor: '#3987D4' ,flexDirection: 'row',}} >
//             <Block name='旅游度假'/>
//             <BigBlock name1='景点·门票' name2='自由行'/>
//             <BigBlock name1='旅游团购' name2='周边·短途'/>
//           </View>
//           <SplitLine/>
//           <View style={{ flex: 1, backgroundColor: '#A1AAB1' ,flexDirection: 'row',}} >
//             <Block name='金融·理财'/>
//             <Block name='保险'/>
//             <Block name='全球购'/>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }


import React from 'react';
import { View, Text, Button,StyleSheet, Alert,
  TextInput, ScrollView, Dimensions, PixelRatio, Image, TouchableOpacity } from 'react-native';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';
import DetailsScreen from './flexbox/Index';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { userId: '' , password: ''};
    this._getUserId = this._getUserId.bind(this);
    this._getPassword = this._getPassword.bind(this);
    this._login = this._login.bind(this);
  }
  _getUserId(val){
    var userId = val;
    this.setState({
      userId: userId
    });
  }

  _getPassword(val){
    var password = val;
    this.setState({
      password: password
    });
  }

  _login(){
    if(this.state.password == '111111'){
       this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Details' })
                ],
              }));
    }else{
      Alert.alert('提示','工号或密码错误',
      [{text:'OK',onPress: () => console.log('ok Pressed!')}]);
    }
    
  }

  render (){

    return (
      <View style={[styles.loginWrap]}>
              <View style={styles.loginMainCon}>
                  <View style={styles.comCulture}>
                      <Text style={[styles.textCenter,{color:'#ccc'}]}>欢迎</Text>
                      <Text style={[styles.textCenter,{color:'#ccc'}]}>请使用工号和OA密码登陆</Text>
                  </View>
                  <View style={styles.formStyle}>
                      <View style={[styles.formInput,styles.formInputSplit]}>
                          <Image source={require('./flexbox/img/user.png')} style={{width:25,height:25,resizeMode: 'contain',marginTop:15}}/>
                          <TextInput 
                              placeholder='用户名' 
                              style={styles.loginInput} 
                              onChangeText={this._getUserId} ></TextInput>
                      </View>
                      <View style={styles.formInput}>
                          <Image source={require('./flexbox/img/passicon.png')} style={{width:25,height:25,resizeMode: 'contain',marginTop:15}}/>
                          <TextInput 
                              style={styles.loginInput} 
                              secureTextEntry={true}
                              placeholder='密码' 
                              onChangeText={this._getPassword} />
                      </View>
                  </View>
              </View>
              <TouchableOpacity onPress={this._login} style={styles.btn}>
                  <Text style={styles.loginBtn2}>登录</Text>                      
              </TouchableOpacity>
      </View>
    )
  }
 
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, 
{
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);

var cell_w = Dimensions.get('window').width;
var cell_h = Dimensions.get('window').height;
var styles = StyleSheet.create({
  input:{
    marginLeft:10,
    width:220,
    height:35,
    paddingLeft:8,
    borderRadius:5,
    borderColor:'#ccc'
  },
  btn:{
    marginTop:10,
    width:80,
    height:35,
    backgroundColor:'#3BC1FF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 4,
  },
  textCenter: {
      textAlign: 'center',
      flex: 1,
  },
  loginWrap: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  imgWrap: {
    flexDirection: 'row',
    flex: 1,
  },
  loginMainCon: {
    flex: 1,
    position: 'absolute', 
    top: 90,
    left: (cell_w-320)/2,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 300,
    borderRadius: 20,
  },
  comCulture: {
    width:320,
    marginTop:30,
  },
  formStyle: {
    backgroundColor:'#F4F3F3',
    marginTop: 30,
    marginLeft: 10,
    width: 300,
    height: 180,
    borderRadius: 8,
  },
  formInput:{
    flexDirection:'row',
    height: 90,
    padding: 20,
  },
  formInputSplit:{
    borderBottomWidth:1,
    borderBottomColor:'#dbdada',
  },
  loginInput: {
    height: 45,
    borderColor: '#000',
    paddingLeft: 10,
    flex: 1,
    fontSize: 16,
    paddingBottom:1
  },
  forget: {
    flexDirection:'row',
    margin: 20
    
  },
  btn: { 
    marginTop : 440,
    width: 300,
    height: 50,
    borderRadius: 10,
    left:(cell_w - 300)/2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#C7D634',
  },

  btnWrap:{
    marginTop: 90,
    borderRadius: 5,
    backgroundColor:"#fff"
  },
  loginBtn2: {
    fontSize: 20,
    color: '#fff',
  },

});
