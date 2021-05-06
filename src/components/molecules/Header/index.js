import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Back} from '../../../assets';
import {Gap} from '../../../components';

const Header = ({title, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <View style={styles.row}>
          <TouchableOpacity onPress={onBack}>
            <View style={styles.buttonBack}>
              <Back />
            </View>
          </TouchableOpacity>
          <Gap width={90} />
          <Text style={styles.text}>{title}</Text>
        </View>
      )}
      {!onBack && (
        <View style={styles.noBack}>
          <Text style={styles.textNoBack}>{title}</Text>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: {
    fontSize: 22,
    color: 'black',
  },
  textNoBack: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    color: 'black',
  },
  buttonBack: {
    padding: 10,
    marginLeft: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noBack: {
    alignItems: 'center',
  },
});
