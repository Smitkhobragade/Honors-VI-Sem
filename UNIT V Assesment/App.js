import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TechBookListScreen from './screens/TechBookListScreen';
import TechBookDetailScreen from './screens/TechBookDetailScreen';
import { TechBookProvider } from './contexts/TechBookContext';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <TechBookProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="TechBookListScreen">
          <Drawer.Screen name="TechBookListScreen" component={TechBookListScreen} />
          <Drawer.Screen name="TechBookDetailScreen" component={TechBookDetailScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </TechBookProvider>
  );
};

export default App;
