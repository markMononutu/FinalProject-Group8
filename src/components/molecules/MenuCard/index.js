import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const MenuCard = ({namaMenu, hargaMenu, source, onChange, onsubmit}) => {
  return (
    <View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0, 0, 0, 0.19)',
        }}
      />
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <View style={styles.borderImage}>
            <Image style={{width: 101, height: 64}} source={source} />
          </View>
        </View>

        <View style={styles.cardWrapper}>
          <View style={styles.detail}>
            <Text style={styles.nama}>{namaMenu}</Text>
            <Text style={styles.harga}>{hargaMenu}</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholderTextColor="grey"
            placeholder="jumlah"
            keyboardType={'numeric'}
            onChange={onChange}
          />
          {/* <Button label="OK" onSubmit={onsubmit} /> */}
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0, 0, 0, 0.19)',
        }}
      />
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
  },
  detail: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spinner: {
    marginLeft: 140,
    position: 'absolute',
    padding: 10,
    marginTop: 5,
    backgroundColor: '#FAFAFA',
  },
  nama: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: '700',
  },
  harga: {
    fontSize: 17,
    fontWeight: '700',
  },

  textImage: {
    fontSize: 15,
    maxWidth: 90,
    textAlign: 'center',
    fontWeight: '400',
  },
  borderImage: {
    width: 101.5,
    height: 64,
    borderRadius: 3,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    backgroundColor: 'white',
  },
  imageWrapper: {
    marginTop: 7.5,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 8,
    marginVertical: 10,
    marginLeft: 180,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
  },
});
