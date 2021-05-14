import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import Dog from './Dog';

export default function Container({dogs}) {
  return (
    // <View style={styles.container}>
      <FlatList 
        bounces={false}
        pagingEnabled
        horizontal={true}
        data={dogs}
        keyExtractor={ item => item.id + '' }
        renderItem={({item}) => <Dog {...item} />}
      />
    // </View>
  );
}