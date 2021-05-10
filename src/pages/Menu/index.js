import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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

  const [jumlah, setJumlah] = useState(0);

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
          Object.keys(rawData).map(itemMakanan => {
            productArray.push({
              id: itemMakanan,
              ...rawData[itemMakanan],
            });
          });
          setProductMakanan(productArray);
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
          Object.keys(rawData).map(itemMinuman => {
            productArray.push({
              id: itemMinuman,
              ...rawData[itemMinuman],
            });
          });
          setProductMinuman(productArray);
          console.log(productArray);
        }
      });
  }, []);

  const updateMakanan = (itemMakanan, items) => {
    const biaya = items.harga * items.jumlah;
    const dataPesanMakan = {
      namaMakanan: items.makanan,
      hargaMakanan: items.harga,
      jumlahMakanan: items.jumlah,
      biaya: biaya,
    };
    firebase.database().ref(`makanan/${itemMakanan}/jumlah`).set(jumlah);
    firebase
      .database()
      .ref(`users/${uid}/daftarPesananMakanan`)
      .push(dataPesanMakan);
  };

  const updateMinuman = (itemMinuman, items) => {
    const biaya = items.harga * items.jumlah;
    const dataPesanMinum = {
      namaMinuman: items.minuman,
      hargaMinuman: items.harga,
      jumlahMinuman: items.jumlah,
      biaya: biaya,
    };
    firebase.database().ref(`minuman/${itemMinuman}/jumlah`).set(jumlah);
    firebase
      .database()
      .ref(`users/${uid}/daftarPesananMinuman`)
      .push(dataPesanMinum);
  };
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.menuWrapper}>
            {/* Makanan */}
            <Text style={styles.kategori}>FOOD</Text>
            {productMakanan.map(itemMakanan => (
              <View>
                <MenuCard
                  namaMenu={itemMakanan.makanan}
                  hargaMenu={`Rp.${itemMakanan.harga}`}
                  source={{uri: `data:image/jpeg;base64,${itemMakanan.photo}`}}
                  onChange={value => {
                    setJumlah(parseInt(value.nativeEvent.text));
                  }}
                />
                <View>
                  <TouchableOpacity
                    style={styles.tombol}
                    onPress={() => {
                      console.log(itemMakanan);
                      updateMakanan(itemMakanan.id, itemMakanan);
                    }}>
                    <Text>Masukkan Keranjang</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}

            <Gap height={32.5} />
            {/* Minuman */}
            <Text style={styles.kategori}>DRINK</Text>
            {productMinuman.map(itemMinuman => (
              <View>
                <MenuCard
                  namaMenu={itemMinuman.minuman}
                  hargaMenu={`Rp.${itemMinuman.harga}`}
                  source={{uri: `data:image/jpeg;base64,${itemMinuman.photo}`}}
                  onChange={value => {
                    setJumlah(parseInt(value.nativeEvent.text));
                  }}
                />
                <View>
                  <TouchableOpacity
                    style={styles.tombol}
                    onPress={() => {
                      console.log(itemMinuman);
                      updateMinuman(itemMinuman.id, itemMinuman);
                    }}>
                    <Text>Masukkan Keranjang</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <Gap height={37.5} />
            <View style={styles.button}>
              <Button
                label="ORDER"
                onSubmit={() => navigation.navigate('OrderList', {uid: uid})}
              />
            </View>
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
  button: {
    marginBottom: 150,
  },
  tombol: {
    borderRadius: 8,
    alignItems: 'center',
    color: 'white',
    height: 35,
    backgroundColor: 'grey',
    padding: 5,
  },
});
