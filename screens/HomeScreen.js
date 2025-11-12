/**
 * Title: IIE Module Manual 2025
 * Author: The Independent Institute of Education (Pty) Ltd
 * Version: First Edition (2022)
 * Available at: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true
 * Date accessed: 27/08/2025
 */
// HomeScreen.js
import React from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation, menuItems }) {
  // Calculate total dishes
  const totalItems = menuItems.length;

  // Calculate average price per course
  const calculateAverage = (course) => {
    const filtered = menuItems.filter((item) => item.course === course);
    if (filtered.length === 0) return 0;
    const total = filtered.reduce((sum, item) => sum + parseFloat(item.price), 0);
    return (total / filtered.length).toFixed(2);
  };

    const CourseCard = ({ courseName, price }) => (
    <View style={styles.courseCard}>
      <Text style={styles.courseCardTitle}>{courseName}</Text>
      <Text style={styles.courseCardPrice}>R{price.toFixed(2)}</Text>
    </View>
  );


  return (
     <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/d1/81/28/d181288201887353a6d459b97aeb17af.jpg' }} 
      style={styles.container}
      resizeMode="cover"
    >
    <View style={styles.container}>
      <Text style={styles.title}>Christoffel’s Menu</Text>
      <Text style={styles.summary}>Total Dishes: {totalItems}</Text>

      <Text style={styles.average}>Average Price (Starters): R{calculateAverage('Starters')}</Text>
      <Text style={styles.average}>Average Price (Mains): R{calculateAverage('Mains')}</Text>
      <Text style={styles.average}>Average Price (Desserts): R{calculateAverage('Desserts')}</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>Course: {item.course}</Text>
            <Text>Price: R{item.price}</Text>
          </View>
        )}
      />

      <View style={styles.buttons}>
        <Button title="Add Menu Item" onPress={() => navigation.navigate('Add Menu')} />
        <Button title="Filter Menu" onPress={() => navigation.navigate('Filter')} />
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  summary: { fontSize: 16, marginVertical: 10, textAlign: 'center' },
  average: { fontSize: 14, marginBottom: 5, textAlign: 'center', color: '#444' },
  card: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  name: { fontWeight: 'bold', fontSize: 18 },
  buttons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
});
