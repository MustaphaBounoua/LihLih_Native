import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from "../../theme/Colors";
import Images from "../../theme/Images";
export default class NumTelForm extends React.Component {


    renderError = (x) => {
        if (x)
            return (<Image source ={Images.errorTel} style={styles.errorIcon} />)
    }

    render() {
        return (

            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={styles.searchSection}>
                    <Icon style={styles.searchIcon} name="phone" size={25} color="#FFF"/>
                    <TextInput
                        style={styles.input}
                        keyboardType={'numeric'}
                        maxLength={10}
                        placeholder="Votre Numéro"
                        placeholderTextColor={'#FFF'}
                        tintColor={'#FFF'}
                        onChangeText={name => this.props.changeText(name)}
                        underlineColorAndroid="transparent"
                    />
                    {this.renderError(this.props.error)}
                </View>
                <View style={{height: 2, backgroundColor: '#FFF'}}/>
                <Text style={styles.textexpl}>Un SMS vous sera envoyé afin de {"\n"}
                    vérifier votre numéro de téléphone</Text>
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
});