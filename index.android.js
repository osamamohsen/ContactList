import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';
import First from './app/First';
import Second from './app/Second';

export default class learningReactNative extends Component {

  // fetch method
      constructor(props, context) {
        super(props, context);
        this.state = {
          usersD: null
        };
      }


      componentDidMount() {
        fetch('http://192.168.0.127/levelUpworkspace/laravel/react/public/users')
        .then((res) => res.json())
        .then((resJ) => {
          console.log('data  in i mount is',resJ);
          this.setState({
            usersD: resJ.users
          })
        })
      }


navigatorRenderScene(route, navigator) {
  _navigator=  navigator;
  console.log('before renderSc console');
  console.log('in renderSc', this.state.usersD);
  switch (route.id) {
    case 'First':
      return (
        <First users={this.state.usersD} navigator={navigator} title='First' />
      );
    case 'Second':
      return (
        <Second users={this.state.usersD} navigator={navigator} title='Second' />
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
    console.log('before nav console');
    console.log('data before nav', this.state.usersD);
    return (
      <Navigator
        initialRoute={{
          id: 'First'
        }}
        renderScene = {
          this.navigatorRenderScene.bind(this)
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:100,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    // backgroundColor: 'red',
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
