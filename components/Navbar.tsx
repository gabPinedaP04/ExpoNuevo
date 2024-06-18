import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* Aquí puedes renderizar tu Navbar */}
        <Navbar />
        {/* Resto de tu aplicación */}
        <View style={styles.content}>
          <Text>Contenido de la aplicación</Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const Navbar = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.navbar, { paddingTop: insets.top }]}>
      <Text style={styles.title}>My NavBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Navbar;
