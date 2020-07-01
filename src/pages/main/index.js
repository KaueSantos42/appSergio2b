import React,{Component} from 'react';
import { View, TextInput, Image, Button } from 'react-native';

export default class Main extends Component{
    render(){
        return(
            <view>
                <textInput placeholder = "Email" />
                <textInput placeholder = "Senha" />
                <Button>
                    <Text> Entrar </Text>
                </Button>
            </view>
        )
    }
}
