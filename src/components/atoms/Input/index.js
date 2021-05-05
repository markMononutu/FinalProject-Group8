import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({judul, placeholder, ...rest}) => {
  return (
    <View>
      <Text style={styles.labelInput}>{judul}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="grey"
        placeholder={placeholder}
        {...rest}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  labelInput: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000000B8',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 8,
    paddingTop: 19,
    paddingBottom: 10,
    paddingLeft: 14,
    color: 'black',
  },
});
