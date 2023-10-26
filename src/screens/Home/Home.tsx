import { useNavigation } from "@react-navigation/native"
import { SafeAreaView, Text, TouchableOpacity } from "react-native"
import { HomeStackNavigation } from "../../navigation/homeStack"


const Home = () => { 

    const navigator = useNavigation<HomeStackNavigation>()

    const onGoToExpenseListPressed = () => {
        navigator.navigate("MonthlyExpenses")
    }

    return(
        <SafeAreaView>
           <TouchableOpacity style={{marginTop: 20, marginLeft:30}} onPress={onGoToExpenseListPressed}>
                <Text>Go to Expense List</Text>
           </TouchableOpacity>
        </SafeAreaView>
    
    )

}

export default Home