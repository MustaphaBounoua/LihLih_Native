import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from "../../theme/Colors";
import Images from "../../theme/Images";
import SuperGridView from 'react-native-super-grid';
import CategoryIcon from "./CategoryIcon";

export default class GridCategorie extends React.Component {


    render() {
        return (


                <SuperGridView
                    itemDimension={82}
                    spacing={22}
                    items={[1, 2, 3, 4, 5, 6]}
                    renderItem={item => (<CategoryIcon/>)}
                />

        )
    }
}

const styles = StyleSheet.create({})