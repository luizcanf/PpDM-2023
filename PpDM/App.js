import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function TelaInicial() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Página inicial</Text>
      <Button title="Tela DOIS" onPress={() => navigation.navigate('Tela2')} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function Tela2() {
  return (
    <View style={styles.container}>
      <Text>Página DOIS</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <StatusBar style="auto" />
    </View>
  );
}


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Tela2" component={Tela2} />
        <Stack.Screen name="Home" component={TelaInicial} />
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
