/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import PhotoGrid from './components/PhotoGrid'
import Search from './components/Search'

export default class AwesomeProject extends Component {
  render() {
    let backgroundPic = {
      uri:'https://unsplash.it/300/500?image=868'
    };
    return (
      <Image source={backgroundPic} style={styles.backgroundPic}>
        <ScrollView>
          <View style={styles.container}>
            <Search />
            <Text style={styles.title}>
              a minimal photo library powered by react native.
            </Text>
          </View>
          <PhotoGrid />
        </ScrollView>
      </Image>
    );
  }
}
const styles = StyleSheet.create({
  backgroundPic: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: 375,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    marginTop: 150,
    color: 'white',
    backgroundColor: 'transparent',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
