import React, { useState } from "react";
import { DefaultSlider, SlideValue, SlideValueContainer, SlideValueType, SliderContainer, SliderTitle } from "./styles";


interface RangeSliderProps{
    onValueChange : (value: number) => void
}

export const RangeSlider: React.FC<RangeSliderProps> = ({onValueChange}) => {
    
    const [value, setValue] = useState(0)

    const handleWithValue = (value: number) => {
        let result: number = Math.floor(Math.round(value) / 3)
        if (result % 10 !== 0) {
            result = Math.ceil(result / 10) * 10;
          }
        setValue(result)
        onValueChange(result)
    }

    return (
        <SliderContainer>
            <SliderTitle>Maximum Expense Price</SliderTitle>
            <SlideValueContainer>
                <SlideValueType>R$</SlideValueType>
                <SlideValue>{value}</SlideValue>
            </SlideValueContainer>
            <DefaultSlider
                minimumValue={0}
                maximumValue={10000}
                minimumTrackTintColor="#4C9FC1"
                maximumTrackTintColor="#FFFFFF"
                thumbTintColor="#4C9FC1"
                onValueChange={(value) => {
                    handleWithValue(value)
                  }}
                tapToSeek={true}
                step={10}
            />
        </SliderContainer>
    
    )

}

