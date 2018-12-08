import {createStackNavigator, StackNavigator} from 'react-navigation'
import Splash from "./splash";
import Home from "./Home";
import Professionel from "./Professionel";
import FormsSignUp from "./FormsSignUp";
import Inscription from "./Inscription";
import Customer from "./Customer";
import { flipY} from 'react-navigation-transitions';
<<<<<<< HEAD
import SignUpNav from './SignUpNav';
=======
import GridCategorie from "../Components/inscription/GridCategorie";
>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00

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
<<<<<<< HEAD
    SignUpNav: {screen:SignUpNav}
    
=======
    GridCategorie:{screen:GridCategorie}
>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00
}, {
    // Default config for all screens
    initialRouteName: 'GridCategorie',
    transitionConfig: (scenes)=>handleCustomTransition(scenes),
    navigationOptions: { header: null}
});




export default PrimaryNav
