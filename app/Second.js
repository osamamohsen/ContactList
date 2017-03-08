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
  PixelRatio,
  Image,
  Platform,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
var FileUpload = require('NativeModules').FileUpload;

class Second extends Component {
  constructor (){
  super();

  this.state ={
    first_name: "",
    last_name: "",
    image: "",
    errors: [],
    avatarSource: null,
    imgBase64: '',
  }
}

  selectPhotoTapped() {
  const options = {
    quality: 1.0,
    maxWidth: 500,
    maxHeight: 500,
    storageOptions: {
      skipBackup: true
    }
  };

  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled photo picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      var source, temp;
      // You can display the image using either:
      //source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

      temp = response.data;
      console.log("temp",temp);
      //Or:
      if (Platform.OS === 'android') {
        source = {uri: response.uri, isStatic: true};
        console.log("source",source);
      } else {
        source = {uri: response.uri.replace('file://', ''), isStatic: true};
      }

      this.setState({
        avatarSource: source,
        imgBase64: temp,
      });
    }
  });

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


        </Text>
        <TextInput
          onChangeText={(val)=>this.setState({first_name: val})} placeholder="Enter Fist Name"
          style={styles.input} returnKeyType="next" />

        <TextInput placeholder="Enter Last Name" onChangeText={(val)=>this.setState({last_name: val})} style={styles.input} returnKeyType="go"/>

        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
            { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
              <Image style={styles.avatar} source={this.state.avatarSource} />
            }
            </View>
          </TouchableOpacity>
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
avatarContainer: {
  borderColor: '#9B9B9B',
  borderWidth: 1 / PixelRatio.get(),
  justifyContent: 'center',
  alignItems: 'center'
},
avatar: {
  borderRadius: 75,
  width: 150,
  height: 150
},

  })

module.exports = Second;
