import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');



const App = () => {
  const buttons = [
    'AC',
    '+/-',
    '%',
    '/',
    7,
    8,
    9,
    '*',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '=',
  ];
  const [currentNumber, setCurrentNumber] = useState('0');
  const [lastNumber, setLastNumber] = useState('');
  const calculator = () => {
    let lastArr = currentNumber[currentNumber.length - 1];
      if (
        lastArr === '/' ||
        lastArr === '*' ||
        lastArr === '-' ||
        lastArr === '+' ||
        lastArr === '.' 
      ) {
        setCurrentNumber(currentNumber);
        return;
      } else {
        let result = eval(currentNumber).toString();
        setCurrentNumber(result);
        return;
      }
  };

  const handleInput = (buttonPressed)  => {
    if (
      buttonPressed === '+' ||
      buttonPressed === '-' ||
      buttonPressed === '*' ||
      buttonPressed === '/' ||
      buttonPressed === '%' 
    ) {
      setCurrentNumber(currentNumber + buttonPressed);
      return;
    } 
    // else if(buttonPressed === '%') {
    //   setCurrentNumber(currentNumber + buttonPressed);
    //   return;
    // } 
    switch (buttonPressed) {
      case 'AC':
        setLastNumber('');
        setCurrentNumber('');
        return;
      case '=':
        setLastNumber(currentNumber);
        calculator();
        return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.textHistory}>{lastNumber}</Text>
        <Text style={styles.textResult}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map(button =>
          button === '=' ||
          button === '/' ||
          button === '*' ||
          button === '-' ||
          button === '+' ? (
            <TouchableOpacity
              onPress={() => handleInput(button)}
              style={[styles.customButton, {backgroundColor: '#F2982C'}]}>
              <Text style={styles.textNum}>{button}</Text>
            </TouchableOpacity>
          ) : button === 'AC' || button === '+/-' || button === '%' ? (
            <TouchableOpacity
              onPress={() => handleInput(button)}
              style={[styles.customButton, {backgroundColor: '#a4a4a4'}]}>
              <Text style={[styles.textNum, {color: 'black'}]}>{button}</Text>
            </TouchableOpacity>
          ) : button === 0 ? (
            <TouchableOpacity
              onPress={() => handleInput(button)}
              style={[styles.customButton, {width: width / 2 - 10}]}>
              <Text style={styles.textNum}>{button}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => handleInput(button)}
              style={styles.customButton}>
              <Text style={styles.textNum}>{button}</Text>
            </TouchableOpacity>
          ),
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  result: {flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'},
  textHistory: {
    maxHeight: 100,
    color: 'white',
    margin: 5,
    fontSize: 70,
  },
  textResult: {
    maxHeight: 100,
    color: 'white',
    margin: 5,
    fontSize: 70,
  },
  buttons: {
    flex: 2,
    backgroundColor: 'black',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  customButton: {
    margin: 5,
    width: width / 4 - 10,
    height: width / 4 - 10,
    backgroundColor: '#303030',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  textNum: {
    color: 'white',
    fontSize: 30
  }
});

export default App;

