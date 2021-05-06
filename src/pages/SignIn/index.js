import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Restaurant} from '../../assets';
import {Button, Input, Gap} from '../../components';

const SignIn = ({navigation}) => {
  const handleSubmit = () => {};
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Gap height={9} />
        <Restaurant style={styles.ilustrasi} />
        <Gap height={52} />
        <View style={styles.box}>
          <Input judul="Email" placeholder="Enter your email" />
          <Gap height={16} />
          <Input judul="Password" placeholder="Enter your password" />
          <Gap height={38} />
          <Button
            label="Sign in"
            onSubmit={() => navigation.navigate('Menu')}
          />
          <Gap height={14} />
          <Button
            label="Create New Account"
            color="#8C0900"
            onSubmit={() => navigation.navigate('SignUp')}
          />
        </View>
        <Gap height={90} />
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  ilustrasi: {
    width: 375,
    height: 276,
    marginLeft: 16,
    marginHorizontal: 18.5,
  },
  box: {
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 27,
    paddingBottom: 57,
    paddingTop: 28,
    paddingHorizontal: 41,
    borderColor: 'black',
    elevation: 4,
  },
});
