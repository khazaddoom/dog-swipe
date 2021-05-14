import React from 'react';
import { Image, Text, View, StyleSheet, useWindowDimensions } from 'react-native';



export default function Dog({imgsrc}) {
  
  const { width, height} = useWindowDimensions()

    return <View style={[styles.container, {width}]}>
        <Image style={{ width: width-30, height: height * 0.8, marginHorizontal: 2, resizeMode: 'contain'}} source={{
            uri: imgsrc
        }} />
        {/* <View>
            <Text>{ props.name} </Text>
            <Text>{ props.description} </Text>
        </View> */}
    </View>
  //   return  <Image style={styles.img} source={{
  //     uri: props.imgsrc
  // }} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
});