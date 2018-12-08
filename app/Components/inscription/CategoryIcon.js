import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from "../../theme/Colors";
import Images from "../../theme/Images";

<<<<<<< HEAD
=======

>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00
export default class CategoryIcon extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{alignItems: 'center', alignContent: 'center'}}>
<<<<<<< HEAD
                  <Image            
                    source={Images.peinture}
                />      
=======
                <Image style={{width: 81, height: 87,backgroundColor: 'rgba(52, 52, 52, 0.4)'}} source={Images.categories[0].source}/>
>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00
                <Text style={{fontSize: 14, fontFamily: 'futura medium bt', color: Colors.primaryColor}}>
                    Peinture
                </Text>
            </TouchableOpacity>
        )
    }
}
