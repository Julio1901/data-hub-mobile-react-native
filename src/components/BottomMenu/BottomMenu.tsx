import React from "react";
import { BorderMenuContent, BottomMenuButton, BottomMenuContainer, BottomMenuContentContainer } from "./styles";
import { TouchableOpacity } from "react-native";

export const BottomMenu : React.FC = () => {

    return(
        <BottomMenuContainer>
            <BottomMenuContentContainer>
                <BottomMenuButton>
                    <BorderMenuContent source={require('../../assets/images/icons/home-icon.png')}/>
                </BottomMenuButton>
               
                <BottomMenuButton>
                    <BorderMenuContent source={require('../../assets/images/icons/expenses-icon.png')}/>
                </BottomMenuButton>

                <BottomMenuButton>
                    <BorderMenuContent source={require('../../assets/images/icons/investment-icon.png')}/>
                </BottomMenuButton>

                <BottomMenuButton>
                    <BorderMenuContent source={require('../../assets/images/icons/settings-icon.png')}/>
                </BottomMenuButton>
            </BottomMenuContentContainer>
        </BottomMenuContainer>

    )

}

