import React from 'react';
import { View, Text } from 'react-native';

const TechBookDetailScreen = ({ route }) => {
  const { book } = route.params;

  return (
    <View>
      <Text>Title: {book.title}</Text>
      <Text>Author: {book.author}</Text>
      <Text>Publisher: {book.publisher}</Text>
    </View>
  );
};

export default TechBookDetailScreen;
