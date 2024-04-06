import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const TechBookListScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/SmitKhobragade/Json-data/TechnicalBooks')
      .then(response => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  const renderBookItem = ({ item }) => (
    <TouchableOpacity style={styles.bookItem} onPress={() => navigation.navigate('TechBookDetail', { book: item })}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading..</Text>
      </View>
    );
  }else{

  return (
    <FlatList
  data={books}
  renderItem={renderBookItem}
  keyExtractor={(item, index) => index.toString()} // Use index as key if id is undefined
/>

  )};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TechBookListScreen;
