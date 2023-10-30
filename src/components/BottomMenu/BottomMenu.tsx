import React, { useState } from "react";
import { BorderMenuContent, BottomMenuButton, BottomMenuContainer, BottomMenuContentContainer } from "./styles";
import { ImageSourcePropType, Text } from "react-native";


interface Props{
    iconsSource: {
        image1: any;
        image2: any;
        image3: any;
        image4: any;
    }

    buttonsBehaviour: (() => void)[];
}

export const BottomMenu : React.FC <Props>= ({iconsSource, buttonsBehaviour}) => {
  
      if (
        iconsSource.image1 === undefined ||
        iconsSource.image2 === undefined ||
        iconsSource.image3 === undefined ||
        iconsSource.image4 === undefined
      ) {
        throw new Error('iconsSource must have exactly 4 elements.');     
      }

 
    if (buttonsBehaviour.length !== 4) {
        throw new Error('buttonsBehaviour must have exactly 4 elements.');
    }

    return(

        <BottomMenuContainer>
            <BottomMenuContentContainer>
                 <BottomMenuButton onPress={buttonsBehaviour[0]}>
                    <BorderMenuContent   source={iconsSource.image1}/>
                </BottomMenuButton>
               
                <BottomMenuButton onPress={buttonsBehaviour[1]} >
                    <BorderMenuContent source={iconsSource.image2}/>
                </BottomMenuButton>

                <BottomMenuButton onPress={buttonsBehaviour[2]}>
                    <BorderMenuContent   source={iconsSource.image3} />
                </BottomMenuButton>

                <BottomMenuButton onPress={buttonsBehaviour[3]}>
                    <BorderMenuContent   source={iconsSource.image4} />
                </BottomMenuButton>
            </BottomMenuContentContainer>
        </BottomMenuContainer>

    )

}

