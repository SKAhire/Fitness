import React from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import fitness from '../data/fitness'

const FitnessCard = () => {
    const fitnessData = fitness
    return (
        <View>
          {fitnessData.map((item, key) => ( 
              <Pressable key={key} style={{alignItems: "center", justifyContent: "center", margin: 10}}>
                <Image style={{height: 140, width: "90%", borderRadius: 7}} source={{uri:item.image}} />
                <Text style={{position: 'absolute', color: "white", fontWeight:"bold", fontSize:16, left: 20, top: 25}}>{item.name}</Text>
              </Pressable>
          ))
          }
        <Text> textInComponent </Text>
      </View>
    )
}

export default FitnessCard

const styles = StyleSheet.create({
})

