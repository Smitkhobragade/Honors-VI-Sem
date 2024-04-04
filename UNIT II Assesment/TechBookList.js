import React, { Component } from 'react';
import { View, Text} from 'react-native';
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
        <View>
          <Text>Loading..</Text>
        </View>
      );
    }

    return (
      <View>
        {books.map((bookd, index) => (
          <View key={index}>
            <hr />

            <TechBookDetail
                name={bookd.title}
              />
          </View>
        ))}
      </View>
    );
  }
}


export default TechBookList;
