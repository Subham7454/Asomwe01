import React from 'react';
import {View, Button, Text, SafeAreaView, Alert} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Button
          onPress={() => Alert.alert('Simple Button pressed')}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>Hello World</Text>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}
export default App;
