import React, { Component } from 'react';
import { AppRegistry, TextInput, StyleSheet } from 'react-native';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <TextInput
        style={styles.searchBar} placeholder="Search By Photographer"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}
const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    backgroundColor: 'white',
    paddingLeft: 7,
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center'
  }
});
