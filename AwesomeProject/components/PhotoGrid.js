import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class PhotoGrid extends Component {
  render() {
    let pic = {
      uri:'https://unsplash.it/300/500?random'
    };
    return (
      <View>
      <View style={{flex: 1, flexDirection: 'row', marginTop: 105}}>
        <Image source={pic} style={{flex: 1, height: 125}} />
        <Image source={pic} style={{flex: 1, height: 125}} />
        <Image source={pic} style={{flex: 1, height: 125}} />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image source={pic} style={{flex: 1, height: 125}} />
        <Image source={pic} style={{flex: 1, height: 125}} />
        <Image source={pic} style={{flex: 1, height: 125}} />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image source={pic} style={{flex: 1, height: 125}} />
        <Image source={pic} style={{flex: 1, height: 125}} />
        <Image source={pic} style={{flex: 1, height: 125}} />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image source={pic} style={{flex: 1, height: 125}} />
        <Image source={pic} style={{flex: 1, height: 125}} />
        <Image source={pic} style={{flex: 1, height: 125}} />
      </View>
      </View>
    )
  }
}
