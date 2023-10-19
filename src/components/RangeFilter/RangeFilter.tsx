import React from "react";
import { RangeFilterButton, RangeFilterIcon } from "./styles";

interface IDefaultRangeFilterButtonProps{
    onPress?: () => void
}

export const DefaultRangeFilterButton: React.FC<IDefaultRangeFilterButtonProps> = ({onPress}) => {
    return(
            <RangeFilterButton onPress={onPress}>
                <RangeFilterIcon source={require('../../assets/images/icons/range-filter-icon.png')} />    
            </RangeFilterButton>
    )
}