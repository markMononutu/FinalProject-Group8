import React from 'react';
import {Button,Gap, Header, BottomNavigation} from '../../components';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {HomeLight, ListLight, ProfileBold} from '../../assets'
const Profile = ({navigation}) => {   
    return(
    <>  
            <BottomNavigation
            Home={<HomeLight />}
            Order={<ListLight />}
            Profile={<ProfileBold />}
            onPressOrder={() => navigation.navigate('OrderList')}
            onPressHome={() => navigation.navigate('Menu')}
            />    
        <View>
            <Header title="PROFILE" />          
            <View style={styles.avatarContainer}>
            <View style={styles.borderPhoto}>
            </View>
            </View>
            <View style={styles.n}>  
            <Text style={styles.nama}>Name</Text>
            <Text style={styles.labelnama}>John Doe</Text>
            <Text style={styles.email}>Email</Text>
            <Text style={styles.labelemail}>johndoe@mail.com</Text>
            <Text style={styles.phonenumber}>Phone Number</Text>
            <Text style={styles.labelnumber}>082346561234</Text>
            <Gap height={112}/>
            <View style={styles.button}>
            <Button 
            label="SIGN OUT"
            color="#8C0900"/>
            <Gap height={90}/>
            </View>
           </View>
        </View>
      </> 
    )
}


export default Profile;
const styles = StyleSheet.create({
 home:{
   marginRight:110,
 },
 list:{
    marginRight:100,
 },
 profile:{
    marginRight:110,
 },
    container:{
    marginTop:10,
    marginLeft:-309,
    color: 'black',
    
    
  },
  n:{
   marginTop:44,
  },
  
  avatarContainer: {
    alignItems: 'center',
    marginTop: 64,
  },
    nama: {
        fontSize: 18,
        fontWeight:"bold",
        color:"rgba(0, 0, 0, 0.57)",
        marginLeft:17,
        padding:10,
        width:141,
        height:41,
        
    },
    labelnama:{
        fontSize: 18,
        color:'black', 
        marginLeft:17,
        padding:10,
        width:141,
        height:41,
        fontWeight:"bold"
    },
    email: {
        fontSize: 18,
        fontWeight:"bold",
        color:"rgba(0, 0, 0, 0.57)",
        marginLeft:17,
        padding:10,
        width:141,
        height:41,
    },
    labelemail:{
        fontSize: 18,
        color:'black', 
        marginLeft:17,
        padding:10,
        width:141,
        height:41,
        fontWeight:"bold"
    },
    phonenumber: {
        fontSize: 18,
        fontWeight:"bold",
        color:"rgba(0, 0, 0, 0.57)",
        marginLeft:17,
        padding:10,
        width:141,
        height:41,
    },
    labelnumber:{
        fontSize: 18,
        color:'black', 
        marginLeft:17,
        padding:10,
        width:141,
        height:41,
        fontWeight:"bold"
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
    button:{
        marginLeft:22,
        marginRight:22,
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
})