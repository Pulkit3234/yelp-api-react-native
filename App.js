import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from "./src/screens/SearchScreen";
import Results from "./src/screens/Results"




const navigator = createStackNavigator({

  Search : SearchScreen,
  results : Results

  

}, {
  initialRouteName: "Search",
  defaultNavigationOptions : {
    title : "Restaurant Search"
  }

});


export default createAppContainer(navigator);