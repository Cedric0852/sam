import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const App = () => {
  const transitionValue = useRef(new Animated.Value(0)).current;

  const animateTransition = (toValue) => {
    Animated.timing(transitionValue, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.screen, { transform: [{ translateX: transitionValue }] }]}>
        <Text style={styles.screenText}>Screen A</Text>
        <TouchableOpacity style={styles.button} onPress={() => animateTransition(-300)}>
          <Text style={styles.buttonText}>Go to Screen B</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.screen, { transform: [{ translateX: Animated.add(transitionValue, 300) }] }]}>
        <Text style={styles.screenText}>Screen B</Text>
        <TouchableOpacity style={styles.button} onPress={() => animateTransition(0)}>
          <Text style={styles.buttonText}>Go back to Screen A</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'gold',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default App;
