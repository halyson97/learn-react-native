/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      	<View style={styles.header}>
	        <Text>Voltar</Text>
	        <Text>Titulo</Text>
	        <Text>Perfil</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	flex: 1,
  	backgroundColor: '#ccc'
  },

  header:{
  	height: 60,
  	backgroundColor: '#FFF',
  	paddingHorizontal: 20,
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'space-between',
  }

});
