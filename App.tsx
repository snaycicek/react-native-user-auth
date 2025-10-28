import {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import HesapOlustur from './HesapOlustur';
import SifreUnuttum from './SifreUnuttum';
import Giris from './Giris';
import AsyncStorage from '@react-native-async-storage/async-storage/lib/typescript/AsyncStorage';

const Ekranlarim = createNativeStackNavigator();

export default class App extends Component {
  render () {
    return (
      <NavigationContainer>
        <Ekranlarim.Navigator screenOptions={{headerShown:false}} >
          <Ekranlarim.Screen name='Login' component={Login} />
          <Ekranlarim.Screen name='HesapOlustur' component={HesapOlustur} />
          <Ekranlarim.Screen name='SifreUnuttum' component={SifreUnuttum} />
          <Ekranlarim.Screen name='Giris' component={Giris} />
        </Ekranlarim.Navigator>
      </NavigationContainer>
    )
  }
}