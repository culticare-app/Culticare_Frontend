import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Nav from '../../components/Nav';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HomePage;
