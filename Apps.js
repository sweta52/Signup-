import React, { Component } from 'react';
import {AppRegistry, StyleSheet,Text,View} from 'react-native';

export default class App extends Component{
render(){
return (
    <View style={{backgroundColor:"yellow", margin:5}}>
    <Text>Parent View</Text>
    <View style={{backgroundColor: "red",margin:5}} >
    <Text>first child view</Text>
     <View style={{backgroundColor:"green",margin:5}}>
 <Text> second child view</Text>
    </View>
    </View>
    </View>
);

}

}
AppRegistry.registerComponent('NativeSample', () =>  NativeSample);
