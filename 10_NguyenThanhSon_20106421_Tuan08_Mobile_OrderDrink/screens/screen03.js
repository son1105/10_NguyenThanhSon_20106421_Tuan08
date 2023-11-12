import React, { useEffect } from 'react'
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native'

function screen03({ navigation, route }) {
    var item = route.params
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return state.map((item)=>{
                    if(item.id == action.id) {
                        if(item.quantityOrder > 0)
                            item.price = item.price + item.price/item.quantityOrder
                        item.quantityOrder = item.quantityOrder + 1
                        return item
                    }
                    return item;
                })
            case 'decrement':
                return state.map((item)=>{
                    if(item.id == action.id) {
                        if(item.quantityOrder > 1)
                            item.price = item.price - item.price/item.quantityOrder
                        if(item.quantityOrder > 0){
                            item.quantityOrder = item.quantityOrder - 1
                        }
                        return item
                    }
                    return item;
                })
        }
    }
    var [state, dispatch] = React.useReducer(reducer, item.drinks)
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 8, marginLeft: '5%', width: '90%' }}>
                <FlatList data={state}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                                <View style={{flex: 1}}>
                                    <Image source={require(`../assets/${item.imgPath}`)} style={{ width: 60, height: 60 }} />
                                </View>
                                <View style={{flex: 2}}>
                                    <Text style={{ fontSize: 20, fontWeight: 700 }}>{item.name}</Text>
                                    <Text style={{ fontSize: 20, fontWeight: 700 }}>${item.price}</Text>
                                </View>
                                <View style={{flex: 1, marginRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', borderRadius: 20 }}
                                        onPress={() => {
                                            dispatch({type: 'decrement', id: item.id})
                                        }}
                                    >
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 700 }}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 700, marginLeft: 10, marginRight: 10 }}>{item.quantityOrder}</Text>
                                    <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', borderRadius: 20 }}
                                        onPress={() => {
                                            dispatch({type: 'increment', id: item.id})
                                        }}
                                    >
                                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 700 }}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }} />
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', width: '90%', height: 50, backgroundColor: 'orange'}}
                    onPress={() => navigation.navigate('Screen04', item.drinks)}
                >
                    <Text style={{color: '#ffffff'}}>GO TO CART</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default screen03