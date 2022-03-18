
import { StyleSheet, View, StatusBar } from 'react-native';

import Header from './src/components/Header';
import Main from './src/components/Main';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />
      <Main />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
});
