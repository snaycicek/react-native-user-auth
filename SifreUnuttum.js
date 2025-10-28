import {Component} from 'react';
import { Text, View, ImageBackground, StatusBar } from 'react-native';
import { GirisKutusu, LinkButton, MaviButton } from './YeniBilesenler';

const bg = {uri:'https://wallpaper-house.com/data/out/8/wallpaper2you_235556.jpg'}

export default class SifreUnuttum extends Component {
  render () {
    return (
      <ImageBackground
        style={{flex:1}}
        source={bg}
      >
        <StatusBar hidden={false} barStyle='lignt-content' backgroundColor='transparent' translucent={true} />
        <View style={{flex:1, backgroundColor:'white', marginTop:150, borderTopLeftRadius:150, paddingTop:50}}>
          <Text style={{color:'blue', fontSize:30, fontWeight:'bold', textAlign:'center'}}>Şifremi Unuttum</Text>
          <View style={{margin:20, justifyContent:'space-around', height:200}}>
            
            <GirisKutusu icon='mail' hold='mail adresi' />
          
          </View>

          <MaviButton islem={()=>this.props.navigation.navigate('Giris')} title='Sıfırlama Linki Gönder' />
          <LinkButton islem={()=>this.props.navigation.navigate('Login')} title='Giriş' style={{alignItems:'center'}} />
          
        </View>

      </ImageBackground>
    )
  }
}