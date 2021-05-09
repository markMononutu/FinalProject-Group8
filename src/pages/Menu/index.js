import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {HomeBold, Ordericon, ProfileIcon} from '../../assets';
import {
  BottomNavigation,
  Gap,
  Header,
  MenuCard,
  Button,
} from '../../components';
import firebase from '../../config/Firebase';

const Menu = ({navigation, route}) => {
  const {uid} = route.params;

  const [productMakanan, setProductMakanan] = useState([]);
  const [productMinuman, setProductMinuman] = useState([]);

  const [gambarMakanan, setGambarMakanan] = useState({});
  const [gambarMinuman, setGambarMinuman] = useState({});
  useEffect(() => {
    //makanan
    firebase
      .database()
      .ref('makanan')
      .on('value', res => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];
          Object.keys(rawData).map(item => {
            productArray.push({
              id: item,
              ...rawData[item],
            });
          });
          setProductMakanan(productArray);
          // const gambar = `data:image/jpeg;base64, ${productMakanan.photo}`;
          // setGambarMakanan(...res.val(), ());
          console.log(productArray);
        }
      });

    //minuman
    firebase
      .database()
      .ref('minuman')
      .on('value', res => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];
          Object.keys(rawData).map(item => {
            productArray.push({
              id: item,
              ...rawData[item],
            });
          });
          setProductMinuman(productArray);
          console.log(productArray);
        }
      });
  }, []);
  return (
    <>
      <BottomNavigation
        Home={<HomeBold />}
        Order={<Ordericon />}
        Profile={<ProfileIcon />}
        onPressOrder={() => navigation.navigate('OrderList', {uid: uid})}
        onPressProfile={() => navigation.navigate('Profile', {uid: uid})}
      />
      <View>
        <Header title="MENU" />
        <Gap height={31} />
        <View style={{borderBottomWidth: 1, borderBottomColor: '#DADADA'}} />
        <ScrollView>
          <View style={styles.menuWrapper}>
            {/* Makanan */}
            <Text style={styles.kategori}>FOOD</Text>
            {productMakanan.map(item => (
              <MenuCard
                namaMenu={item.makanan}
                hargaMenu={item.harga}
                source={{uri: `data:image/jpeg;base64,${item.photo}`}}
              />
            ))}
            <Gap height={32.5} />
            {/* Minuman */}
            <Text style={styles.kategori}>DRINK</Text>
            {productMinuman.map(item => (
              <MenuCard
                namaMenu={item.minuman}
                hargaMenu={item.harga}
                source={{uri: `data:image/jpeg;base64,${item.photo}`}}
              />
            ))}
            <Gap height={37.5} />
            <Button label="ORDER" />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuWrapper: {
    marginTop: 24,
    marginHorizontal: 21,
  },
  kategori: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 11,
  },
});
