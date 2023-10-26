import { DataBaseService } from "./src/database/db-service";
import HomeStackNavigationComponent from "./src/navigation/homeStack";

function App(): JSX.Element {
   const dbService = new DataBaseService()
  return (
    <HomeStackNavigationComponent/>
  )
 }

 export default App;
