/**
 * Title: IIE Module Manual 2025
 * Author: The Independent Institute of Education (Pty) Ltd
 * Version: First Edition (2022)
 * Available at: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true
 * Date accessed: 27/08/2025
 */
// AddMenuScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddMenuScreen({ navigation, addMenuItem, removeMenuItem, menuItems }) {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (!dishName || !description || !price) {
      alert('Please fill all fields.');
      return;
    }
    addMenuItem({ dishName, description, course, price });
    setDishName('');
    setDescription('');
    setPrice('');
  };

  return (
     <ImageBackground
              source={{ uri: 'https://i.pinimg.com/736x/d1/81/28/d181288201887353a6d459b97aeb17af.jpg' }} 
              style={styles.container}
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

      <Picker
        selectedValue={course}
        style={styles.picker}
        onValueChange={(value) => setCourse(value)}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      <TextInput
        placeholder="Price (R)"
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Button title="Add Dish" onPress={handleAdd} />

      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.dishName}</Text>
            <Text>{item.course} - R{item.price}</Text>
            <Button title="Remove" color="red" onPress={() => removeMenuItem(index)} />
          </View>
        )}
      />
    </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  container: { flex:1, padding:20, backgroundColor:'#' },
  header: { fontSize:22, fontWeight:'bold', marginBottom:12 },
  input: { borderWidth:1, borderColor:'#ddd', padding:8, borderRadius:8, marginBottom:10 },
  picker: { marginBottom:10 },
  total: { fontWeight:'bold', marginTop:14 },
  card: { backgroundColor:'transparent', padding:10, borderRadius:8, marginTop:8, elevation:2 },
  cardTitle: { fontWeight:'bold', fontSize:16 },
  desc: { color:'#555' }
});
