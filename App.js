import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import RutasAutenticadas from './components/Autenticados/RutasAutenticadas';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { nombre: 'instagram' };
  }
  render() {
    return (
      <View style={styles.container}>
        <RutasAutenticadas style={styles.tab} />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});


