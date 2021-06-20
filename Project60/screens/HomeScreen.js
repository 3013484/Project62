import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {

  goToSummaryScreen = () => {
    this.props.navigation.navigate('SummaryScreen');
  };

  render() {
    return (
      <View>

        <AppHeader />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'white' }]}
          onPress={() => {
            this.goToSummaryScreen();
          }}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 150,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
  },
});
