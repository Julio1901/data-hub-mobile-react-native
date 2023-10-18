import React from "react";
import { RangeFilterButton, RangeFilterIcon } from "./styles";


export const RangeFilter: React.FC = () => {
    return(
        <RangeFilterButton>
            <RangeFilterIcon source={require('../../assets/images/icons/range-filter-icon.png')} />    
         </RangeFilterButton>
    )
}