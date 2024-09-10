import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkmode = useColorScheme();
  const isDarkTheme = isDarkmode === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkTheme ? styles.white : styles.dark}>
        This is view pro
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: 'white',
    fontWeight: 'bold',
  },
  dark: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
});

export default AppPro;
