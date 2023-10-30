import { useNavigation } from "@react-navigation/native"
import { SafeAreaView, Text, TouchableOpacity } from "react-native"
import { HomeStackNavigation } from "../../navigation/homeStack"
import { ContentContainer, MainContainer } from "./styles"
import { BottomMenu } from "../../components/BottomMenu/BottomMenu"
import { HomeImages } from "../../assets/images"

const Home = () => { 

    const navigator = useNavigation<HomeStackNavigation>()

    const onGoToExpenseListPressed = () => {
        navigator.navigate("MonthlyExpenses")
    }

    const handleWithHomeClick = () => {
        console.log('Home Clicked')
    }

    const handleWithExpenseClick = () => {
        console.log('Expense Clicked')
        onGoToExpenseListPressed()
    }

    const handleWithInvestmentsClick = () => {
        console.log('Home Clicked')
    }

    const handleWithConfigClick = () => {
        console.log('Home Clicked')
    }

    const bottomMenuClickFunctions = [
        handleWithHomeClick,
        handleWithExpenseClick,
        handleWithInvestmentsClick,
        handleWithConfigClick
    ]

    return(
        <MainContainer>
            <ContentContainer>
                <TouchableOpacity onPress={onGoToExpenseListPressed}>
                        <Text>Go to Expense List</Text>
                </TouchableOpacity>
            </ContentContainer>
               

            <BottomMenu iconsSource={HomeImages} buttonsBehaviour={bottomMenuClickFunctions}/>
              
        </MainContainer>
    
    )

}

export default Home