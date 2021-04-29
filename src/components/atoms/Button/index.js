import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({onSubmit, label, color = '#F28F27', textColor = 'white'}) => {
  return (
    <View>
      <TouchableOpacity onPress={onSubmit} style={styles.submit(color)}>
        <Text style={styles.label(textColor)}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  submit: color => ({
    borderRadius: 8,
    alignItems: 'center',
    color: 'white',
    height: 50,
    paddingTop: 17,
    paddingBottom: 15,
    backgroundColor: color,
  }),
  label: textColor => ({
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    color: textColor,
  }),
});

export default Button;
