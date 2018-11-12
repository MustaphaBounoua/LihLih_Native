import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, StatusBar, TouchableOpacity} from 'react-native';
import {Container, Grid, Row, Col} from 'native-base';
import Colors from "../theme/Colors"
import Images from "../theme/Images"


import MyButton from "../Components/MyButton";

export default class Inscription extends React.Component {
    static navigationOptions = {
        header: null,
    };



    render() {
        return (
            <ImageBackground
                style={styles.imgBackground}
                resizeMode='cover'
                source={Images.backgroundInscription}
            >
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={Colors.primaryColor}
                />

                <Grid>
                    <Row size={0.4}  style={[{padding: 15}]} >
                        <TouchableOpacity     onPress={() => this.props.navigation.navigate('Home')}>
                         <Image
                                style={[{marginRight: 30, marginLeft: 3}]}
                                source={Images.inscriptionReturn}
                            />
                        </TouchableOpacity>
                    </Row>
                    <Row size={1}>
                        <Col style={{marginLeft: 14,}}>
                            <Text style={styles.text}>
                                <Text style={{fontFamily: 'Futura Heavy font'}}>Bienvenue,{"\n"}</Text>Créez {"\n"}un
                                compte{"\n"}en moins{"\n"}de{"\n"}<Text style={{fontFamily: 'Futura Heavy font'}}>1 minute</Text></Text>
                        </Col>

                    </Row>
                    <Row size={1} style={[styles.box, {paddingBottom: 87}]}>
                        <MyButton color={Colors.primaryColor}
                                  background={Colors.primaryColor}
                                  onpress={() => this.props.navigation.navigate('FormsSignUp')}
                                  shadow={true}
                        >

                            <Text style={[styles.submitText, {color: Colors.white}]}>
                                Commencer
                            </Text>
                            <Image
                                style={[{marginRight: 30, marginLeft: 3}]}
                                source={Images.chevronIcon}
                            />

                        </MyButton>
                    </Row>

                </Grid>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

        submitText: {
            textAlign: 'center',
            fontSize: 18,
            marginLeft: 75,
            marginRight: 52,
            marginTop: 16,
            marginBottom: 20,
            fontFamily: 'Futura Heavy font'

        },
        imgBackground: {
            backgroundColor: Colors.white,
            width: '100%',
            height: '100%',
            flex: 1
        },
        box: {
            flex: 0,
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            fontSize: 36,
            textAlign: 'left',
            color: Colors.primaryColor,
            fontWeight: 'normal',
            fontFamily: 'Futura Book font'
        }
    }
)