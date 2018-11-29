import {createStackNavigator, StackNavigator} from 'react-navigation'
import Splash from "./splash";
import Home from "./Home";
import Professionel from "./Professionel";
import FormsSignUp from "./FormsSignUp";
import Inscription from "./Inscription";
import Customer from "./Customer";
import { flipY} from 'react-navigation-transitions';
import GridCategorie from "../Components/inscription/GridCategorie";

const handleCustomTransition = ({scenes}) => {
 const prevScene = scenes[scenes.length - 2],
   currentScene = scenes[scenes.length - 1]

  // Custom transitions go there
  if (prevScene
    && prevScene.route.routeName === 'Inscription'
    && currentScene.route.routeName === 'FormsSignUp') {
    return flipY()
  }
}

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
    Splash: {screen: Splash},
    Home: {screen: Home},
    Professionel: {screen: Professionel},
    Customer: {screen: Customer},
    FormsSignUp: {screen: FormsSignUp},
    Inscription: {screen: Inscription},
    GridCategorie:{screen:GridCategorie}
}, {
    // Default config for all screens
    initialRouteName: 'GridCategorie',
    transitionConfig: (scenes)=>handleCustomTransition(scenes),
    navigationOptions: { header: null}
});




export default PrimaryNav
