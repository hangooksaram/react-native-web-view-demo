import React, {useState} from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';

import RNView from './src/components/RNView';

import RNWebView from './src/components/RNWebView';

const App = () => {
  const [injectedJs, setInjectedJs] = useState('');
  const setInjectedJsHandler = (value: string) => {
    setInjectedJs(value);
  };
  return (
    <ScrollView>
      <View style={styles.area}>
        <Text style={styles.title}>This is Native View!</Text>
        <RNView setInjectedJs={setInjectedJsHandler} />
      </View>
      <View style={styles.area}>
        <Text style={styles.title}>This is Web View!</Text>
        <RNWebView injectedJs={injectedJs} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  area: {
    margin: 30,
    marginBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
