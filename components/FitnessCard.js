import React from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import fitness from '../data/fitness'
import { useNavigation } from '@react-navigation/native';

const FitnessCard = () => {
    const fitnessData = fitness;
    const navigation = useNavigation();
    return (
        <View>
          {fitnessData.map((item, key) => ( 
              <Pressable key={key} style={{alignItems: "center", justifyContent: "center", margin: 10}} onPress={()=>navigation.navigate("Workout", {
                image: item.image,
                excersises: item.excersises,
                id: item.id,
              })}>
                <Image style={{height: 140, width: "90%", borderRadius: 7}} source={{uri:item.image}} />
                <Text style={{position: 'absolute', color: "white", fontWeight:"bold", fontSize:16, left: 20, top: 25}}>{item.name}</Text>
                <MaterialCommunityIcons style={{position: "absolute", color: "white", bottom: 15, left: 20}} name="lightning-bolt" size={24} color="black" />
              </Pressable>
          ))
          }
      </View>
    )
}

export default FitnessCard

const styles = StyleSheet.create({
})

