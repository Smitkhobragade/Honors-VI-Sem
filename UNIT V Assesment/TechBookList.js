import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import TechBookDetail from './TechBookDetail';

class TechBookList extends Component {
  state = {
    books: [],
    loading: true
  };

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/SmitKhobragade/Json-data/TechnicalBooks')
      .then((res) => {
        this.setState({ books: res.data, loading: false });
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { books, loading } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <Text>Loading..</Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        {books.map((book, index) => (
          <View key={index} style={styles.bookContainer}>
            <TechBookDetail
              name={book.title}
              author={book.author}
              publisher={book.publisher}
              urll={book.url}
              image={book.image}
            />
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bookContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
});

export default TechBookList;
