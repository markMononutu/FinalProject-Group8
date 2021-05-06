import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Back} from '../../../assets';
import {Gap} from '../../../components';

const Header = ({title, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack}>
          <View style={styles.buttonBack}>
            <Back />
          </View>
        </TouchableOpacity>
      )}

      <Gap width={90} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    color: 'black',
  },
  buttonBack: {
    padding: 10,
    marginLeft: 25,
  },
});
