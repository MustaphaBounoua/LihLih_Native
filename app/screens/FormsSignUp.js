import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    StatusBar,
    Platform,
    TouchableOpacity,
    TextInput, Keyboard,
} from 'react-native';
import {Container, Grid, Row} from 'native-base';
import Colors from "../theme/Colors"
import Images from "../theme/Images"


import NameForm from "../Components/inscription/NameForm";
import Icon from "react-native-vector-icons/FontAwesome";
import MyButton from "../Components/MyButton";

export default class FormsSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keybaord: true
        }
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

    renderButton = () => {
        if (this.state.keybaord) return (<MyButton color={Colors.white}
                                                   background={Colors.white}
                                                   onpress={() => this.props.navigation.navigate('FormsSignUp')}
                                                   shadow={true}
                                                   style={{
                                                       width: 274,
                                                       height: 57,
                                                       justifyContent: 'center',
                                                       alignItems: 'space-between',
                                                       visibility: this.state.keybaord
                                                   }}
            >
                <Text style={[styles.submitText, {color: Colors.primaryColor}]}>
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
                    <Row size={344}>
                        <View style={{
                            flex: 1, flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <View style={{flex: 0.1, marginTop: 30}}><Text style={styles.textstyle}>Veuillez remplir le
                                champ
                                suivant: </Text></View>
                            <NameForm/>
                            <View style={{marginTop: 30, marginLeft: 42, marginRight: 42, flex: 1}}>
                                {this.renderButton()}
                            </View>
                            <View style={{
                                marginLeft: 92,
                                marginRight: 92,
                                marginBottom: 20,
                                flex: 0.2,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image source={Images.ovalWhite} style={{padding: 6, margin: 6}}/>
                                <Image source={Images.oval} style={{padding: 6, margin: 6}}/>
                                <Image source={Images.oval} style={{padding: 6, margin: 6 }}/>
                                <Image source={Images.oval} style={{padding: 6, margin: 6}}/>
                                <Image source={Images.oval} style={{padding: 6, margin: 6}}/>

                            </View>
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
