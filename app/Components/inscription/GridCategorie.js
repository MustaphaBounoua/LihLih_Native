import React from 'react';
<<<<<<< HEAD
import {StyleSheet, Text, View, Image} from 'react-native';
=======
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00
import Colors from "../../theme/Colors";
import Images from "../../theme/Images";
import SuperGridView from 'react-native-super-grid';
import CategoryIcon from "./CategoryIcon";
<<<<<<< HEAD
import ModalBox from "react-native-modalbox";
import MyButton from "../../Components/MyButton";
export default class GridCategorie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isModalVisible: false
        } 
      }


      renderButton = () => {
         return (<MyButton color={Colors.white}
                                                   background={Colors.white}
                                                   onpress={() => {
                                                        alert("Click")
                                                      }}
                                                   shadow={true}
                                                   style={{
                                                       backgroundColor:Colors.primaryColor,
                                                       width: 274,
                                                       height: 57,
                                                       justifyContent: 'center',
                                                       marginBottom:-28,
                                                       alignItems: 'space-between',
                                                   }}
            >
                <Text style={[styles.submitText, {color: Colors.white}] } >
                    Suivant
                </Text>

                <Image
                    style={[{marginRight: 17, marginLeft: 60}]}
                    source={Images.suivant}
                />
            </MyButton>

        );
    }


    
    _toggleModal = () =>
        {   
    this.setState({ isModalVisible: !this.state.isModalVisible });
    setTimeout(()=>{
            this.setState({isModalVisible:false})
    },20000)
        }
    render() {
        return (

            <ModalBox style={ styles.modal}
            isOpen={true}  
            position="center"
            backdrop={false}
            coverScreen	={true}

        >
    
                        <View style={{ flex: 1 }}>
                        <SuperGridView
                                            itemDimension={73}
                                            spacing={17}
                                            items={[1, 2, 3, 4, 5, 6 ,7 ,8 ]}
                                            renderItem={item => (<CategoryIcon/>)}
                                        />

                        </View>
                        {this.renderButton()}
                       </ModalBox>
        )
    }
}
const styles=StyleSheet.create({
    modal:{
        alignItems:'center',
        width: "86%",
        height:"90%",
        borderRadius: 39,
        borderWidth: 1,
        borderColor: '#fff'
      },
})
=======

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
>>>>>>> 6071cfa8be16f8aff3f598f31f4bd22d954f3e00
