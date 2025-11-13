/**
 * Title: IIE Module Manual 2025
 * Author: The Independent Institute of Education (Pty) Ltd
 * Version: First Edition (2022)
 * Available at: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true
 * Date accessed: 27/08/2025
 */
// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation, menuItems }) {
  const [addButtonPressed, setAddButtonPressed] = useState(false);
  const [filterButtonPressed, setFilterButtonPressed] = useState(false);

  // Calculate total dishes
  const totalItems = menuItems.length;

  // Calculate average price per course
  const calculateAverage = (course) => {
    const filtered = menuItems.filter((item) => item.course === course);
    if (filtered.length === 0) return 0;
    const total = filtered.reduce((sum, item) => sum + parseFloat(item.price), 0);
    return (total / filtered.length).toFixed(2);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/d1/81/28/d181288201887353a6d459b97aeb17af.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Christoffel’s Menu</Text>

        {/* Summary Card */}
         <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1673238114180-4f9ca7d69b0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnUlMjBmb29kfGVufDB8fDB8fHww' }} // Replace with your image URL
          style={styles.summaryCardBackground}
          resizeMode="cover"
          imageStyle={{ borderRadius: 10, opacity: 0.5 }} 
        >
        <View style={styles.summaryCard}>
          <Text style={styles.summaryCardTitle}>Menu Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Dishes:</Text>
            <Text style={styles.summaryValue}>{totalItems}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Average Price (Starters):</Text>
            <Text style={styles.summaryValue}>R{calculateAverage('Starters')}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Average Price (Mains):</Text>
            <Text style={styles.summaryValue}>R{calculateAverage('Mains')}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Average Price (Desserts):</Text>
            <Text style={styles.summaryValue}>R{calculateAverage('Desserts')}</Text>
          </View>
        </View>
        </ImageBackground>
        {/* Menu Items List */}
        <FlatList
          data={menuItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1673238115013-a0f4a9a276f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnUlMjBmb29kfGVufDB8fDB8fHww' }} // Replace with your image URL
          style={styles.summaryCardBackground}
          resizeMode="cover"
           imageStyle={{ borderRadius: 20, opacity: 0.5 }} 
        >
            <View style={styles.menuCard}>
              <Text style={styles.menuCardTitle}>{item.dishName}</Text>
              <Text style={styles.menuCardMenu}>{item.description}</Text>
              <Text style={styles.menuCardMenu}>Course: {item.course}</Text>
              <Text style={styles.menuCardPrice}>Price: R{item.price}</Text>
            </View>
            </ImageBackground>
          )}
        />

        {/* Buttons */}
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[
              styles.button,
              addButtonPressed && styles.buttonPressed,
            ]}
            activeOpacity={0.7}
            onPressIn={() => setAddButtonPressed(true)}
            onPressOut={() => setAddButtonPressed(false)}
            onPress={() => navigation.navigate('Add Menu')}
          >
            <Text style={styles.buttonText}>ADD MENU ITEM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              filterButtonPressed && styles.buttonPressed,
            ]}
            activeOpacity={0.7}
            onPressIn={() => setFilterButtonPressed(true)}
            onPressOut={() => setFilterButtonPressed(false)}
            onPress={() => navigation.navigate('Filter')}
          >
            <Text style={styles.buttonText}>FILTER MENU</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  summaryCard: {
    backgroundColor: '#',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#02000aff',
    fontWeight: 'bold',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: 'bold',
      color: '#d31212ff',
  },
  menuCard: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  menuCardMenu: {
   fontWeight: 'bold',
   color: '#1e0cbcff',
  },
  menuCardPrice: {
   fontWeight: 'bold',
    color: '#ed2a2aff',
  },
  menuCardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#2980b9',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
