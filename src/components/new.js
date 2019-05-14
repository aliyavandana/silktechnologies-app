import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Logo extends Component {
	render() {
        return(
            <View Style={styles.container}>
                 <Image style={{width: 200, height: 180, marginVertical: 15}}
                      source={require('../images/silk-2.png')}/>
                  <Text style={styles.logoText}>Silk Technologies</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
      flex: 1,
      justifyContent:'center',
      alignItems: 'center',
    },
    logoText : {
        marginVertical: 15,
        fontSize:25,
        color:'rgba(255, 255, 255, 0.7)'
    }
  });