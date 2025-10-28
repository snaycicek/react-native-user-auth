import {Component} from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class GirisKutusu extends Component {
    render () {
      return (
        <View style={{borderRadius: 25,height:50,backgroundColor:'white',elevation:20,shadowColor:'blue',flexDirection:'row',paddingLeft:10,paddingTop:8}}>
            <Icon name={this.props.icon} size={30} color="blue" />
            <TextInput
                {...this.props}
                style={{flex:1,paddingLeft:10,fontSize:20,color:'blue'}} 
                placeholder={this.props.hold}
                placeholderTextColor='blue'
                onChangeText={this.props.inpEvent}
                value={this.props.val}
            />
        </View>
      )
    }
}

export class MaviButton extends Component {
    render () {
      return (
        <TouchableOpacity
            style={{height:50, backgroundColor:'blue', borderRadius:25, margin:25, justifyContent:'center', alignItems:'center'}}
            onPress={this.props.islem}
          >
            <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>{this.props.title}</Text>
          </TouchableOpacity>
      )
    }
}

export class LinkButton extends Component {
    render () {
        return (
            <TouchableOpacity
              style={{alignItems:'flex-end', paddingRight:10, ...this.props.style}}
              onPress={this.props.islem}
            >
                <Text style={{color:'blue', fontWeight:'400', fontSize:15}}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}