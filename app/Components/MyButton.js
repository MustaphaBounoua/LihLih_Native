import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Platform} from 'react-native';
import {Container, Grid, Row, Col} from 'native-base';
import Colors from "../theme/Colors"
import Images from "../theme/Images"

export default class MyButton extends React.Component {


    render() {
        return (

            <TouchableOpacity

                style={[styles.submit, {
                    backgroundColor: this.props.background,
                    borderColor: this.props.color, padding: this.props.padding,
                }, this.props.shadow ? (Platform.OS === 'ios' ? styles.buttonShadow : {elevation: 4}) : {} ,this.props.style
                ]}
                onPress={this.props.onpress}
                underlayColor='#fff'>
                <View style={[styles.content, {elevation: this.props.elevation}]}>
                    {this.props.children}

                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    submit: {
        borderRadius: 50,
        borderWidth: 2,
    },

    content: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonShadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.5
    }

});
