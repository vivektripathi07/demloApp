import { useNavigation } from '@react-navigation/native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

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

const image1 = require("../assets/images/onboarding.jpg")
const ele1 = require("../assets/icons/element1.png")

function Onboarding(){
    const navigation = useNavigation()

    const gotoMain = () =>{
        navigation.navigate('MainScreen' as never)
    }
    return(
        <LinearGradient 
        start={{x:1, y: 1}}
        end={{x:0, y:0}}
        colors={['#c28aed', '#800080']}>
            <View style={styles.container}>
                <View>
                    <View style={styles.imageOnHeader}>
                        <Image
                            style={styles.image1}
                            source = {image1}
                        />
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.h1}>One Stop place for</Text>
                        <Text style={styles.h1}>Curious People</Text>
                    </View>
                    <View style={styles.subtitle}>
                        <Text style={styles.h2}>
                            Explore the unexplored
                        </Text>
                    </View>
                </View>
 
                <LinearGradient
                style={styles.gradient}
                end={{x:1, y: 1}}
                colors={['#6237f0', '#800080']}
                >
                    <View style={styles.btnArea}>
                        <TouchableOpacity
                        onPress={gotoMain}
                        >
                            <View style={styles.loginBtn}>
                                <Text style={styles.loginBtnText}>Enter</Text>
                            </View> 
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                
            </View> 
           
        </LinearGradient>  
          
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 0,
        height: '100%',
    },
    imageOnHeader:{
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image1:{
        width: 420,
        height:400,
        borderBottomLeftRadius: 130,
        borderBottomRightRadius: 130,
    },
    title: {
        marginTop: 40,
        alignItems: 'center',
        marginBottom: 50
    },
    h1:{
       fontSize: 44  , fontWeight: '600',
       color: '#fff',
       fontFamily: 'Anta-Regular'
    },
    subtitle: {
        marginTop: 8,
        alignItems: 'center',
        marginBottom: 30,
    },
    h2:{
        fontSize: 30  ,
        color: '#5dfa02',
        fontWeight: '600',
        fontFamily: 'Anta-Regular'
    },
    gradient:{
        marginHorizontal: 135,
        marginTop: 30,
        width: 150,
        height: 50,
        borderRadius: 10,
    },
    btnArea:{
        alignItems:'center',
    },
    loginBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 150, height: 50,
        borderRadius: 40,
    },
    loginBtnText:{
        color: 'white',
        fontSize: 24,
        letterSpacing: 2,
        fontWeight: '400',
        fontFamily: 'Anta-Regular'
    }
});

export default Onboarding;