import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from "../../theme/Colors";
import Images from "../../theme/Images";


export default class CategoryIcon extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{alignItems: 'center', alignContent: 'center'}}>
                <Image style={{width: 81, height: 87,backgroundColor: 'rgba(52, 52, 52, 0.4)'}} source={Images.categories[0].source}/>
                <Text style={{fontSize: 14, fontFamily: 'futura medium bt', color: Colors.primaryColor}}>
                    Peinture
                </Text>
            </TouchableOpacity>
        )
    }
}
