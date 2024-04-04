import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TechBookList from './components/TechBookList';


export default function App() {
  return (
    <View style={styles.container}>
      <Header title="technical Books" />
      <TechBookList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {   
    width: '100%'
  },
});
