import {Component} from 'react';
import { Text, View, ImageBackground, StatusBar } from 'react-native';
import { GirisKutusu, LinkButton, MaviButton } from './YeniBilesenler';
import Icon from 'react-native-vector-icons/Ionicons';

const bg = {uri:'https://wallpaper-house.com/data/out/8/wallpaper2you_235556.jpg'}

export default class Giris extends Component {
  render () {
    return (
      <ImageBackground
        style={{flex:1, paddingTop:150, alignItems:'center', justifyContent:'space-around'}}
        source={bg}
        opacity={.3}
      >
        <StatusBar hidden={false} barStyle='lignt-content' backgroundColor='transparent' translucent={true} />
        
        <View style={{width:200, height:200, borderColor:'blue', borderWidth:5, borderRadius:200, justifyContent:'center', alignItems:'center'}}>
            <Icon name='person' color='blue' size={140} />
        </View>
        <Text style={{fontSize:30, color:'blue', fontWeight:'bold'}}>Welcome</Text>        
        
        <MaviButton islem={()=>this.props.navigation.navigate('Login')} title='   Giriş   ' />

      </ImageBackground>
    )
  }
}