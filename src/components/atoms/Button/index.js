import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({onSubmit, label, warnaLatar}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onSubmit} 
        style={[styles.submit, {backgroundColor: warnaLatar}]} >
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  submit: {
    borderRadius: 8,
    alignItems: 'center',
    color: 'white',
    height: 50,
    paddingTop: 17,
    paddingBottom: 15,
    
  },
  label: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
  },
});

export default Button;
