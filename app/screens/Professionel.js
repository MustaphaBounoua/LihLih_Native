import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Container, Grid, Row} from 'native-base';
import Colors from "../theme/Colors"
import Images from "../theme/Images"

import {LinesLoader} from 'react-native-indicator';
export default class Professionel extends React.Component {


    state = {
        type: 'Wave',
        size: 100,
        color: "#FFFFFF",
        isVisible: true
    }

    render() {
        return (
           <View><Text>Prof</Text></View>

        );
    }
}

