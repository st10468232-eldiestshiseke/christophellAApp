/**
 * Title: IIE Module Manual 2025
 * Author: The Independent Institute of Education (Pty) Ltd
 * Version: First Edition (2022)
 * Available at: https://advtechonline.sharepoint.com/:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true
 * Date accessed: 27/08/2025
 */
// FilterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function FilterScreen({ menuItems }) {
  const [selectedCourse, setSelectedCourse] = useState('Starters');

  const filteredItems = menuItems.filter((item) => item.course === selectedCourse);

  return (
      <ImageBackground
          source={{ uri: 'https://i.pinimg.com/736x/d1/81/28/d181288201887353a6d459b97aeb17af.jpg' }} 
          style={styles.container}
          resizeMode="cover"
        >
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu by Course</Text>

      <Picker
        selectedValue={selectedCourse}
        style={styles.picker}
        onValueChange={(value) => setSelectedCourse(value)}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>

      <FlatList
        data={filteredItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>Price: R{item.price}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No items found.</Text>}
      />
      
    </View>
     </ImageBackground>
  );
}


const styles = StyleSheet.create({
   title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  container: { flex:1, padding:20, backgroundColor:'#' },
  header: { fontSize:22, fontWeight:'bold', marginBottom:12 },
  input: { borderWidth:1, borderColor:'#ddd', padding:8, borderRadius:8, marginBottom:10 },
  picker: { marginBottom:10 },
  total: { fontWeight:'bold', marginTop:14 },
  card: { backgroundColor:'transparent', padding:10, borderRadius:8, marginTop:8, elevation:2 },
  cardTitle: { fontWeight:'bold', fontSize:16 },
  desc: { color:'#555' }
});

