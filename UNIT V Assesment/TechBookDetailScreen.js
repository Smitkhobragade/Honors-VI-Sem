import React from 'react';
import { View, Text } from 'react-native';

const TechBookDetailScreen = ({ route }) => {
  const { techBook } = route.params;

  return (
    <View>
      <Text>Title: {techBook.title}</Text>
      <Text>Author: {techBook.author}</Text>
      <Text>publisher: {techBook.publisher}</Text>
    </View>
  );
};

export default TechBookDetailScreen;
