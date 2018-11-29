import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from "../../theme/Colors";
import Images from "../../theme/Images";


export default class Categories extends React.Component {



    render() {
        return (

            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={styles.searchSection}>
                    <Image style={styles.searchIcon} source={Images.tool}/>
                    <Text
                        style={styles.input}
                        underlineColorAndroid="transparent"
                    > Catégorie {this.props.categories.length}</Text>
                       <Image style={styles.searchIcon} source={Images.addCat}/>
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
});