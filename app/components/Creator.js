import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from "react";
import { TextInput } from 'react-native-web'
import axios from 'axios'
import WritingQr from './WritingQr';

const Creator = () => {
  const [id, setid] = useState("")
  const [Thickness, setThickness] = useState("")
  const [Width, setWidth] = useState("")
  const [weight, setweight] = useState("")
  const [made, setmade] = useState("")
  const [carage, setcarage] = useState("")
  const [cost, setcost] = useState("")
  const [Date, setDate] = useState("")
  const [Data, setData] = useState("")

  useEffect(() => {
   axios.get("http://localhost:5002/api/product").then((res) => {
     setData(res.data.msg[3]);
   });
  }, [])

 

 

  return (
    <View style={styles.view}>
      <>
        {" "}
        <Text>efefe</Text>
        <TextInput
          style={styles.textInput}
          placeholder="id of product"
          value={id}
          onChangeText={(id) => setid(id)}
        />
      </>

      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        value={Thickness}
        onChangeText={(Thickness) => setThickness(Thickness)}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        value={Width}
        onChangeText={(Width) => setWidth(Width)}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        value={weight}
        onChangeText={(weight) => setweight(weight)}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        value={made}
        onChangeText={(made) => setmade(made)}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        value={carage}
        onChangeText={(carage) => setcarage(carage)}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        value={cost}
        onChangeText={(cost) => setcost(cost)}
      />

      <Button title="submit" />
      {Data.Width !== undefined ? <WritingQr data={Data.Width} /> : null}
    </View>
  );
}

export default Creator

const styles = StyleSheet.create({
  view: {
   
 
    marginRight: 10,
 marginBottom:20,
   fontSize: 25,
  },
  text: {
    fontSize: 25,
    marginLeft: 20,
    width: 85,
    textAlign:'right'
    
  },
  textInput: {
    width: "50%",
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    fontSize:25,
  }

})