const Container = styled.View`
    flex:1;
    alignItems: center;
    justifyContent: center;
    backgroundColor: #c0c0c0;
`;

const Logo = styled.Image`
    heigth: 30%
    marginBotton: 40px;

`;

const Input = styled.TextInput`
    paddingHorizontal: 20px;
    paddingVertical: 15px;
    borderRadius: 5px;
    backgroundColor: #fff;
    alignSelf: stretch;
    marginBotton: 15px;
    marginHorizontal: 28px;
    fontSize: 16px;

`;

const Button = styled.TouchableHighlight`
    padding: 20px;
    borderRadius: 5px;
    backgroundColor: #808080;
    alignSelf: stretch;
    margin: 15px;
    marginHorizontal: 28px; 
`;

const ButtonText = styled.Text`
    color: white;
    textAlign: center;
    fontSize: 16px;
    fontWeight: bold;
`;

const CadButton = styled.TouchableHighlight`
    padding: 10px;
    marginTop: 20px;
`;

const CadButtonText = styled.Text`
    color: #999;
    fontWeight: bold;
    fontSize: 16px;
    textAlign: center;
`;

export {Container, Logo, Input, Button, ButtonText,CadButton,CadButtonText};