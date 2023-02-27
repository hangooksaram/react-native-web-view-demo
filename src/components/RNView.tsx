import React from 'react';
import {useRef, useState} from 'react';
import {TextInput, Button, ScrollView, StyleSheet} from 'react-native';

/**React Native Native App View */
const RNView: React.FC<{setInjectedJs: (value: string) => void}> = ({
  setInjectedJs,
}) => {
  const textRef = useRef<TextInput>(null);
  const [text, setText] = useState('');

  const sendtoWebViewHandler = (): void => {
    setInjectedJs(
      `     appendToWebViewEl("${text}")
      `,
    );
    setText('');
  };
  return (
    <ScrollView>
      <TextInput
        ref={textRef}
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder={'Send to Web View'}
      />
      <Button title="Send to Web View" onPress={sendtoWebViewHandler} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  blackBlock: {
    height: 200,
    width: 200,
    backgroundColor: 'black',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});
export default RNView;
