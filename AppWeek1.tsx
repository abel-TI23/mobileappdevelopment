import React from 'react';
import {
  View, 
  Text, 
  Button, 
  TouchableOpacity, 
  StyleSheet, 
  ImageBackground,
  Platform,
} from 'react-native';


const App = () => {
  return (
    <View style={Styles.container}>
      <ImageBackground
      source={require('./assets/image/image.png')}
      style={Styles.backgroundImage}
      resizeMode="cover">

      <View style={Styles.overlay} />
      
      <View style={Styles.content}>
        <View style={Styles.textContainer} >
          <Text style={Styles.title}>Begin Adventure to Living Like Larry!</Text>
          <Text style={Styles.title}>Rock In!</Text>
          <Text style={Styles.subtitle}>
            Live like a nerd is not only your option buddy!.
            Lets lock in and rock in! Living like Larry!
          </Text>
        </View>
        <TouchableOpacity style={Styles.button}>
          <Text style={Styles.buttonText}>🔥 LIVING LIKE LARRY !! 🔥</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
      </View>
  );  
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay
  },
  content: {
    paddingHorizontal: 30,
    paddingBottom: 60,
    zIndex: 1,
  },
  textContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'android' ? 'serif' : 'Times New Roman',
    color: '#41eb16ff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ddb2b4ff',
    fontFamily: Platform.OS === 'android' ? 'monospace' : 'Courier New',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#0f0f0eff',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fa0b0bff',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default App;