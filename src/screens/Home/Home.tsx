import { useNavigation } from "@react-navigation/native"
import { SafeAreaView, Text, TouchableOpacity } from "react-native"
import { HomeStackNavigation } from "../../navigation/homeStack"
import { ContentContainer, MainContainer } from "./styles"
import { BottomMenu } from "../../components/BottomMenu/BottomMenu"


const Home = () => { 

    const navigator = useNavigation<HomeStackNavigation>()

    const onGoToExpenseListPressed = () => {
        navigator.navigate("MonthlyExpenses")
    }

    return(
        <MainContainer>
            <ContentContainer>
                <TouchableOpacity onPress={onGoToExpenseListPressed}>
                        <Text>Go to Expense List</Text>
                </TouchableOpacity>
            </ContentContainer>
               

            <BottomMenu />
              
        </MainContainer>
    
    )

}

export default Home