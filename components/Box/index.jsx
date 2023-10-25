import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const Box = ({ texto, corDeFundo, corDoTexto }) => {
  return (
    <View style={[styles.retangulo, { backgroundColor: corDeFundo }]}>
      <Text style={[styles.text, { color: corDoTexto }]}>{texto}</Text>
    </View>
  );
};

export default Box;
