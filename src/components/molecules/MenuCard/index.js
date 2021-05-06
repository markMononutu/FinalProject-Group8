import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const MenuCard = ({namaMenu, hargaMenu, gambar}) => {
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
            <View>
              <Text style={styles.textImage}>{gambar}</Text>
            </View>
          </View>
        </View>

        <View style={styles.detail}>
          <Text style={styles.nama}>{namaMenu}</Text>
          <Text style={styles.harga}>{hargaMenu}</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholderTextColor="grey"
          placeholder="jumlah"
        />
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
  nama: {
    marginTop: 10,
    fontSize: 20,
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
    flex: 1,
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 8,
    marginVertical: 10,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'flex-end',
  },
});
