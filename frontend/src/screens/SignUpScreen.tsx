/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
// import CheckBox from "react-native-check-box";

const img = require('../assets/images/signUp.jpg');
const backBtn = require('../assets/icons/backArrow.png')
const threedots = require('../assets/icons/threeDots.png')

function SignUp(){
  const navigation = useNavigation()
  const gotoLogin = () => {
    navigation.navigate('LoginScreen' as never)
  }
  const gotoMain = () => {
    navigation.navigate('MainScreen' as never)
  }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <View style={styles.navBar}>
                <TouchableOpacity
                onPress={gotoMain}
                >
                <Image 
                    style={styles.backBtn}
                    source={backBtn}
                />
                </TouchableOpacity>
                <Text style={styles.headerText}>Sign Up</Text>
                <TouchableOpacity>
                  <Image
                    style = {styles.threeDots}
                    source={threedots}
                  />
                </TouchableOpacity>
              </View>
                <View
                style={{
                    width: '100%',
                    height: 1,
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
                />
                <View style={styles.imgContainer}>
                  <Image
                    style={styles.headerImg}
                    source={img}
                />
                </View>
                
            </View>
            <View style={styles.form}>
                    <TextInput
                        style={styles.feild}
                        placeholder="Username"
                    />
                    <TextInput
                        style={styles.feild}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.feild}
                        placeholder="Password"
                    />
                    <TextInput
                        style={styles.feild}
                        placeholder="Mobile Number"
                    /> 
            </View>
            <TouchableOpacity style={styles.btn}>
                <View style={styles.signUpBtn}>
                    <Text style={styles.signUpBtnText}>Sign Up</Text>
                </View> 
            </TouchableOpacity>

            <View style={{flexDirection:'row', justifyContent:"center", marginTop: 5}}>
                <Text style={{fontSize:16}}>Already have an account?  |  {" "}</Text>
                <TouchableOpacity
                onPress={gotoLogin}
                >
                    <Text style={{fontSize:16, color:'green', fontWeight:'500'}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header:{
        marginTop: 5,

    },
    navBar:{
      paddingLeft: 20,
      paddingRight: 20,
      height: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    backBtn:{
      height: 20,
      width:20
    },
    headerText:{
        fontSize: 20,
        fontWeight: '500'
      },
      threeDots: {
        height: 20,
        width: 20
      },
    imgContainer:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerImg:{
        height: 300,
        width: 300
    },
    form:{
        marginTop: 40,
        paddingLeft: 50,
        justifyContent: 'center',
        paddingBottom: 40
    },
    feild:{
        paddingLeft: 20,
        fontSize: 18,
        width: '90%',
        borderWidth: 1.5,
        borderRadius: 20,
        marginBottom: 20
    },
    btn:{
        alignItems: 'center'
    },
    signUpBtn: {
        marginTop: 10,
        width: '75%',
        height: 40,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#0066FF',
        borderRadius: 25
    },
    signUpBtnText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 2
    }
});

export default SignUp;