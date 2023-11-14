import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation, useRoute, useContext } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
 
  console.log(route.params.excersises)
  return (
    <ScrollView>
      <View style={{ padding: 10, height: 200, width: "100%", marginBottom: 58, marginTop: 20 }}>
        <Image style={{ width: "100%", height: 170 }} source={{ uri: route.params.image }} />
        <Ionicons onPress={() => navigation.goBack()} name="arrow-back-sharp" size={28} color="white" style={{ position: "absolute", top: 20, left: 20 }} />

        {route.params.excersises.map((item, index) => (
          <Pressable
            style={{ margin: 10, flexDirection: "row", alignItems: "center", border: "black" }}
            key={index}
          >
            <Image
              style={{ width: 90, height: 90 }}
              source={{ uri: item.image }}
            />

            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold", width: 170, }}>
                {item.name}
              </Text>

              <Text style={{ marginTop: 4, fontSize: 18, color: "gray" }}>
                x{item.sets}
              </Text>
            </View>

            
          </Pressable>
        ))}
      </View>
    </ScrollView>
  )
}

export default WorkoutScreen

const styles = StyleSheet.create({})