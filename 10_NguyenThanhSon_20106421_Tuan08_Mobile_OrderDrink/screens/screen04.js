import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

const screen04 = ({ navigation, route }) => {
    var item = route.params
    var [price, setPrice] = React.useState(0)
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return state.map((item) => {
                    if (item.id == action.id) {
                        if (item.quantityOrder > 0)
                            item.price = item.price + item.price / item.quantityOrder
                        item.quantityOrder = item.quantityOrder + 1
                        setPrice(() => {
                            var sum = 0;
                            for (var i = 0; i < state.length; i++) {
                                if (state[i].quantityOrder > 0)
                                    sum = sum + state[i].price
                            }
                            return sum;
                        })
                        return item
                    }
                    return item;
                })
            case 'decrement':
                return state.map((item) => {
                    if (item.id == action.id) {
                        if (item.quantityOrder > 1)
                            item.price = item.price - item.price / item.quantityOrder
                        if (item.quantityOrder > 0) {
                            item.quantityOrder = item.quantityOrder - 1
                        }
                        setPrice(() => {
                            var sum = 0;
                            for (var i = 0; i < state.length; i++) {
                                if (state[i].quantityOrder > 0)
                                    sum = sum + state[i].price
                            }
                            return sum;
                        })
                        return item
                    }
                    return item;
                })
        }
    }
    var [state, dispatch] = React.useReducer(reducer, item)
    useEffect(() => {
        setPrice(() => {
            var sum = 0;
            for (var i = 0; i < state.length; i++) {
                if (state[i].quantityOrder > 0)
                    sum = sum + state[i].price
            }
            return sum;
        })
    },[])
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, margin: 10, backgroundColor: '#00BDD6', flexDirection: 'row' }}>
                <View style={{ padding: 5, flex: 4 }}>
                    <Text style={{ color: '#ffffff', marginVertical: 10, fontSize: 20 }}>CAFE DELIVERY</Text>
                    <Text style={{ color: '#ffffff', fontSize: 20 }}>Order #18</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingRight: '5%' }}>
                    <Text style={{ color: '#ffffff', fontSize: 20 }}>$5</Text>
                </View>
            </View>
            <View style={{ flex: 1, marginHorizontal: 10, backgroundColor: '#8353E2', flexDirection: 'row' }}>
                <View style={{ padding: 5, flex: 4 }}>
                    <Text style={{ color: '#ffffff', marginVertical: 10, fontSize: 20 }}>CAFE</Text>
                    <Text style={{ color: '#ffffff', fontSize: 20 }}>Order #18</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingRight: '5%' }}>
                    <Text style={{ color: '#ffffff', fontSize: 20 }}>${price}</Text>
                </View>
            </View>
            <View style={{ flex: 4 }}>
                <FlatList data={state}
                    renderItem={({ item }) => {
                        if (item.quantityOrder == 0)
                            return <View></View>
                        return (
                            <View style={{ margin: 10, borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                                <View style={{ flex: 1 }}>
                                    <Image source={require(`../assets/${item.imgPath}`)} style={{ width: 60, height: 60 }} />
                                </View>
                                <View style={{ flex: 2 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 700 }}>{item.name}</Text>
                                    <Text style={{ fontSize: 20, fontWeight: 700 }}>${item.price}</Text>
                                </View>
                                <View style={{ flex: 1, marginRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', borderRadius: 20 }}
                                        onPress={() => {
                                            dispatch({ type: 'decrement', id: item.id })
                                        }}
                                    >
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 700 }}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 700, marginLeft: 10, marginRight: 10 }}>{item.quantityOrder}</Text>
                                    <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', borderRadius: 20 }}
                                        onPress={() => {
                                            dispatch({ type: 'increment', id: item.id })
                                        }}
                                    >
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 700 }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }} />
            </View>
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', margin: 10, height: 50, backgroundColor: 'orange' }}
                    onPress={() => {
                        navigation.navigate('Screen01')
                    }}
                >
                    <Text style={{ color: '#ffffff' }}>PAY NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default screen04