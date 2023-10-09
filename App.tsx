import { DataBaseService } from "./src/database/db-service";
import SignInStackNavigationComponent from "./src/navigation/signInStack";

function App(): JSX.Element {
  const database = new DataBaseService()
  return (
    <SignInStackNavigationComponent/>
  )
 }

 export default App;
