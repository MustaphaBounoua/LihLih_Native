
import React from 'react';
import {StyleSheet, Text, View, Image,  TouchableOpacity} from 'react-native';
import Images from "../theme/Images"


export  default  class BackgroundImage extends React.Component {

    render() {
        return (
            <ImageBackground source={Images.backgroundHome}
                     style={styles.backgroundImage}
            >

                    {this.props.children}

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});