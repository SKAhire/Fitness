import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import FitnessCard from '../components/FitnessCard';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "purple", padding: 10, height: 200, width: "100%" }}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>Home Workout</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 20 }}>
                    <View>
                        <Text style={{ textAlign: 'center', fontWeight: "bold", color: "white", fontSize: 18 }}>0</Text>
                        <Text style={{ marginTop: 6, fontSize: 17, color: "#d0d0d0" }}> Workouts </Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center', fontWeight: "bold", color: "white", fontSize: 18 }}>0</Text>
                        <Text style={{ marginTop: 6, fontSize: 17, color: "#d0d0d0" }}> KCALs </Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center', fontWeight: "bold", color: "white", fontSize: 18 }}>0</Text>
                        <Text style={{ marginTop: 6, fontSize: 17, color: "#d0d0d0" }}> Minutes </Text>
                    </View>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image
                        style={{
                            width: "90%",
                            height: 120,
                            marginTop: 20,
                            borderRadius: 7,
                        }}
                        source={{
                            uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
                        }}
                    />
                </View>
                <FitnessCard />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({

});
