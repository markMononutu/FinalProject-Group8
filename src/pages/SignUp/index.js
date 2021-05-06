import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {Header, Input, Gap, Button} from '../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="SIGN UP" onBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box}>
          <View style={styles.avatarContainer}>
            <View style={styles.borderPhoto}>
              <TouchableOpacity>
                <View style={styles.addPhoto}>
                  <Text style={styles.textAddPhoto}>Add Photo</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Input judul="Name" placeholder="Enter your name" />
          <Gap height={10} />
          <Input judul="Email" placeholder="Enter your email" />
          <Gap height={10} />
          <Input judul="Phone Number" placeholder="Enter phone number" />
          <Input judul="Password" placeholder="Enter new password" />
          <Gap height={15.88} />
          <Button label="Sign Up" warnaLatar="#F28F27" />
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
});
