import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Animated, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');
const Background = () => {
  return (
    <View style={styles.backgroundContainer}>
      <LinearGradient
        colors={['#0ce2faff', '#fefe8cff', '#232d59ff']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradient}
      />
    </View>
  );
};

function App(): React.JSX.Element {
  const [greeting, setGreeting] = useState('Good morning');
  const [greetingColor, setGreetingColor] = useState('#181716ff');
  
  const fadeAnim = new Animated.Value(0);
  const titleAnim = new Animated.Value(0);
  const subtitleAnim = new Animated.Value(0);
  const pulseAnim = new Animated.Value(1);

  useEffect(() => {
    // Update greeting and color based on time
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting('Good morning');
        setGreetingColor('#FF8C00'); // Warm orange for morning
      } else if (hour >= 12 && hour < 17) {
        setGreeting('Good afternoon');
        setGreetingColor('#4B0082'); // Deep purple for afternoon
      } else if (hour >= 17 && hour < 20) {
        setGreeting('Good evening');
        setGreetingColor('#4169E1'); // Royal blue for evening
      } else {
        setGreeting('Good night');
        setGreetingColor('#191970'); // Midnight blue for night
      }
    };

    // Initial animations sequence with gentle fades
    Animated.stagger(400, [
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(titleAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(subtitleAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();

    // Set initial greeting and start interval
    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Background />
      <Animated.View
        style={[
          styles.card,
          {
            opacity: fadeAnim,
          },
        ]}>
        <Animated.Text
          style={[
            styles.greetingText,
            {
              color: greetingColor,
              opacity: fadeAnim,
            },
          ]}>
          {greeting}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.titleText,
            {
              opacity: titleAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.9],
              }),
            },
          ]}>
          Take your morning coffee
        </Animated.Text>
        <Animated.Text
          style={[
            styles.subtitleText,
            {
              opacity: subtitleAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.7],
              }),
            },
          ]}>
          Start your day with a perfect brew ☕
        </Animated.Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  gradient: {
    flex: 1,
  },
  card: {
    position: 'absolute',
    top: '25%',
    left: 20,
    right: 20,
    padding: 30,
    backgroundColor: 'rgba(199, 232, 234, 0.49)',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    shadowColor: '#454444ff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  greetingText: {
    fontSize: 34,
    fontFamily: 'CinzelDecorative-Regular',
    marginBottom: 20,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  titleText: {
    fontSize: 30,
    fontFamily: 'CinzelDecorative-Bold',
    color: '#B87333',
    marginBottom: 12,
    textTransform: 'capitalize',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(139, 69, 19, 0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  subtitleText: {
    fontSize: 18,
    color: '#636E72',
    marginTop: 8,
    fontFamily: 'CinzelDecorative-Regular',
    letterSpacing: 0.5,
    opacity: 0.9,
  },
});

export default App;