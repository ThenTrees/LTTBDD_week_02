import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState(null);

  const solveQuadraticEquation = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      Alert.alert("Error", "Vui lòng nhập giá trị hợp lệ cho a, b, c!");
      return;
    }

    const delta = bNum * bNum - 4 * aNum * cNum;

    if (delta < 0) {
      setResult("Phương trình vô nghiệm.");
    } else if (delta === 0) {
      const x = -bNum / (2 * aNum);
      setResult(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
      const x1 = (-bNum + Math.sqrt(delta)) / (2 * aNum);
      const x2 = (-bNum - Math.sqrt(delta)) / (2 * aNum);
      setResult(`Phương trình có hai nghiệm: x1 = ${x1}, x2 = ${x2}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải phương trình bậc 2</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số a"
        keyboardType="numeric"
        onChangeText={text => setA(text)}
        value={a}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số b"
        keyboardType="numeric"
        onChangeText={text => setB(text)}
        value={b}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số c"
        keyboardType="numeric"
        onChangeText={text => setC(text)}
        value={c}
      />
      <Button title="Giải phương trình" onPress={solveQuadraticEquation} />
      {result && <Text style={styles.result}>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});
