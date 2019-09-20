考试内容：


将flexbox中，index.js页面的最后一部分进行模块化处理。类似flexbox中Menu.js的方式。

expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens

 expo install react-navigation-stack


   render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView style={{flex:1}}>
          <View style={styles.inputRow}>
            <Text>工号</Text><TextInput style={styles.input} placeholder="请输入工号" onChangeText={this._getEmail}/>
          </View>
          <View style={styles.inputRow}>
            <Text>密码</Text><TextInput style={styles.input} placeholder="请输入密码" password={true} onChangeText={this._getPassword}/>
          </View>
          <Button
            title="Go to Details"
            onPress={() => {
              this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'Details' })
                ],
              }))
            }}
          />
          </ScrollView>
      </View>

    );
  } 