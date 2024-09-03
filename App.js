import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const App = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(parseFloat(number1) + parseFloat(number2));
  };

  const handleSubtraction = () => {
    setResult(parseFloat(number1) - parseFloat(number2));
  };

  const handleMultiplication = () => {
    setResult(parseFloat(number1) * parseFloat(number2));
  };

  const handleDivision = () => {
    if (parseFloat(number2) !== 0) {
      setResult(parseFloat(number1) / parseFloat(number2));
    } else {
      setResult('Cannot divide by zero');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator App</Text>

      <View style={styles.srcView}>
        <View style={styles.NameInput}>
          <Text style={styles.fsnum}>First Number</Text>
          <TextInput
          style={styles.input}
          placeholder="Enter first number"
          keyboardType="numeric"
          value={number1}
          onChangeText={(text) => setNumber1(text)}
        />
        </View>

        <View style={styles.NameInput}>
          <Text style={styles.fsnum}>Second Number</Text>
          <TextInput
          style={styles.input}
          placeholder="Enter second number"
          keyboardType="numeric"
          value={number2}
          onChangeText={(text) => setNumber2(text)}
        />
        </View>
      </View>

      <View style={styles.buttonCol}>
        <Button title="Add" onPress={handleAddition} />
      </View>

      <View style={styles.buttonCol}>
        <Button title="Subtraction" onPress={handleSubtraction} />
      </View>

      <View style={styles.buttonCol}>
        <Button title="Multiply" onPress={handleMultiplication} />
      </View>

      <View style={styles.buttonCol}>
        <Button title="Divide" onPress={handleDivision} />
      </View>

      <Text style={styles.result}>Result: {result !== null && <Text style={styles.result}>{result}</Text>}</Text>

      <View style={styles.ClearText}>
        <Button title='Reset'/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginLeft: '30%',
    marginTop: 50,
  },
  input: {
    height: 40,
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonCol: {
    flexDirection: 'col',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
    marginLeft: '20%',
  },
  result: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  NameInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  srcView: {
    marginTop: 100,
  },
  fsnum:{
    marginLeft: 10,
    marginRight: 10,
  },
  ClearText:{
    marginLeft: '20%',
    width: '60%',
  }
});

export default App;
