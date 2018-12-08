import React from 'react';
import {connect} from "react-redux";
import {
    StyleSheet,
    Text,BackHandler,
    Animated,
    Easing,
    View,
    Image,
    ImageBackground,
    StatusBar,
    TextInput, Keyboard,
} from 'react-native';
import { Grid, Row} from 'native-base';
import Colors from "../theme/Colors"
import Images from "../theme/Images"
<<<<<<< HEAD
import axios from "axios";
import  { Transition } from 'react-navigation-fluid-transitions'
=======
import Reg from "../Config"
>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00

import NameForm from "../Components/inscription/NameForm";
import MyButton from "../Components/MyButton";
<<<<<<< HEAD
import OvalWhite from "../Components/inscription/ovalWhite";
=======
import PreNomForm from "../Components/inscription/PrenomForm";
import NumTelForm from "../Components/inscription/NumTelForm";
import CodeVerif from "../Components/inscription/CodeVerif";
import Categories from "../Components/inscription/Categories";
>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00


import { nextInput, previousInput } from '../redux/actions/formActions';
import Categories from '../Components/inscription/Categories';
import CodeVerif from '../Components/inscription/CodeVerif';

 class FormsSignUp extends React.Component {
        
    constructor(props) {

        super(props);
        this.state = {
            keybaord: true,
<<<<<<< HEAD
            currentPosition:0
=======
            numForm: 0,
            name: '',
            prename: '',
            tel: '',
            nameError: null,
            prenameError: null,
            telError: null,
            codeVerif:'5667 677',
>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00
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
                return (<Transition appear="horizontal"><CodeVerif></CodeVerif></Transition>)
            case 5:

                return (<Categories categories={[1,2,3]}></Categories>)

<<<<<<< HEAD
=======


    componentWillMount() {
>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00

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
<<<<<<< HEAD
    renderOvalList= () =>{
        if(this.state.keybaord) return (<OvalWhite current={this.props.user.currentposition} />)
    }
    renderButton = () => {
        console.warn(this.props.suivant)

        if (this.state.keybaord) return (<MyButton color={Colors.white}
                                                   background={Colors.white}
                                                   onpress={() => {
                                                       this.props.suivant
                                                                (this.props.user.currentposition,
                                                        this.props.user.key,this.props.user.value)}}
=======

    renderButton = (x) => {
        if (this.state.keybaord) return (<MyButton color={Colors.white}
                                                   background={Colors.white}
                                                   onpress={x}
>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00
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


    renderForm() {
        switch (this.state.numForm) {
            case 0:
                return this.renderName();
            case 1:
                return this.renderPreName();
            case 2:
                return this.renderTel();
            case 3:
                return this.renderTelVerification();
            case 4:
                     return this.renderCategories();

        }
    }

    renderPreName = () => {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: this.state.keybaord ? 0 : 43
            }}>
                <View style={{flex: 0.1, marginTop: 30}}><Text style={styles.textstyle}>Veuillez remplir le
                    champ
                    suivant: </Text>
                </View>
                <PreNomForm changeText={(x) => {
                    this.setState({prename: x})
                }} error={this.state.prenameError}/>
                <View style={{marginTop: 30, marginLeft: 42, marginRight: 42, flex: 1}}>
                    {this.renderButton(this.goToTel)}
                </View>
                {this.renderCarrossel(2)}
            </View>
        )
    }


    renderName = () => {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: this.state.keybaord ? 0 : 43
            }}>
                <View style={{flex: 0.1, marginTop: 30}}><Text style={styles.textstyle}>Veuillez remplir le
                    champ
                    suivant: </Text>
                </View>
                <NameForm value={this.state.name} changeText={(name) => {
                    this.setState({name: name})
                }} error={this.state.nameError}/>
                <View style={{marginTop: 30, marginLeft: 42, marginRight: 42, flex: 1}}>
                    {this.renderButton(this.goToprenam)}
                </View>
                {this.renderCarrossel(1)}
            </View>
        )
    }


    renderTel = () => {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: this.state.keybaord ? 0 : 43
            }}>
                <View style={{flex: 0.1, marginTop: 30}}><Text style={styles.textstyle}>Veuillez remplir le
                    champ
                    suivant: </Text>
                </View>
                <NumTelForm changeText={(x) => {
                    this.setState({tel: x})
                }}
                            error={this.state.telError}

                />
                <View style={{marginTop: 30, marginLeft: 42, marginRight: 42, flex: 1}}>
                    {this.renderButton(this.goToVerif)}
                </View>
                {this.renderCarrossel(3)}
            </View>
        )
    }


    renderTelVerification = () => {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: this.state.keybaord ? 0 : 43
            }}>
                <View style={{flex: 0.1, marginTop: 30}}><Text style={styles.textstyle}>Merci d'avoir patienté </Text>
                </View>
                <CodeVerif code={this.state.codeVerif}/>
                <View style={{marginTop: 30, marginLeft: 42, marginRight: 42, flex: 1}}>
                    {this.renderButton(this.goToCat)}
                </View>
                {this.renderCarrossel(3)}
            </View>
        )
    }


     renderCategories = () => {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: this.state.keybaord ? 0 : 43
            }}>
                <View style={{flex: 0.1, marginTop: 30}}><Text style={styles.textstyle}>Je maitrise le métier suivant :</Text>
                </View>
                <Categories categories={['adel','adel']}/>
                <View style={{marginTop: 30, marginLeft: 42, marginRight: 42, flex: 1}}>
                    {this.renderButton(this.goToCat)}
                </View>
                {this.renderCarrossel(4)}
            </View>
        )
    }






    goToprenam = () => {

        let bool = Reg.nameRe.test(this.state.name);
        if (bool) {
            this.setState({numForm: this.state.numForm + 1})
            this.setState({nameError: null})
        }
        else {
            if (this.state.name === '')
                this.setState({nameError: 'Veuillez svp saisir votre nom'})
            else
                this.setState({nameError: 'Veuillez svp saisir un nom valide'})
        }
    }

    goToTel = () => {
        let bool = Reg.firstNameRe.test(this.state.prename);
        if (bool) {
            this.setState({numForm: this.state.numForm + 1})
            this.setState({prenameError: null})
        }
        else {
            if (this.state.prename === '')
                this.setState({prenameError: 'Veuillez svp saisir votre prénom'})
            else
                this.setState({prenameError: 'Veuillez svp saisir un prénom valide'})
        }
    }

    goToVerif = () => {
        let bool = Reg.telRe.test(this.state.tel);
        if (bool) {
            this.setState({numForm: this.state.numForm + 1})
            this.setState({telError: null})
        }
        else {
            if (this.state.tel === '')
                this.setState({telError: 'Veuillez svp saisir votre Numéro'})
            else
                this.setState({telError: 'Veuillez svp saisir un numéro valide'})
        }
    }

    goToCat=()=>{
             this.setState({numForm: this.state.numForm + 1})
    }



    renderOval = (x) => {
        let oval = []
        for (var i = 1; i < 8; i++) {
            if (i != x)
                oval.push(<Image source={Images.oval} style={{padding: 6, margin: 6}}/>)
            else
                oval.push(<Image source={Images.ovalWhite} style={{padding: 6, margin: 6}}/>)
        }
        return oval
    };

    renderCarrossel = (x) => {
        if (this.state.keybaord) return (
            <View style={{
                marginLeft: 92,
                marginRight: 92,
                marginBottom: 20,
                flex: 0.2,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {this.renderOval(x)}
            </View>)
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
<<<<<<< HEAD

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
=======
                    <Row size={344}>
                        {this.renderForm()}
>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00
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
      },
      precedent:(position)=>{
          dispatch(previousInput(position))
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(FormsSignUp)
