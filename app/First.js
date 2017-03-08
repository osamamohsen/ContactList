import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';



class First extends Component {

  constructor(props, context) {
    super(props, context);

    /*this.state = {
      usersD: null
    };*/

  }

  // componentDidMount() {
  //   fetch('http://192.168.0.127/levelUpworkspace/laravel/react/public/users')
  //   .then((res) => res.json())
  //   .then((resJ) => {
  //     console.log('data  in mount is',resJ);
  //     this.setState({
  //       usersD: resJ.users
  //     })
  //   })
  // }

  onbButtonPressed() {
    this.props.navigator.push({
      id: 'Second'
    })
  }

  render() {
    console.log('data in first is',this.props.users);
    if(this.props.users) {
      var res = this.props.users.map((item, i) => {

        return (
          <View>
            <Text key={i}>
              {item.first_name}
            </Text>
            <Text key={i+1}>
              {item.last_name}
            </Text>
            <Image key={i+2} source={{uri: item.image}}
            style={{width: 40, height: 40}} />
          </View>
        );
      });
    }

    return (
      <View style={styles.container}>
        {res}
        <TouchableHighlight
          onPress={this.onbButtonPressed.bind(this)}
          style={styles.buttonContainerBack}>
          <Text>Create User</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddfd4',

  },
  largeText: {
    flex: 1,
    fontSize: 52,
    fontFamily: 'HelveticaNeue-CondensedBold',
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
    color: '#173e43',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
     alignSelf: 'stretch',
     backgroundColor: '#3fb0ac',
  },
  buttonContainerBack: {
    backgroundColor: 'silver',
    paddingVertical: 10,
    marginTop: 10
  },
  buttonText: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    color: '#fae596',
  }
  })

module.exports = First;
