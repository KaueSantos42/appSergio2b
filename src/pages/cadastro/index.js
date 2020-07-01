import React,{Component} from 'react';
import Container from '../login/style';
import {Container, Logo, Input, Button, ButtonText} from './style';
import { StackActions, NavigationActions } from 'react-navigation-stack';


export default class Cadastro extends Component{
    handleUserChange = (username) => {
        this.setState({username})
    }
    
    handleEmailChange = (email) => {
        this.setState({email})
    }
    
    handlePasswordChange = (password) => {
        this.setState({password})
    }

    handleLoginPress = () => {
        this.props.navigation.navigate('Login')
    }

    handleCadastrarPress = async() =>{
        if (this.state.email.lenght === 0 || this.state.password.lenght === 0 || this.state.username === 0){
            this.setState({error: "Por favor preencha os campos para continuar!"})
        }else{
            try{
                await api.post('usuarios', {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })

            this.setState({success: 'Conta Criada com sucesso!'})

            setTimeout(this.goToLogin,2000)
        } catch (_err) {
            this.setState({error: 'Houve um problema no cadastro, tente novamente mais tarde!'})
        }
    }
}

    goToLogin = () => {
        const resetAct = StackActions.reset({
            index:0,
            actions: [
                NavigationActions.navigate({routeName: 'Login'})
            ]
        })
        this.props.navigate.dispatch(resetAct)
    }

    render(){
        return(
            <Container>
                <Logo source={require("../../images/casa.png")}></Logo>
                    <Input
                        placeholder="usuario"
                        autoCaptitalize="none" 
                        autoCorrect={false} 
                        onChangeText={this.handleUserChange}
                    ></Input>

                    <Input
                        placeholder="Email"
                        autoCaptitalize="none" //desativa o caps automatico
                        autoCorrect={false} //desativa o corrretor
                        onChangeText={this.handleEmailChange}
                    ></Input>

                    <Input 
                        placeholder="Senha"
                        autoCaptitalize="none"
                        autoCorrect={false}
                        onChangeText={this.handlePasswordChange}
                        secureTextEntry
                    ></Input>
                    <Button onPrees={this.handleCadastrarPress}>
                        <ButtonText>Cadastrar</ButtonText>
                    </Button>
                    <Button onPrees={this.handleLoginPress}>
                        <ButtonText>Login</ButtonText>
                    </Button>
            </Container>
        )
    }
}
