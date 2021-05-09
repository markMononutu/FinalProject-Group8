import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import {Header, Input, Gap, Button} from '../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import firebase from '../../config/Firebase';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState('');
  const [hasPohto, setHasPhoto] = useState(false);
  const [photoBase64, setPhotoBase64] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const getImage = () => {
    launchImageLibrary(
      {maxHeight: 200, maxWidth: 200, includeBase64: true},
      res => {
        if (res.didCancel) {
          setHasPhoto(false);
          showMessage({
            message: 'Upload photo dibatalkan',
            type: 'default',
            backgroundColor: '#D9435E',
            color: 'white',
          });
        } else {
          setPhoto(res.uri);
          setPhotoBase64(res.base64);
          setHasPhoto(true);
        }
      },
    );
  };

  const handleSubmit = ({}) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        const uid = res.user.uid;
        const data = {
          fullName: fullName,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
          photo: photoBase64,
        };
        firebase.database().ref(`users/${uid}`).set(data);
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setPassword('');
        setHasPhoto(false);
        showMessage({
          message:
            'Account is Successfully registered, return to the Sign and page and try it',
          type: 'default',
          backgroundColor: 'green',
          color: 'white',
        });
      })
      .catch(error =>
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: '#D9435E',
          color: 'white',
        }),
      );
  };

  return (
    <View style={styles.container}>
      <Header title="SIGN UP" onBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <View style={styles.avatarContainer}>
            <View style={styles.borderPhoto}>
              <TouchableOpacity onPress={getImage}>
                {hasPohto && (
                  <Image style={styles.avatar} source={{uri: photo}} />
                )}
                {!hasPohto && (
                  <View style={styles.addPhoto}>
                    <Text style={styles.textAddPhoto}>Add Photo</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <Input
            judul="Name"
            placeholder="Enter your name"
            value={fullName}
            onChangeText={value => setFullName(value)}
          />
          <Gap height={10} />
          <Input
            judul="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <Gap height={10} />
          <Input
            judul="Phone Number"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChangeText={value => setPhoneNumber(value)}
          />
          <Input
            judul="Password"
            placeholder="Enter new password"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry
          />
          <Gap height={15.88} />
          <Button
            label="Sign Up"
            warnaLatar="#F28F27"
            onSubmit={handleSubmit}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    color: 'black',
  },
  box: {
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 27.5,
    marginTop: 26,
    marginBottom: 137,
    paddingBottom: 41,
    paddingTop: 28,
    paddingHorizontal: 43.5,
    elevation: 4,
  },
  photoWrapper: {
    paddingLeft: 135,
    paddingRight: 135,
  },
  textAddPhoto: {
    fontSize: 15,
    maxWidth: 45,
    textAlign: 'center',
    fontWeight: '400',
  },
  borderPhoto: {
    width: 85,
    height: 80,
    borderRadius: 80,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    elevation: 8,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 41,
    marginBottom: 33.12,
  },
  avatar: {
    width: 85,
    height: 80,
    borderRadius: 80,
  },
});
