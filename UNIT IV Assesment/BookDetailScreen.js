import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BookDetailScreen = ({route, navigation}) => {
  const {book} = route.params
  console.log(book);
  return (
    <View>
      {/* <Text>BookDetailScreen</Text> */}
      <Text>ISBN: {book.isbn}</Text>
      <Text>Title: {book.title}</Text>
      <Text>Author: {book.author}</Text>
    </View>
  )
}

export default BookDetailScreen

const styles = StyleSheet.create({})