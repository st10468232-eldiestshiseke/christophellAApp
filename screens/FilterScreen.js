/**
 * Title: IIE Module Manual 2025
 * Author: The Independent Institute of Education (Pty) Ltd
 * Version: First Edition (2022)
 * Available at: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true
 * Date accessed: 27/08/2025
 */
// FilterScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function FilterScreen({ menuItems }) {
  const [selectedCourse, setSelectedCourse] = useState('Starters');
  const filteredItems = menuItems.filter((item) => item.course === selectedCourse);

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/d1/81/28/d181288201887353a6d459b97aeb17af.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.darkOverlay}>
      <View style={styles.container}>
        <Text style={styles.title}>Filter Menu by Course</Text>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCourse}
            style={styles.picker}
            onValueChange={(value) => setSelectedCourse(value)}
          >
            <Picker.Item label="Starters" value="Starters" />
            <Picker.Item label="Mains" value="Mains" />
            <Picker.Item label="Desserts" value="Desserts" />
          </Picker>
        </View>

        <FlatList
          data={filteredItems}
          keyExtractor={(item, index) => index.toString()}
            style={{ marginTop: 15 }} 
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          renderItem={({ item }) => (
          <ImageBackground
                     source={{ uri: 'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg' }} // Replace with your image URL
                     style={styles.summaryCardBackground}
                     resizeMode="cover"
                     imageStyle={{ borderRadius: 10, opacity: 0.5 }} 
                              >
             
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.dishName}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              <Text style={styles.cardPrice}>Price: R{item.price}</Text>
           
            </View>
            </ImageBackground>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No items found.</Text>
          }
        />
         </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
   darkOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Dark overlay to make the image appear darker
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  pickerContainer: {
    borderWidth: 2,
    borderColor: '#4ca5cbff',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
  },
  card: {
    
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  cardDescription: {
    color: '#ffff',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  cardPrice: {
    color: '#1d07c6ff',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#777',
  },
});
