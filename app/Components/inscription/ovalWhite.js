import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import Images from "../../theme/Images"
import Colors from "../../theme/Colors";

export default class OvalWhite extends React.Component {
    

   renderError =(x)=>{
       if (x)
       return (<Text style={styles.texterreur}>Erreur</Text>)
   }
    getImage=(position)=>{
        if(position==this.props.current) return Images.ovalWhite;
       else return Images.oval;
    }
    render() {
        let currentPosition=this.props.current;
        return (

            <View style={{
                marginLeft: 92,
                marginRight: 92,
                marginBottom: 20,
                flex: 0.2,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image source={this.getImage(0)} style={{padding: 6, margin: 6}}/>
                <Image source={this.getImage(1)} style={{padding: 6, margin: 6}}/>
                <Image source={this.getImage(2)} style={{padding: 6, margin: 6 }}/>
                <Image source={this.getImage(3)} style={{padding: 6, margin: 6}}/>
                <Image source={this.getImage(4)} style={{padding: 6, margin: 6}}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    texterreur: {
        textAlign: 'left',
        fontSize: 12,
        color: Colors.red,
        fontFamily: 'Futura Book font',
        alignSelf: 'flex-start',
        flexDirection:'column',

    }
});