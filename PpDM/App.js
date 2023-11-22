import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function TelaInicial() {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <Text>Página inicial</Text>
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input}/>
      <Button title="Login" onPress={() => navigation.navigate('Cadastro')} />
      <StatusBar style="auto" />
      <Text>{text}</Text>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
