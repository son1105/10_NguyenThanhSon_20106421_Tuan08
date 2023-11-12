import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

const screen02 = ({navigation}) => {
    useEffect(() => {
        fetch('https://654370a801b5e279de205e32.mockapi.io/api/v1/todo')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    var [data, setData] = React.useState([])
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: '88%'}}>
      <FlatList data={data}
        renderItem={({item}) => {
            return (
                <TouchableOpacity style={{width: '100%', backgroundColor: 'white', marginBottom: 10}}
                    onPress={() => navigation.navigate('Screen03', item)}
                >
                    <Image source={require(`../assets/${item.imgPath}`)} style={{width: 400, height: 100}}/>
                    <View style={{marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                        <Text style={{color: 'green', fontSize: 15, backgroundColor: 'lightgray'}}>{item.order ? 'Accepting Orders' : 'Tempory Unavailable'}</Text>
                        <Text style={{color: 'red', fontSize: 15, backgroundColor: 'lightgray'}}>{item.deliveryTime}</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight: 700}}>{item.name}</Text>
                    <Text style={{color: 'gray'}}>{item.address}</Text>
                </TouchableOpacity>
            )
        }}
      />
    </View>
    </View>
  )
}

export default screen02