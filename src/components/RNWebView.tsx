import React, {useRef} from 'react';
import {WebView} from 'react-native-webview';
import {Alert, ScrollView, StyleSheet} from 'react-native';
import html from '../webViewHtml';

/** React Native Web View Component*/
const RNWebView: React.FC<{injectedJs: string}> = ({injectedJs}) => {
  const webRef = useRef<WebView>(null);
  webRef!.current?.injectJavaScript(injectedJs);

  return (
    <ScrollView>
      <WebView
        ref={webRef}
        style={styles.webView}
        source={{html}}
        onMessage={event => {
          Alert.alert(event.nativeEvent.data);
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  webView: {
    width: 400,
    height: 600,
  },
});

export default RNWebView;
