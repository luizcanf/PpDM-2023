import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function TelaInicial() {
  const navigation = useNavigation();
  const [email, onChangeText] = React.useState('');
  const [senha, mudouASenha] = React.useState('');
  return (
    <View style={styles.container}>
      <Text>Página inicial</Text>
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={onChangeText}
        value={email}
      />
      <TextInput
       placeholder="Senha"
       secureTextEntry={true}
       style={styles.input}
       onChangeText={mudouASenha}
       value={senha}
       />
      <Button title="Login" onPress={() => navigation.navigate('Cadastro')} />
      <StatusBar style="auto" />
      <Text>{email}</Text>
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
