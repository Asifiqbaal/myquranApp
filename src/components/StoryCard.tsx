import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const StoryCard = ({ story, onPress }:any) => {
    console.log('story value is:',story)
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{story.title}</Text>
      <Text style={styles.description}>{story.translation}</Text>
    </TouchableOpacity>
  );
};

export default StoryCard;

const styles = StyleSheet.create({
  card: { padding: 16, backgroundColor: '#fff', marginBottom: 8, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#666' },
});
