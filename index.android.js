import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
} from 'react-native';
import First from './app/First';
import Second from './app/Second';

export default class learningReactNative extends Component {

  // fetch method
      // constructor(props, context) {
      //   super(props, context);
      //   console.log("there");
      //
      //   this.state = {
      //     usersD: null
      //   };
      //
      // }


      // componentDidMount() {
      //   fetch('http://192.168.1.106/ReactLaravel/react/public/users')
      //   .then((res) => res.json())
      //   .then((resJ) => {
      //     this.setState({
      //       usersD: resJ.users
      //     })
      //   })
      // }

navigatorRenderScene(route, navigator) {
  _navigator=  navigator;

  switch (route.id) {
    case 'First':
      return (
        <First navigator={navigator} title='First' />
      );
    case 'Second':
      return (
        <Second navigator={navigator} title='Second' />
      );

  }
}
  render() {
    // if(this.state.usersD != null) {
    //   console.log("HERE");
    //   console.log(this.state.usersD);
    //   this.state.usersD.map((item, i) => {
    //     return (
    //       <View>
    //         <Text key={i}>{item.first_name}</Text>
    //         <Text key={i+1}>{item.last_name}</Text>
    //         <Image key={i+2} source={{uri: item.image}}
    //         style={{width: 40, height: 40}} />
    //       </View>
    //     );
    //   })
    // }

    return (
      <Navigator
        initialRoute={{
          id: 'First'
        }}
        renderScene = {
          this.navigatorRenderScene
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('learningReactNative', () => learningReactNative);
