import React,{Component} from 'react';
import {stackActions, NavigationActions} from 'react-navigation-stack';
import {Container, Logo, Input, Button, ButtonText, CadButton, CadButtonText} from './style';
import { ImageBackground, Button, AsyncStorage } from 'react-native';
import { StackActions } from 'react-navigation';


export default class Login extends Component{

    handleEmailChange = (email) =>{
        this.setState({email})
    }

    handlePasswordChange =(password)=>{
        this.setState({password})
    }

    handleCadastroPress = () =>{
        this.props.navigation.navigate('cadastro');
    }

    handleLoginPress = async() =>{
        if (this.state.email.lenght === 0 || this.state.password.lenght === 0){
            this.setState({error: "Usurio ou senha em branco, por favor preencha os campos para continuar"})
        }else{
            try{
                const response = await api.post('token', {
                email: this.state.email,
                password: this.state.password
            })
            await AsyncStorage.setItem('@iMob:token', response.data.token)
            
            const resetAct = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName:'Main'})
                ]
            })

            this.props.navigation.dispatch(resetAct)
            } catch (_err){
            this.setState({error: "Houve um problema com o Login, Por favor tente novamente"})
            }
        }
    }

    render(){
        return(
            <Container>
                <Logo source={require("../../images/casa.png")}></Logo>
                    <Input
                        placeholder="Email"
                        value={this.state.email}
                        autoCaptitalize="none" //desativa o caps automatico
                        autoCorrect={false} //desativa o corrretor
                        onChangeText={this.handleEmailChange}
                    ></Input>
                    <Input 
                        placeholder="Senha"
                        value={this.state.senha}
                        autoCaptitalize="none"
                        autoCorrect={false}
                        onChangeText={this.handlePasswordChange}
                        secureTextEntry
                    ></Input>
                    <Button onPrees={this.handleLoginPress}>
                        <ButtonText>Entrar</ButtonText>
                    </Button>
                    <CadButton onPrees={this.handleCadastroPress}>
                        <CadButtonText></CadButtonText>
                    </CadButton>
            </Container>
        )
    }
}
