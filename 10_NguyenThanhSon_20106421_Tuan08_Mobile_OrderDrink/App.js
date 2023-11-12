import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import Screen01 from './screens/screen01';
import Screen02 from './screens/screen02';
import Screen03 from './screens/screen03';
import Screen04 from './screens/screen04';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen01' component={Screen01}
          options={{headerShown: false}}
        />
        <Stack.Screen name='Screen02' component={Screen02}
          options={{
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
            headerTitle: 'Shops Near Me',
            headerRight: () => (
              <FontAwesome style={{marginRight: 20}} name="search" size={24} color="black" />
            )
          }}
        />
        <Stack.Screen name='Screen03' component={Screen03}
          options={{
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
            headerTitle: 'Drinks',
            headerRight: () => (
              <FontAwesome style={{marginRight: 20}} name="search" size={24} color="green" />
            )
          }}
        />
        <Stack.Screen name='Screen04' component={Screen04}
          options={{
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
            headerTitle: 'Your orders',
            headerRight: () => (
              <FontAwesome style={{marginRight: 20}} name="search" size={24} color="green" />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
