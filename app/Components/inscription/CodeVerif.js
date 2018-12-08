import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from "../../theme/Colors";
import Images from "../../theme/Images";
<<<<<<< HEAD
import SmsListener from 'react-native-android-sms-listener';
import Modal from 'react-native-modal'
import { Spinner } from 'native-base';
import  { connect } from 'react-redux'
import   {handleInput} from '../../redux/actions/formActions'

 class CodeVerif extends React.Component {
    subscription=null;

    constructor(props){
        super(props);
        this.state={
            code:"",
            loading:false
        }
    }
    componentDidMount=()=>{
        this.subscription = SmsListener.addListener(message => {
            console.warn(message);
            this.setState({
                code:message.body,
            })

   /*         let verificationCodeRegex = /Votre code vérification est : ([\d]{6})/

            if (verificationCodeRegex.test(message.body)) {
              let verificationCode = message.body.match(verificationCodeRegex)[1]
             this.setState({

                 code:verificationCode,
                 loading:true
             })


            }*/
          })
    }

    componentWillUnmount=()=>{
        this.subscription.remove()

    }
=======


export default class CodeVerif extends React.Component {

>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00


    render() {
        return (

            <View style={{flex: 1, flexDirection: 'column'}}>
<<<<<<< HEAD
               <Modal
               isVisible={this.props.loading} >
               <Spinner
                size={80} type={'Circle'}
                color={Colors.white}/>
                   </Modal>
=======
>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="unlock" size={25} color="#FFF"/>
                    <Text
                        style={styles.input}
                        underlineColorAndroid="transparent"
<<<<<<< HEAD
                    >{this.state.code}</Text>
=======
                    >{this.props.code}</Text>
>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00
                   <Icon style={styles.searchIcon} name="phone" size={25} color="#FFF"/>
                </View>
                <View style={{height: 2, backgroundColor: '#FFF'}}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchSection: {
        width: 280,
        height: 100,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    searchIcon: {
        padding: 10
    },
    input: {

        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'futura medium bt'
    },
    textexpl: {
        textAlign: 'left',
        fontSize: 12,
        color: Colors.white,
        fontFamily: 'Futura Book font',
        alignSelf: 'flex-start',
        flexDirection: 'column',
        marginBottom: 20
    },
    errorIcon:{

        marginBottom: 9
    }
<<<<<<< HEAD
});
function mapStateToProps(state){
    return {
        loading: state.form.sending,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      sendVerificationCode: (value) => {
        dispatch(handleInput(key,value))
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(CodeVerif)
=======
});
>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00
