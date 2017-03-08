import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

class Second extends Component {
  constructor (){
  super();

  this.state ={
    first_name: "",
    last_name: "",
    image: "",
    errors: [],
  }

}

  async onRegisterPressed(){
    try {
      let response = await fetch('http://192.168.0.127/levelUpworkspace/laravel/react/public/users',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // user: {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            image: this.state.image,
          // }
        })
      });
      let responseJson = await response.json();
      console.log("res is: "+ responseJson);
      return responseJson.movies;
    } catch(error) {
      console.error(error);
    }
  }

onbButtonPressedBack(){
  this.props.navigator.push({
    id: 'First'
  })
}

  render(){
    return(
      <View behavior="padding" style={styles.container}>
        <Text>
          {this.state.first_name}
          Enter Fist Name

        </Text>
        <TextInput
          onChangeText={(val)=>this.setState({first_name: val})}
          style={styles.input} returnKeyType="next" />

        <Text>
          {this.state.last_name}
          Enter Last Name
        </Text>
        <TextInput onChangeText={(val)=>this.setState({last_name: val})} style={styles.input} returnKeyType="go"/>

        <Text>
          {this.state.image}
          Select Your Image
        </Text>
        <TextInput onChangeText={(val)=>this.setState({image: val})} style={styles.input} returnKeyType="go"/>

            <TouchableOpacity style={styles.buttonContainer} onPress={this.onRegisterPressed.bind(this)}>
              <Text style={styles.buttonText}>
                Create New User
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainerBack}
              onPress={this.onbButtonPressedBack.bind(this)}
              >
              <Text style={styles.buttonText}>Back To List</Text>
            </TouchableOpacity>
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
  container: {
  padding: 20
},
input: {
  width: 90,
  height: 40,
},
buttonContainer: {
  backgroundColor: '#2980b9',
  paddingVertical: 10
},
buttonContainerBack: {
  backgroundColor: 'silver',
  paddingVertical: 10,
  marginTop: 10
},
buttonText: {
  textAlign: 'center'
},
  })

module.exports = Second;
