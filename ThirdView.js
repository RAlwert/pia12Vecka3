import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList,Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function ThirdView({navigation, route}) {
const[readnumber,setReadnumber]=useState (0);

  return (
    <View>
        <Text>Tredje vyn</Text>

    </View>
  );
}
