import React from 'react';
import {StyleSheet, Text,SafeAreaView,StatusBar, Image, ImageBackground, TouchableOpacity, Platform} from 'react-native';
import {Container, Grid, Col, Row} from 'native-base';
import Colors from "../theme/Colors"
import Images from "../theme/Images"
import MyButton from '../Components/MyButton'


export default class Home extends React.Component {

    static navigationOptions = {
        header: null,
    };


    render() {
        return (

                <ImageBackground
                    style={styles.imgBackground}
                    resizeMode='cover'
                    source={Images.backgroundHome}
                >
                       <StatusBar
                    barStyle="light-content"
                    backgroundColor={Colors.primaryColor}
                />
                    <Grid>
                        <Row size={0.5}/>
                        <Row size={1.5}>

                            <Col size={1} style={{paddingLeft:30}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Inscription')}
                                                  style={styles.content}>
                                    <Image source={Images.homeHome}
                                           style={Platform.OS === 'ios' ? styles.image : styles.imageAndroid}/>
                                    <Text style={styles.text}>Je <Text
                                        style={{fontFamily: 'Futura Heavy font', color: Colors.gold}}>cherche</Text> un
                                        professionel</Text>
                                </TouchableOpacity>
                            </Col>
                            <Col size={1}/>
                        </Row>
                        <Row size={2}>
                            <Col size={1}/>
                            <Col style={[{marginBottom: 110}]} size={1}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Professionel')}
                                                  style={styles.content}>
                                    <Image source={Images.toolHome}
                                           style={Platform.OS === 'ios' ? styles.image : styles.imageAndroid}/>
                                    <Text style={styles.text}>Je <Text
                                        style={{fontFamily: 'Futura Heavy font', color: Colors.gold}}>suis</Text> un
                                        professionel</Text>
                                </TouchableOpacity>
                            </Col>

                        </Row>

                        <Row size={1} style={[styles.box, {
                            paddingBottom: Platform.OS === 'ios' ? 20 : 5,
                            marginLeft: Platform.OS === 'ios' ? 10 : 40
                        }]}>
                            <Text style={styles.text2}> </Text>
                        </Row>
                        <Row size={1} style={[styles.box, {paddingBottom: 30, paddingRight: 50}]}>
                            <MyButton color={Colors.primaryColor}
                                      background={Colors.white}
                                      onpress={() => this.props.navigation.navigate('FormsSignUp')}
                                      padding={5}
                                      elevation={5}
                            >
                                <Image
                                    style={[{marginRight: 15, marginLeft: 5}]}
                                    source={Images.go}
                                />
                                <Text style={[styles.submitText, {color: Colors.primaryColor}]}>
                                    Découvrir
                                </Text>

                                <Image
                                    style={[{marginRight: 30, marginLeft: 3}]}
                                    source={Images.lihlihBlue}
                                />


                            </MyButton>
                        </Row>


                    </Grid>
                </ImageBackground>


                );
                }
                }

                const styles = StyleSheet.create({
                container: {
                backgroundColor: '#fff',
            },
                box: {
                flex: 0,
                alignItems: 'center',
                justifyContent: 'center',
            },
                image: {

                width: 100,
                height: 100,
                marginBottom: 10
            },
                imageAndroid: {

                width: 80,
                height: 80,
                marginTop: 10
            },


                imgBackground: {
                backgroundColor: Colors.white,
                width: '100%',
                height: '100%',
                flex: 1
            },
                content: {
                flex: 1,
                padding: 10,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',

            },

                text: {
                fontSize: 20,
                marginTop:10,
                marginBottom:15,
                textAlign: 'center',
                color: Colors.white,
                fontWeight: 'normal',
                fontFamily: 'Futura Book font'
            },
                text2: {
                fontSize: 16,
                width: 140,
                textAlign: 'center',

                color: Colors.black,
            },

                submitText: {
                textAlign: 'center',
                fontSize: 20,
                margin: 5,
                fontFamily: 'Futura Book font'
            },
            });
