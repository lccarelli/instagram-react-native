import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import RutasNoAutenticadas from './components/NoAutenticados/RutasNoAutenticadas';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { nombre: 'instagram' };
  }
  render() {
    return (
      <View style={styles.container}>
        <RutasNoAutenticadas />
      </View>
    )
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


