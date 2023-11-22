import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaInicial() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Teste do React Native</Text>
      <Button title="Cadastrar" onPress={()=>{
          navigation.navigate('Cadastro')
        }}/>
      <StatusBar style="auto" />
    </View>
  );
}

function TelaCadastro() {
  return (
    <View style={styles.container}>
      <Text>Aqui vem o Cadastro do Cliente</Text>
      <Button title="Voltar" onPress={()=>{
          navigation.navigate('Início')
        }}/>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
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
