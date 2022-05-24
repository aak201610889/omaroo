import React, { useState} from 'react';
import QRCode from "react-native-qrcode-svg";

import { AppRegistry, StyleSheet, View, TextInput,Text } from "react-native";

const WritingQr = ({ data})=> {
  const [text, settext] = useState(data)
console.log('ffo',text);

  
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='data'
          style={styles.input}
          onChangeText={(text) => settext(text)}
          value={text}
        />
        <View>
        <Text>{text}</Text>
          {/* <QRCode
            value={text}
            size={200}
            bgColor="purple"
            fgColor="white"
          ></QRCode> */}
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
});

AppRegistry.registerComponent("hello world", () => WritingQr);
export default WritingQr;

