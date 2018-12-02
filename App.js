/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import {store} from './app/redux/store/UserStore';
import PrimaryNav from "./app/screens/primaryNav";
import { Provider, connect } from 'react-redux';

type Props = {};
export default class App extends Component<Props> {
    render() {
       return (
        <Provider store={store}>
         <PrimaryNav/>
         </Provider>
       );
     }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
