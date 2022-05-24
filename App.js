import React, { useState}from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Creator from './app/components/Creator';
import ReadingQr from './app/components/ReadingQr';
import WritingQr from './app/components/WritingQr';


export default function App() {
  // return <WritingQr />;
//  return <Creator />

 return <ReadingQr />;
}

const styles = StyleSheet.create({
});
