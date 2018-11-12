import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Col, Container, Grid, Row} from 'native-base';
import Colors from "../theme/Colors"
import Images from "../theme/Images"

var Spinner = require('react-native-spinkit');

export default class Splash extends React.Component {

    static navigationOptions = {
        header: null,
    };
    state = {
        type: 'Wave',
        size: 100,
        color: "#FFFFFF",
        isVisible: true
    }

    render() {
        return (

            <Grid style={styles.container}>
                <Row size={1}/>
                <Row size={3} style={styles.box}>
                    <View style={styles.box}>

                        <Image
                            style={[{width: 100, height: 100}]}
                            source={Images.logo}
                        />
                        <Image style={styles.image}
                               source={Images.lihlih}
                        />


                    </View>
                </Row>
                <Row size={1} style={styles.box}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Spinner isVisible={true}
                                 size={80} type={'Wave'}
                                 color={Colors.white}/>

                    </TouchableOpacity>
                </Row>
                <Row size={1}>


                </Row>
            </Grid>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
    },
    box: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {

        marginTop: 20,
        marginBottom: 80
    },
    spinner: {
        color: Colors.white
    }
});
