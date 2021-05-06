import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {HomeBold, Ordericon, ProfileIcon} from '../../assets';
import {
  BottomNavigation,
  Gap,
  Header,
  MenuCard,
  Button,
} from '../../components';

const Menu = ({navigation}) => {
  return (
    <>
      <BottomNavigation
        Home={<HomeBold />}
        Order={<Ordericon />}
        Profile={<ProfileIcon />}
        onPressOrder={() => navigation.navigate('OrderList')}
        onPressProfile={() => navigation.navigate('Profile')}
      />
      <View>
        <Header title="MENU" />
        <Gap height={31} />
        <View style={{borderBottomWidth: 1, borderBottomColor: '#DADADA'}} />
        <ScrollView>
          <View style={styles.menuWrapper}>
            {/* Makanan */}
            <Text style={styles.kategori}>FOOD</Text>
            <MenuCard
              namaMenu="Nasi Goreng"
              hargaMenu="Rp.20.000"
              gambar="Gambar1"
            />
            <MenuCard
              namaMenu="Tempe Penyet"
              hargaMenu="Rp.15.000"
              gambar="Gambar2"
            />
            <MenuCard namaMenu="Bakso" hargaMenu="Rp.15.000" gambar="Gambar3" />
            <Gap height={32.5} />
            {/* Minuman */}
            <Text style={styles.kategori}>DRINK</Text>
            <MenuCard
              namaMenu="Teh Botol"
              hargaMenu="Rp.5.000"
              gambar="Gambar4"
            />
            <MenuCard
              namaMenu="Nutrisari"
              hargaMenu="Rp.5.000"
              gambar="Gambar5"
            />
            <MenuCard
              namaMenu="Air Mineral"
              hargaMenu="Rp.3.000"
              gambar="Gambar6"
            />
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
