import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  TouchableHighlight,
} from 'react-native';



class First extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      refreshing: false,
    };

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

  onRefresh(){
    console.log("data users =>",this.props.users);

  }

  render() {
    console.log('data in first is',this.props.users);
    if(this.props.users) {
      var res = this.props.users.map((item, i) => {

        return (
          <View>
              <Image key={i+2} source={{uri: item.image}}
              style={styles.image_list} />

              <Text  style={styles.box} key={i}>
                First Name {item.first_name}
              </Text>
              <Text  style={styles.box} key={i+1}>
                {item.last_name}
              </Text>
          </View>
        );
      });
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          {res}
        </ScrollView>
        <TouchableHighlight
          users={this.props.users}
          onPress={this.onbButtonPressed.bind(this)}
          style={styles.buttonContainerBack}>
          <Text>Create User</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.onRefresh.bind(this)}
          style={styles.buttonContainerBack}>
          <Text>Refresh Button</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 100%,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddfd4',
    borderWidth:1,
    alignSelf: 'stretch',
    textAlign: 'center',
    borderColor:'black',
  },
  largeText: {
    // flex: 1,
    alignSelf: 'stretch',

    fontSize: 52,
    fontFamily: 'HelveticaNeue-CondensedBold',
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
    color: '#173e43',
  },
  button: {
    // flex: 1,
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
  },
  box: {
    // width: 25,
    // height: 35,
  },
  image_list: {
    width: 150,
    height: 100,
    marginTop: 10,
    padding: 8,
    alignSelf: 'stretch',

  },
  })

module.exports = First;
