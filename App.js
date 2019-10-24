import React, { Component } from 'react';
import { View,Text,Image,ImageBackground } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    let pic={
      uri: './img/sol.png'};
    let bc={
      uri: 'https://image.shutterstock.com/image-illustration/degrade-gradient-background-greenyellow-pale-260nw-1383519863.jpg'};
    return (
      <ImageBackground source={bc} style={{width: '100%', height: '100%'}}>
        <Image source={require('./img/sol.png')} style={{width: 193, height: 110}}/>
      </ImageBackground>
    );
  }
}

