import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Restaurant} from '../../assets';
import {Button, Input, Gap} from '../../components';
import firebase from '../../config/Firebase';
import {showMessage} from 'react-native-flash-message';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        navigation.navigate('Menu', {uid: res.user.uid});
        // console.log(uid);
      })

      .catch(error =>
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: '#D9435E', // background color
          color: 'white', // text color
        }),
      );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Gap height={9} />
        <Restaurant style={styles.ilustrasi} />
        <Gap height={52} />
        <View style={styles.box}>
          <Input
            judul="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <Gap height={16} />
          <Input
            judul="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry
          />
          <Gap height={38} />
          <Button label="Sign in" onSubmit={handleSubmit} />
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
