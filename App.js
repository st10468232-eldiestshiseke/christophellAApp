// App.js
// Christoffel’s Menu App - Final PoE Part 3
// Author: Eldies Tshiseke
// Date: November 2025

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddMenuScreen from './screens/AddMenuScreen';
import FilterScreen from './screens/FilterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [menuItems, setMenuItems] = useState([]);

  // Function to add a new dish
  const addMenuItem = (newItem) => {
    setMenuItems([...menuItems, newItem]);
  };

  // Function to remove a dish
  const removeMenuItem = (index) => {
    const updatedMenu = menuItems.filter((_, i) => i !== index);
    setMenuItems(updatedMenu);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              menuItems={menuItems}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Add Menu">
          {(props) => (
            <AddMenuScreen
              {...props}
              menuItems={menuItems}
              addMenuItem={addMenuItem}
              removeMenuItem={removeMenuItem}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Filter">
          {(props) => (
            <FilterScreen
              {...props}
              menuItems={menuItems}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
