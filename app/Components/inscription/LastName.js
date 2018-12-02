import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from "../../theme/Colors";
import  { connect } from 'react-redux'
import { handleInput } from '../../redux/actions/formActions';

 class LastName extends React.Component {

    changeText=(text)=>{
        this.props.suivant("lastname",text)
   }
   renderError =(x)=>{
       if (x)
       return (<Text style={styles.texterreur}>Erreur</Text>)
   }
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="user-o" size={25} color="#FFF"/>
                    <TextInput
                        style={styles.input}
                        placeholder={this.props.inputName}
                        placeholderTextColor={'#FFF'}
                        onChangeText={this.changeText}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={{height: 2, backgroundColor: '#FFF'}}/>
                {this.renderError(this.props.error)}
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
      suivant: (value) => {
          dispatch(handleInput("lastname",value))
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(LastName)