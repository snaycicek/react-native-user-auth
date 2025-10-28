import {Component} from 'react';
import { Text, View, ImageBackground, StatusBar } from 'react-native';
import { GirisKutusu, LinkButton, MaviButton } from './YeniBilesenler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const bg = {uri:'https://wallpaper-house.com/data/out/8/wallpaper2you_235556.jpg'}
const key = 'admin2'

export default class HesapOlustur extends Component {
  state={
    name:'',
    mail: '',
    passw: '',
    list: [],
}

componentDidMount = async () => {
  let tmp = await AsyncStorage.getItem(key)
  let obj = JSON.parse(tmp)
  if (tmp != null) {
    this.setState({liste:obj})
  }
}

userSave = async () =>{
  let userObj = {name:this.state.name, mail:this.state.mail, passw: this.state.passw}
  let tempList = this.state.list;
  tempList.push(userObj)
  AsyncStorage.setItem(key, JSON.stringify(tempList))
  this.setState({name:'', mail:'', passw:'', list: tempList})
}

ifadeyiOku = async () => {
  let tmp = await AsyncStorage.getItem(key)
  let abc = JSON.parse(tmp)
  console.log(tmp)
  console.log(abc[0].name)
}


  render () {
    return (
      <ImageBackground
        style={{flex:1}}
        source={bg}
      >
        <StatusBar hidden={false} barStyle='lignt-content' backgroundColor='transparent' translucent={true} />
        <View style={{flex:1, backgroundColor:'white', marginTop:150, borderTopLeftRadius:150, paddingTop:50}}>
          <Text style={{color:'blue', fontSize:30, fontWeight:'bold', textAlign:'center'}}>Yeni Hesap Oluştur</Text>
          <View style={{margin:20, justifyContent:'space-around', height:280}}>
            
            <GirisKutusu inpEvent={(txt)=>this.setState({name: txt})} icon='person' hold='adı soyadı' val={this.state.name}/>
            <GirisKutusu inpEvent={(txt)=>this.setState({mail: txt})} icon='mail' hold='mail adresi' val={this.state.mail}/>
            <GirisKutusu inpEvent={(txt)=>this.setState({passw: txt})} icon='lock-closed' hold='şifre' val={this.state.passw}  secureTextEntry={true}/>
          
          </View>

          <MaviButton islem={()=>this.userSave} title='Hesap Oluştur'/>
          <MaviButton islem={()=>this.ifadeyiOku} title='oku'/>
          <LinkButton islem={()=>this.props.navigation.navigate('Login')} title='Giriş' style={{alignItems:'center'}} />
          
        </View>

      </ImageBackground>
    )
  }
}
/**
 * lik butonun ustune 
 <MaviButton islem={()=>this.props.navigation.navigate('Hesap Oluştur')} title='Hesap Oluştur' />
 */