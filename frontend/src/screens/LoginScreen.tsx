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

const backBtn = require("../assets/icons/backArrow.png")
const login1 = require("../assets/images/loginPage1.jpg")
const threedots = require("../assets/icons/threeDots.png")

function LoginScreen(){
    const navigation = useNavigation()
    const gotoMain = () => {
      navigation.navigate('MainScreen' as never)
    }
    const gotoSignUp = () => {
      navigation.navigate('SignUpScreen' as never)
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
                <Text style={styles.headerText}>Login</Text>
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
                      style={styles.loginImg1}
                      source={login1}
                  />
              </View>
            </View>
            <View style={styles.form}>
                    <TextInput
                        style={styles.usernameInp}
                        placeholder="Username"
                    />
                    <TextInput
                        style={styles.passwordInp}
                        placeholder="Password"
                    />

            </View>

            <TouchableOpacity 
            style={styles.btn}>
                <View style={styles.loginBtn}>
                    <Text style={styles.loginBtnText}>Log In</Text>
                </View> 
            </TouchableOpacity>

            <View style={{flexDirection:'row', justifyContent:"center", marginTop: 5}}>
                <Text style={{fontSize:16}}>Don't have an account?  |  {" "}</Text>
                <TouchableOpacity
                onPress={gotoSignUp}
                >
                    <Text style={{fontSize:16, color:'green', fontWeight:'500'}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 0,
        backgroundColor: '#ffffff'
    },
    header: {
        marginTop: 5,
        width: '100%',
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
    loginImg1:{
        width:300,
        height:250,
    },
    form:{
        marginTop: 40,
        paddingLeft: 50,
        justifyContent: 'center',
        paddingBottom: 40
    },
    usernameInp:{
        paddingLeft: 20,
        fontSize: 18,
        width: '90%',
        borderWidth: 1.5,
        borderRadius: 20,
        marginBottom: 30
    },
    passwordInp:{
        paddingLeft: 20,
        fontSize: 18,
        width: '90%',
        borderWidth: 1.5,
        borderRadius: 20,
        marginBottom: 40
    },
    btn:{
        alignItems: 'center'
    },
    loginBtn: {
        marginTop: 180,
        width: '75%',
        height: 40,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#0066FF',
        borderRadius: 25
    },
    loginBtnText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 2
    }
});

export default LoginScreen;