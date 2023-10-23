import React from "react"
import { SearchContainer, SearchIcon, SearchTextInput } from "./styles"


interface IDefaultSearch{
    onTextChange? (text: string) : void
}


export const DefaultSearch : React.FC<IDefaultSearch> = ({ onTextChange}) => {
    return (
        <SearchContainer>
            <SearchIcon source={require('../../assets/images/icons/search-icon.png')}/>
            <SearchTextInput placeholder="Enter expense name" onChangeText={ text => {
                onTextChange && onTextChange(text)
            }}/>
        </SearchContainer>
    )
}