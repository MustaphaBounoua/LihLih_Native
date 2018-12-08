import React from 'react';
import {
    StyleSheet,
    Text,BackHandler,
    Animated,
    Easing,
    View,
    Image,
    ImageBackground,
    Button,StatusBar,
    ScrollView,
    TextInput, Keyboard,
} from 'react-native';
import {connect} from "react-redux";

import { Grid, Row} from 'native-base';
import Colors from "../theme/Colors"
import Images from "../theme/Images"
import axios from "axios";

import NameForm from "../Components/inscription/NameForm";
import MyButton from "../Components/MyButton";
import OvalWhite from "../Components/inscription/ovalWhite";
import { nextInput, previousInput } from '../redux/actions/formActions';


import Categories from '../Components/inscription/Categories';
import CodeVerif from '../Components/inscription/CodeVerif';

import { FluidNavigator,Transition} from 'react-navigation-fluid-transitions';
const LogoImage = (props) => (
  <Image source={{uri:'https://picsum.photos/100/100?image=56'}} style={props.style}/>
);
  
class Screen1 extends React.Component {
  render() {
    return (

        <Transition style={
            {flex: 1, flexDirection: 'column'
        }}>
   <Text>
       Salam alikoup
   </Text>
        </Transition>

    );
  }
}

class Screen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LogoImage style={styles.smallLogo}/>
        <Text style={styles.paragraph}>
          <Text style={{fontWeight:'normal'}}>
            Now you should have a basic understanding of how this app works. 
            Please sign up and take part in this fantastic user experience!
          </Text>
        </Text>  
        <Text style={styles.paragraph}>
            This is the last page of the onboarding.
        </Text>  
        <Button title="Back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

const Navigator = FluidNavigator({
  screen4: { screen: Screen2},
  screen1: {screen: Screen1},
  screen2: {screen: Screen2}
});

class SignUpNav extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            keybaord: true,
            currentPosition:0
        }
  
    }

    renderInput= (position)=>{
        switch(position){
            case 0:
                return (<NameForm inputName="Nom" keyboardType="default" maxLength="20" minLength="3" storeKey="firstname" icon="user-o" />)
            case 1:
                return (<NameForm inputName="Prénom " keyboardType="default" maxLength="20" minLength="3" storeKey="lastname" icon="user-friends"/>)
            case 2:
                return (<NameForm inputName="Tél"  keyboardType="numeric" maxLength="10" minLength="3" storeKey="phonenumber" icon="phone" />)
                /***
                 * todo
                 *  add number phone input  *** Completed
                 * and validation tokeen input
                 */
            case 3:
            return (<NameForm inputName="Tél"  keyboardType="numeric" maxLength="10" minLength="3" storeKey="phonenumber" icon="unlock" />)
            case 4:
                return (<CodeVerif></CodeVerif>)
            case 5:

                return (<Categories categories={[1,2,3]}></Categories>)


        }
    }
    nextInput=()=>{

    }
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState({keybaord: false})
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            this.setState({keybaord: true})
        });
      


    }
    componentDidMount(){
        console.warn(this.props)
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);

    }
    handleBack=() =>{
       
        if(this.props.user.currentposition>0){
            this.props.precedent(this.props.user.currentposition)
            return true;
        }

          return true;   

}
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    renderOvalList= () =>{
        if(this.state.keybaord) return (<OvalWhite current={this.props.user.currentposition} />)
    }
    renderButton = () => {
        console.warn(this.props.suivant)
        console.warn(this.scrollView)
        if (this.state.keybaord) return (<MyButton color={Colors.white}
                                                   background={Colors.white}
                                                   onpress={() => {
                                                       this.props.suivant
                                                                (this.props.user.currentposition,
                                                        this.props.user.key,this.props.user.value)}}
                                                   shadow={true}
                                                   style={{
                                                       width: 274,
                                                       height: 57,
                                                       justifyContent: 'center',
                                                       alignItems: 'space-between',
                                                       visibility: this.state.keybaord
                                                   }}
            >
                <Text style={[styles.submitText, {color: Colors.primaryColor}]} >
                    Suivant
                </Text>

                <Image
                    style={[{marginRight: 17, marginLeft: 60}]}
                    source={Images.suivant}
                />
            </MyButton>

        );
    }
    render(){
        return(
            <View style={{flex: 1}}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={Colors.primaryColor}/>
            <Grid style={{backgroundColor: Colors.primaryColor}}>
                <Row size={295} style={styles.shadow}><ImageBackground style={styles.imgBackground}
                                                                       resizeMode='cover'
                                                                       source={Images.signUpFormBackground}>
                    <Image style={styles.inscriptiontext}
                           source={Images.signUpFormInscriptionString}/>

                </ImageBackground>
                </Row>

                <Row size={344}  >
                    <View style={{
                        flex: 1, flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        
                        <View style={{flex: 0.1, marginTop: 30}}><Text style={styles.textstyle}>Veuillez remplir le
                            champ
                            suivant: </Text></View>
                            <ScrollView
                            horizontal={true}
                            scrollEnabled={false}
                          ref={ref => this.scrollView = ref}
                       onContentSizeChange={(contentWidth, contentHeight)=>{        
                       this.scrollView.scrollToEnd({animated: true});
                        }}>
                        <CodeVerif></CodeVerif>
                        <CodeVerif></CodeVerif>
                        <CodeVerif></CodeVerif>
                        <CodeVerif></CodeVerif>

                    </ScrollView>    
                                        <View style={{marginTop: 30, marginLeft: 42, marginRight: 42, flex: 1}}>
                            {this.renderButton()}
                             </View>
                        {this.renderOvalList()}
                    </View>
                </Row>

            </Grid>
        </View>

        )
    }
 /* render() {
    return (
        <View style={{flex: 1}}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={Colors.primaryColor}/>
            <Grid style={{backgroundColor: Colors.primaryColor}}>
                <Row size={295} style={styles.shadow}><ImageBackground style={styles.imgBackground}
                                                                       resizeMode='cover'
                                                                       source={Images.signUpFormBackground}>
                    <Image style={styles.inscriptiontext}
                           source={Images.signUpFormInscriptionString}/>

                </ImageBackground>
                </Row>

                <Row size={344}  >
                    <View style={{
                        flex: 1, flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        
                        <View style={{flex: 0.1, marginTop: 30}}><Text style={styles.textstyle}>Veuillez remplir le
                            champ
                            suivant: </Text></View>
                           
                        <View style={{marginTop: 30, marginLeft: 42, marginRight: 42, flex: 1}}>
                            {this.renderButton()}
                             </View>
                        {this.renderOvalList()}
                    </View>
                </Row>

            </Grid>
        </View>
    );

}*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
  },
  largeLogo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  smallLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  paragraph: {
    margin: 24,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',

},
inscriptiontext: {
    marginBottom: 0,
    marginLeft: 12,

},
shadow: {
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    elevation: 10
},
submitText: {
    textAlign: 'center',
    fontSize: 20,
    margin: 5,
    fontFamily: 'Futura Book font'
},
textstyle: {
    textAlign: 'center',
    fontSize: 14,
    height: 30,
    color: Colors.white,
    fontFamily: 'Futura Book font'
}
});

function mapStateToProps(state){
    return {
        user: state.form,

    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      suivant: (position,key,value) => {
        dispatch(nextInput(position,key,value)) 
      },
      precedent:(position)=>{
          dispatch(previousInput(position))
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(SignUpNav)
