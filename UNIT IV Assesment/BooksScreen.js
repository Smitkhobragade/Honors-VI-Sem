import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BookList from '../components/BookList'
// import BookList from '../components/BookList'
const BooksScreen = ({navigation}) => {
  return (
    <View>
        <Pressable onPress={() => navigation.navigate('BookDetail')}>
           {/* <Text>Go to Book Detail Screen</Text> */}
        </Pressable>
        <BookList navigation={navigation} />
    </View>
  )
}

export default BooksScreen


const styles = StyleSheet.create({
})