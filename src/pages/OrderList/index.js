import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HomeIcon, OrderBold, ProfileIcon} from '../../assets';
import {BottomNavigation, Header, Gap} from '../../components';

const OrderList = ({navigation, route}) => {
  const {uid} = route.params;
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
        <View style={styles.list}>
          <Text style={styles.text}>Nasi Goreng X 1</Text>
          <Text style={styles.text}>Rp.20.000</Text>
        </View>
        <Gap height={47} />
        <View style={{borderBottomWidth: 1, borderBottomColor: '#DADADA'}} />
      </View>
      <View style={styles.total}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>Rp.20.000</Text>
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
