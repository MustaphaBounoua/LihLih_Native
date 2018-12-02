import React from 'react';
import {connect} from "react-redux";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    StatusBar,
    TextInput, Keyboard,
} from 'react-native';
import { Grid, Row} from 'native-base';
import Colors from "../theme/Colors"
import Images from "../theme/Images"


import NameForm from "../Components/inscription/NameForm";
import MyButton from "../Components/MyButton";
import OvalWhite from "../Components/inscription/ovalWhite";


import { nextInput } from '../redux/actions/formActions';

 class FormsSignUp extends React.Component {
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
                return (<NameForm inputName="Prénom " keyboardType="default" maxLength="20" minLength="3" storeKey="lastname" icon="user-o"/>)
            case 2:
                return (<NameForm inputName="Tél"  keyboardType="numeric" maxLength="10" minLength="3" storeKey="phonenumber" icon="phone" />)
                /***
                 * todo
                 *  add number phone input  *** Completed
                 * and validation tokeen input 
                 */
            case 3: 
            return (<NameForm inputName="Tél"  keyboardType="numeric" maxLength="10" minLength="3" storeKey="phonenumber" icon="unlock" />)
            
            case 5:
                alert("fin d'instruction ")
                

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

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    renderOvalList= () =>{
        if(this.state.keybaord) return (<OvalWhite current={this.state.currentposition} />)
    }
    renderButton = () => {
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

    render() {
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
                                
                                {this.renderInput(this.props.user.currentposition)}
                            <View style={{marginTop: 30, marginLeft: 42, marginRight: 42, flex: 1}}>
                                {this.renderButton()}
                                 </View>
                            {this.renderOvalList()}
                        </View>
                    </Row>

                </Grid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(FormsSignUp)
