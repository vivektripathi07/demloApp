import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
    SafeAreaView,
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    Alert,
    Button,
    TouchableOpacity
} from 'react-native';

const image1 = require("../assets/images/image1.jpg")
const google = require('../assets/icons/google.jpg')
const facebook = require('../assets/icons/facebook.png')
const discord = require('../assets/icons/discord.png')
const backBtn = require('../assets/icons/backArrow.png')
const threedots = require('../assets/icons/threeDots.png')

function MainScreen(){
    const navigation = useNavigation()
    const gotoBoard = () =>{
        navigation.navigate('Onboarding' as never)
    }
    const gotoLogin = () =>{
        navigation.navigate('LoginScreen' as never)
    }
    const gotoSignUp = () =>{
        navigation.navigate('SignUpScreen' as never)
    }
    return(
            <View style={styles.container}>
                <View style={styles.navBar}>
                <TouchableOpacity
                onPress={gotoBoard}
                >
                <Image 
                    style={styles.backBtn}
                    source={backBtn}
                />
                </TouchableOpacity>
                <Text style={styles.headerText}></Text>
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
                <View>
                    <View style={styles.imageOnHeader}>
                        <Image
                            style={styles.image1}
                            source = {image1}
                        />
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.h1}>How have you been ?</Text>
                    </View>
                    <View style={styles.subtitle}>
                        <Text style={styles.h2}>
                            Lorem Ipsum abc def ghi jkl
                        </Text>
                    </View>
                </View>

                <View style={styles.btnArea}>
                    <TouchableOpacity
                    onPress={gotoLogin}
                    >
                        <View style={styles.loginBtn}>
                            <Text style={styles.loginBtnText}>Login</Text>
                        </View> 
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    onPress={gotoSignUp}
                    >
                        <View style={styles.signUpBtn}>
                            <Text style={styles.signUpBtnText}>Sign up</Text>
                         </View>
                    </TouchableOpacity>
                    
                </View>

                
                <View style={{marginTop: 70, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Or Login with</Text>
                </View>
                <View
                style={{
                    marginLeft: 40,
                    marginTop:10,
                    width: '80%',
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
                />


                <View style={styles.footer}>
                    <View style = {{flexDirection: 'row', justifyContent:'space-between'}}>
                        <TouchableOpacity>
                            <Image
                                style = {{width: 40, height: 40}}
                                source = {google}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style = {{width: 40, height: 40}}
                                source = {facebook}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style = {{width: 40, height: 40}}
                                source = {discord}
                            />
                        </TouchableOpacity>
                    </View>
                    
                </View>

                


            </View>       
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 0,
        height: '100%',
        // backgroundColor: '#0066FF'
        backgroundColor: '#fff'
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
    imageOnHeader:{
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image1:{
        width: 300,
        height:300
    },
    title: {
        marginTop: 40,
        alignItems: 'center',
    },
    h1:{
       fontSize: 32  ,
       color: '#000'
    },
    subtitle: {
        marginTop: 8,
        alignItems: 'center'
    },
    h2:{
        fontSize: 15  ,
        color: '#000'
    },
    btnArea:{
        alignItems:'center',
        // backgroundColor: 'red'
    },
    loginBtn:{
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#0066FF',
        width: 270, height: 50,
        borderRadius: 40,
    },
    loginBtnText:{
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },
    signUpBtn:{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        width: 270, height: 50,
        borderRadius: 40,
        borderColor: '#0066FF',
        borderWidth: 1.5
    },
    signUpBtnText:{
        color: '#0066FF',
        fontSize: 18,
        fontWeight: '500'
    },
    footer:{
        marginTop: 20,
        width: '70%',
        marginLeft: 60,

    },
    footerText:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerTexts:{
        fontSize:16,
        color: '#000'
    },
    footerIcons:{
        flexDirection:'row',
        flex: 1
    },
    icon:{
        flex: 1,
        justifyContent: 'space-between'
    }
});

export default MainScreen;