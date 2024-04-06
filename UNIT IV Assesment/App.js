import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TechBookListScreen from './screens/TechBookListScreen';
import TechBookDetailScreen from './screens/TechBookDetailScreen';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TechBookList">
        <Drawer.Screen name="TechBookList" component={TechBookListScreen} />
        <Drawer.Screen name="TechBookDetail" component={TechBookDetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
