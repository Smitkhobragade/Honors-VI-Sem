import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TechBookDetail = ({ name, author, publisher, urll, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.author}>Author: {author}</Text>
        <Text style={styles.publisher}>Publisher: {publisher}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 100,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    color: '#555',
    marginBottom: 3,
  },
  publisher: {
    fontSize: 14,
    color: '#555',
  },
});

export default TechBookDetail;
