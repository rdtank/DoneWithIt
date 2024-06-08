import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import Colors from '../config/Colors';
import AppButton from '../components/AppButton';

export class WelcomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        blurRadius={3}
        style={styles.background}
        source={require('../assets/background.jpg')}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/logo-red.png')}
          />
          <Text style={styles.tagLine}>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title="Login" onPress={() => console.log('test')} />
          <AppButton title="Register" color="secondary" />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
    color: Colors.black,
  },
});

export default WelcomeScreen;
