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
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  Text
} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Fruit extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}} />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style = {{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
        <Greeting name='World'/>
        <Greeting name='Lambert'/>
        <Fruit/>
      </View>
    );
  }
}


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
//     setInterval(() => {
//       this.setState((previousState,props) => {
//         console.log(previousState);
//         console.log(props);
//         return { quantity: previousState.quantity+1 };
//       });
//     }, 1000);
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
//       <View style={{height:300,flexDirection:'row'}}>
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
