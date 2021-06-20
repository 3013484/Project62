import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
//import SoundButton from '../components/SoundButton'
import firebase from 'firebase';
//import db from '../config';

export default class SummaryScreen extends React.Component {

  render(){
    return(
      <View>
        <AppHeader/>
        <Text> I am having trouble with this project because
firebase.database isnt letting me create a new project to add to config and for some reason, adding this to an already-created database isn't working. </Text>
      </View>
    )
  }
}
