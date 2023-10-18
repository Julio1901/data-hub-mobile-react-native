import React from "react"
import { SearchContainer, SearchIcon, SearchTextInput } from "./styles"


export const DefaultSearch : React.FC = () => {
    return (
        <SearchContainer>
            <SearchIcon source={require('../../assets/images/icons/search-icon.png')}/>
            <SearchTextInput placeholder="Enter expense name"/>
        </SearchContainer>
    )
}