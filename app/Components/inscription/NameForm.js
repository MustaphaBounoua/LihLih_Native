import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from "../../theme/Colors";
import  { connect } from 'react-redux'
import { handleInput,validateInput } from '../../redux/actions/formActions';

 class NameForm extends React.Component {
     changeText=(text)=>{
         this.props.suivant(this.props.storeKey,text);
         this.props.verifierInput(this.props.storeKey,text)
    }
  
   renderError =(x)=>{
       if (x)
       return (<Text style={styles.texterreur}>{x}</Text>)
   }
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name={this.props.icon} size={25} color="#FFF"/>

                    <TextInput
<<<<<<< HEAD
                  
                        style={styles.input}
                        placeholder={this.props.inputName}
                        placeholderTextColor={'#FFF'}
                        onChangeText={this.changeText}
=======
                        value={this.props.value}
                        style={styles.input}
                        placeholder="Nom"
                        autoCapitalize={'words'}
                        keyboardType={''}
                        maxLength={32}
                        placeholderTextColor={'#FFF'}
                        tintColor={'#FFF'}
                        onChangeText={name => this.props.changeText(name)}
>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00
                        underlineColorAndroid="transparent"
                        keyboardType={this.props.keyboardType} max-length={this.props.maxLength}

                    />
            { ( this.props.user.errormessage===null && this.props.user.phonenumber!="" &&  this.props.user.currentposition==2) &&  <Icon style={styles.searchIcon} name="check-circle-o" size={25} color="#0F0"/> }
            { ( this.props.user.errormessage!=null && this.props.user.phonenumber!="" &&  this.props.user.currentposition==2) &&  <Icon style={styles.searchIcon} name="times-circle-o" size={25} color="#F00"/> }
            
                </View>
                <View style={{height: 2, backgroundColor: '#FFF'}}/>
                {this.renderError(this.props.user.errormessage)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchSection: {
        width: 280,
        height: 100,
        alignSelf:'flex-start',
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
    texterreur: {
        textAlign: 'left',
        fontSize: 12,
        color: Colors.red,
        fontFamily: 'Futura Book font',
        alignSelf: 'flex-start',
        flexDirection:'column',

    }
});

function mapStateToProps(state){
    return {
        user: state.form,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      suivant: (key,value) => {
        dispatch(handleInput(key,value))
      },
      verifierInput:(key,value)=>{
          dispatch(validateInput(key,value))
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(NameForm)