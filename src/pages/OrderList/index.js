import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeIcon, OrderBold, ProfileIcon} from '../../assets';
import {BottomNavigation, Header, Gap} from '../../components';
import firebase from '../../config/Firebase';

const OrderList = ({navigation, route}) => {
  const {uid} = route.params;

  const [pesanMakan, setPesanMakan] = useState([]);
  const [pesanMinum, setPesanMinum] = useState([]);

  const [totalMinuman, setTotalMinuman] = useState(0);
  const [totalMakanan, setTotalMakanan] = useState(0);

  let totalKeseluruhan = totalMakanan + totalMinuman;

  useEffect(() => {
    //makanan
    firebase
      .database()
      .ref(`users/${uid}/daftarPesananMakanan`)
      .on('value', res => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];
          Object.keys(rawData).map(itemMakanan => {
            productArray.push({
              id: itemMakanan,
              ...rawData[itemMakanan],
            });
          });
          setPesanMakan(productArray);
          let count = 0;
          for (let i = 0; i < productArray.length; i++) {
            count = +count + +productArray[i].biaya;
            setTotalMakanan(count);
          }
        }
      });

    //minuman
    firebase
      .database()
      .ref(`users/${uid}/daftarPesananMinuman`)
      .on('value', res => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];
          Object.keys(rawData).map(itemMinuman => {
            productArray.push({
              id: itemMinuman,
              ...rawData[itemMinuman],
            });
          });
          setPesanMinum(productArray);
          let count = 0;
          for (let i = 0; i < productArray.length; i++) {
            count = +count + +productArray[i].biaya;
            setTotalMinuman(count);
          }
        }
      });
  }, []);

  return (
    <>
      <BottomNavigation
        Home={<HomeIcon />}
        Order={<OrderBold />}
        Profile={<ProfileIcon />}
        onPressHome={() => navigation.navigate('Menu', {uid: uid})}
        onPressProfile={() => navigation.navigate('Profile', {uid: uid})}
      />

      <View style={styles.container}>
        <Header title="ORDER LIST" />
        <Gap height={50} />
        {pesanMakan.map(itemMakanan => (
          <View style={styles.list}>
            <Text style={styles.text}>
              {itemMakanan.namaMakanan} X{itemMakanan.jumlahMakanan}
            </Text>
            <Text style={styles.text}>Rp.{itemMakanan.biaya}</Text>
          </View>
        ))}
        {pesanMinum.map(itemMinuman => (
          <View style={styles.list}>
            <Text style={styles.text}>
              {itemMinuman.namaMinuman} X{itemMinuman.jumlahMinuman}
            </Text>
            <Text style={styles.text}>Rp.{itemMinuman.biaya}</Text>
          </View>
        ))}

        <Gap height={47} />
        <View style={{borderBottomWidth: 1, borderBottomColor: '#DADADA'}} />
      </View>

      <View style={styles.total}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>Rp.{totalKeseluruhan}</Text>
      </View>
    </>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 22,
  },
  list: {
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 205,
    marginRight: 27,
  },
});
