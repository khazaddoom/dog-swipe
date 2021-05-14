import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './components/Container';

let index = 100;

export default function App() {

  const [dogData, setDogData] = useState([])

  useEffect(() => {
    
    
    setDogData([{
      id: index++,
      imgsrc: 'https://images.dog.ceo/breeds/borzoi/n02090622_6172.jpg',
      name: 'Ganesh',
      description: 'lorem askdbas bd aiusdb iabdsiub aisdbiabsdibaisdbiabsdi'
    },])
  }, [])

  return (
    <View style={styles.container}>
      <Container dogs={dogData}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 25,
  },
});
