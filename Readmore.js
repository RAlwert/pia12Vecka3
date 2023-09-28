import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList,Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Readmore({navigation, route}) {
const[readnumber,setReadnumber]=useState (0);

  return (
    <View>
        <Text>Read more{route.params.person.lastname}</Text>

        <Text>{readnumber}</Text>

        <Button title="Plus" onPress={()=>{
        setReadnumber (readnumber+1);
    }}/>

        <Button title="Gå till tredje vyn" onPress ={()=>{
            navigation.navigate("Tredje")

        }}/>
    </View>
  );
}
