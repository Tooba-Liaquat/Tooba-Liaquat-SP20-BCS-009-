import React from 'react'
import { View, Text, StyleSheet, TextInput,Image ,Touchable, TouchableOpacity, Alert } from 'react-native'
import { Bottombar } from './Bottm'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/**
* @author
* @function 
**/
export const Login = ({navigation}) => {

const { container } = styles
 return(
         
  <View style={container}>
 
  <Image style={{height:180,width:500,marginTop:5}} source={{uri:'data:image/png;base64,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'}}></Image>  
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='Username'
  keyboardType='name-phone-pad'></TextInput>
  <TextInput style={styles.Login}
  
  placeholder='Password'

  ></TextInput>
  <TouchableOpacity style={styles.button}
  onPress={() => navigation.navigate('Profile')}
  >
    <Text style={styles.Text}>           Log in</Text>
  </TouchableOpacity>
  <TouchableOpacity><Text style={styles.Text}>forget you password</Text></TouchableOpacity>
  <Text style={styles.Text}>------------------   OR  ------------------</Text>
 
  <TouchableOpacity style={styles.button}
    
  onPress={() => navigation.navigate('Register')}


>
    <Text style={styles.Text}>           Register</Text>
  </TouchableOpacity>
  <Bottombar></Bottombar> 
  </View>
  )



 }


const styles = StyleSheet.create({
  container: {
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor:'#ffffff',
   height:'100%',
   width:'100%'
  },
  
  View:{
    marginTop:"2%",    
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center'
    
                       
  },
  Login:{
    height:30,
     width:200,
     padding:10,
     borderColor:'orange',
     borderWidth:2,
     borderRadius:10

  },
  Text:{
    fontSize:15,
    fontStyle:'normal',
    margin:10,
    
    alignContent:'center',
    justifyContent:'center'


  },
  button:{
    backgroundColor:'orange',
    height:30,
    width:150,
    marginTop:10,
    borderRadius:20,
    justifyContent:'center',
    alignContent:'center'
  
  }

})