import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from "../../theme/Colors";

export default class PreNomForm extends React.Component {


   renderError =(x)=>{
       if (x)
     return (<Text style={styles.texterreur}>{x}</Text>)
   }
    render() {
        return (

            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="users" size={25} color="#FFF"/>
                    <TextInput
                        style={styles.input}
                        placeholder="Prénom"
                        placeholderTextColor={'#FFF'}
                        tintColor={'#FFF'}
                        maxLength={36}
                        onChangeText={name => this.props.changeText(name)}
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