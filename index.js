import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules
} from 'react-native';
import CodePush from 'react-native-code-push';


const Navigation = NativeModules.NavigationModule
console.log(Navigation)
console.log(NativeModules)
//Code push begin
const CODE_PUSH_OPTIONS ={
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};
class MainScreen extends React.Component {
// code push
  componentDidMount() {
      CodePush.sync({installMode:CodePush.InstallMode.IMMEDIATE},this.isStaus,null)
    }
    isStaus=(status) =>{
      console.log(status);
    }
  render() {

    console.log('The React Native app is running')

    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello,  this is a React Native page</Text>
        <Button title="Go to native page" onPress={() => Navigation.navigateToNative()} />
        <Text>Hello Happy</Text>
        <Text>Hello Sam</Text>
      </View>

    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

AppRegistry.registerComponent(
  'MainScreen', // Name of the component for the Android side to pick up
  () => MainScreen 
);

export default CodePush (CODE_PUSH_OPTIONS)(MainScreen);