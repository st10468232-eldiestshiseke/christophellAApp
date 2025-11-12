/**
 * Title: IIE Module Manual 2025
 * Author: The Independent Institute of Education (Pty) Ltd
 * Version: First Edition (2022)
 * Available at: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true
 * Date accessed: 27/08/2025
 */
// AddMenuScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddMenuScreen({ navigation, addMenuItem, removeMenuItem, menuItems }) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');
  const [addButtonPressed, setAddButtonPressed] = useState(false);

  const handleAdd = () => {
    if (!dishName || !description || !price) {
      alert('Please fill all fields.');
      return;
    }
    alert('The Menu has been saved. Thank you!');
    addMenuItem({ dishName, description, course, price });
    setDishName('');
    setDescription('');
    setPrice('');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/d1/81/28/d181288201887353a6d459b97aeb17af.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Add Menu Item</Text>

        <TextInput
          placeholder="Dish Name"
          style={styles.input}
          value={dishName}
          onChangeText={setDishName}
        />

        <TextInput
          placeholder="Description"
          style={styles.input}
          value={description}
          onChangeText={setDescription}
        />

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={course}
            style={styles.picker}
            onValueChange={(value) => setCourse(value)}
          >
            <Picker.Item label="Starters" value="Starters" />
            <Picker.Item label="Mains" value="Mains" />
            <Picker.Item label="Desserts" value="Desserts" />
          </Picker>
        </View>

        <TextInput
          placeholder="Price (R)"
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={[
            styles.button,
            addButtonPressed && styles.buttonPressed,
          ]}
          activeOpacity={0.7}
          onPressIn={() => setAddButtonPressed(true)}
          onPressOut={() => setAddButtonPressed(false)}
          onPress={handleAdd}
        >
          <Text style={styles.buttonText}>Add Dish</Text>
        </TouchableOpacity>

        <FlatList
          data={menuItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.dishName}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              <Text style={styles.cardCourse}>{item.course} - R{item.price}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeMenuItem(index)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonPressed: {
    backgroundColor: '#2980b9',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
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
    color: '#555',
    marginBottom: 5,
  },
  cardCourse: {
    color: '#777',
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: '#e74c3c',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
