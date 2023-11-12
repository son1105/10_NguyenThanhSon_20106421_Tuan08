import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

const screen01 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 700 }}>Welcome to Cafe world</Text>
            <Image source={require('../assets/jeWelBox.PNG')} style={{ width: 300, height: 100, marginVertical: 50 }} />
            <Image source={require('../assets/javasty.PNG')} style={{ width: 300, height: 100 }} />
            <Image source={require('../assets/javasty.PNG')} style={{ width: 300, height: 100, marginVertical: 50 }} />
            <TouchableOpacity style={{ backgroundColor: '#00BDD6', padding: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: '80%' }}
                onPress={() => navigation.navigate('Screen02')}
            >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 700 }}>GET STARTED</Text>
            </TouchableOpacity>
        </View>
    )
}

export default screen01