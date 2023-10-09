import React from "react";
import { BackArrowIcon, BackToHomeContainer, BackToHomeText, BodyContainer, ButtonContainer, MainContainer, SubTitle, Title, HeadContainer, BirdIcon, BirdIconContainer } from "./styles";
import InputWithFeedbackValidation from "../../components/InputWithFeedbackValidation";
import { DefaultButton } from "../../components/DefaultButton";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SignInStackNavigation } from "../../navigation/signInStack";
import { DataBaseService } from "../../database/db-service";
import { UserDTO } from "../../DTO/UserDTO";

const SignUp = () => {

    const navigation = useNavigation<SignInStackNavigation>()

    const dbService = new DataBaseService()
    const mockUser = new UserDTO("Mock Name", "Mock login", "Mock Password")

    dbService.createUser(mockUser)

    async function fetchUser() {
        try {
          const user = await dbService.getUserDTOByLogin("Mock login");
          if (user) {
            console.log('Usuário encontrado:', user);
          } else {
            console.log('Usuário não encontrado.');
          }
        } catch (error) {
          console.error('Erro ao buscar usuário:', error);
        }
      }


      fetchUser()

    return (
        <MainContainer>
            <HeadContainer>
                <Title>
                    Sign Up
                </Title>
                <SubTitle>
                    Get organized. Be free.
                </SubTitle>
            </HeadContainer>
            <BodyContainer>
                <BirdIconContainer>
                    <BirdIcon source={require('../../assets/images/icons/bird-icon.png')}/>
                </BirdIconContainer>
                <InputWithFeedbackValidation placeholder="First Name" feedbackMessage="Invalid data" showFeedbackMessage={false}/>
                <InputWithFeedbackValidation placeholder="E-mail or CPF" feedbackMessage="Invalid data" showFeedbackMessage={false}/>
                <InputWithFeedbackValidation placeholder="Password" feedbackMessage="Invalid data" showFeedbackMessage={false}/>
                <ButtonContainer>
                    <DefaultButton title="Register" width={200}/>
                </ButtonContainer>
            </BodyContainer>
            <BackToHomeContainer>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={ () => { navigation.navigate('Login')}}>
                    <BackArrowIcon source={require('../../assets/images/icons/back-arrow-icon.png')} />
                    <BackToHomeText>Back To Home</BackToHomeText>
                </TouchableOpacity>
            </BackToHomeContainer>
        </MainContainer>

        )
}

export default SignUp