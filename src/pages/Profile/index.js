import React, {useState, useEffect} from 'react';
import {Button, Gap, Header, BottomNavigation} from '../../components';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {HomeLight, ListLight, ProfileBold} from '../../assets';
import firebase from 'firebase';

const Profile = ({navigation, route}) => {
  const [profile, setProfile] = useState({});
  const [users, setUsers] = useState({});

  const {uid} = route.params;
  console.log(uid);

  const getUser = () => {
    firebase

      .database()
      .ref(`users/${uid}`)
      .on('value', res => {
        if (res.val()) {
          setUsers(res.val());
        }
        console.log(users);
        console.log(users.phoneNumber);
      });
  };

  const getPicture = () => {
    firebase
      .database()
      .ref(`users/${uid}/`)
      .once('value', res => {
        const photo = `data:image/jpeg;base64, ${res.val().photo}`;
        setProfile({...res.val(), photo: photo});
      });
  };

  useEffect(() => {
    getUser();
    getPicture();
  }, []);

  return (
    <>
      <BottomNavigation
        Home={<HomeLight />}
        Order={<ListLight />}
        Profile={<ProfileBold />}
        onPressOrder={() => navigation.navigate('OrderList', {uid: uid})}
        onPressHome={() => navigation.navigate('Menu', {uid, uid})}
      />
      <View>
        <Header title="PROFILE" />
        <View style={styles.avatarContainer}>
          <View style={styles.borderPhoto}>
            <Image source={{uri: profile.photo}} style={styles.image} />
          </View>
        </View>
        <View style={styles.n}>
          <Text style={styles.nama}>Name</Text>
          <Text style={styles.labelnama}>{users.fullName}</Text>
          <Text style={styles.email}>Email</Text>
          <Text style={styles.labelemail}>{users.email}</Text>
          <Text style={styles.phonenumber}>Phone Number</Text>
          <Text style={styles.labelnumber}>{users.phoneNumber}</Text>
          <Gap height={112} />
          <View style={styles.button}>
            <Button
              label="SIGN OUT"
              color="#8C0900"
              onSubmit={() => navigation.navigate('SignIn')}
            />
            <Gap height={90} />
          </View>
        </View>
      </View>
    </>
  );
};

export default Profile;
const styles = StyleSheet.create({
  home: {
    marginRight: 110,
  },
  list: {
    marginRight: 100,
  },
  profile: {
    marginRight: 110,
  },
  container: {
    marginTop: 10,
    marginLeft: -309,
    color: 'black',
  },
  n: {
    marginTop: 44,
  },

  avatarContainer: {
    alignItems: 'center',
    marginTop: 64,
  },
  nama: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.57)',
    marginLeft: 17,
    padding: 10,
  },
  labelnama: {
    fontSize: 18,
    color: 'black',
    marginLeft: 17,
    padding: 10,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.57)',
    marginLeft: 17,
    padding: 10,
  },
  labelemail: {
    fontSize: 18,
    color: 'black',
    marginLeft: 17,
    padding: 10,
    fontWeight: 'bold',
  },
  phonenumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.57)',
    marginLeft: 17,
    padding: 10,
  },
  labelnumber: {
    fontSize: 18,
    color: 'black',
    marginLeft: 17,
    padding: 10,
    fontWeight: 'bold',
  },

  borderPhoto: {
    width: 115,
    height: 114,
    borderRadius: 80,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    elevation: 20,
  },
  button: {
    marginTop: 30,
    marginLeft: 22,
    marginRight: 22,
  },
  nav: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    flexDirection: 'row',
    paddingLeft: 37,
    paddingBottom: 15,
    paddingTop: 16,
    elevation: 15,
    flex: 1,
  },
  image: {
    height: 114,
    width: 115,
    borderRadius: 80,
  },
});
