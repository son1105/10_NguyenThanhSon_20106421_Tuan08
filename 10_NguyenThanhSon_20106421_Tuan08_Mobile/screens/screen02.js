import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React from 'react';
export default function Screen01({ navigation, route}) {
    var item = route.params
    var [quantity, setQuantity] = React.useState(1)
    var [price, setPrice] = React.useState(item.price)
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff', padding: '2.5%' }}>
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require(`../assets/${item.imgPath}`)} style={{ width: 300, height: 300 }} />
            </View>
            <View style={{
                flex: 1,
                width: '96%',
                paddingTop: 20,
                marginLeft: '2%',
                justifyContent: 'space-around'
            }}>
                <Text style={styles.text}>{item.title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.minText}>{item.shop}</Text>
                    <Text style={styles.text}>${price}.00</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Feather name="clock" size={24} color="black" />
                        <Text style={[styles.minText, {marginHorizontal: 10}]}>Delivery in</Text>
                    </View>
                    <Text style={[styles.text, {marginLeft: 20}]}>30 min</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: 'yellow', height: 35, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            if(quantity > 1) {
                                setPrice(price - price/quantity)
                                setQuantity(--quantity)
                            }
                        }}
                    >
                        <Text style={{ color: '#ffffff', fontSize: 40 }}>-</Text>
                    </TouchableOpacity>
                    <Text style={[styles.text, { marginHorizontal: 10 }]}>{quantity}</Text>
                    <TouchableOpacity style={{ backgroundColor: 'yellow', height: 35, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            setPrice(price + price/quantity)
                            setQuantity(++quantity)
                        }}
                    >
                        <Text style={{ color: '#ffffff', fontSize: 40 }}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, paddingTop: 20 }}>
                <Text style={styles.text}>Restaurants info</Text>
                <Text style={styles.minText}>
                    Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity style={{ backgroundColor: '#F1B000', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
                    onPress={() => {
                        navigation.navigate('Screen01')
                    }}
                >
                    <Text style={{ color: '#ffffff', fontSize: 20 }}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 700
    },
    minText: {
        fontSize: 15,
        fontWeight: 700,
        color: 'gray'
    }
})