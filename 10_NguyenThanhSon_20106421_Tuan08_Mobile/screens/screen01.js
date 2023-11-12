import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import React, { useEffect } from 'react';
export default function Screen01({ navigation }) {
    useEffect(() => {
        fetch('https://654370a801b5e279de205e32.mockapi.io/api/v1/todo')
            .then((response) => response.json())
            .then((json) => {
                setArr(json)
                setData(json)
                setData2(json)
            })
            .catch((error) => console.error(error))
    }, [])
    var [button1, setButton1] = React.useState('#F1B000')
    var [button2, setButton2] = React.useState('#C4C4C4')
    var [button3, setButton3] = React.useState('#C4C4C4')
    var [textSearch, setTextSearch] = React.useState('')
    var [data, setData] = React.useState([])
    var [data2, setData2] = React.useState([])
    var [arr, setArr] = React.useState([])
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff', padding: '2.5%' }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 700 }}>Welcome, Jala!</Text>
                <Text style={{ fontSize: 20, fontWeight: 700 }}>Choice you Best food</Text>
            </View>
            <View style={{ flex: 1, width: '100%', flexDirection: 'row' }}>
                <TextInput style={{ 
                    fontSize: 16, 
                    width: '90%', 
                    height: 46, 
                    borderWidth: 1, 
                    borderColor: '#C4C4C4', 
                    backgroundColor: '#ffffff', 
                    paddingHorizontal: '2%' }} 
                    placeholderTextColor={'gray'} 
                    placeholder={'Seach food'}
                    value={textSearch}
                    onChangeText={setTextSearch}
                    />
                <TouchableOpacity style={{ 
                    backgroundColor: '#F1B000', 
                    height: 46, width: '10%', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                    }}
                    onPress={()=>{
                        data = data2.filter((item) => {
                            return item.title.includes(textSearch)
                        })
                        setData(data)
                    }}>
                    <FontAwesome5 name="search" size={24} color="#FAFAFA" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 8 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: `${button1}` }]}
                        onPress={()=>{
                            setButton1('#F1B000')
                            setButton2('#C4C4C4')
                            setButton3('#C4C4C4')
                            data = arr.filter((item) => {
                                console.log(item)
                                return item.title.includes('Donut')
                            })
                            setData(data)
                            setData2(data)
                        }}>
                        <Text>Donut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: `${button2}` }]}
                        onPress={() => {
                            setButton1('#C4C4C4')
                            setButton2('#F1B000')
                            setButton3('#C4C4C4')
                            data = arr.filter((item) =>{
                                return item.title == 'Pink Donut'
                            })
                            setData(data)
                            setData2(data)
                        }}
                    >
                        <Text>Pink Donut</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: `${button3}` }]}
                        onPress={() => {
                            setButton1('#C4C4C4')
                            setButton2('#C4C4C4')
                            setButton3('#F1B000')
                            data = arr.filter((item) => {
                                console.log(item)
                                return item.title.includes('Floating')
                            })
                            setData(data)
                            setData2(data)
                        }}
                    >
                        <Text>Floating</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 7 }}>
                    <FlatList data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={{flexDirection: 'row', backgroundColor:'#F4DDDD', marginBottom: 10, borderRadius:10}}>
                                    <Image source={require(`../assets/${item.imgPath}`)} style={{width:100, height:100, borderRadius: 10, margin:10}}/>
                                    <View style={{justifyContent:'space-between', margin:10}}>
                                    <Text style={{fontSize:20, fontWeight: 700}}>{item.title}</Text>
                                    <Text style={{fontSize:15, fontWeight: 700, color: 'gray'}}>{item.shop}</Text>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 240}}>
                                        <Text style={{fontSize:20, fontWeight: 700}}>${item.price}.00</Text>
                                        <TouchableOpacity style={{backgroundColor:'#F1B000', width: 40, height: 40, borderTopLeftRadius: 30, borderBottomLeftRadius: 10, borderBottomEndRadius: 10, borderTopEndRadius: 10, justifyContent:'center', alignItems: 'center'}}
                                            onPress={() => {
                                                navigation.navigate('Screen02', item)
                                            }}
                                        >
                                            <Text style={{fontSize:40, fontWeight: 700, color: '#ffffff'}}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    button: {
        width: '30%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1
    }
})