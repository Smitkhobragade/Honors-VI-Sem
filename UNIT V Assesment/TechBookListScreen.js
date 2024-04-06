import React, { useContext, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TechBookContext } from '../contexts/TechBookContext';
import axios from 'axios';

const TechBookListScreen = ({ navigation }) => {
  const { techBooks, setTechBooks } = useContext(TechBookContext);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/SmitKhobragade/Json-data/TechnicalBooks')
      .then(response => {
        setTechBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {techBooks.map(techBook => (
        <View key={techBook.id} style={styles.item}>
          <Text style={styles.title}>{techBook.title}</Text>
          <Button 
            title="View Details"
            onPress={() => navigation.navigate('TechBookDetailScreen', { techBook })}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default TechBookListScreen;
